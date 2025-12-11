import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html'
    }),
    // Base path automatisch goed zetten
    paths: {
      base: process.env.BASE_PATH || ''
    },
    // Let op: assets moeten in static/
    appDir: '_app' // default, kan blijven
  }
};

export default config;