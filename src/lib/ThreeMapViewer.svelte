<script>
  // import maplibregl from "maplibre-gl";
  // import { WarpedMapLayer } from "@allmaps/maplibre";
  import * as THREE from "three";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
  import * as math from "mathjs";

  import { Slider } from "bits-ui";
  import cn from "clsx";

  let innerHeight = $state(0);
  let innerWidth = $state(0);
  let yearRange = $state([1850, 2000]);
  let zDisplacement = $state(35);

  // let map = new maplibregl.Map();
  // let wml = new WarpedMapLayer();

  let container;

  const TARGET_WIDTH = 512;

  const ANNOTATION_URL = ["maps-sorted-by-edition.json"];

  const WATERSTAATSKAART_URLS = [
    "https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/01-1874-389916-georef.json",
    "https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/02-1874-456650-georef.json",
    "https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/03-1874-455650-georef.json",
    "https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/04-1874-456550-georef.json",
    "https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/05-1874-456551-georef.json",
    "https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/06-1874-456552-georef.json",
    "https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/07-1874-456588-georef.json",
    "https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/08-1874-456553-georef.json",
    // "https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/09-1874-456827-georef.json",
  ];

  function parseSvgPolygon(svgValue) {
    const match = svgValue.match(/<polygon points="([^"]+)"/);
    if (!match) return [];
    return match[1]
      .trim()
      .split(" ")
      .map((pair) => pair.split(",").map(Number));
  }

  function latLonToXY(lat, lon) {
    const scale = 1000;
    const x = (lon - 5.5) * scale;
    const y = (lat - 53) * -scale * 2 - 2000;
    return new THREE.Vector2(x, y);
  }

  function computeAffine(from, to) {
    const A = [],
      Bx = [],
      By = [];

    for (let i = 0; i < 3; i++) {
      const [x, y] = from[i];
      A.push([x, y, 1]);
      const p = to[i];
      Bx.push(p.x);
      By.push(p.y);
    }

    const matrixInverse = math.inv(A);
    const ax = math.multiply(matrixInverse, Bx);
    const ay = math.multiply(matrixInverse, By);

    return function applyAffine([x, y]) {
      return new THREE.Vector2(
        ax[0] * x + ax[1] * y + ax[2],
        ay[0] * x + ay[1] * y + ay[2]
      );
    };
  }

  const mapYearByID = new Map();

  async function loadAnnotations(scene) {
    const res = await fetch("/years.json");
    const json = await res.json();

    for (let map of json) mapYearByID.set(map.id, map.year);

    // if (ANNOTATION_URL) {
    //   map.addLayer(wml);
    //   const res = await fetch(ANNOTATION_URL[0]);
    //   const json = await res.json();
    //   wml.addGeoreferencedMap(json[0]);
    //   // await loadSingleAnnotationJson(json, scene);
    // }

    for (const url of WATERSTAATSKAART_URLS) {
      try {
        const res = await fetch(url);
        const json = await res.json();
        await loadSingleAnnotationJson(json, scene);
        // await new Promise(resolve => setTimeout(resolve, 50));
      } catch (err) {
        console.error(`Failed to load ${url}`, err);
      }
    }
  }

  function loadAnnotation(json, scene) {
    for (const item of json) {
      const imageUrl =
        item.resource.id + `/full/${TARGET_WIDTH},/0/default.jpg`;

      const originalWidth = item.resource.width;
      const originalHeight = item.resource.height;

      const scale = TARGET_WIDTH / originalWidth;
      const targetHeight = originalHeight * scale;

      const polygon = parseSvgPolygon(item.target.selector.value);
      if (polygon.length < 3) continue;

      const scaledPolygon = polygon.map(([x, y]) => [x * scale, y * scale]);

      const geoCoords = item.body.features.map((f) => f.geometry.coordinates);
      const resourceCoords = item.body.features.map((f) =>
        f.properties.resourceCoords.map(Number)
      );
      const scaledResourceCoords = resourceCoords.map(([x, y]) => [
        x * scale,
        y * scale,
      ]);

      const worldCoords = geoCoords.map(([lon, lat]) => latLonToXY(lat, lon));
      const apply = computeAffine(scaledResourceCoords, worldCoords);

      const positions = [];
      const uvs = [];

      for (let i = 1; i < scaledPolygon.length - 1; i++) {
        const triangle = [0, i, i + 1];

        for (let idx of triangle) {
          const [px, py] = scaledPolygon[idx];
          const world = apply([px, py]);
          positions.push(world.x, world.y, 0);
          uvs.push(px / TARGET_WIDTH, 1 - py / targetHeight);
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
      geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
      geometry.computeVertexNormals();

      const skeletonMat = new THREE.MeshBasicMaterial({
        color: 0xeeeeee,
        wireframe: true,
        side: THREE.DoubleSide,
      });
      const outline = new THREE.Mesh(geometry, skeletonMat);
      // scene.add(outline);

      const loader = new THREE.TextureLoader();
      loader.load(imageUrl, (texture) => {
        texture.encoding = THREE.sRGBEncoding;
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = 16;

        const material = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
          transparent: false,
          opacity: 1,
        });

        const mesh = new THREE.Mesh(geometry.clone(), material);
        mesh.userData.year = mapYearByID.get(item.id);
        mesh.position.z =
          ((1850 - mesh.userData.year) / 150 + 0.5) * zDisplacement * 100;
        outline.position.z = mesh.position.z;
        scene.add(mesh);
        scene.remove(outline);

        // let opacity = 0;
        // const fadeIn = () => {
        //     opacity += 0.03;
        //     material.opacity = Math.min(opacity, 1);
        //     if (opacity < 1) requestAnimationFrame(fadeIn);
        // };
        // fadeIn();
      });
    }
  }

  function loadSingleAnnotationJson(json, scene) {
    for (const item of json.items) {
      if (item.id.includes("f33303da7e3baae9-b")) continue;
      const imageUrl =
        item.target.source.id + `/full/${TARGET_WIDTH},/0/default.jpg`;

      const originalWidth = item.target.source.width;
      const originalHeight = item.target.source.height;

      const scale = TARGET_WIDTH / originalWidth;
      const targetHeight = originalHeight * scale;

      const polygon = parseSvgPolygon(item.target.selector.value);
      if (polygon.length < 3) continue;

      const scaledPolygon = polygon.map(([x, y]) => [x * scale, y * scale]);

      const geoCoords = item.body.features.map((f) => f.geometry.coordinates);
      const resourceCoords = item.body.features.map((f) =>
        f.properties.resourceCoords.map(Number)
      );
      const scaledResourceCoords = resourceCoords.map(([x, y]) => [
        x * scale,
        y * scale,
      ]);

      const worldCoords = geoCoords.map(([lon, lat]) => latLonToXY(lat, lon));
      const apply = computeAffine(scaledResourceCoords, worldCoords);

      const positions = [];
      const uvs = [];

      for (let i = 1; i < scaledPolygon.length - 1; i++) {
        const triangle = [0, i, i + 1];

        for (let idx of triangle) {
          const [px, py] = scaledPolygon[idx];
          const world = apply([px, py]);
          positions.push(world.x, world.y, 0);
          uvs.push(px / TARGET_WIDTH, 1 - py / targetHeight);
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
      geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
      geometry.computeVertexNormals();

      const skeletonMat = new THREE.MeshBasicMaterial({
        color: 0xeeeeee,
        wireframe: true,
        side: THREE.DoubleSide,
      });
      const outline = new THREE.Mesh(geometry, skeletonMat);
      // scene.add(outline);

      const loader = new THREE.TextureLoader();
      loader.load(imageUrl, (texture) => {
        texture.encoding = THREE.sRGBEncoding;
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = 16;

        const material = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
          transparent: false,
          opacity: 1,
        });

        const mesh = new THREE.Mesh(geometry.clone(), material);
        mesh.userData.year = mapYearByID.get(item.id);
        mesh.position.z =
          ((1850 - mesh.userData.year) / 150 + 0.5) * zDisplacement * 100;
        outline.position.z = mesh.position.z;
        scene.add(mesh);
        scene.remove(outline);

        // let opacity = 0;
        // const fadeIn = () => {
        //     opacity += 0.03;
        //     material.opacity = Math.min(opacity, 1);
        //     if (opacity < 1) requestAnimationFrame(fadeIn);
        // };
        // fadeIn();
      });
    }
  }

  function createTextLabel(text, position) {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.font =
      '70px monospace, Times New Roman, "Helvetica Neue", Helvetica, Arial, sans-serif';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;

    const material = new THREE.SpriteMaterial({
      map: texture,
      depthTest: false,
    });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(300, 75, 1); // grootte aanpassen aan schaal
    sprite.position.copy(position);
    sprite.userData.year = parseInt(text, 10);

    return sprite;
  }

  let scene;
  let loaded = $state(false);

  $effect(() => {
    if (yearRange && scene) {
      for (let item of scene.children) {
        item.visible =
          item.userData.year >= yearRange[0] &&
          item.userData.year <= yearRange[1];
      }
    }
    if (zDisplacement && scene) {
      for (let item of scene.children) {
        item.position.z =
          ((1850 - item.userData.year) / 150 + 0.5) * zDisplacement * 100;
      }
    }
    if (!scene) {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);
      scene.background = new THREE.Color(0x333366);

      console.log(scene);

      const minYear = 1850;
      const maxYear = 2000;
      const step = 25;
      const zScale = zDisplacement * 100;

      for (let year = minYear; year <= maxYear; year += step) {
        const z = ((1850 - year) / 150 + 0.5) * zScale;

        // Plaats 4 labels in een kruis rondom 0,0,z
        const positions = [
          // new THREE.Vector3(-3000, 0, z),
          // new THREE.Vector3(3000, 0, z),
          // new THREE.Vector3(0, -3000, z),
          new THREE.Vector3(0, 3000, z),
        ];

        for (const pos of positions) {
          const label = createTextLabel(year.toString(), pos);
          scene.add(label);
        }
      }

      const camera = new THREE.PerspectiveCamera(
        60,
        container.clientWidth / container.clientHeight,
        0.1,
        100000
      );
      camera.position.set(0, 0, -6000);
      camera.up.set(0, -1, 0);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(innerWidth, innerHeight);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;

      loadAnnotations(scene).then(() => (loaded = true));

      const animate = () => {
        requestAnimationFrame(animate);
        scene.rotation.y += 0.0025;
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      // const observer = new ResizeObserver(() => {
      //   const width = container.clientWidth;
      //   const height = container.clientHeight;
      //   camera.aspect = width / height;
      //   camera.updateProjectionMatrix();
      //   renderer.setSize(width, height);
      // });
      // observer.observe(container);
    }
  });
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div
  class="rounded opacity-0 hover:opacity-100 shadow-lg bg-[#ffffffcc] outline-red text-center fixed w-full md:max-w-[220px] bottom-4 left-4 p-5"
>
  {#if loaded}
    <p class="mb-2 text-sm"><b>{scene.children.length}</b> kaarten</p>
  {:else}
    <p class="mb-2 text-sm">... kaarten</p>
  {/if}
  <p class="mb-2 text-sm">
    van <b>{yearRange[0]}</b> tot <b>{yearRange[1]}</b>
  </p>
  <Slider.Root
    type="multiple"
    min={1800}
    max={2025}
    bind:value={yearRange}
    class="relative flex w-full touch-none select-none items-center"
  >
    {#snippet children({ thumbItems })}
      <span
        class="bg-dark-10 relative h-1.5 w-full grow cursor-pointer overflow-hidden rounded-full"
      >
        <Slider.Range class="bg-foreground absolute h-full" />
      </span>
      {#each thumbItems as { index } (index)}
        <Slider.Thumb
          {index}
          class={cn(
            "border-border-input bg-background hover:border-dark-40 focus-visible:ring-foreground dark:bg-foreground dark:shadow-card data-active:border-dark-40 focus-visible:outline-hidden data-active:scale-[0.98] block size-[20px] cursor-pointer rounded-full border shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          )}
        />
      {/each}
    {/snippet}
  </Slider.Root>

  <br />
  <p class="mb-2 text-sm">z-verschuiving: {zDisplacement}%</p>
  <Slider.Root
    type="single"
    min={0}
    max={100}
    bind:value={zDisplacement}
    class="relative flex w-full touch-none select-none items-center"
  >
    {#snippet children({ thumbItems })}
      <span
        class="bg-dark-10 relative h-1.5 w-full grow cursor-pointer overflow-hidden rounded-full"
      >
        <Slider.Range class="bg-foreground absolute h-full" />
      </span>
      {#each thumbItems as { index } (index)}
        <Slider.Thumb
          {index}
          class={cn(
            "border-border-input bg-background hover:border-dark-40 focus-visible:ring-foreground dark:bg-foreground dark:shadow-card data-active:border-dark-40 focus-visible:outline-hidden data-active:scale-[0.98] block size-[20px] cursor-pointer rounded-full border shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          )}
        />
      {/each}
    {/snippet}
  </Slider.Root>
</div>

<div class="container" bind:this={container}></div>

<div
  class="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-wrap drop-shadow-[2px_2px_0px_#eef]"
>
  <div class="basis-2/2 p-2">
    <a href="https://www.cultureelerfgoed.nl/"
      ><img
        class="mx-auto h-20"
        alt="RCE Logo"
        src="/img/svg/rce-logo.svg"
      /></a
    >
  </div>
  <div class="basis-2/2 p-2">
    <a href="https://www.stowa.nl/"
      ><img
        class="mx-auto h-10"
        alt="STOWA Logo"
        src="/img/svg/stowa-logo.svg"
      /></a
    >
  </div>
  <div class="basis-1/2 p-2">
    <a href="https://allmaps.org/"
      ><img
        class="mx-auto h-15"
        alt="Allmaps Logo"
        src="/img/svg/allmaps-logo.svg"
      /></a
    >
  </div>
  <div class="basis-1/2 p-2">
    <a href="https://www.tudelft.nl/"
      ><img
        class="mx-auto h-20"
        alt="TU Delft Logo"
        src="/img/svg/tu-logo.svg"
      /></a
    >
  </div>
  <div class="basis-2/2 p-2">
    <a href="https://www.linkedin.com/company/de-geomaten/"
      ><img
        class="mx-auto h-10"
        alt="De Geomaten Logo"
        src="/img/svg/geomaten-logo.svg"
      /></a
    >
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    overflow: hidden;
    background: white;
  }
  .container {
    width: 100%;
    height: 100vh;
  }
</style>
