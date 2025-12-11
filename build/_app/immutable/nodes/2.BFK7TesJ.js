var np=Object.defineProperty;var hl=n=>{throw TypeError(n)};var ip=(n,t,e)=>t in n?np(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var te=(n,t,e)=>ip(n,typeof t!="symbol"?t+"":t,e),Oa=(n,t,e)=>t.has(n)||hl("Cannot "+e);var Rt=(n,t,e)=>(Oa(n,t,"read from private field"),e?e.call(n):t.get(n)),re=(n,t,e)=>t.has(n)?hl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),Vi=(n,t,e,i)=>(Oa(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e),Rn=(n,t,e)=>(Oa(n,t,"access private method"),e);import{p as bc,c as Ni,a as $e,f as Bi}from"../chunks/BkYJnjKn.js";import"../chunks/c5tSCQLu.js";import{ar as hh,H as rp,h as bn,Q as sp,d as wc,q as Nt,ac as Qo,a0 as op,a1 as ap,a2 as dl,P as pl,O as ds,g as ns,K as up,R as cp,a3 as dh,e as xa,a4 as lp,V as ph,G as mh,ah as fp,as as Au,at as za,D as ml,au as hp,av as dp,aw as pp,U as mp,ax as gp,f as ta,ay as _p,az as vp,M as Ep,a6 as gh,b as jn,aA as xp,aB as yp,t as Mp,aC as Dp,aD as Sp,aE as Ap,aF as bp,a9 as wp,z as Tp,ag as ce,aG as Cp,a7 as Rp,ap as Fp,ao as ai,af as _h,aq as le,aH as Pp,aI as gl,aJ as Np,m as Ip,u as Tc,p as js,j as Un,k as Ks,w as Mn,n as Cc,x as Dn,v as _l,y as Jn,aK as vl}from"../chunks/C18JfeXV.js";import{i as Lp,c as Up,d as Bp,n as Op,a as zp,l as Vp,w as Hp,o as Yn,s as fo}from"../chunks/J-La6vbf.js";import{p as Ke,i as ya,r as Rc,c as cr,b as kp}from"../chunks/DUbiKQtl.js";import{s as Gr}from"../chunks/BplgFmgf.js";function Gp(){return Symbol(hh)}function Wp(n,t){if(t){const e=document.body;n.autofocus=!0,rp(()=>{document.activeElement===e&&n.focus()})}}function Xp(n,t,e,i){for(var r=[],s=t.length,o=0;o<s;o++)pp(t[o].e,r,!0);var a=s>0&&r.length===0&&e!==null;if(a){var u=e.parentNode;mp(u),u.append(e),i.clear(),Di(n,t[0].prev,t[s-1].next)}gp(r,()=>{for(var l=0;l<s;l++){var c=t[l];a||(i.delete(c.k),Di(n,c.prev,c.next)),ta(c.e,!a)}})}function El(n,t,e,i,r,s=null){var o=n,a={flags:t,items:new Map,first:null};bn&&sp();var u=null,l=!1,c=Qo(()=>{var f=e();return mh(f)?f:f==null?[]:ph(f)});wc(()=>{var f=Nt(c),h=f.length;if(l&&h===0)return;l=h===0;let g=!1;if(bn){var v=op(o)===ap;v!==(h===0)&&(o=dl(),pl(o),ds(!1),g=!0)}if(bn){for(var p=null,m,d=0;d<h;d++){if(ns.nodeType===up&&ns.data===cp){o=ns,g=!0,ds(!1);break}var b=f[d],x=i(b,d);m=vh(ns,a,p,null,b,x,d,r,t,e),a.items.set(x,m),p=m}h>0&&pl(dl())}bn||qp(f,a,o,r,t,i,e),s!==null&&(h===0?u?dh(u):u=xa(()=>s(o)):u!==null&&lp(u,()=>{u=null})),g&&ds(!0),Nt(c)}),bn&&(o=ns)}function qp(n,t,e,i,r,s,o){var a=n.length,u=t.items,l=t.first,c=l,f,h=null,g=[],v=[],p,m,d,b;for(b=0;b<a;b+=1){if(p=n[b],m=s(p,b),d=u.get(m),d===void 0){var x=c?c.e.nodes_start:e;h=vh(x,t,h,h===null?t.first:h.next,p,m,b,i,r,o),u.set(m,h),g=[],v=[],c=h.next;continue}if(Yp(d,p,b),(d.e.f&za)!==0&&dh(d.e),d!==c){if(f!==void 0&&f.has(d)){if(g.length<v.length){var M=v[0],A;h=M.prev;var y=g[0],w=g[g.length-1];for(A=0;A<g.length;A+=1)xl(g[A],M,e);for(A=0;A<v.length;A+=1)f.delete(v[A]);Di(t,y.prev,w.next),Di(t,h,y),Di(t,w,M),c=M,h=w,b-=1,g=[],v=[]}else f.delete(d),xl(d,c,e),Di(t,d.prev,d.next),Di(t,d,h===null?t.first:h.next),Di(t,h,d),h=d;continue}for(g=[],v=[];c!==null&&c.k!==m;)(c.e.f&za)===0&&(f??(f=new Set)).add(c),v.push(c),c=c.next;if(c===null)continue;d=c}g.push(d),h=d,c=d.next}if(c!==null||f!==void 0){for(var C=f===void 0?[]:ph(f);c!==null;)(c.e.f&za)===0&&C.push(c),c=c.next;var D=C.length;if(D>0){var S=null;Xp(t,C,S,u)}}ml.first=t.first&&t.first.e,ml.last=h&&h.e}function Yp(n,t,e,i){dp(n.v,t),n.i=e}function vh(n,t,e,i,r,s,o,a,u,l){var c=(u&_p)!==0,f=(u&vp)===0,h=c?f?fp(r,!1,!1):Au(r):r,g=(u&hp)===0?o:Au(o),v={i:g,v:h,k:s,a:null,e:null,prev:e,next:i};try{return v.e=xa(()=>a(n,h,g,l),bn),v.e.prev=e&&e.e,v.e.next=i&&i.e,e===null?t.first=v:(e.next=v,e.e.next=v.e),i!==null&&(i.prev=v,i.e.prev=v.e),v}finally{}}function xl(n,t,e){for(var i=n.next?n.next.e.nodes_start:e,r=t?t.e.nodes_start:e,s=n.e.nodes_start;s!==i;){var o=Ep(s);r.before(s),s=o}}function Di(n,t,e){t===null?n.first=e:(t.next=e,t.e.next=e&&e.e),e!==null&&(e.prev=t,e.e.prev=t&&t.e)}function Zp(n,t){var e=void 0,i;wc(()=>{e!==(e=t())&&(i&&(ta(i),i=null),e&&(i=xa(()=>{gh(()=>e(n))})))})}function Eh(n){var t,e,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(t=0;t<r;t++)n[t]&&(e=Eh(n[t]))&&(i&&(i+=" "),i+=e)}else for(e in n)n[e]&&(i&&(i+=" "),i+=e);return i}function Lr(){for(var n,t,e=0,i="",r=arguments.length;e<r;e++)(n=arguments[e])&&(t=Eh(n))&&(i&&(i+=" "),i+=t);return i}function jp(n){return typeof n=="object"?Lr(n):n??""}const yl=[...` 	
\r\f \v\uFEFF`];function Kp(n,t,e){var i=n==null?"":""+n;if(e){for(var r in e)if(e[r])i=i?i+" "+r:r;else if(i.length)for(var s=r.length,o=0;(o=i.indexOf(r,o))>=0;){var a=o+s;(o===0||yl.includes(i[o-1]))&&(a===i.length||yl.includes(i[a]))?i=(o===0?"":i.substring(0,o))+i.substring(a+1):o=a}}return i===""?null:i}function Ml(n,t=!1){var e=t?" !important;":";",i="";for(var r in n){var s=n[r];s!=null&&s!==""&&(i+=" "+r+": "+s+e)}return i}function Va(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function $p(n,t){if(t){var e="",i,r;if(Array.isArray(t)?(i=t[0],r=t[1]):i=t,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,a=!1,u=[];i&&u.push(...Object.keys(i).map(Va)),r&&u.push(...Object.keys(r).map(Va));var l=0,c=-1;const p=n.length;for(var f=0;f<p;f++){var h=n[f];if(a?h==="/"&&n[f-1]==="*"&&(a=!1):s?s===h&&(s=!1):h==="/"&&n[f+1]==="*"?a=!0:h==='"'||h==="'"?s=h:h==="("?o++:h===")"&&o--,!a&&s===!1&&o===0){if(h===":"&&c===-1)c=f;else if(h===";"||f===p-1){if(c!==-1){var g=Va(n.substring(l,c).trim());if(!u.includes(g)){h!==";"&&f++;var v=n.substring(l,f).trim();e+=" "+v+";"}}l=f+1,c=-1}}}}return i&&(e+=Ml(i)),r&&(e+=Ml(r,!0)),e=e.trim(),e===""?null:e}return n==null?null:String(n)}function Jp(n,t,e,i,r,s){var o=n.__className;if(bn||o!==e||o===void 0){var a=Kp(e,i,s);(!bn||a!==n.getAttribute("class"))&&(a==null?n.removeAttribute("class"):t?n.className=a:n.setAttribute("class",a)),n.__className=e}else if(s&&r!==s)for(var u in s){var l=!!s[u];(r==null||l!==!!r[u])&&n.classList.toggle(u,l)}return s}function Ha(n,t={},e,i){for(var r in e){var s=e[r];t[r]!==s&&(e[r]==null?n.style.removeProperty(r):n.style.setProperty(r,s,i))}}function Qp(n,t,e,i){var r=n.__style;if(bn||r!==t){var s=$p(t,i);(!bn||s!==n.getAttribute("style"))&&(s==null?n.removeAttribute("style"):n.style.cssText=s),n.__style=t}else i&&(Array.isArray(i)?(Ha(n,e==null?void 0:e[0],i[0]),Ha(n,e==null?void 0:e[1],i[1],"important")):Ha(n,e,i));return i}function bu(n,t,e){if(n.multiple){if(t==null)return;if(!mh(t))return xp();for(var i of n.options)i.selected=t.includes(Dl(i));return}for(i of n.options){var r=Dl(i);if(yp(r,t)){i.selected=!0;return}}(!e||t!==void 0)&&(n.selectedIndex=-1)}function tm(n,t){let e=!0;gh(()=>{t&&bu(n,jn(t),e),e=!1;var i=new MutationObserver(()=>{var r=n.__value;bu(n,r)});return i.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{i.disconnect()}})}function Dl(n){return"__value"in n?n.__value:n.value}const is=Symbol("class"),rs=Symbol("style"),xh=Symbol("is custom element"),yh=Symbol("is html");function em(n,t){t?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function Sl(n,t,e,i){var r=Mh(n);bn&&(r[t]=n.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&n.nodeName==="LINK")||r[t]!==(r[t]=e)&&(t==="loading"&&(n[Ap]=e),e==null?n.removeAttribute(t):typeof e!="string"&&Dh(n).includes(t)?n[t]=e:n.setAttribute(t,e))}function nm(n,t,e,i,r=!1){var s=Mh(n),o=s[xh],a=!s[yh];let u=bn&&o;u&&ds(!1);var l=t||{},c=n.tagName==="OPTION";for(var f in t)f in e||(e[f]=null);e.class?e.class=jp(e.class):e[is]&&(e.class=null),e[rs]&&(e.style??(e.style=null));var h=Dh(n);for(const x in e){let M=e[x];if(c&&x==="value"&&M==null){n.value=n.__value="",l[x]=M;continue}if(x==="class"){var g=n.namespaceURI==="http://www.w3.org/1999/xhtml";Jp(n,g,M,i,t==null?void 0:t[is],e[is]),l[x]=M,l[is]=e[is];continue}if(x==="style"){Qp(n,M,t==null?void 0:t[rs],e[rs]),l[x]=M,l[rs]=e[rs];continue}var v=l[x];if(!(M===v&&!(M===void 0&&n.hasAttribute(x)))){l[x]=M;var p=x[0]+x[1];if(p!=="$$")if(p==="on"){const A={},y="$$"+x;let w=x.slice(2);var m=zp(w);if(Lp(w)&&(w=w.slice(0,-7),A.capture=!0),!m&&v){if(M!=null)continue;n.removeEventListener(w,l[y],A),l[y]=null}if(M!=null)if(m)n[`__${w}`]=M,Bp([w]);else{let C=function(D){l[x].call(this,D)};l[y]=Up(w,n,C,A)}else m&&(n[`__${w}`]=void 0)}else if(x==="style")Sl(n,x,M);else if(x==="autofocus")Wp(n,!!M);else if(!o&&(x==="__value"||x==="value"&&M!=null))n.value=n.__value=M;else if(x==="selected"&&c)em(n,M);else{var d=x;a||(d=Op(d));var b=d==="defaultValue"||d==="defaultChecked";if(M==null&&!o&&!b)if(s[x]=null,d==="value"||d==="checked"){let A=n;const y=t===void 0;if(d==="value"){let w=A.defaultValue;A.removeAttribute(d),A.defaultValue=w,A.value=A.__value=y?w:null}else{let w=A.defaultChecked;A.removeAttribute(d),A.defaultChecked=w,A.checked=y?w:!1}}else n.removeAttribute(x);else b||h.includes(d)&&(o||typeof M!="string")?n[d]=M:typeof M!="function"&&Sl(n,d,M)}}}return u&&ds(!0),l}function Fc(n,t,e=[],i,r=!1,s=Mp){const o=e.map(s);var a=void 0,u={},l=n.nodeName==="SELECT",c=!1;wc(()=>{var f=t(...o.map(Nt)),h=nm(n,a,f,i,r);c&&l&&"value"in f&&bu(n,f.value,!1);for(let v of Object.getOwnPropertySymbols(u))f[v]||ta(u[v]);for(let v of Object.getOwnPropertySymbols(f)){var g=f[v];v.description===hh&&(!a||g!==a[v])&&(u[v]&&ta(u[v]),u[v]=xa(()=>Zp(n,()=>g))),h[v]=g}a=h}),l&&tm(n,()=>a.value),c=!0}function Mh(n){return n.__attributes??(n.__attributes={[xh]:n.nodeName.includes("-"),[yh]:n.namespaceURI===Dp})}var Al=new Map;function Dh(n){var t=Al.get(n.nodeName);if(t)return t;Al.set(n.nodeName,t=[]);for(var e,i=n,r=Element.prototype;r!==i;){e=bp(i);for(var s in e)e[s].set&&t.push(s);i=Sp(i)}return t}function im(n,t,e){var i=wp(n,t);i&&i.set&&(n[t]=e,Tp(()=>{n[t]=null}))}function bl(n,t){Vp(window,["resize"],()=>Hp(()=>t(window[n])))}function rm(n){ce(n,n.v+1)}function sm(n){let t=0,e=Au(0),i;return()=>{Cp()&&(Nt(e),Rp(()=>(t===0&&(i=jn(()=>n(()=>rm(e)))),t+=1,()=>{Fp().then(()=>{t-=1,t===0&&(i==null||i(),i=void 0)})})))}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pc="177",Ur={ROTATE:0,DOLLY:1,PAN:2},Pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},om=0,wl=1,am=2,Sh=1,um=2,si=3,Ii=0,an=1,Bn=2,Ti=0,Br=1,Tl=2,Cl=3,Rl=4,cm=5,ji=100,lm=101,fm=102,hm=103,dm=104,pm=200,mm=201,gm=202,_m=203,wu=204,Tu=205,vm=206,Em=207,xm=208,ym=209,Mm=210,Dm=211,Sm=212,Am=213,bm=214,Cu=0,Ru=1,Fu=2,Wr=3,Pu=4,Nu=5,Iu=6,Lu=7,Ah=0,wm=1,Tm=2,Ci=0,Cm=1,Rm=2,Fm=3,Pm=4,Nm=5,Im=6,Lm=7,bh=300,Xr=301,qr=302,Uu=303,Bu=304,Ma=306,Ou=1e3,Ji=1001,zu=1002,Hn=1003,Um=1004,ho=1005,On=1006,ka=1007,Qi=1008,di=1009,wh=1010,Th=1011,ps=1012,Nc=1013,er=1014,ui=1015,$s=1016,Ic=1017,Lc=1018,ms=1020,Ch=35902,Rh=1021,Fh=1022,zn=1023,gs=1026,_s=1027,Ph=1028,Uc=1029,Nh=1030,Bc=1031,Oc=1033,Wo=33776,Xo=33777,qo=33778,Yo=33779,Vu=35840,Hu=35841,ku=35842,Gu=35843,Wu=36196,Xu=37492,qu=37496,Yu=37808,Zu=37809,ju=37810,Ku=37811,$u=37812,Ju=37813,Qu=37814,tc=37815,ec=37816,nc=37817,ic=37818,rc=37819,sc=37820,oc=37821,Zo=36492,ac=36494,uc=36495,Ih=36283,cc=36284,lc=36285,fc=36286,Bm=3200,Om=3201,zm=0,Vm=1,bi="",gn="srgb",Yr="srgb-linear",ea="linear",ge="srgb",lr=7680,Fl=519,Hm=512,km=513,Gm=514,Lh=515,Wm=516,Xm=517,qm=518,Ym=519,hc=35044,Pl="300 es",ci=2e3,na=2001;class rr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jo=Math.PI/180,dc=180/Math.PI;function Ri(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function ne(n,t,e){return Math.max(t,Math.min(e,n))}function Zm(n,t){return(n%t+t)%t}function Ga(n,t,e){return(1-e)*n+e*t}function qn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const jm={DEG2RAD:jo};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let u=i[r+0],l=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],g=s[o+1],v=s[o+2],p=s[o+3];if(a===0){t[e+0]=u,t[e+1]=l,t[e+2]=c,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=g,t[e+2]=v,t[e+3]=p;return}if(f!==p||u!==h||l!==g||c!==v){let m=1-a;const d=u*h+l*g+c*v+f*p,b=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const A=Math.sqrt(x),y=Math.atan2(A,d*b);m=Math.sin(m*y)/A,a=Math.sin(a*y)/A}const M=a*b;if(u=u*m+h*M,l=l*m+g*M,c=c*m+v*M,f=f*m+p*M,m===1-a){const A=1/Math.sqrt(u*u+l*l+c*c+f*f);u*=A,l*=A,c*=A,f*=A}}t[e]=u,t[e+1]=l,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],u=i[r+1],l=i[r+2],c=i[r+3],f=s[o],h=s[o+1],g=s[o+2],v=s[o+3];return t[e]=a*v+c*f+u*g-l*h,t[e+1]=u*v+c*h+l*f-a*g,t[e+2]=l*v+c*g+a*h-u*f,t[e+3]=c*v-a*f-u*h-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,u=Math.sin,l=a(i/2),c=a(r/2),f=a(s/2),h=u(i/2),g=u(r/2),v=u(s/2);switch(o){case"XYZ":this._x=h*c*f+l*g*v,this._y=l*g*f-h*c*v,this._z=l*c*v+h*g*f,this._w=l*c*f-h*g*v;break;case"YXZ":this._x=h*c*f+l*g*v,this._y=l*g*f-h*c*v,this._z=l*c*v-h*g*f,this._w=l*c*f+h*g*v;break;case"ZXY":this._x=h*c*f-l*g*v,this._y=l*g*f+h*c*v,this._z=l*c*v+h*g*f,this._w=l*c*f-h*g*v;break;case"ZYX":this._x=h*c*f-l*g*v,this._y=l*g*f+h*c*v,this._z=l*c*v-h*g*f,this._w=l*c*f+h*g*v;break;case"YZX":this._x=h*c*f+l*g*v,this._y=l*g*f+h*c*v,this._z=l*c*v-h*g*f,this._w=l*c*f-h*g*v;break;case"XZY":this._x=h*c*f-l*g*v,this._y=l*g*f-h*c*v,this._z=l*c*v+h*g*f,this._w=l*c*f+h*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],u=e[9],l=e[2],c=e[6],f=e[10],h=i+a+f;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(c-u)*g,this._y=(s-l)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(c-u)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+l)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-l)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(u+c)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+l)/g,this._y=(u+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,u=e._y,l=e._z,c=e._w;return this._x=i*c+o*a+r*l-s*u,this._y=r*c+o*u+s*a-i*l,this._z=s*c+o*l+i*u-r*a,this._w=o*c-i*a-r*u-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const u=1-a*a;if(u<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*i+e*this._x,this._y=g*r+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}const l=Math.sqrt(u),c=Math.atan2(l,a),f=Math.sin((1-e)*c)/l,h=Math.sin(e*c)/l;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,e=0,i=0){j.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,u=t.w,l=2*(o*r-a*i),c=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+u*l+o*f-a*c,this.y=i+u*c+a*l-s*f,this.z=r+u*f+s*c-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,u=e.z;return this.x=r*u-s*a,this.y=s*o-i*u,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wa.copy(this).projectOnVector(t),this.sub(Wa)}reflect(t){return this.sub(Wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new j,Nl=new nr;class Jt{constructor(t,e,i,r,s,o,a,u,l){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,u,l)}set(t,e,i,r,s,o,a,u,l){const c=this.elements;return c[0]=t,c[1]=r,c[2]=a,c[3]=e,c[4]=s,c[5]=u,c[6]=i,c[7]=o,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],u=i[6],l=i[1],c=i[4],f=i[7],h=i[2],g=i[5],v=i[8],p=r[0],m=r[3],d=r[6],b=r[1],x=r[4],M=r[7],A=r[2],y=r[5],w=r[8];return s[0]=o*p+a*b+u*A,s[3]=o*m+a*x+u*y,s[6]=o*d+a*M+u*w,s[1]=l*p+c*b+f*A,s[4]=l*m+c*x+f*y,s[7]=l*d+c*M+f*w,s[2]=h*p+g*b+v*A,s[5]=h*m+g*x+v*y,s[8]=h*d+g*M+v*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],u=t[6],l=t[7],c=t[8];return e*o*c-e*a*l-i*s*c+i*a*u+r*s*l-r*o*u}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],u=t[6],l=t[7],c=t[8],f=c*o-a*l,h=a*u-c*s,g=l*s-o*u,v=e*f+i*h+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return t[0]=f*p,t[1]=(r*l-c*i)*p,t[2]=(a*i-r*o)*p,t[3]=h*p,t[4]=(c*e-r*u)*p,t[5]=(r*s-a*e)*p,t[6]=g*p,t[7]=(i*u-l*e)*p,t[8]=(o*e-i*s)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const u=Math.cos(s),l=Math.sin(s);return this.set(i*u,i*l,-i*(u*o+l*a)+o+t,-r*l,r*u,-r*(-l*o+u*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xa.makeScale(t,e)),this}rotate(t){return this.premultiply(Xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new Jt;function Uh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Km(){const n=vs("canvas");return n.style.display="block",n}const Il={};function Or(n){n in Il||(Il[n]=!0,console.warn(n))}function $m(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Jm(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qm(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ll=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ul=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function t0(){const n={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ge&&(r.r=fi(r.r),r.g=fi(r.g),r.b=fi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(r.r=zr(r.r),r.g=zr(r.g),r.b=zr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bi?ea:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Or("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Or("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Yr]:{primaries:t,whitePoint:i,transfer:ea,toXYZ:Ll,fromXYZ:Ul,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:i,transfer:ge,toXYZ:Ll,fromXYZ:Ul,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),n}const ae=t0();function fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fr;class e0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{fr===void 0&&(fr=vs("canvas")),fr.width=t.width,fr.height=t.height;const r=fr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=fr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fi(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(fi(e[i]/255)*255):e[i]=fi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let n0=0;class zc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qa(r[o].image)):s.push(qa(r[o]))}else s=qa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?e0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let i0=0;const Ya=new j;class Je extends rr{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,i=Ji,r=Ji,s=On,o=Qi,a=zn,u=di,l=Je.DEFAULT_ANISOTROPY,c=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Ri(),this.name="",this.source=new zc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ya).x}get height(){return this.source.getSize(Ya).y}get depth(){return this.source.getSize(Ya).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ou:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case zu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ou:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case zu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=bh;Je.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,i=0,r=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const u=t.elements,l=u[0],c=u[4],f=u[8],h=u[1],g=u[5],v=u[9],p=u[2],m=u[6],d=u[10];if(Math.abs(c-h)<.01&&Math.abs(f-p)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+p)<.1&&Math.abs(v+m)<.1&&Math.abs(l+g+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,M=(g+1)/2,A=(d+1)/2,y=(c+h)/4,w=(f+p)/4,C=(v+m)/4;return x>M&&x>A?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=y/i,s=w/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=y/r,s=C/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=C/s),this.set(i,r,s,e),this}let b=Math.sqrt((m-v)*(m-v)+(f-p)*(f-p)+(h-c)*(h-c));return Math.abs(b)<.001&&(b=1),this.x=(m-v)/b,this.y=(f-p)/b,this.z=(h-c)/b,this.w=Math.acos((l+g+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class r0 extends rr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new Je(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new zc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends r0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Bh extends Je{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class s0 extends Je{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Js{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),po.copy(i.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),mo.subVectors(this.max,ss),hr.subVectors(t.a,ss),dr.subVectors(t.b,ss),pr.subVectors(t.c,ss),gi.subVectors(dr,hr),_i.subVectors(pr,dr),Hi.subVectors(hr,pr);let e=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Hi.z,Hi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Hi.z,0,-Hi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Hi.y,Hi.x,0];return!Za(e,hr,dr,pr,mo)||(e=[1,0,0,0,1,0,0,0,1],!Za(e,hr,dr,pr,mo))?!1:(go.crossVectors(gi,_i),e=[go.x,go.y,go.z],Za(e,hr,dr,pr,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Qn=[new j,new j,new j,new j,new j,new j,new j,new j],Fn=new j,po=new Js,hr=new j,dr=new j,pr=new j,gi=new j,_i=new j,Hi=new j,ss=new j,mo=new j,go=new j,ki=new j;function Za(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ki.fromArray(n,s);const a=r.x*Math.abs(ki.x)+r.y*Math.abs(ki.y)+r.z*Math.abs(ki.z),u=t.dot(ki),l=e.dot(ki),c=i.dot(ki);if(Math.max(-Math.max(u,l,c),Math.min(u,l,c))>a)return!1}return!0}const o0=new Js,os=new j,ja=new j;class Vc{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):o0.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);const e=os.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(os,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(ja)),this.expandByPoint(os.copy(t.center).sub(ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ti=new j,Ka=new j,_o=new j,vi=new j,$a=new j,vo=new j,Ja=new j;class Oh{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ka.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(Ka);const s=t.distanceTo(e)*.5,o=-this.direction.dot(_o),a=vi.dot(this.direction),u=-vi.dot(_o),l=vi.lengthSq(),c=Math.abs(1-o*o);let f,h,g,v;if(c>0)if(f=o*u-a,h=o*a-u,v=s*c,f>=0)if(h>=-v)if(h<=v){const p=1/c;f*=p,h*=p,g=f*(f+o*h+2*a)+h*(o*f+h+2*u)+l}else h=s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*u)+l;else h=-s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*u)+l;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-u),s),g=-f*f+h*(h+2*u)+l):h<=v?(f=0,h=Math.min(Math.max(-s,-u),s),g=h*(h+2*u)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-u),s),g=-f*f+h*(h+2*u)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*u)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ka).addScaledVector(_o,h),g}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,u=i+o;return u<0?null:a<0?this.at(u,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,u;const l=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),c>=0?(s=(t.min.y-h.y)*c,o=(t.max.y-h.y)*c):(s=(t.max.y-h.y)*c,o=(t.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,u=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,u=(t.min.z-h.z)*f),i>u||a>r)||((a>i||i!==i)&&(i=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,i,r,s){$a.subVectors(e,t),vo.subVectors(i,t),Ja.crossVectors($a,vo);let o=this.direction.dot(Ja),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,t);const u=a*this.direction.dot(vo.crossVectors(vi,vo));if(u<0)return null;const l=a*this.direction.dot($a.cross(vi));if(l<0||u+l>o)return null;const c=-a*vi.dot(Ja);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(t,e,i,r,s,o,a,u,l,c,f,h,g,v,p,m){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,u,l,c,f,h,g,v,p,m)}set(t,e,i,r,s,o,a,u,l,c,f,h,g,v,p,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=u,d[2]=l,d[6]=c,d[10]=f,d[14]=h,d[3]=g,d[7]=v,d[11]=p,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/mr.setFromMatrixColumn(t,0).length(),s=1/mr.setFromMatrixColumn(t,1).length(),o=1/mr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),u=Math.cos(r),l=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*c,g=o*f,v=a*c,p=a*f;e[0]=u*c,e[4]=-u*f,e[8]=l,e[1]=g+v*l,e[5]=h-p*l,e[9]=-a*u,e[2]=p-h*l,e[6]=v+g*l,e[10]=o*u}else if(t.order==="YXZ"){const h=u*c,g=u*f,v=l*c,p=l*f;e[0]=h+p*a,e[4]=v*a-g,e[8]=o*l,e[1]=o*f,e[5]=o*c,e[9]=-a,e[2]=g*a-v,e[6]=p+h*a,e[10]=o*u}else if(t.order==="ZXY"){const h=u*c,g=u*f,v=l*c,p=l*f;e[0]=h-p*a,e[4]=-o*f,e[8]=v+g*a,e[1]=g+v*a,e[5]=o*c,e[9]=p-h*a,e[2]=-o*l,e[6]=a,e[10]=o*u}else if(t.order==="ZYX"){const h=o*c,g=o*f,v=a*c,p=a*f;e[0]=u*c,e[4]=v*l-g,e[8]=h*l+p,e[1]=u*f,e[5]=p*l+h,e[9]=g*l-v,e[2]=-l,e[6]=a*u,e[10]=o*u}else if(t.order==="YZX"){const h=o*u,g=o*l,v=a*u,p=a*l;e[0]=u*c,e[4]=p-h*f,e[8]=v*f+g,e[1]=f,e[5]=o*c,e[9]=-a*c,e[2]=-l*c,e[6]=g*f+v,e[10]=h-p*f}else if(t.order==="XZY"){const h=o*u,g=o*l,v=a*u,p=a*l;e[0]=u*c,e[4]=-f,e[8]=l*c,e[1]=h*f+p,e[5]=o*c,e[9]=g*f-v,e[2]=v*f-g,e[6]=a*c,e[10]=p*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(a0,t,u0)}lookAt(t,e,i){const r=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ei.crossVectors(i,dn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ei.crossVectors(i,dn)),Ei.normalize(),Eo.crossVectors(dn,Ei),r[0]=Ei.x,r[4]=Eo.x,r[8]=dn.x,r[1]=Ei.y,r[5]=Eo.y,r[9]=dn.y,r[2]=Ei.z,r[6]=Eo.z,r[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],u=i[8],l=i[12],c=i[1],f=i[5],h=i[9],g=i[13],v=i[2],p=i[6],m=i[10],d=i[14],b=i[3],x=i[7],M=i[11],A=i[15],y=r[0],w=r[4],C=r[8],D=r[12],S=r[1],R=r[5],H=r[9],L=r[13],O=r[2],q=r[6],z=r[10],W=r[14],U=r[3],Y=r[7],Q=r[11],ot=r[15];return s[0]=o*y+a*S+u*O+l*U,s[4]=o*w+a*R+u*q+l*Y,s[8]=o*C+a*H+u*z+l*Q,s[12]=o*D+a*L+u*W+l*ot,s[1]=c*y+f*S+h*O+g*U,s[5]=c*w+f*R+h*q+g*Y,s[9]=c*C+f*H+h*z+g*Q,s[13]=c*D+f*L+h*W+g*ot,s[2]=v*y+p*S+m*O+d*U,s[6]=v*w+p*R+m*q+d*Y,s[10]=v*C+p*H+m*z+d*Q,s[14]=v*D+p*L+m*W+d*ot,s[3]=b*y+x*S+M*O+A*U,s[7]=b*w+x*R+M*q+A*Y,s[11]=b*C+x*H+M*z+A*Q,s[15]=b*D+x*L+M*W+A*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],u=t[9],l=t[13],c=t[2],f=t[6],h=t[10],g=t[14],v=t[3],p=t[7],m=t[11],d=t[15];return v*(+s*u*f-r*l*f-s*a*h+i*l*h+r*a*g-i*u*g)+p*(+e*u*g-e*l*h+s*o*h-r*o*g+r*l*c-s*u*c)+m*(+e*l*f-e*a*g-s*o*f+i*o*g+s*a*c-i*l*c)+d*(-r*a*c-e*u*f+e*a*h+r*o*f-i*o*h+i*u*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],u=t[6],l=t[7],c=t[8],f=t[9],h=t[10],g=t[11],v=t[12],p=t[13],m=t[14],d=t[15],b=f*m*l-p*h*l+p*u*g-a*m*g-f*u*d+a*h*d,x=v*h*l-c*m*l-v*u*g+o*m*g+c*u*d-o*h*d,M=c*p*l-v*f*l+v*a*g-o*p*g-c*a*d+o*f*d,A=v*f*u-c*p*u-v*a*h+o*p*h+c*a*m-o*f*m,y=e*b+i*x+r*M+s*A;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/y;return t[0]=b*w,t[1]=(p*h*s-f*m*s-p*r*g+i*m*g+f*r*d-i*h*d)*w,t[2]=(a*m*s-p*u*s+p*r*l-i*m*l-a*r*d+i*u*d)*w,t[3]=(f*u*s-a*h*s-f*r*l+i*h*l+a*r*g-i*u*g)*w,t[4]=x*w,t[5]=(c*m*s-v*h*s+v*r*g-e*m*g-c*r*d+e*h*d)*w,t[6]=(v*u*s-o*m*s-v*r*l+e*m*l+o*r*d-e*u*d)*w,t[7]=(o*h*s-c*u*s+c*r*l-e*h*l-o*r*g+e*u*g)*w,t[8]=M*w,t[9]=(v*f*s-c*p*s-v*i*g+e*p*g+c*i*d-e*f*d)*w,t[10]=(o*p*s-v*a*s+v*i*l-e*p*l-o*i*d+e*a*d)*w,t[11]=(c*a*s-o*f*s-c*i*l+e*f*l+o*i*g-e*a*g)*w,t[12]=A*w,t[13]=(c*p*r-v*f*r+v*i*h-e*p*h-c*i*m+e*f*m)*w,t[14]=(v*a*r-o*p*r-v*i*u+e*p*u+o*i*m-e*a*m)*w,t[15]=(o*f*r-c*a*r+c*i*u-e*f*u-o*i*h+e*a*h)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,u=t.z,l=s*o,c=s*a;return this.set(l*o+i,l*a-r*u,l*u+r*a,0,l*a+r*u,c*a+i,c*u-r*o,0,l*u-r*a,c*u+r*o,s*u*u+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,u=e._w,l=s+s,c=o+o,f=a+a,h=s*l,g=s*c,v=s*f,p=o*c,m=o*f,d=a*f,b=u*l,x=u*c,M=u*f,A=i.x,y=i.y,w=i.z;return r[0]=(1-(p+d))*A,r[1]=(g+M)*A,r[2]=(v-x)*A,r[3]=0,r[4]=(g-M)*y,r[5]=(1-(h+d))*y,r[6]=(m+b)*y,r[7]=0,r[8]=(v+x)*w,r[9]=(m-b)*w,r[10]=(1-(h+p))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=mr.set(r[0],r[1],r[2]).length();const o=mr.set(r[4],r[5],r[6]).length(),a=mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Pn.copy(this);const l=1/s,c=1/o,f=1/a;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=c,Pn.elements[5]*=c,Pn.elements[6]*=c,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,e.setFromRotationMatrix(Pn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=ci){const u=this.elements,l=2*s/(e-t),c=2*s/(i-r),f=(e+t)/(e-t),h=(i+r)/(i-r);let g,v;if(a===ci)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===na)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=l,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=c,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=ci){const u=this.elements,l=1/(e-t),c=1/(i-r),f=1/(o-s),h=(e+t)*l,g=(i+r)*c;let v,p;if(a===ci)v=(o+s)*f,p=-2*f;else if(a===na)v=s*f,p=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=2*l,u[4]=0,u[8]=0,u[12]=-h,u[1]=0,u[5]=2*c,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=p,u[14]=-v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const mr=new j,Pn=new Pe,a0=new j(0,0,0),u0=new j(1,1,1),Ei=new j,Eo=new j,dn=new j,Bl=new Pe,Ol=new nr;class pi{constructor(t=0,e=0,i=0,r=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],u=r[1],l=r[5],c=r[9],f=r[2],h=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class zh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let c0=0;const zl=new j,gr=new nr,ei=new Pe,xo=new j,as=new j,l0=new j,f0=new nr,Vl=new j(1,0,0),Hl=new j(0,1,0),kl=new j(0,0,1),Gl={type:"added"},h0={type:"removed"},_r={type:"childadded",child:null},Qa={type:"childremoved",child:null};class un extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const t=new j,e=new pi,i=new nr,r=new j(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Jt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gr.setFromAxisAngle(t,e),this.quaternion.multiply(gr),this}rotateOnWorldAxis(t,e){return gr.setFromAxisAngle(t,e),this.quaternion.premultiply(gr),this}rotateX(t){return this.rotateOnAxis(Vl,t)}rotateY(t){return this.rotateOnAxis(Hl,t)}rotateZ(t){return this.rotateOnAxis(kl,t)}translateOnAxis(t,e){return zl.copy(t).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vl,t)}translateY(t){return this.translateOnAxis(Hl,t)}translateZ(t){return this.translateOnAxis(kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?xo.copy(t):xo.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(as,xo,this.up):ei.lookAt(xo,as,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),gr.setFromRotationMatrix(ei),this.quaternion.premultiply(gr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gl),_r.child=t,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(h0),Qa.child=t,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gl),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,l0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,f0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let l=0,c=u.length;l<c;l++){const f=u[l];s(t.shapes,f)}else s(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,l=this.material.length;u<l;u++)a.push(s(t.materials,this.material[u]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(s(t.animations,u))}}if(e){const a=o(t.geometries),u=o(t.materials),l=o(t.textures),c=o(t.images),f=o(t.shapes),h=o(t.skeletons),g=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),u.length>0&&(i.materials=u),l.length>0&&(i.textures=l),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const u=[];for(const l in a){const c=a[l];delete c.metadata,u.push(c)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}un.DEFAULT_UP=new j(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new j,ni=new j,tu=new j,ii=new j,vr=new j,Er=new j,Wl=new j,eu=new j,nu=new j,iu=new j,ru=new Re,su=new Re,ou=new Re;class wn{constructor(t=new j,e=new j,i=new j){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Nn.subVectors(t,e),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Nn.subVectors(r,e),ni.subVectors(i,e),tu.subVectors(t,e);const o=Nn.dot(Nn),a=Nn.dot(ni),u=Nn.dot(tu),l=ni.dot(ni),c=ni.dot(tu),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,g=(l*u-a*c)*h,v=(o*c-a*u)*h;return s.set(1-g-v,v,g)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,i,r,s,o,a,u){return this.getBarycoord(t,e,i,r,ii)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,ii.x),u.addScaledVector(o,ii.y),u.addScaledVector(a,ii.z),u)}static getInterpolatedAttribute(t,e,i,r,s,o){return ru.setScalar(0),su.setScalar(0),ou.setScalar(0),ru.fromBufferAttribute(t,e),su.fromBufferAttribute(t,i),ou.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ru,s.x),o.addScaledVector(su,s.y),o.addScaledVector(ou,s.z),o}static isFrontFacing(t,e,i,r){return Nn.subVectors(i,e),ni.subVectors(t,e),Nn.cross(ni).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Nn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return wn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;vr.subVectors(r,i),Er.subVectors(s,i),eu.subVectors(t,i);const u=vr.dot(eu),l=Er.dot(eu);if(u<=0&&l<=0)return e.copy(i);nu.subVectors(t,r);const c=vr.dot(nu),f=Er.dot(nu);if(c>=0&&f<=c)return e.copy(r);const h=u*f-c*l;if(h<=0&&u>=0&&c<=0)return o=u/(u-c),e.copy(i).addScaledVector(vr,o);iu.subVectors(t,s);const g=vr.dot(iu),v=Er.dot(iu);if(v>=0&&g<=v)return e.copy(s);const p=g*l-u*v;if(p<=0&&l>=0&&v<=0)return a=l/(l-v),e.copy(i).addScaledVector(Er,a);const m=c*v-g*f;if(m<=0&&f-c>=0&&g-v>=0)return Wl.subVectors(s,r),a=(f-c)/(f-c+(g-v)),e.copy(r).addScaledVector(Wl,a);const d=1/(m+p+h);return o=p*d,a=h*d,e.copy(i).addScaledVector(vr,o).addScaledVector(Er,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},yo={h:0,s:0,l:0};function au(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class fe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=ae.workingColorSpace){if(t=Zm(t,1),e=ne(e,0,1),i=ne(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=au(o,s,t+1/3),this.g=au(o,s,t),this.b=au(o,s,t-1/3)}return ae.colorSpaceToWorking(this,r),this}setStyle(t,e=gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const i=Vh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=zr(t.r),this.g=zr(t.g),this.b=zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return ae.workingToColorSpace(Ze.copy(this),t),Math.round(ne(Ze.r*255,0,255))*65536+Math.round(ne(Ze.g*255,0,255))*256+Math.round(ne(Ze.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(Ze.copy(this),e);const i=Ze.r,r=Ze.g,s=Ze.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let u,l;const c=(a+o)/2;if(a===o)u=0,l=0;else{const f=o-a;switch(l=c<=.5?f/(o+a):f/(2-o-a),o){case i:u=(r-s)/f+(r<s?6:0);break;case r:u=(s-i)/f+2;break;case s:u=(i-r)/f+4;break}u/=6}return t.h=u,t.s=l,t.l=c,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=gn){ae.workingToColorSpace(Ze.copy(this),t);const e=Ze.r,i=Ze.g,r=Ze.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(yo);const i=Ga(xi.h,yo.h,e),r=Ga(xi.s,yo.s,e),s=Ga(xi.l,yo.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new fe;fe.NAMES=Vh;let d0=0;class Qs extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Br,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wu,this.blendDst=Tu,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wu&&(i.blendSrc=this.blendSrc),this.blendDst!==Tu&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const u=s[a];delete u.metadata,o.push(u)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ia extends Qs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new j,Mo=new Wt;let p0=0;class kn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:p0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=hc,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),r=_e(r,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hc&&(t.usage=this.usage),t}}class Hh extends kn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class kh extends kn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class hi extends kn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let m0=0;const En=new Pe,uu=new un,xr=new j,pn=new Js,us=new Js,Ge=new j;class mi extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uh(t)?kh:Hh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Jt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,i){return En.makeTranslation(t,e,i),this.applyMatrix4(En),this}scale(t,e,i){return En.makeScale(t,e,i),this.applyMatrix4(En),this}lookAt(t){return uu.lookAt(t),uu.updateMatrix(),this.applyMatrix4(uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new hi(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];us.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(pn.min,us.min),pn.expandByPoint(Ge),Ge.addVectors(pn.max,us.max),pn.expandByPoint(Ge)):(pn.expandByPoint(us.min),pn.expandByPoint(us.max))}pn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ge.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ge));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],u=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)Ge.fromBufferAttribute(a,l),u&&(xr.fromBufferAttribute(t,l),Ge.add(xr)),r=Math.max(r,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],u=[];for(let C=0;C<i.count;C++)a[C]=new j,u[C]=new j;const l=new j,c=new j,f=new j,h=new Wt,g=new Wt,v=new Wt,p=new j,m=new j;function d(C,D,S){l.fromBufferAttribute(i,C),c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,C),g.fromBufferAttribute(s,D),v.fromBufferAttribute(s,S),c.sub(l),f.sub(l),g.sub(h),v.sub(h);const R=1/(g.x*v.y-v.x*g.y);isFinite(R)&&(p.copy(c).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(R),m.copy(f).multiplyScalar(g.x).addScaledVector(c,-v.x).multiplyScalar(R),a[C].add(p),a[D].add(p),a[S].add(p),u[C].add(m),u[D].add(m),u[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let C=0,D=b.length;C<D;++C){const S=b[C],R=S.start,H=S.count;for(let L=R,O=R+H;L<O;L+=3)d(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const x=new j,M=new j,A=new j,y=new j;function w(C){A.fromBufferAttribute(r,C),y.copy(A);const D=a[C];x.copy(D),x.sub(A.multiplyScalar(A.dot(D))).normalize(),M.crossVectors(y,D);const R=M.dot(u[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,R)}for(let C=0,D=b.length;C<D;++C){const S=b[C],R=S.start,H=S.count;for(let L=R,O=R+H;L<O;L+=3)w(t.getX(L+0)),w(t.getX(L+1)),w(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new j,s=new j,o=new j,a=new j,u=new j,l=new j,c=new j,f=new j;if(t)for(let h=0,g=t.count;h<g;h+=3){const v=t.getX(h+0),p=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,v),u.fromBufferAttribute(i,p),l.fromBufferAttribute(i,m),a.add(c),u.add(c),l.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(p,u.x,u.y,u.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,g=e.count;h<g;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,u){const l=a.array,c=a.itemSize,f=a.normalized,h=new l.constructor(u.length*c);let g=0,v=0;for(let p=0,m=u.length;p<m;p++){a.isInterleavedBufferAttribute?g=u[p]*a.data.stride+a.offset:g=u[p]*c;for(let d=0;d<c;d++)h[v++]=l[g++]}return new kn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mi,i=this.index.array,r=this.attributes;for(const a in r){const u=r[a],l=t(u,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const u=[],l=s[a];for(let c=0,f=l.length;c<f;c++){const h=l[c],g=t(h,i);u.push(g)}e.morphAttributes[a]=u}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(t[l]=u[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const u in i){const l=i[u];t.data.attributes[u]=l.toJSON(t.data)}const r={};let s=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],c=[];for(let f=0,h=l.length;f<h;f++){const g=l[f];c.push(g.toJSON(t.data))}c.length>0&&(r[u]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const c=r[l];this.setAttribute(l,c.clone(e))}const s=t.morphAttributes;for(const l in s){const c=[],f=s[l];for(let h=0,g=f.length;h<g;h++)c.push(f[h].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,c=o.length;l<c;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xl=new Pe,Gi=new Oh,Do=new Vc,ql=new j,So=new j,Ao=new j,bo=new j,cu=new j,wo=new j,Yl=new j,To=new j;class Vn extends un{constructor(t=new mi,e=new ia){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){wo.set(0,0,0);for(let u=0,l=s.length;u<l;u++){const c=a[u],f=s[u];c!==0&&(cu.fromBufferAttribute(f,t),o?wo.addScaledVector(cu,c):wo.addScaledVector(cu.sub(e),c))}e.add(wo)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),Gi.copy(t.ray).recast(t.near),!(Do.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Do,ql)===null||Gi.origin.distanceToSquared(ql)>(t.far-t.near)**2))&&(Xl.copy(s).invert(),Gi.copy(t.ray).applyMatrix4(Xl),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,u=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,p=h.length;v<p;v++){const m=h[v],d=o[m.materialIndex],b=Math.max(m.start,g.start),x=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let M=b,A=x;M<A;M+=3){const y=a.getX(M),w=a.getX(M+1),C=a.getX(M+2);r=Co(this,d,t,i,l,c,f,y,w,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let m=v,d=p;m<d;m+=3){const b=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);r=Co(this,o,t,i,l,c,f,b,x,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(o))for(let v=0,p=h.length;v<p;v++){const m=h[v],d=o[m.materialIndex],b=Math.max(m.start,g.start),x=Math.min(u.count,Math.min(m.start+m.count,g.start+g.count));for(let M=b,A=x;M<A;M+=3){const y=M,w=M+1,C=M+2;r=Co(this,d,t,i,l,c,f,y,w,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,g.start),p=Math.min(u.count,g.start+g.count);for(let m=v,d=p;m<d;m+=3){const b=m,x=m+1,M=m+2;r=Co(this,o,t,i,l,c,f,b,x,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function g0(n,t,e,i,r,s,o,a){let u;if(t.side===an?u=i.intersectTriangle(o,s,r,!0,a):u=i.intersectTriangle(r,s,o,t.side===Ii,a),u===null)return null;To.copy(a),To.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(To);return l<e.near||l>e.far?null:{distance:l,point:To.clone(),object:n}}function Co(n,t,e,i,r,s,o,a,u,l){n.getVertexPosition(a,So),n.getVertexPosition(u,Ao),n.getVertexPosition(l,bo);const c=g0(n,t,e,i,So,Ao,bo,Yl);if(c){const f=new j;wn.getBarycoord(Yl,So,Ao,bo,f),r&&(c.uv=wn.getInterpolatedAttribute(r,a,u,l,f,new Wt)),s&&(c.uv1=wn.getInterpolatedAttribute(s,a,u,l,f,new Wt)),o&&(c.normal=wn.getInterpolatedAttribute(o,a,u,l,f,new j),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:u,c:l,normal:new j,materialIndex:0};wn.getNormal(So,Ao,bo,h.normal),c.face=h,c.barycoord=f}return c}class to extends mi{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const u=[],l=[],c=[],f=[];let h=0,g=0;v("z","y","x",-1,-1,i,e,t,o,s,0),v("z","y","x",1,-1,i,e,-t,o,s,1),v("x","z","y",1,1,t,i,e,r,o,2),v("x","z","y",1,-1,t,i,-e,r,o,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(u),this.setAttribute("position",new hi(l,3)),this.setAttribute("normal",new hi(c,3)),this.setAttribute("uv",new hi(f,2));function v(p,m,d,b,x,M,A,y,w,C,D){const S=M/w,R=A/C,H=M/2,L=A/2,O=y/2,q=w+1,z=C+1;let W=0,U=0;const Y=new j;for(let Q=0;Q<z;Q++){const ot=Q*R-L;for(let mt=0;mt<q;mt++){const xt=mt*S-H;Y[p]=xt*b,Y[m]=ot*x,Y[d]=O,l.push(Y.x,Y.y,Y.z),Y[p]=0,Y[m]=0,Y[d]=y>0?1:-1,c.push(Y.x,Y.y,Y.z),f.push(mt/w),f.push(1-Q/C),W+=1}}for(let Q=0;Q<C;Q++)for(let ot=0;ot<w;ot++){const mt=h+ot+q*Q,xt=h+ot+q*(Q+1),J=h+(ot+1)+q*(Q+1),nt=h+(ot+1)+q*Q;u.push(mt,xt,nt),u.push(xt,J,nt),U+=6}a.addGroup(g,U,D),g+=U,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function nn(n){const t={};for(let e=0;e<n.length;e++){const i=Zr(n[e]);for(const r in i)t[r]=i[r]}return t}function _0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Gh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const v0={clone:Zr,merge:nn};var E0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends Qs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E0,this.fragmentShader=x0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zr(t.uniforms),this.uniformsGroups=_0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Wh extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new j,Zl=new Wt,jl=new Wt;class An extends Wh{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=dc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dc*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,Zl,jl),e.subVectors(jl,Zl)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(jo*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/u,e-=o.offsetY*i/l,r*=o.width/u,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const yr=-90,Mr=1;class y0 extends un{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(yr,Mr,t,e);r.layers=this.layers,this.add(r);const s=new An(yr,Mr,t,e);s.layers=this.layers,this.add(s);const o=new An(yr,Mr,t,e);o.layers=this.layers,this.add(o);const a=new An(yr,Mr,t,e);a.layers=this.layers,this.add(a);const u=new An(yr,Mr,t,e);u.layers=this.layers,this.add(u);const l=new An(yr,Mr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,u]=e;for(const l of e)this.remove(l);if(t===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,u,l,c]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,u),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=p,t.setRenderTarget(i,5,r),t.render(e,c),t.setRenderTarget(f,h,g),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Xh extends Je{constructor(t=[],e=Xr,i,r,s,o,a,u,l,c){super(t,e,i,r,s,o,a,u,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class M0 extends ir{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Xh(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new to(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:Zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Ti});s.uniforms.tEquirect.value=e;const o=new Vn(r,s),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=On),new y0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class Ro extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D0={type:"move"};class lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ro,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ro,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ro,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,u=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const p of t.hand.values()){const m=e.getJointPose(p,i),d=this._getHandJoint(l,p);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=c.position.distanceTo(f.position),g=.02,v=.005;l.inputState.pinching&&h>g+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=g-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(D0)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ro;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class S0 extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class A0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hc,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new j;class ra{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),r=_e(r,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new kn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ra(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class qh extends Qs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Dr;const cs=new j,Sr=new j,Ar=new j,br=new Wt,ls=new Wt,Yh=new Pe,Fo=new j,fs=new j,Po=new j,Kl=new Wt,fu=new Wt,$l=new Wt;class b0 extends un{constructor(t=new qh){if(super(),this.isSprite=!0,this.type="Sprite",Dr===void 0){Dr=new mi;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new A0(e,5);Dr.setIndex([0,1,2,0,2,3]),Dr.setAttribute("position",new ra(i,3,0,!1)),Dr.setAttribute("uv",new ra(i,2,3,!1))}this.geometry=Dr,this.material=t,this.center=new Wt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),Yh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ar.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-Ar.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;No(Fo.set(-.5,-.5,0),Ar,o,Sr,r,s),No(fs.set(.5,-.5,0),Ar,o,Sr,r,s),No(Po.set(.5,.5,0),Ar,o,Sr,r,s),Kl.set(0,0),fu.set(1,0),$l.set(1,1);let a=t.ray.intersectTriangle(Fo,fs,Po,!1,cs);if(a===null&&(No(fs.set(-.5,.5,0),Ar,o,Sr,r,s),fu.set(0,1),a=t.ray.intersectTriangle(Fo,Po,fs,!1,cs),a===null))return;const u=t.ray.origin.distanceTo(cs);u<t.near||u>t.far||e.push({distance:u,point:cs.clone(),uv:wn.getInterpolation(cs,Fo,fs,Po,Kl,fu,$l,new Wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function No(n,t,e,i,r,s){br.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(ls.x=s*br.x-r*br.y,ls.y=r*br.x+s*br.y):ls.copy(br),n.copy(t),n.x+=ls.x,n.y+=ls.y,n.applyMatrix4(Yh)}const hu=new j,w0=new j,T0=new Jt;class Si{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=hu.subVectors(i,e).cross(w0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(hu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||T0.getNormalMatrix(t),r=this.coplanarPoint(hu).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new Vc,Io=new j;class Zh{constructor(t=new Si,e=new Si,i=new Si,r=new Si,s=new Si,o=new Si){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ci){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],u=r[3],l=r[4],c=r[5],f=r[6],h=r[7],g=r[8],v=r[9],p=r[10],m=r[11],d=r[12],b=r[13],x=r[14],M=r[15];if(i[0].setComponents(u-s,h-l,m-g,M-d).normalize(),i[1].setComponents(u+s,h+l,m+g,M+d).normalize(),i[2].setComponents(u+o,h+c,m+v,M+b).normalize(),i[3].setComponents(u-o,h-c,m-v,M-b).normalize(),i[4].setComponents(u-a,h-f,m-p,M-x).normalize(),e===ci)i[5].setComponents(u+a,h+f,m+p,M+x).normalize();else if(e===na)i[5].setComponents(a,f,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Io.x=r.normal.x>0?t.max.x:t.min.x,Io.y=r.normal.y>0?t.max.y:t.min.y,Io.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Io)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class C0 extends Je{constructor(t,e,i,r,s,o,a,u,l){super(t,e,i,r,s,o,a,u,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jh extends Je{constructor(t,e,i=er,r,s,o,a=Hn,u=Hn,l,c=gs,f=1){if(c!==gs&&c!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,r,s,o,a,u,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Da extends mi{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),u=Math.floor(r),l=a+1,c=u+1,f=t/a,h=e/u,g=[],v=[],p=[],m=[];for(let d=0;d<c;d++){const b=d*h-o;for(let x=0;x<l;x++){const M=x*f-s;v.push(M,-b,0),p.push(0,0,1),m.push(x/a),m.push(1-d/u)}}for(let d=0;d<u;d++)for(let b=0;b<a;b++){const x=b+l*d,M=b+l*(d+1),A=b+1+l*(d+1),y=b+1+l*d;g.push(x,M,y),g.push(M,A,y)}this.setIndex(g),this.setAttribute("position",new hi(v,3)),this.setAttribute("normal",new hi(p,3)),this.setAttribute("uv",new hi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.width,t.height,t.widthSegments,t.heightSegments)}}class R0 extends Qs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class F0 extends Qs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Jl={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class P0{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,u;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return u?u(c):c},this.setURLModifier=function(c){return u=c,this},this.addHandler=function(c,f){return l.push(c,f),this},this.removeHandler=function(c){const f=l.indexOf(c);return f!==-1&&l.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=l.length;f<h;f+=2){const g=l[f],v=l[f+1];if(g.global&&(g.lastIndex=0),g.test(c))return v}return null}}}const N0=new P0;class Hc{constructor(t){this.manager=t!==void 0?t:N0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Hc.DEFAULT_MATERIAL_NAME="__DEFAULT";class I0 extends Hc{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Jl.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=vs("img");function u(){c(),Jl.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(f){c(),r&&r(f),s.manager.itemError(t),s.manager.itemEnd(t)}function c(){a.removeEventListener("load",u,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",u,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class L0 extends Hc{constructor(t){super(t)}load(t,e,i,r){const s=new Je,o=new I0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class U0 extends Wh{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,u=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=c*this.view.offsetY,u=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class B0 extends An{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ql{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ne(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class O0 extends rr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function tf(n,t,e,i){const r=z0(i);switch(e){case Rh:return n*t;case Ph:return n*t/r.components*r.byteLength;case Uc:return n*t/r.components*r.byteLength;case Nh:return n*t*2/r.components*r.byteLength;case Bc:return n*t*2/r.components*r.byteLength;case Fh:return n*t*3/r.components*r.byteLength;case zn:return n*t*4/r.components*r.byteLength;case Oc:return n*t*4/r.components*r.byteLength;case Wo:case Xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Hu:case Gu:return Math.max(n,16)*Math.max(t,8)/4;case Vu:case ku:return Math.max(n,8)*Math.max(t,8)/2;case Wu:case Xu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case qu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Zu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ju:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ku:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case $u:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ju:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Qu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case tc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case rc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Zo:case ac:case uc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ih:case cc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case lc:case fc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function z0(n){switch(n){case di:case wh:return{byteLength:1,components:1};case ps:case Th:case $s:return{byteLength:2,components:1};case Ic:case Lc:return{byteLength:2,components:4};case er:case Nc:case ui:return{byteLength:4,components:1};case Ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kh(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function V0(n){const t=new WeakMap;function e(a,u){const l=a.array,c=a.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(u,h),n.bufferData(u,l,c),a.onUploadCallback();let g;if(l instanceof Float32Array)g=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=n.SHORT;else if(l instanceof Uint32Array)g=n.UNSIGNED_INT;else if(l instanceof Int32Array)g=n.INT;else if(l instanceof Int8Array)g=n.BYTE;else if(l instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,u,l){const c=u.array,f=u.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,c);else{f.sort((g,v)=>g.start-v.start);let h=0;for(let g=1;g<f.length;g++){const v=f[h],p=f[g];p.start<=v.start+v.count+1?v.count=Math.max(v.count,p.start+p.count-v.start):(++h,f[h]=p)}f.length=h+1;for(let g=0,v=f.length;g<v;g++){const p=f[g];n.bufferSubData(l,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const u=t.get(a);u&&(n.deleteBuffer(u.buffer),t.delete(a))}function o(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,u));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,u),l.version=a.version}}return{get:r,remove:s,update:o}}var H0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,G0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Z0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,K0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_g="gl_FragColor = linearToOutputTexel( gl_FragColor );",vg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ng=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Og=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,i_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,l_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,g_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,__=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,D_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,A_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,R_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,L_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,z_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Y_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Z_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,j_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,av=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_v=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:H0,alphahash_pars_fragment:k0,alphamap_fragment:G0,alphamap_pars_fragment:W0,alphatest_fragment:X0,alphatest_pars_fragment:q0,aomap_fragment:Y0,aomap_pars_fragment:Z0,batching_pars_vertex:j0,batching_vertex:K0,begin_vertex:$0,beginnormal_vertex:J0,bsdfs:Q0,iridescence_fragment:tg,bumpmap_pars_fragment:eg,clipping_planes_fragment:ng,clipping_planes_pars_fragment:ig,clipping_planes_pars_vertex:rg,clipping_planes_vertex:sg,color_fragment:og,color_pars_fragment:ag,color_pars_vertex:ug,color_vertex:cg,common:lg,cube_uv_reflection_fragment:fg,defaultnormal_vertex:hg,displacementmap_pars_vertex:dg,displacementmap_vertex:pg,emissivemap_fragment:mg,emissivemap_pars_fragment:gg,colorspace_fragment:_g,colorspace_pars_fragment:vg,envmap_fragment:Eg,envmap_common_pars_fragment:xg,envmap_pars_fragment:yg,envmap_pars_vertex:Mg,envmap_physical_pars_fragment:Ng,envmap_vertex:Dg,fog_vertex:Sg,fog_pars_vertex:Ag,fog_fragment:bg,fog_pars_fragment:wg,gradientmap_pars_fragment:Tg,lightmap_pars_fragment:Cg,lights_lambert_fragment:Rg,lights_lambert_pars_fragment:Fg,lights_pars_begin:Pg,lights_toon_fragment:Ig,lights_toon_pars_fragment:Lg,lights_phong_fragment:Ug,lights_phong_pars_fragment:Bg,lights_physical_fragment:Og,lights_physical_pars_fragment:zg,lights_fragment_begin:Vg,lights_fragment_maps:Hg,lights_fragment_end:kg,logdepthbuf_fragment:Gg,logdepthbuf_pars_fragment:Wg,logdepthbuf_pars_vertex:Xg,logdepthbuf_vertex:qg,map_fragment:Yg,map_pars_fragment:Zg,map_particle_fragment:jg,map_particle_pars_fragment:Kg,metalnessmap_fragment:$g,metalnessmap_pars_fragment:Jg,morphinstance_vertex:Qg,morphcolor_vertex:t_,morphnormal_vertex:e_,morphtarget_pars_vertex:n_,morphtarget_vertex:i_,normal_fragment_begin:r_,normal_fragment_maps:s_,normal_pars_fragment:o_,normal_pars_vertex:a_,normal_vertex:u_,normalmap_pars_fragment:c_,clearcoat_normal_fragment_begin:l_,clearcoat_normal_fragment_maps:f_,clearcoat_pars_fragment:h_,iridescence_pars_fragment:d_,opaque_fragment:p_,packing:m_,premultiplied_alpha_fragment:g_,project_vertex:__,dithering_fragment:v_,dithering_pars_fragment:E_,roughnessmap_fragment:x_,roughnessmap_pars_fragment:y_,shadowmap_pars_fragment:M_,shadowmap_pars_vertex:D_,shadowmap_vertex:S_,shadowmask_pars_fragment:A_,skinbase_vertex:b_,skinning_pars_vertex:w_,skinning_vertex:T_,skinnormal_vertex:C_,specularmap_fragment:R_,specularmap_pars_fragment:F_,tonemapping_fragment:P_,tonemapping_pars_fragment:N_,transmission_fragment:I_,transmission_pars_fragment:L_,uv_pars_fragment:U_,uv_pars_vertex:B_,uv_vertex:O_,worldpos_vertex:z_,background_vert:V_,background_frag:H_,backgroundCube_vert:k_,backgroundCube_frag:G_,cube_vert:W_,cube_frag:X_,depth_vert:q_,depth_frag:Y_,distanceRGBA_vert:Z_,distanceRGBA_frag:j_,equirect_vert:K_,equirect_frag:$_,linedashed_vert:J_,linedashed_frag:Q_,meshbasic_vert:tv,meshbasic_frag:ev,meshlambert_vert:nv,meshlambert_frag:iv,meshmatcap_vert:rv,meshmatcap_frag:sv,meshnormal_vert:ov,meshnormal_frag:av,meshphong_vert:uv,meshphong_frag:cv,meshphysical_vert:lv,meshphysical_frag:fv,meshtoon_vert:hv,meshtoon_frag:dv,points_vert:pv,points_frag:mv,shadow_vert:gv,shadow_frag:_v,sprite_vert:vv,sprite_frag:Ev},Dt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Wn={basic:{uniforms:nn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:nn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new fe(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:nn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:nn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:nn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new fe(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:nn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:nn([Dt.points,Dt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:nn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:nn([Dt.common,Dt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:nn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:nn([Dt.sprite,Dt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:nn([Dt.common,Dt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:nn([Dt.lights,Dt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Wn.physical={uniforms:nn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Lo={r:0,b:0,g:0},Xi=new pi,xv=new Pe;function yv(n,t,e,i,r,s,o){const a=new fe(0);let u=s===!0?0:1,l,c,f=null,h=0,g=null;function v(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function p(x){let M=!1;const A=v(x);A===null?d(a,u):A&&A.isColor&&(d(A,1),M=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,M){const A=v(M);A&&(A.isCubeTexture||A.mapping===Ma)?(c===void 0&&(c=new Vn(new to(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Zr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Xi.copy(M.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),c.material.uniforms.envMap.value=A,c.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xv.makeRotationFromEuler(Xi)),c.material.toneMapped=ae.getTransfer(A.colorSpace)!==ge,(f!==A||h!==A.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,f=A,h=A.version,g=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Vn(new Da(2,2),new Li({name:"BackgroundMaterial",uniforms:Zr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ae.getTransfer(A.colorSpace)!==ge,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||h!==A.version||g!==n.toneMapping)&&(l.material.needsUpdate=!0,f=A,h=A.version,g=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function d(x,M){x.getRGB(Lo,Gh(n)),i.buffers.color.setClear(Lo.r,Lo.g,Lo.b,M,o)}function b(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),u=M,d(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(x){u=x,d(a,u)},render:p,addToRenderList:m,dispose:b}}function Mv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,R,H,L,O){let q=!1;const z=f(L,H,R);s!==z&&(s=z,l(s.object)),q=g(S,L,H,O),q&&v(S,L,H,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(S,R,H,L),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function u(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function f(S,R,H){const L=H.wireframe===!0;let O=i[S.id];O===void 0&&(O={},i[S.id]=O);let q=O[R.id];q===void 0&&(q={},O[R.id]=q);let z=q[L];return z===void 0&&(z=h(u()),q[L]=z),z}function h(S){const R=[],H=[],L=[];for(let O=0;O<e;O++)R[O]=0,H[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:H,attributeDivisors:L,object:S,attributes:{},index:null}}function g(S,R,H,L){const O=s.attributes,q=R.attributes;let z=0;const W=H.getAttributes();for(const U in W)if(W[U].location>=0){const Q=O[U];let ot=q[U];if(ot===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),Q===void 0||Q.attribute!==ot||ot&&Q.data!==ot.data)return!0;z++}return s.attributesNum!==z||s.index!==L}function v(S,R,H,L){const O={},q=R.attributes;let z=0;const W=H.getAttributes();for(const U in W)if(W[U].location>=0){let Q=q[U];Q===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const ot={};ot.attribute=Q,Q&&Q.data&&(ot.data=Q.data),O[U]=ot,z++}s.attributes=O,s.attributesNum=z,s.index=L}function p(){const S=s.newAttributes;for(let R=0,H=S.length;R<H;R++)S[R]=0}function m(S){d(S,0)}function d(S,R){const H=s.newAttributes,L=s.enabledAttributes,O=s.attributeDivisors;H[S]=1,L[S]===0&&(n.enableVertexAttribArray(S),L[S]=1),O[S]!==R&&(n.vertexAttribDivisor(S,R),O[S]=R)}function b(){const S=s.newAttributes,R=s.enabledAttributes;for(let H=0,L=R.length;H<L;H++)R[H]!==S[H]&&(n.disableVertexAttribArray(H),R[H]=0)}function x(S,R,H,L,O,q,z){z===!0?n.vertexAttribIPointer(S,R,H,O,q):n.vertexAttribPointer(S,R,H,L,O,q)}function M(S,R,H,L){p();const O=L.attributes,q=H.getAttributes(),z=R.defaultAttributeValues;for(const W in q){const U=q[W];if(U.location>=0){let Y=O[W];if(Y===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),Y!==void 0){const Q=Y.normalized,ot=Y.itemSize,mt=t.get(Y);if(mt===void 0)continue;const xt=mt.buffer,J=mt.type,nt=mt.bytesPerElement,lt=J===n.INT||J===n.UNSIGNED_INT||Y.gpuType===Nc;if(Y.isInterleavedBufferAttribute){const at=Y.data,_t=at.stride,At=Y.offset;if(at.isInstancedInterleavedBuffer){for(let vt=0;vt<U.locationSize;vt++)d(U.location+vt,at.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let vt=0;vt<U.locationSize;vt++)m(U.location+vt);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let vt=0;vt<U.locationSize;vt++)x(U.location+vt,ot/U.locationSize,J,Q,_t*nt,(At+ot/U.locationSize*vt)*nt,lt)}else{if(Y.isInstancedBufferAttribute){for(let at=0;at<U.locationSize;at++)d(U.location+at,Y.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let at=0;at<U.locationSize;at++)m(U.location+at);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let at=0;at<U.locationSize;at++)x(U.location+at,ot/U.locationSize,J,Q,ot*nt,ot/U.locationSize*at*nt,lt)}}else if(z!==void 0){const Q=z[W];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(U.location,Q);break;case 3:n.vertexAttrib3fv(U.location,Q);break;case 4:n.vertexAttrib4fv(U.location,Q);break;default:n.vertexAttrib1fv(U.location,Q)}}}}b()}function A(){C();for(const S in i){const R=i[S];for(const H in R){const L=R[H];for(const O in L)c(L[O].object),delete L[O];delete R[H]}delete i[S]}}function y(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const H in R){const L=R[H];for(const O in L)c(L[O].object),delete L[O];delete R[H]}delete i[S.id]}function w(S){for(const R in i){const H=i[R];if(H[S.id]===void 0)continue;const L=H[S.id];for(const O in L)c(L[O].object),delete L[O];delete H[S.id]}}function C(){D(),o=!0,s!==r&&(s=r,l(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:y,releaseStatesOfProgram:w,initAttributes:p,enableAttribute:m,disableUnusedAttributes:b}}function Dv(n,t,e){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,f){f!==0&&(n.drawArraysInstanced(i,l,c,f),e.update(c,i,f))}function a(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let g=0;for(let v=0;v<f;v++)g+=c[v];e.update(g,i,1)}function u(l,c,f,h){if(f===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<l.length;v++)o(l[v],c[v],h[v]);else{g.multiDrawArraysInstancedWEBGL(i,l,0,c,0,h,0,f);let v=0;for(let p=0;p<f;p++)v+=c[p]*h[p];e.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=u}function Sv(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==zn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const C=w===$s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==di&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ui&&!C)}function u(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const c=u(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,y=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:g,maxVertexTextures:v,maxTextureSize:p,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:A,maxSamples:y}}function Av(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Si,a=new Jt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const g=f.length!==0||h||i!==0||r;return r=h,i=f.length,g},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=c(f,h,0)},this.setState=function(f,h,g){const v=f.clippingPlanes,p=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?c(null):l();else{const b=s?0:i,x=b*4;let M=d.clippingState||null;u.value=M,M=c(v,h,x,g);for(let A=0;A!==x;++A)M[A]=e[A];d.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function l(){u.value!==e&&(u.value=e,u.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,h,g,v){const p=f!==null?f.length:0;let m=null;if(p!==0){if(m=u.value,v!==!0||m===null){const d=g+p*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,M=g;x!==p;++x,M+=4)o.copy(f[x]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}u.value=m,u.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,m}}function bv(n){let t=new WeakMap;function e(o,a){return a===Uu?o.mapping=Xr:a===Bu&&(o.mapping=qr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uu||a===Bu)if(t.has(o)){const u=t.get(o).texture;return e(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const l=new M0(u.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const u=t.get(a);u!==void 0&&(t.delete(a),u.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Nr=4,ef=[.125,.215,.35,.446,.526,.582],Ki=20,du=new U0,nf=new fe;let pu=null,mu=0,gu=0,_u=!1;const Yi=(1+Math.sqrt(5))/2,wr=1/Yi,rf=[new j(-Yi,wr,0),new j(Yi,wr,0),new j(-wr,0,Yi),new j(wr,0,Yi),new j(0,Yi,-wr),new j(0,Yi,wr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],wv=new j;class sf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=wv}=s;pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),_u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,i,r,u,a),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pu,mu,gu),this._renderer.xr.enabled=_u,t.scissorTest=!1,Uo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xr||t.mapping===qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),_u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:$s,format:zn,colorSpace:Yr,depthBuffer:!1},r=of(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tv(s)),this._blurMaterial=Cv(s,t,e)}return r}_compileMaterial(t){const e=new Vn(this._lodPlanes[0],t);this._renderer.compile(e,du)}_sceneToCubeUV(t,e,i,r,s){const u=new An(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,g=f.toneMapping;f.getClearColor(nf),f.toneMapping=Ci,f.autoClear=!1;const v=new ia({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),p=new Vn(new to,v);let m=!1;const d=t.background;d?d.isColor&&(v.color.copy(d),t.background=null,m=!0):(v.color.copy(nf),m=!0);for(let b=0;b<6;b++){const x=b%3;x===0?(u.up.set(0,l[b],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+c[b],s.y,s.z)):x===1?(u.up.set(0,0,l[b]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+c[b],s.z)):(u.up.set(0,l[b],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+c[b]));const M=this._cubeSize;Uo(r,x*M,b>2?M:0,M,M),f.setRenderTarget(r),m&&f.render(p,u),f.render(t,u)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=g,f.autoClear=h,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Xr||t.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const u=this._cubeSize;Uo(e,0,0,3*u,2*u),i.setRenderTarget(e),i.render(o,du)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=rf[(r-s-1)%rf.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const u=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Vn(this._lodPlanes[r],l),h=l.uniforms,g=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ki-1),p=s/v,m=isFinite(s)?1+Math.floor(c*p):Ki;m>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);const d=[];let b=0;for(let w=0;w<Ki;++w){const C=w/p,D=Math.exp(-C*C/2);d.push(D),w===0?b+=D:w<m&&(b+=2*D)}for(let w=0;w<d.length;w++)d[w]=d[w]/b;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const M=this._sizeLods[r],A=3*M*(r>x-Nr?r-x+Nr:0),y=4*(this._cubeSize-M);Uo(e,A,y,3*M,2*M),u.setRenderTarget(e),u.render(f,du)}}function Tv(n){const t=[],e=[],i=[];let r=n;const s=n-Nr+1+ef.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let u=1/a;o>n-Nr?u=ef[o-n+Nr-1]:o===0&&(u=0),i.push(u);const l=1/(a-2),c=-l,f=1+l,h=[c,c,f,c,f,f,c,c,f,f,c,f],g=6,v=6,p=3,m=2,d=1,b=new Float32Array(p*v*g),x=new Float32Array(m*v*g),M=new Float32Array(d*v*g);for(let y=0;y<g;y++){const w=y%3*2/3-1,C=y>2?0:-1,D=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];b.set(D,p*v*y),x.set(h,m*v*y);const S=[y,y,y,y,y,y];M.set(S,d*v*y)}const A=new mi;A.setAttribute("position",new kn(b,p)),A.setAttribute("uv",new kn(x,m)),A.setAttribute("faceIndex",new kn(M,d)),t.push(A),r>Nr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function of(n,t,e){const i=new ir(n,t,e);return i.texture.mapping=Ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uo(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Cv(n,t,e){const i=new Float32Array(Ki),r=new j(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function af(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function uf(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rv(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const u=a.mapping,l=u===Uu||u===Bu,c=u===Xr||u===qr;if(l||c){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new sf(n)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const g=a.image;return l&&g&&g.height>0||c&&g&&r(g)?(e===null&&(e=new sf(n)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let u=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&u++;return u===l}function s(a){const u=a.target;u.removeEventListener("dispose",s);const l=t.get(u);l!==void 0&&(t.delete(u),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Fv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Or("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Pv(n,t,e,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const v in h.attributes)t.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(t.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function u(f){const h=f.attributes;for(const g in h)t.update(h[g],n.ARRAY_BUFFER)}function l(f){const h=[],g=f.index,v=f.attributes.position;let p=0;if(g!==null){const b=g.array;p=g.version;for(let x=0,M=b.length;x<M;x+=3){const A=b[x+0],y=b[x+1],w=b[x+2];h.push(A,y,y,w,w,A)}}else if(v!==void 0){const b=v.array;p=v.version;for(let x=0,M=b.length/3-1;x<M;x+=3){const A=x+0,y=x+1,w=x+2;h.push(A,y,y,w,w,A)}}else return;const m=new(Uh(h)?kh:Hh)(h,1);m.version=p;const d=s.get(f);d&&t.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const g=f.index;g!==null&&h.version<g.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:u,getWireframeAttribute:c}}function Nv(n,t,e){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function u(h,g){n.drawElements(i,g,s,h*o),e.update(g,i,1)}function l(h,g,v){v!==0&&(n.drawElementsInstanced(i,g,s,h*o,v),e.update(g,i,v))}function c(h,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,h,0,v);let m=0;for(let d=0;d<v;d++)m+=g[d];e.update(m,i,1)}function f(h,g,v,p){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)l(h[d]/o,g[d],p[d]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,h,0,p,0,v);let d=0;for(let b=0;b<v;b++)d+=g[b]*p[b];e.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=u,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function Iv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Lv(n,t,e){const i=new WeakMap,r=new Re;function s(o,a,u){const l=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let D=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",D)};h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),p===!0&&(x=3);let M=a.attributes.position.count*x,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const y=new Float32Array(M*A*4*f),w=new Bh(y,M,A,f);w.type=ui,w.needsUpdate=!0;const C=x*4;for(let S=0;S<f;S++){const R=m[S],H=d[S],L=b[S],O=M*A*4*S;for(let q=0;q<R.count;q++){const z=q*C;g===!0&&(r.fromBufferAttribute(R,q),y[O+z+0]=r.x,y[O+z+1]=r.y,y[O+z+2]=r.z,y[O+z+3]=0),v===!0&&(r.fromBufferAttribute(H,q),y[O+z+4]=r.x,y[O+z+5]=r.y,y[O+z+6]=r.z,y[O+z+7]=0),p===!0&&(r.fromBufferAttribute(L,q),y[O+z+8]=r.x,y[O+z+9]=r.y,y[O+z+10]=r.z,y[O+z+11]=L.itemSize===4?r.w:1)}}h={count:f,texture:w,size:new Wt(M,A)},i.set(a,h),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const v=a.morphTargetsRelative?1:1-g;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",l)}u.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Uv(n,t,e,i){let r=new WeakMap;function s(u){const l=i.render.frame,c=u.geometry,f=t.get(u,c);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),r.get(u)!==l&&(e.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,n.ARRAY_BUFFER),r.set(u,l))),u.isSkinnedMesh){const h=u.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return f}function o(){r=new WeakMap}function a(u){const l=u.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const $h=new Je,cf=new jh(1,1),Jh=new Bh,Qh=new s0,td=new Xh,lf=[],ff=[],hf=new Float32Array(16),df=new Float32Array(9),pf=new Float32Array(4);function Jr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=lf[r];if(s===void 0&&(s=new Float32Array(r),lf[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function He(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Sa(n,t){let e=ff[t];e===void 0&&(e=new Int32Array(t),ff[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Bv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Ov(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2fv(this.addr,t),ke(e,t)}}function zv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;n.uniform3fv(this.addr,t),ke(e,t)}}function Vv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4fv(this.addr,t),ke(e,t)}}function Hv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(He(e,i))return;pf.set(i),n.uniformMatrix2fv(this.addr,!1,pf),ke(e,i)}}function kv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(He(e,i))return;df.set(i),n.uniformMatrix3fv(this.addr,!1,df),ke(e,i)}}function Gv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(He(e,i))return;hf.set(i),n.uniformMatrix4fv(this.addr,!1,hf),ke(e,i)}}function Wv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Xv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2iv(this.addr,t),ke(e,t)}}function qv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3iv(this.addr,t),ke(e,t)}}function Yv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4iv(this.addr,t),ke(e,t)}}function Zv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function jv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2uiv(this.addr,t),ke(e,t)}}function Kv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3uiv(this.addr,t),ke(e,t)}}function $v(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4uiv(this.addr,t),ke(e,t)}}function Jv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(cf.compareFunction=Lh,s=cf):s=$h,e.setTexture2D(t||s,r)}function Qv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Qh,r)}function tE(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||td,r)}function eE(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Jh,r)}function nE(n){switch(n){case 5126:return Bv;case 35664:return Ov;case 35665:return zv;case 35666:return Vv;case 35674:return Hv;case 35675:return kv;case 35676:return Gv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return qv;case 35669:case 35673:return Yv;case 5125:return Zv;case 36294:return jv;case 36295:return Kv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return tE;case 36289:case 36303:case 36311:case 36292:return eE}}function iE(n,t){n.uniform1fv(this.addr,t)}function rE(n,t){const e=Jr(t,this.size,2);n.uniform2fv(this.addr,e)}function sE(n,t){const e=Jr(t,this.size,3);n.uniform3fv(this.addr,e)}function oE(n,t){const e=Jr(t,this.size,4);n.uniform4fv(this.addr,e)}function aE(n,t){const e=Jr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function uE(n,t){const e=Jr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function cE(n,t){const e=Jr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function lE(n,t){n.uniform1iv(this.addr,t)}function fE(n,t){n.uniform2iv(this.addr,t)}function hE(n,t){n.uniform3iv(this.addr,t)}function dE(n,t){n.uniform4iv(this.addr,t)}function pE(n,t){n.uniform1uiv(this.addr,t)}function mE(n,t){n.uniform2uiv(this.addr,t)}function gE(n,t){n.uniform3uiv(this.addr,t)}function _E(n,t){n.uniform4uiv(this.addr,t)}function vE(n,t,e){const i=this.cache,r=t.length,s=Sa(e,r);He(i,s)||(n.uniform1iv(this.addr,s),ke(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||$h,s[o])}function EE(n,t,e){const i=this.cache,r=t.length,s=Sa(e,r);He(i,s)||(n.uniform1iv(this.addr,s),ke(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Qh,s[o])}function xE(n,t,e){const i=this.cache,r=t.length,s=Sa(e,r);He(i,s)||(n.uniform1iv(this.addr,s),ke(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||td,s[o])}function yE(n,t,e){const i=this.cache,r=t.length,s=Sa(e,r);He(i,s)||(n.uniform1iv(this.addr,s),ke(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Jh,s[o])}function ME(n){switch(n){case 5126:return iE;case 35664:return rE;case 35665:return sE;case 35666:return oE;case 35674:return aE;case 35675:return uE;case 35676:return cE;case 5124:case 35670:return lE;case 35667:case 35671:return fE;case 35668:case 35672:return hE;case 35669:case 35673:return dE;case 5125:return pE;case 36294:return mE;case 36295:return gE;case 36296:return _E;case 35678:case 36198:case 36298:case 36306:case 35682:return vE;case 35679:case 36299:case 36307:return EE;case 35680:case 36300:case 36308:case 36293:return xE;case 36289:case 36303:case 36311:case 36292:return yE}}class DE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=nE(e.type)}}class SE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ME(e.type)}}class AE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const vu=/(\w+)(\])?(\[|\.)?/g;function mf(n,t){n.seq.push(t),n.map[t.id]=t}function bE(n,t,e){const i=n.name,r=i.length;for(vu.lastIndex=0;;){const s=vu.exec(i),o=vu.lastIndex;let a=s[1];const u=s[2]==="]",l=s[3];if(u&&(a=a|0),l===void 0||l==="["&&o+2===r){mf(e,l===void 0?new DE(a,n,t):new SE(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new AE(a),mf(e,f)),e=f}}}class Ko{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);bE(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],u=i[a.id];u.needsUpdate!==!1&&a.setValue(t,u.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function gf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const wE=37297;let TE=0;function CE(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const _f=new Jt;function RE(n){ae._getMatrix(_f,ae.workingColorSpace,n);const t=`mat3( ${_f.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(n)){case ea:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function vf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+CE(n.getShaderSource(t),o)}else return r}function FE(n,t){const e=RE(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function PE(n,t){let e;switch(t){case Cm:e="Linear";break;case Rm:e="Reinhard";break;case Fm:e="Cineon";break;case Pm:e="ACESFilmic";break;case Im:e="AgX";break;case Lm:e="Neutral";break;case Nm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Bo=new j;function NE(){ae.getLuminanceCoefficients(Bo);const n=Bo.x.toFixed(4),t=Bo.y.toFixed(4),e=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function LE(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function UE(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function hs(n){return n!==""}function Ef(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const BE=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(n){return n.replace(BE,zE)}const OE=new Map;function zE(n,t){let e=Qt[t];if(e===void 0){const i=OE.get(t);if(i!==void 0)e=Qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return pc(e)}const VE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(n){return n.replace(VE,HE)}function HE(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kE(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Sh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===um?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function GE(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xr:case qr:t="ENVMAP_TYPE_CUBE";break;case Ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function WE(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qr:t="ENVMAP_MODE_REFRACTION";break}return t}function XE(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ah:t="ENVMAP_BLENDING_MULTIPLY";break;case wm:t="ENVMAP_BLENDING_MIX";break;case Tm:t="ENVMAP_BLENDING_ADD";break}return t}function qE(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function YE(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const u=kE(e),l=GE(e),c=WE(e),f=XE(e),h=qE(e),g=IE(e),v=LE(s),p=r.createProgram();let m,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(hs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(hs).join(`
`),d.length>0&&(d+=`
`)):(m=[Mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),d=[Mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Ci?PE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,FE("linearToOutputTexel",e.outputColorSpace),NE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),o=pc(o),o=Ef(o,e),o=xf(o,e),a=pc(a),a=Ef(a,e),a=xf(a,e),o=yf(o),a=yf(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=b+m+o,M=b+d+a,A=gf(r,r.VERTEX_SHADER,x),y=gf(r,r.FRAGMENT_SHADER,M);r.attachShader(p,A),r.attachShader(p,y),e.index0AttributeName!==void 0?r.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function w(R){if(n.debug.checkShaderErrors){const H=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(A).trim(),O=r.getShaderInfoLog(y).trim();let q=!0,z=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,A,y);else{const W=vf(r,A,"vertex"),U=vf(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+W+`
`+U)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(L===""||O==="")&&(z=!1);z&&(R.diagnostics={runnable:q,programLog:H,vertexShader:{log:L,prefix:m},fragmentShader:{log:O,prefix:d}})}r.deleteShader(A),r.deleteShader(y),C=new Ko(r,p),D=UE(r,p)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let D;this.getAttributes=function(){return D===void 0&&w(this),D};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(p,wE)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=TE++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=y,this}let ZE=0;class jE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new KE(t),e.set(t,i)),i}}class KE{constructor(t){this.id=ZE++,this.code=t,this.usedTimes=0}}function $E(n,t,e,i,r,s,o){const a=new zh,u=new jE,l=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(D){return l.add(D),D===0?"uv":`uv${D}`}function m(D,S,R,H,L){const O=H.fog,q=L.geometry,z=D.isMeshStandardMaterial?H.environment:null,W=(D.isMeshStandardMaterial?e:t).get(D.envMap||z),U=W&&W.mapping===Ma?W.image.height:null,Y=v[D.type];D.precision!==null&&(g=r.getMaxPrecision(D.precision),g!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",g,"instead."));const Q=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ot=Q!==void 0?Q.length:0;let mt=0;q.morphAttributes.position!==void 0&&(mt=1),q.morphAttributes.normal!==void 0&&(mt=2),q.morphAttributes.color!==void 0&&(mt=3);let xt,J,nt,lt;if(Y){const ue=Wn[Y];xt=ue.vertexShader,J=ue.fragmentShader}else xt=D.vertexShader,J=D.fragmentShader,u.update(D),nt=u.getVertexShaderID(D),lt=u.getFragmentShaderID(D);const at=n.getRenderTarget(),_t=n.state.buffers.depth.getReversed(),At=L.isInstancedMesh===!0,vt=L.isBatchedMesh===!0,Kt=!!D.map,kt=!!D.matcap,It=!!W,P=!!D.aoMap,de=!!D.lightMap,jt=!!D.bumpMap,ee=!!D.normalMap,gt=!!D.displacementMap,Ht=!!D.emissiveMap,Ft=!!D.metalnessMap,Yt=!!D.roughnessMap,ye=D.anisotropy>0,E=D.clearcoat>0,_=D.dispersion>0,F=D.iridescence>0,N=D.sheen>0,V=D.transmission>0,I=ye&&!!D.anisotropyMap,et=E&&!!D.clearcoatMap,Z=E&&!!D.clearcoatNormalMap,tt=E&&!!D.clearcoatRoughnessMap,K=F&&!!D.iridescenceMap,it=F&&!!D.iridescenceThicknessMap,ht=N&&!!D.sheenColorMap,St=N&&!!D.sheenRoughnessMap,Tt=!!D.specularMap,pt=!!D.specularColorMap,Lt=!!D.specularIntensityMap,B=V&&!!D.transmissionMap,Et=V&&!!D.thicknessMap,ct=!!D.gradientMap,Ct=!!D.alphaMap,ft=D.alphaTest>0,st=!!D.alphaHash,Pt=!!D.extensions;let Zt=Ci;D.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Zt=n.toneMapping);const Ee={shaderID:Y,shaderType:D.type,shaderName:D.name,vertexShader:xt,fragmentShader:J,defines:D.defines,customVertexShaderID:nt,customFragmentShaderID:lt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:g,batching:vt,batchingColor:vt&&L._colorsTexture!==null,instancing:At,instancingColor:At&&L.instanceColor!==null,instancingMorph:At&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Yr,alphaToCoverage:!!D.alphaToCoverage,map:Kt,matcap:kt,envMap:It,envMapMode:It&&W.mapping,envMapCubeUVHeight:U,aoMap:P,lightMap:de,bumpMap:jt,normalMap:ee,displacementMap:h&&gt,emissiveMap:Ht,normalMapObjectSpace:ee&&D.normalMapType===Vm,normalMapTangentSpace:ee&&D.normalMapType===zm,metalnessMap:Ft,roughnessMap:Yt,anisotropy:ye,anisotropyMap:I,clearcoat:E,clearcoatMap:et,clearcoatNormalMap:Z,clearcoatRoughnessMap:tt,dispersion:_,iridescence:F,iridescenceMap:K,iridescenceThicknessMap:it,sheen:N,sheenColorMap:ht,sheenRoughnessMap:St,specularMap:Tt,specularColorMap:pt,specularIntensityMap:Lt,transmission:V,transmissionMap:B,thicknessMap:Et,gradientMap:ct,opaque:D.transparent===!1&&D.blending===Br&&D.alphaToCoverage===!1,alphaMap:Ct,alphaTest:ft,alphaHash:st,combine:D.combine,mapUv:Kt&&p(D.map.channel),aoMapUv:P&&p(D.aoMap.channel),lightMapUv:de&&p(D.lightMap.channel),bumpMapUv:jt&&p(D.bumpMap.channel),normalMapUv:ee&&p(D.normalMap.channel),displacementMapUv:gt&&p(D.displacementMap.channel),emissiveMapUv:Ht&&p(D.emissiveMap.channel),metalnessMapUv:Ft&&p(D.metalnessMap.channel),roughnessMapUv:Yt&&p(D.roughnessMap.channel),anisotropyMapUv:I&&p(D.anisotropyMap.channel),clearcoatMapUv:et&&p(D.clearcoatMap.channel),clearcoatNormalMapUv:Z&&p(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&p(D.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&p(D.iridescenceMap.channel),iridescenceThicknessMapUv:it&&p(D.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&p(D.sheenColorMap.channel),sheenRoughnessMapUv:St&&p(D.sheenRoughnessMap.channel),specularMapUv:Tt&&p(D.specularMap.channel),specularColorMapUv:pt&&p(D.specularColorMap.channel),specularIntensityMapUv:Lt&&p(D.specularIntensityMap.channel),transmissionMapUv:B&&p(D.transmissionMap.channel),thicknessMapUv:Et&&p(D.thicknessMap.channel),alphaMapUv:Ct&&p(D.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ee||ye),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!q.attributes.uv&&(Kt||Ct),fog:!!O,useFog:D.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:_t,skinning:L.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:mt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:D.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Kt&&D.map.isVideoTexture===!0&&ae.getTransfer(D.map.colorSpace)===ge,decodeVideoTextureEmissive:Ht&&D.emissiveMap.isVideoTexture===!0&&ae.getTransfer(D.emissiveMap.colorSpace)===ge,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Bn,flipSided:D.side===an,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Pt&&D.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&D.extensions.multiDraw===!0||vt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function d(D){const S=[];if(D.shaderID?S.push(D.shaderID):(S.push(D.customVertexShaderID),S.push(D.customFragmentShaderID)),D.defines!==void 0)for(const R in D.defines)S.push(R),S.push(D.defines[R]);return D.isRawShaderMaterial===!1&&(b(S,D),x(S,D),S.push(n.outputColorSpace)),S.push(D.customProgramCacheKey),S.join()}function b(D,S){D.push(S.precision),D.push(S.outputColorSpace),D.push(S.envMapMode),D.push(S.envMapCubeUVHeight),D.push(S.mapUv),D.push(S.alphaMapUv),D.push(S.lightMapUv),D.push(S.aoMapUv),D.push(S.bumpMapUv),D.push(S.normalMapUv),D.push(S.displacementMapUv),D.push(S.emissiveMapUv),D.push(S.metalnessMapUv),D.push(S.roughnessMapUv),D.push(S.anisotropyMapUv),D.push(S.clearcoatMapUv),D.push(S.clearcoatNormalMapUv),D.push(S.clearcoatRoughnessMapUv),D.push(S.iridescenceMapUv),D.push(S.iridescenceThicknessMapUv),D.push(S.sheenColorMapUv),D.push(S.sheenRoughnessMapUv),D.push(S.specularMapUv),D.push(S.specularColorMapUv),D.push(S.specularIntensityMapUv),D.push(S.transmissionMapUv),D.push(S.thicknessMapUv),D.push(S.combine),D.push(S.fogExp2),D.push(S.sizeAttenuation),D.push(S.morphTargetsCount),D.push(S.morphAttributeCount),D.push(S.numDirLights),D.push(S.numPointLights),D.push(S.numSpotLights),D.push(S.numSpotLightMaps),D.push(S.numHemiLights),D.push(S.numRectAreaLights),D.push(S.numDirLightShadows),D.push(S.numPointLightShadows),D.push(S.numSpotLightShadows),D.push(S.numSpotLightShadowsWithMaps),D.push(S.numLightProbes),D.push(S.shadowMapType),D.push(S.toneMapping),D.push(S.numClippingPlanes),D.push(S.numClipIntersection),D.push(S.depthPacking)}function x(D,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),D.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),D.push(a.mask)}function M(D){const S=v[D.type];let R;if(S){const H=Wn[S];R=v0.clone(H.uniforms)}else R=D.uniforms;return R}function A(D,S){let R;for(let H=0,L=c.length;H<L;H++){const O=c[H];if(O.cacheKey===S){R=O,++R.usedTimes;break}}return R===void 0&&(R=new YE(n,S,D,s),c.push(R)),R}function y(D){if(--D.usedTimes===0){const S=c.indexOf(D);c[S]=c[c.length-1],c.pop(),D.destroy()}}function w(D){u.remove(D)}function C(){u.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:A,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:C}}function JE(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,u){n.get(o)[a]=u}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function QE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Df(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Sf(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,h,g,v,p,m){let d=n[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:g,groupOrder:v,renderOrder:f.renderOrder,z:p,group:m},n[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=g,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=p,d.group=m),t++,d}function a(f,h,g,v,p,m){const d=o(f,h,g,v,p,m);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):e.push(d)}function u(f,h,g,v,p,m){const d=o(f,h,g,v,p,m);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):e.unshift(d)}function l(f,h){e.length>1&&e.sort(f||QE),i.length>1&&i.sort(h||Df),r.length>1&&r.sort(h||Df)}function c(){for(let f=t,h=n.length;f<h;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:u,finish:c,sort:l}}function tx(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Sf,n.set(i,[o])):r>=s.length?(o=new Sf,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function ex(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new j,color:new fe};break;case"SpotLight":e={position:new j,direction:new j,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new j,halfWidth:new j,halfHeight:new j};break}return n[t.id]=e,e}}}function nx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ix=0;function rx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function sx(n){const t=new ex,e=nx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new j);const r=new j,s=new Pe,o=new Pe;function a(l){let c=0,f=0,h=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let g=0,v=0,p=0,m=0,d=0,b=0,x=0,M=0,A=0,y=0,w=0;l.sort(rx);for(let D=0,S=l.length;D<S;D++){const R=l[D],H=R.color,L=R.intensity,O=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=H.r*L,f+=H.g*L,h+=H.b*L;else if(R.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(R.sh.coefficients[z],L);w++}else if(R.isDirectionalLight){const z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,U=e.get(R);U.shadowIntensity=W.intensity,U.shadowBias=W.bias,U.shadowNormalBias=W.normalBias,U.shadowRadius=W.radius,U.shadowMapSize=W.mapSize,i.directionalShadow[g]=U,i.directionalShadowMap[g]=q,i.directionalShadowMatrix[g]=R.shadow.matrix,b++}i.directional[g]=z,g++}else if(R.isSpotLight){const z=t.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(H).multiplyScalar(L),z.distance=O,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,i.spot[p]=z;const W=R.shadow;if(R.map&&(i.spotLightMap[A]=R.map,A++,W.updateMatrices(R),R.castShadow&&y++),i.spotLightMatrix[p]=W.matrix,R.castShadow){const U=e.get(R);U.shadowIntensity=W.intensity,U.shadowBias=W.bias,U.shadowNormalBias=W.normalBias,U.shadowRadius=W.radius,U.shadowMapSize=W.mapSize,i.spotShadow[p]=U,i.spotShadowMap[p]=q,M++}p++}else if(R.isRectAreaLight){const z=t.get(R);z.color.copy(H).multiplyScalar(L),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=z,m++}else if(R.isPointLight){const z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const W=R.shadow,U=e.get(R);U.shadowIntensity=W.intensity,U.shadowBias=W.bias,U.shadowNormalBias=W.normalBias,U.shadowRadius=W.radius,U.shadowMapSize=W.mapSize,U.shadowCameraNear=W.camera.near,U.shadowCameraFar=W.camera.far,i.pointShadow[v]=U,i.pointShadowMap[v]=q,i.pointShadowMatrix[v]=R.shadow.matrix,x++}i.point[v]=z,v++}else if(R.isHemisphereLight){const z=t.get(R);z.skyColor.copy(R.color).multiplyScalar(L),z.groundColor.copy(R.groundColor).multiplyScalar(L),i.hemi[d]=z,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==g||C.pointLength!==v||C.spotLength!==p||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==b||C.numPointShadows!==x||C.numSpotShadows!==M||C.numSpotMaps!==A||C.numLightProbes!==w)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+A-y,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=w,C.directionalLength=g,C.pointLength=v,C.spotLength=p,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=b,C.numPointShadows=x,C.numSpotShadows=M,C.numSpotMaps=A,C.numLightProbes=w,i.version=ix++)}function u(l,c){let f=0,h=0,g=0,v=0,p=0;const m=c.matrixWorldInverse;for(let d=0,b=l.length;d<b;d++){const x=l[d];if(x.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(x.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:a,setupView:u,state:i}}function Af(n){const t=new sx(n),e=[],i=[];function r(c){l.camera=c,e.length=0,i.length=0}function s(c){e.push(c)}function o(c){i.push(c)}function a(){t.setup(e)}function u(c){t.setupView(e,c)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:u,pushLight:s,pushShadow:o}}function ox(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Af(n),t.set(r,[a])):s>=o.length?(a=new Af(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cx(n,t,e){let i=new Zh;const r=new Wt,s=new Wt,o=new Re,a=new R0({depthPacking:Om}),u=new F0,l={},c=e.maxTextureSize,f={[Ii]:an,[an]:Ii,[Bn]:Bn},h=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:ax,fragmentShader:ux}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const v=new mi;v.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Vn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sh;let d=this.type;this.render=function(y,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const D=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Ti),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const L=d!==si&&this.type===si,O=d===si&&this.type!==si;for(let q=0,z=y.length;q<z;q++){const W=y[q],U=W.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const Y=U.getFrameExtents();if(r.multiply(Y),s.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/Y.x),r.x=s.x*Y.x,U.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/Y.y),r.y=s.y*Y.y,U.mapSize.y=s.y)),U.map===null||L===!0||O===!0){const ot=this.type!==si?{minFilter:Hn,magFilter:Hn}:{};U.map!==null&&U.map.dispose(),U.map=new ir(r.x,r.y,ot),U.map.texture.name=W.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const Q=U.getViewportCount();for(let ot=0;ot<Q;ot++){const mt=U.getViewport(ot);o.set(s.x*mt.x,s.y*mt.y,s.x*mt.z,s.y*mt.w),H.viewport(o),U.updateMatrices(W,ot),i=U.getFrustum(),M(w,C,U.camera,W,this.type)}U.isPointLightShadow!==!0&&this.type===si&&b(U,C),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(D,S,R)};function b(y,w){const C=t.update(p);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,g.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new ir(r.x,r.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(w,null,C,h,p,null),g.uniforms.shadow_pass.value=y.mapPass.texture,g.uniforms.resolution.value=y.mapSize,g.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(w,null,C,g,p,null)}function x(y,w,C,D){let S=null;const R=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(R!==void 0)S=R;else if(S=C.isPointLight===!0?u:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const H=S.uuid,L=w.uuid;let O=l[H];O===void 0&&(O={},l[H]=O);let q=O[L];q===void 0&&(q=S.clone(),O[L]=q,w.addEventListener("dispose",A)),S=q}if(S.visible=w.visible,S.wireframe=w.wireframe,D===si?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=n.properties.get(S);H.light=C}return S}function M(y,w,C,D,S){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===si)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,y.matrixWorld);const L=t.update(y),O=y.material;if(Array.isArray(O)){const q=L.groups;for(let z=0,W=q.length;z<W;z++){const U=q[z],Y=O[U.materialIndex];if(Y&&Y.visible){const Q=x(y,Y,D,S);y.onBeforeShadow(n,y,w,C,L,Q,U),n.renderBufferDirect(C,null,L,Q,y,U),y.onAfterShadow(n,y,w,C,L,Q,U)}}}else if(O.visible){const q=x(y,O,D,S);y.onBeforeShadow(n,y,w,C,L,q,null),n.renderBufferDirect(C,null,L,q,y,null),y.onAfterShadow(n,y,w,C,L,q,null)}}const H=y.children;for(let L=0,O=H.length;L<O;L++)M(H[L],w,C,D,S)}function A(y){y.target.removeEventListener("dispose",A);for(const C in l){const D=l[C],S=y.target.uuid;S in D&&(D[S].dispose(),delete D[S])}}}const lx={[Cu]:Ru,[Fu]:Iu,[Pu]:Lu,[Wr]:Nu,[Ru]:Cu,[Iu]:Fu,[Lu]:Pu,[Nu]:Wr};function fx(n,t){function e(){let B=!1;const Et=new Re;let ct=null;const Ct=new Re(0,0,0,0);return{setMask:function(ft){ct!==ft&&!B&&(n.colorMask(ft,ft,ft,ft),ct=ft)},setLocked:function(ft){B=ft},setClear:function(ft,st,Pt,Zt,Ee){Ee===!0&&(ft*=Zt,st*=Zt,Pt*=Zt),Et.set(ft,st,Pt,Zt),Ct.equals(Et)===!1&&(n.clearColor(ft,st,Pt,Zt),Ct.copy(Et))},reset:function(){B=!1,ct=null,Ct.set(-1,0,0,0)}}}function i(){let B=!1,Et=!1,ct=null,Ct=null,ft=null;return{setReversed:function(st){if(Et!==st){const Pt=t.get("EXT_clip_control");st?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),Et=st;const Zt=ft;ft=null,this.setClear(Zt)}},getReversed:function(){return Et},setTest:function(st){st?at(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(st){ct!==st&&!B&&(n.depthMask(st),ct=st)},setFunc:function(st){if(Et&&(st=lx[st]),Ct!==st){switch(st){case Cu:n.depthFunc(n.NEVER);break;case Ru:n.depthFunc(n.ALWAYS);break;case Fu:n.depthFunc(n.LESS);break;case Wr:n.depthFunc(n.LEQUAL);break;case Pu:n.depthFunc(n.EQUAL);break;case Nu:n.depthFunc(n.GEQUAL);break;case Iu:n.depthFunc(n.GREATER);break;case Lu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ct=st}},setLocked:function(st){B=st},setClear:function(st){ft!==st&&(Et&&(st=1-st),n.clearDepth(st),ft=st)},reset:function(){B=!1,ct=null,Ct=null,ft=null,Et=!1}}}function r(){let B=!1,Et=null,ct=null,Ct=null,ft=null,st=null,Pt=null,Zt=null,Ee=null;return{setTest:function(ue){B||(ue?at(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(ue){Et!==ue&&!B&&(n.stencilMask(ue),Et=ue)},setFunc:function(ue,fn,Tn){(ct!==ue||Ct!==fn||ft!==Tn)&&(n.stencilFunc(ue,fn,Tn),ct=ue,Ct=fn,ft=Tn)},setOp:function(ue,fn,Tn){(st!==ue||Pt!==fn||Zt!==Tn)&&(n.stencilOp(ue,fn,Tn),st=ue,Pt=fn,Zt=Tn)},setLocked:function(ue){B=ue},setClear:function(ue){Ee!==ue&&(n.clearStencil(ue),Ee=ue)},reset:function(){B=!1,Et=null,ct=null,Ct=null,ft=null,st=null,Pt=null,Zt=null,Ee=null}}}const s=new e,o=new i,a=new r,u=new WeakMap,l=new WeakMap;let c={},f={},h=new WeakMap,g=[],v=null,p=!1,m=null,d=null,b=null,x=null,M=null,A=null,y=null,w=new fe(0,0,0),C=0,D=!1,S=null,R=null,H=null,L=null,O=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,W=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(U)[1]),z=W>=1):U.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),z=W>=2);let Y=null,Q={};const ot=n.getParameter(n.SCISSOR_BOX),mt=n.getParameter(n.VIEWPORT),xt=new Re().fromArray(ot),J=new Re().fromArray(mt);function nt(B,Et,ct,Ct){const ft=new Uint8Array(4),st=n.createTexture();n.bindTexture(B,st),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pt=0;Pt<ct;Pt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Et,0,n.RGBA,1,1,Ct,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(Et+Pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return st}const lt={};lt[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),lt[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),lt[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(n.DEPTH_TEST),o.setFunc(Wr),jt(!1),ee(wl),at(n.CULL_FACE),P(Ti);function at(B){c[B]!==!0&&(n.enable(B),c[B]=!0)}function _t(B){c[B]!==!1&&(n.disable(B),c[B]=!1)}function At(B,Et){return f[B]!==Et?(n.bindFramebuffer(B,Et),f[B]=Et,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Et),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Et),!0):!1}function vt(B,Et){let ct=g,Ct=!1;if(B){ct=h.get(Et),ct===void 0&&(ct=[],h.set(Et,ct));const ft=B.textures;if(ct.length!==ft.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let st=0,Pt=ft.length;st<Pt;st++)ct[st]=n.COLOR_ATTACHMENT0+st;ct.length=ft.length,Ct=!0}}else ct[0]!==n.BACK&&(ct[0]=n.BACK,Ct=!0);Ct&&n.drawBuffers(ct)}function Kt(B){return v!==B?(n.useProgram(B),v=B,!0):!1}const kt={[ji]:n.FUNC_ADD,[lm]:n.FUNC_SUBTRACT,[fm]:n.FUNC_REVERSE_SUBTRACT};kt[hm]=n.MIN,kt[dm]=n.MAX;const It={[pm]:n.ZERO,[mm]:n.ONE,[gm]:n.SRC_COLOR,[wu]:n.SRC_ALPHA,[Mm]:n.SRC_ALPHA_SATURATE,[xm]:n.DST_COLOR,[vm]:n.DST_ALPHA,[_m]:n.ONE_MINUS_SRC_COLOR,[Tu]:n.ONE_MINUS_SRC_ALPHA,[ym]:n.ONE_MINUS_DST_COLOR,[Em]:n.ONE_MINUS_DST_ALPHA,[Dm]:n.CONSTANT_COLOR,[Sm]:n.ONE_MINUS_CONSTANT_COLOR,[Am]:n.CONSTANT_ALPHA,[bm]:n.ONE_MINUS_CONSTANT_ALPHA};function P(B,Et,ct,Ct,ft,st,Pt,Zt,Ee,ue){if(B===Ti){p===!0&&(_t(n.BLEND),p=!1);return}if(p===!1&&(at(n.BLEND),p=!0),B!==cm){if(B!==m||ue!==D){if((d!==ji||M!==ji)&&(n.blendEquation(n.FUNC_ADD),d=ji,M=ji),ue)switch(B){case Br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tl:n.blendFunc(n.ONE,n.ONE);break;case Cl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Cl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}b=null,x=null,A=null,y=null,w.set(0,0,0),C=0,m=B,D=ue}return}ft=ft||Et,st=st||ct,Pt=Pt||Ct,(Et!==d||ft!==M)&&(n.blendEquationSeparate(kt[Et],kt[ft]),d=Et,M=ft),(ct!==b||Ct!==x||st!==A||Pt!==y)&&(n.blendFuncSeparate(It[ct],It[Ct],It[st],It[Pt]),b=ct,x=Ct,A=st,y=Pt),(Zt.equals(w)===!1||Ee!==C)&&(n.blendColor(Zt.r,Zt.g,Zt.b,Ee),w.copy(Zt),C=Ee),m=B,D=!1}function de(B,Et){B.side===Bn?_t(n.CULL_FACE):at(n.CULL_FACE);let ct=B.side===an;Et&&(ct=!ct),jt(ct),B.blending===Br&&B.transparent===!1?P(Ti):P(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const Ct=B.stencilWrite;a.setTest(Ct),Ct&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ht(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function jt(B){S!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),S=B)}function ee(B){B!==om?(at(n.CULL_FACE),B!==R&&(B===wl?n.cullFace(n.BACK):B===am?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),R=B}function gt(B){B!==H&&(z&&n.lineWidth(B),H=B)}function Ht(B,Et,ct){B?(at(n.POLYGON_OFFSET_FILL),(L!==Et||O!==ct)&&(n.polygonOffset(Et,ct),L=Et,O=ct)):_t(n.POLYGON_OFFSET_FILL)}function Ft(B){B?at(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function Yt(B){B===void 0&&(B=n.TEXTURE0+q-1),Y!==B&&(n.activeTexture(B),Y=B)}function ye(B,Et,ct){ct===void 0&&(Y===null?ct=n.TEXTURE0+q-1:ct=Y);let Ct=Q[ct];Ct===void 0&&(Ct={type:void 0,texture:void 0},Q[ct]=Ct),(Ct.type!==B||Ct.texture!==Et)&&(Y!==ct&&(n.activeTexture(ct),Y=ct),n.bindTexture(B,Et||lt[B]),Ct.type=B,Ct.texture=Et)}function E(){const B=Q[Y];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function N(){try{n.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function V(){try{n.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function I(){try{n.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{n.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{n.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{n.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{n.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{n.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(B){xt.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),xt.copy(B))}function St(B){J.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),J.copy(B))}function Tt(B,Et){let ct=l.get(Et);ct===void 0&&(ct=new WeakMap,l.set(Et,ct));let Ct=ct.get(B);Ct===void 0&&(Ct=n.getUniformBlockIndex(Et,B.name),ct.set(B,Ct))}function pt(B,Et){const Ct=l.get(Et).get(B);u.get(Et)!==Ct&&(n.uniformBlockBinding(Et,Ct,B.__bindingPointIndex),u.set(Et,Ct))}function Lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},Y=null,Q={},f={},h=new WeakMap,g=[],v=null,p=!1,m=null,d=null,b=null,x=null,M=null,A=null,y=null,w=new fe(0,0,0),C=0,D=!1,S=null,R=null,H=null,L=null,O=null,xt.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:at,disable:_t,bindFramebuffer:At,drawBuffers:vt,useProgram:Kt,setBlending:P,setMaterial:de,setFlipSided:jt,setCullFace:ee,setLineWidth:gt,setPolygonOffset:Ht,setScissorTest:Ft,activeTexture:Yt,bindTexture:ye,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:K,texImage3D:it,updateUBOMapping:Tt,uniformBlockBinding:pt,texStorage2D:Z,texStorage3D:tt,texSubImage2D:N,texSubImage3D:V,compressedTexSubImage2D:I,compressedTexSubImage3D:et,scissor:ht,viewport:St,reset:Lt}}function hx(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Wt,c=new WeakMap;let f;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,_){return g?new OffscreenCanvas(E,_):vs("canvas")}function p(E,_,F){let N=1;const V=ye(E);if((V.width>F||V.height>F)&&(N=F/Math.max(V.width,V.height)),N<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const I=Math.floor(N*V.width),et=Math.floor(N*V.height);f===void 0&&(f=v(I,et));const Z=_?v(I,et):f;return Z.width=I,Z.height=et,Z.getContext("2d").drawImage(E,0,0,I,et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+I+"x"+et+")."),Z}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),E;return E}function m(E){return E.generateMipmaps}function d(E){n.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(E,_,F,N,V=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let I=_;if(_===n.RED&&(F===n.FLOAT&&(I=n.R32F),F===n.HALF_FLOAT&&(I=n.R16F),F===n.UNSIGNED_BYTE&&(I=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(I=n.R8UI),F===n.UNSIGNED_SHORT&&(I=n.R16UI),F===n.UNSIGNED_INT&&(I=n.R32UI),F===n.BYTE&&(I=n.R8I),F===n.SHORT&&(I=n.R16I),F===n.INT&&(I=n.R32I)),_===n.RG&&(F===n.FLOAT&&(I=n.RG32F),F===n.HALF_FLOAT&&(I=n.RG16F),F===n.UNSIGNED_BYTE&&(I=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(I=n.RG8UI),F===n.UNSIGNED_SHORT&&(I=n.RG16UI),F===n.UNSIGNED_INT&&(I=n.RG32UI),F===n.BYTE&&(I=n.RG8I),F===n.SHORT&&(I=n.RG16I),F===n.INT&&(I=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(I=n.RGB8UI),F===n.UNSIGNED_SHORT&&(I=n.RGB16UI),F===n.UNSIGNED_INT&&(I=n.RGB32UI),F===n.BYTE&&(I=n.RGB8I),F===n.SHORT&&(I=n.RGB16I),F===n.INT&&(I=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(I=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(I=n.RGBA16UI),F===n.UNSIGNED_INT&&(I=n.RGBA32UI),F===n.BYTE&&(I=n.RGBA8I),F===n.SHORT&&(I=n.RGBA16I),F===n.INT&&(I=n.RGBA32I)),_===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(I=n.RGB9_E5),_===n.RGBA){const et=V?ea:ae.getTransfer(N);F===n.FLOAT&&(I=n.RGBA32F),F===n.HALF_FLOAT&&(I=n.RGBA16F),F===n.UNSIGNED_BYTE&&(I=et===ge?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(I=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(I=n.RGB5_A1)}return(I===n.R16F||I===n.R32F||I===n.RG16F||I===n.RG32F||I===n.RGBA16F||I===n.RGBA32F)&&t.get("EXT_color_buffer_float"),I}function M(E,_){let F;return E?_===null||_===er||_===ms?F=n.DEPTH24_STENCIL8:_===ui?F=n.DEPTH32F_STENCIL8:_===ps&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===er||_===ms?F=n.DEPTH_COMPONENT24:_===ui?F=n.DEPTH_COMPONENT32F:_===ps&&(F=n.DEPTH_COMPONENT16),F}function A(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Hn&&E.minFilter!==On?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function y(E){const _=E.target;_.removeEventListener("dispose",y),C(_),_.isVideoTexture&&c.delete(_)}function w(E){const _=E.target;_.removeEventListener("dispose",w),S(_)}function C(E){const _=i.get(E);if(_.__webglInit===void 0)return;const F=E.source,N=h.get(F);if(N){const V=N[_.__cacheKey];V.usedTimes--,V.usedTimes===0&&D(E),Object.keys(N).length===0&&h.delete(F)}i.remove(E)}function D(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const F=E.source,N=h.get(F);delete N[_.__cacheKey],o.memory.textures--}function S(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(_.__webglFramebuffer[N]))for(let V=0;V<_.__webglFramebuffer[N].length;V++)n.deleteFramebuffer(_.__webglFramebuffer[N][V]);else n.deleteFramebuffer(_.__webglFramebuffer[N]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[N])}else{if(Array.isArray(_.__webglFramebuffer))for(let N=0;N<_.__webglFramebuffer.length;N++)n.deleteFramebuffer(_.__webglFramebuffer[N]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let N=0;N<_.__webglColorRenderbuffer.length;N++)_.__webglColorRenderbuffer[N]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[N]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=E.textures;for(let N=0,V=F.length;N<V;N++){const I=i.get(F[N]);I.__webglTexture&&(n.deleteTexture(I.__webglTexture),o.memory.textures--),i.remove(F[N])}i.remove(E)}let R=0;function H(){R=0}function L(){const E=R;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function O(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function q(E,_){const F=i.get(E);if(E.isVideoTexture&&Ft(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const N=E.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(F,E,_);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function z(E,_){const F=i.get(E);if(E.version>0&&F.__version!==E.version){lt(F,E,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function W(E,_){const F=i.get(E);if(E.version>0&&F.__version!==E.version){lt(F,E,_);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function U(E,_){const F=i.get(E);if(E.version>0&&F.__version!==E.version){at(F,E,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const Y={[Ou]:n.REPEAT,[Ji]:n.CLAMP_TO_EDGE,[zu]:n.MIRRORED_REPEAT},Q={[Hn]:n.NEAREST,[Um]:n.NEAREST_MIPMAP_NEAREST,[ho]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[ka]:n.LINEAR_MIPMAP_NEAREST,[Qi]:n.LINEAR_MIPMAP_LINEAR},ot={[Hm]:n.NEVER,[Ym]:n.ALWAYS,[km]:n.LESS,[Lh]:n.LEQUAL,[Gm]:n.EQUAL,[qm]:n.GEQUAL,[Wm]:n.GREATER,[Xm]:n.NOTEQUAL};function mt(E,_){if(_.type===ui&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===On||_.magFilter===ka||_.magFilter===ho||_.magFilter===Qi||_.minFilter===On||_.minFilter===ka||_.minFilter===ho||_.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Y[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Y[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Y[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Q[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Q[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ot[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Hn||_.minFilter!==ho&&_.minFilter!==Qi||_.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function xt(E,_){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",y));const N=_.source;let V=h.get(N);V===void 0&&(V={},h.set(N,V));const I=O(_);if(I!==E.__cacheKey){V[I]===void 0&&(V[I]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),V[I].usedTimes++;const et=V[E.__cacheKey];et!==void 0&&(V[E.__cacheKey].usedTimes--,et.usedTimes===0&&D(_)),E.__cacheKey=I,E.__webglTexture=V[I].texture}return F}function J(E,_,F){return Math.floor(Math.floor(E/F)/_)}function nt(E,_,F,N){const I=E.updateRanges;if(I.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,N,_.data);else{I.sort((it,ht)=>it.start-ht.start);let et=0;for(let it=1;it<I.length;it++){const ht=I[et],St=I[it],Tt=ht.start+ht.count,pt=J(St.start,_.width,4),Lt=J(ht.start,_.width,4);St.start<=Tt+1&&pt===Lt&&J(St.start+St.count-1,_.width,4)===pt?ht.count=Math.max(ht.count,St.start+St.count-ht.start):(++et,I[et]=St)}I.length=et+1;const Z=n.getParameter(n.UNPACK_ROW_LENGTH),tt=n.getParameter(n.UNPACK_SKIP_PIXELS),K=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let it=0,ht=I.length;it<ht;it++){const St=I[it],Tt=Math.floor(St.start/4),pt=Math.ceil(St.count/4),Lt=Tt%_.width,B=Math.floor(Tt/_.width),Et=pt,ct=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Lt),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),e.texSubImage2D(n.TEXTURE_2D,0,Lt,B,Et,ct,F,N,_.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Z),n.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),n.pixelStorei(n.UNPACK_SKIP_ROWS,K)}}function lt(E,_,F){let N=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(N=n.TEXTURE_3D);const V=xt(E,_),I=_.source;e.bindTexture(N,E.__webglTexture,n.TEXTURE0+F);const et=i.get(I);if(I.version!==et.__version||V===!0){e.activeTexture(n.TEXTURE0+F);const Z=ae.getPrimaries(ae.workingColorSpace),tt=_.colorSpace===bi?null:ae.getPrimaries(_.colorSpace),K=_.colorSpace===bi||Z===tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let it=p(_.image,!1,r.maxTextureSize);it=Yt(_,it);const ht=s.convert(_.format,_.colorSpace),St=s.convert(_.type);let Tt=x(_.internalFormat,ht,St,_.colorSpace,_.isVideoTexture);mt(N,_);let pt;const Lt=_.mipmaps,B=_.isVideoTexture!==!0,Et=et.__version===void 0||V===!0,ct=I.dataReady,Ct=A(_,it);if(_.isDepthTexture)Tt=M(_.format===_s,_.type),Et&&(B?e.texStorage2D(n.TEXTURE_2D,1,Tt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Tt,it.width,it.height,0,ht,St,null));else if(_.isDataTexture)if(Lt.length>0){B&&Et&&e.texStorage2D(n.TEXTURE_2D,Ct,Tt,Lt[0].width,Lt[0].height);for(let ft=0,st=Lt.length;ft<st;ft++)pt=Lt[ft],B?ct&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,pt.width,pt.height,ht,St,pt.data):e.texImage2D(n.TEXTURE_2D,ft,Tt,pt.width,pt.height,0,ht,St,pt.data);_.generateMipmaps=!1}else B?(Et&&e.texStorage2D(n.TEXTURE_2D,Ct,Tt,it.width,it.height),ct&&nt(_,it,ht,St)):e.texImage2D(n.TEXTURE_2D,0,Tt,it.width,it.height,0,ht,St,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){B&&Et&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Tt,Lt[0].width,Lt[0].height,it.depth);for(let ft=0,st=Lt.length;ft<st;ft++)if(pt=Lt[ft],_.format!==zn)if(ht!==null)if(B){if(ct)if(_.layerUpdates.size>0){const Pt=tf(pt.width,pt.height,_.format,_.type);for(const Zt of _.layerUpdates){const Ee=pt.data.subarray(Zt*Pt/pt.data.BYTES_PER_ELEMENT,(Zt+1)*Pt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,Zt,pt.width,pt.height,1,ht,Ee)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,pt.width,pt.height,it.depth,ht,pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ft,Tt,pt.width,pt.height,it.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ct&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,pt.width,pt.height,it.depth,ht,St,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ft,Tt,pt.width,pt.height,it.depth,0,ht,St,pt.data)}else{B&&Et&&e.texStorage2D(n.TEXTURE_2D,Ct,Tt,Lt[0].width,Lt[0].height);for(let ft=0,st=Lt.length;ft<st;ft++)pt=Lt[ft],_.format!==zn?ht!==null?B?ct&&e.compressedTexSubImage2D(n.TEXTURE_2D,ft,0,0,pt.width,pt.height,ht,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,ft,Tt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ct&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,pt.width,pt.height,ht,St,pt.data):e.texImage2D(n.TEXTURE_2D,ft,Tt,pt.width,pt.height,0,ht,St,pt.data)}else if(_.isDataArrayTexture)if(B){if(Et&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Tt,it.width,it.height,it.depth),ct)if(_.layerUpdates.size>0){const ft=tf(it.width,it.height,_.format,_.type);for(const st of _.layerUpdates){const Pt=it.data.subarray(st*ft/it.data.BYTES_PER_ELEMENT,(st+1)*ft/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,st,it.width,it.height,1,ht,St,Pt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ht,St,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,it.width,it.height,it.depth,0,ht,St,it.data);else if(_.isData3DTexture)B?(Et&&e.texStorage3D(n.TEXTURE_3D,Ct,Tt,it.width,it.height,it.depth),ct&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ht,St,it.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,it.width,it.height,it.depth,0,ht,St,it.data);else if(_.isFramebufferTexture){if(Et)if(B)e.texStorage2D(n.TEXTURE_2D,Ct,Tt,it.width,it.height);else{let ft=it.width,st=it.height;for(let Pt=0;Pt<Ct;Pt++)e.texImage2D(n.TEXTURE_2D,Pt,Tt,ft,st,0,ht,St,null),ft>>=1,st>>=1}}else if(Lt.length>0){if(B&&Et){const ft=ye(Lt[0]);e.texStorage2D(n.TEXTURE_2D,Ct,Tt,ft.width,ft.height)}for(let ft=0,st=Lt.length;ft<st;ft++)pt=Lt[ft],B?ct&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,ht,St,pt):e.texImage2D(n.TEXTURE_2D,ft,Tt,ht,St,pt);_.generateMipmaps=!1}else if(B){if(Et){const ft=ye(it);e.texStorage2D(n.TEXTURE_2D,Ct,Tt,ft.width,ft.height)}ct&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht,St,it)}else e.texImage2D(n.TEXTURE_2D,0,Tt,ht,St,it);m(_)&&d(N),et.__version=I.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function at(E,_,F){if(_.image.length!==6)return;const N=xt(E,_),V=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);const I=i.get(V);if(V.version!==I.__version||N===!0){e.activeTexture(n.TEXTURE0+F);const et=ae.getPrimaries(ae.workingColorSpace),Z=_.colorSpace===bi?null:ae.getPrimaries(_.colorSpace),tt=_.colorSpace===bi||et===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const K=_.isCompressedTexture||_.image[0].isCompressedTexture,it=_.image[0]&&_.image[0].isDataTexture,ht=[];for(let st=0;st<6;st++)!K&&!it?ht[st]=p(_.image[st],!0,r.maxCubemapSize):ht[st]=it?_.image[st].image:_.image[st],ht[st]=Yt(_,ht[st]);const St=ht[0],Tt=s.convert(_.format,_.colorSpace),pt=s.convert(_.type),Lt=x(_.internalFormat,Tt,pt,_.colorSpace),B=_.isVideoTexture!==!0,Et=I.__version===void 0||N===!0,ct=V.dataReady;let Ct=A(_,St);mt(n.TEXTURE_CUBE_MAP,_);let ft;if(K){B&&Et&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Lt,St.width,St.height);for(let st=0;st<6;st++){ft=ht[st].mipmaps;for(let Pt=0;Pt<ft.length;Pt++){const Zt=ft[Pt];_.format!==zn?Tt!==null?B?ct&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,0,0,Zt.width,Zt.height,Tt,Zt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,Lt,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,0,0,Zt.width,Zt.height,Tt,pt,Zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,Lt,Zt.width,Zt.height,0,Tt,pt,Zt.data)}}}else{if(ft=_.mipmaps,B&&Et){ft.length>0&&Ct++;const st=ye(ht[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Lt,st.width,st.height)}for(let st=0;st<6;st++)if(it){B?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ht[st].width,ht[st].height,Tt,pt,ht[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Lt,ht[st].width,ht[st].height,0,Tt,pt,ht[st].data);for(let Pt=0;Pt<ft.length;Pt++){const Ee=ft[Pt].image[st].image;B?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,0,0,Ee.width,Ee.height,Tt,pt,Ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,Lt,Ee.width,Ee.height,0,Tt,pt,Ee.data)}}else{B?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Tt,pt,ht[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Lt,Tt,pt,ht[st]);for(let Pt=0;Pt<ft.length;Pt++){const Zt=ft[Pt];B?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,0,0,Tt,pt,Zt.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,Lt,Tt,pt,Zt.image[st])}}}m(_)&&d(n.TEXTURE_CUBE_MAP),I.__version=V.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function _t(E,_,F,N,V,I){const et=s.convert(F.format,F.colorSpace),Z=s.convert(F.type),tt=x(F.internalFormat,et,Z,F.colorSpace),K=i.get(_),it=i.get(F);if(it.__renderTarget=_,!K.__hasExternalTextures){const ht=Math.max(1,_.width>>I),St=Math.max(1,_.height>>I);V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?e.texImage3D(V,I,tt,ht,St,_.depth,0,et,Z,null):e.texImage2D(V,I,tt,ht,St,0,et,Z,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),Ht(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,V,it.__webglTexture,0,gt(_)):(V===n.TEXTURE_2D||V>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,V,it.__webglTexture,I),e.bindFramebuffer(n.FRAMEBUFFER,null)}function At(E,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const N=_.depthTexture,V=N&&N.isDepthTexture?N.type:null,I=M(_.stencilBuffer,V),et=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=gt(_);Ht(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,I,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,I,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,I,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,E)}else{const N=_.textures;for(let V=0;V<N.length;V++){const I=N[V],et=s.convert(I.format,I.colorSpace),Z=s.convert(I.type),tt=x(I.internalFormat,et,Z,I.colorSpace),K=gt(_);F&&Ht(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,tt,_.width,_.height):Ht(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,tt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,tt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function vt(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const N=i.get(_.depthTexture);N.__renderTarget=_,(!N.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const V=N.__webglTexture,I=gt(_);if(_.depthTexture.format===gs)Ht(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,I):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(_.depthTexture.format===_s)Ht(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,I):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function Kt(E){const _=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const N=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),N){const V=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,N.removeEventListener("dispose",V)};N.addEventListener("dispose",V),_.__depthDisposeCallback=V}_.__boundDepthTexture=N}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const N=E.texture.mipmaps;N&&N.length>0?vt(_.__webglFramebuffer[0],E):vt(_.__webglFramebuffer,E)}else if(F){_.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[N]),_.__webglDepthbuffer[N]===void 0)_.__webglDepthbuffer[N]=n.createRenderbuffer(),At(_.__webglDepthbuffer[N],E,!1);else{const V=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,I=_.__webglDepthbuffer[N];n.bindRenderbuffer(n.RENDERBUFFER,I),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,I)}}else{const N=E.texture.mipmaps;if(N&&N.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),At(_.__webglDepthbuffer,E,!1);else{const V=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,I=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,I),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,I)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(E,_,F){const N=i.get(E);_!==void 0&&_t(N.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Kt(E)}function It(E){const _=E.texture,F=i.get(E),N=i.get(_);E.addEventListener("dispose",w);const V=E.textures,I=E.isWebGLCubeRenderTarget===!0,et=V.length>1;if(et||(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=_.version,o.memory.textures++),I){F.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[Z]=[];for(let tt=0;tt<_.mipmaps.length;tt++)F.__webglFramebuffer[Z][tt]=n.createFramebuffer()}else F.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)F.__webglFramebuffer[Z]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(et)for(let Z=0,tt=V.length;Z<tt;Z++){const K=i.get(V[Z]);K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&Ht(E)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Z=0;Z<V.length;Z++){const tt=V[Z];F.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[Z]);const K=s.convert(tt.format,tt.colorSpace),it=s.convert(tt.type),ht=x(tt.internalFormat,K,it,tt.colorSpace,E.isXRRenderTarget===!0),St=gt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,St,ht,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,F.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),At(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(I){e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),mt(n.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)_t(F.__webglFramebuffer[Z][tt],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,tt);else _t(F.__webglFramebuffer[Z],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(_)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){for(let Z=0,tt=V.length;Z<tt;Z++){const K=V[Z],it=i.get(K);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),mt(n.TEXTURE_2D,K),_t(F.__webglFramebuffer,E,K,n.COLOR_ATTACHMENT0+Z,n.TEXTURE_2D,0),m(K)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Z=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Z,N.__webglTexture),mt(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)_t(F.__webglFramebuffer[tt],E,_,n.COLOR_ATTACHMENT0,Z,tt);else _t(F.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,Z,0);m(_)&&d(Z),e.unbindTexture()}E.depthBuffer&&Kt(E)}function P(E){const _=E.textures;for(let F=0,N=_.length;F<N;F++){const V=_[F];if(m(V)){const I=b(E),et=i.get(V).__webglTexture;e.bindTexture(I,et),d(I),e.unbindTexture()}}}const de=[],jt=[];function ee(E){if(E.samples>0){if(Ht(E)===!1){const _=E.textures,F=E.width,N=E.height;let V=n.COLOR_BUFFER_BIT;const I=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=i.get(E),Z=_.length>1;if(Z)for(let K=0;K<_.length;K++)e.bindFramebuffer(n.FRAMEBUFFER,et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer);const tt=E.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,et.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let K=0;K<_.length;K++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(V|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(V|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,et.__webglColorRenderbuffer[K]);const it=i.get(_[K]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,F,N,0,0,F,N,V,n.NEAREST),u===!0&&(de.length=0,jt.length=0,de.push(n.COLOR_ATTACHMENT0+K),E.depthBuffer&&E.resolveDepthBuffer===!1&&(de.push(I),jt.push(I),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,jt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let K=0;K<_.length;K++){e.bindFramebuffer(n.FRAMEBUFFER,et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,et.__webglColorRenderbuffer[K]);const it=i.get(_[K]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.TEXTURE_2D,it,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&u){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function gt(E){return Math.min(r.maxSamples,E.samples)}function Ht(E){const _=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ft(E){const _=o.render.frame;c.get(E)!==_&&(c.set(E,_),E.update())}function Yt(E,_){const F=E.colorSpace,N=E.format,V=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Yr&&F!==bi&&(ae.getTransfer(F)===ge?(N!==zn||V!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function ye(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=H,this.setTexture2D=q,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=U,this.rebindTextures=kt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Ht}function dx(n,t){function e(i,r=bi){let s;const o=ae.getTransfer(r);if(i===di)return n.UNSIGNED_BYTE;if(i===Ic)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ch)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wh)return n.BYTE;if(i===Th)return n.SHORT;if(i===ps)return n.UNSIGNED_SHORT;if(i===Nc)return n.INT;if(i===er)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===$s)return n.HALF_FLOAT;if(i===Rh)return n.ALPHA;if(i===Fh)return n.RGB;if(i===zn)return n.RGBA;if(i===gs)return n.DEPTH_COMPONENT;if(i===_s)return n.DEPTH_STENCIL;if(i===Ph)return n.RED;if(i===Uc)return n.RED_INTEGER;if(i===Nh)return n.RG;if(i===Bc)return n.RG_INTEGER;if(i===Oc)return n.RGBA_INTEGER;if(i===Wo||i===Xo||i===qo||i===Yo)if(o===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vu||i===Hu||i===ku||i===Gu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ku)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wu||i===Xu||i===qu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wu||i===Xu)return o===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yu||i===Zu||i===ju||i===Ku||i===$u||i===Ju||i===Qu||i===tc||i===ec||i===nc||i===ic||i===rc||i===sc||i===oc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ju)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ku)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$u)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ju)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qu)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ec)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ic)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zo||i===ac||i===uc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Zo)return o===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ac)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ih||i===cc||i===lc||i===fc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Je,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Li({vertexShader:px,fragmentShader:mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vn(new Da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _x extends rr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",u=1,l=null,c=null,f=null,h=null,g=null,v=null;const p=new gx,m=e.getContextAttributes();let d=null,b=null;const x=[],M=[],A=new Wt;let y=null;const w=new An;w.viewport=new Re;const C=new An;C.viewport=new Re;const D=[w,C],S=new B0;let R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=x[J];return nt===void 0&&(nt=new lu,x[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=x[J];return nt===void 0&&(nt=new lu,x[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=x[J];return nt===void 0&&(nt=new lu,x[J]=nt),nt.getHandSpace()};function L(J){const nt=M.indexOf(J.inputSource);if(nt===-1)return;const lt=x[nt];lt!==void 0&&(lt.update(J.inputSource,J.frame,l||o),lt.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",q);for(let J=0;J<x.length;J++){const nt=M[J];nt!==null&&(M[J]=null,x[J].disconnect(nt))}R=null,H=null,p.reset(),t.setRenderTarget(d),g=null,h=null,f=null,r=null,b=null,xt.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",O),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,at=null,_t=null;m.depth&&(_t=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=m.stencil?_s:gs,at=m.stencil?ms:er);const At={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(At),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new ir(h.textureWidth,h.textureHeight,{format:zn,type:di,depthTexture:new jh(h.textureWidth,h.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,lt),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new ir(g.framebufferWidth,g.framebufferHeight,{format:zn,type:di,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(u),l=null,o=await r.requestReferenceSpace(a),xt.setContext(r),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function q(J){for(let nt=0;nt<J.removed.length;nt++){const lt=J.removed[nt],at=M.indexOf(lt);at>=0&&(M[at]=null,x[at].disconnect(lt))}for(let nt=0;nt<J.added.length;nt++){const lt=J.added[nt];let at=M.indexOf(lt);if(at===-1){for(let At=0;At<x.length;At++)if(At>=M.length){M.push(lt),at=At;break}else if(M[At]===null){M[At]=lt,at=At;break}if(at===-1)break}const _t=x[at];_t&&_t.connect(lt)}}const z=new j,W=new j;function U(J,nt,lt){z.setFromMatrixPosition(nt.matrixWorld),W.setFromMatrixPosition(lt.matrixWorld);const at=z.distanceTo(W),_t=nt.projectionMatrix.elements,At=lt.projectionMatrix.elements,vt=_t[14]/(_t[10]-1),Kt=_t[14]/(_t[10]+1),kt=(_t[9]+1)/_t[5],It=(_t[9]-1)/_t[5],P=(_t[8]-1)/_t[0],de=(At[8]+1)/At[0],jt=vt*P,ee=vt*de,gt=at/(-P+de),Ht=gt*-P;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ht),J.translateZ(gt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),_t[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Ft=vt+gt,Yt=Kt+gt,ye=jt-Ht,E=ee+(at-Ht),_=kt*Kt/Yt*Ft,F=It*Kt/Yt*Ft;J.projectionMatrix.makePerspective(ye,E,_,F,Ft,Yt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Y(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let nt=J.near,lt=J.far;p.texture!==null&&(p.depthNear>0&&(nt=p.depthNear),p.depthFar>0&&(lt=p.depthFar)),S.near=C.near=w.near=nt,S.far=C.far=w.far=lt,(R!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,H=S.far),w.layers.mask=J.layers.mask|2,C.layers.mask=J.layers.mask|4,S.layers.mask=w.layers.mask|C.layers.mask;const at=J.parent,_t=S.cameras;Y(S,at);for(let At=0;At<_t.length;At++)Y(_t[At],at);_t.length===2?U(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),Q(J,S,at)};function Q(J,nt,lt){lt===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(lt.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=dc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&g===null))return u},this.setFoveation=function(J){u=J,h!==null&&(h.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(S)};let ot=null;function mt(J,nt){if(c=nt.getViewerPose(l||o),v=nt,c!==null){const lt=c.views;g!==null&&(t.setRenderTargetFramebuffer(b,g.framebuffer),t.setRenderTarget(b));let at=!1;lt.length!==S.cameras.length&&(S.cameras.length=0,at=!0);for(let vt=0;vt<lt.length;vt++){const Kt=lt[vt];let kt=null;if(g!==null)kt=g.getViewport(Kt);else{const P=f.getViewSubImage(h,Kt);kt=P.viewport,vt===0&&(t.setRenderTargetTextures(b,P.colorTexture,P.depthStencilTexture),t.setRenderTarget(b))}let It=D[vt];It===void 0&&(It=new An,It.layers.enable(vt),It.viewport=new Re,D[vt]=It),It.matrix.fromArray(Kt.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(Kt.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(kt.x,kt.y,kt.width,kt.height),vt===0&&(S.matrix.copy(It.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),at===!0&&S.cameras.push(It)}const _t=r.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const vt=f.getDepthInformation(lt[0]);vt&&vt.isValid&&vt.texture&&p.init(t,vt,r.renderState)}}for(let lt=0;lt<x.length;lt++){const at=M[lt],_t=x[lt];at!==null&&_t!==void 0&&_t.update(at,nt,l||o)}ot&&ot(J,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),v=null}const xt=new Kh;xt.setAnimationLoop(mt),this.setAnimationLoop=function(J){ot=J},this.dispose=function(){}}}const qi=new pi,vx=new Pe;function Ex(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Gh(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,b,x,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&g(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),p(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?u(m,d,b,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===an&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===an&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=t.get(d),x=b.envMap,M=b.envMapRotation;x&&(m.envMap.value=x,qi.copy(M),qi.x*=-1,qi.y*=-1,qi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),m.envMapRotation.value.setFromMatrix4(vx.makeRotationFromEuler(qi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function u(m,d,b,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=x*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===an&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function p(m,d){const b=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xx(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(b,x){const M=x.program;i.uniformBlockBinding(b,M)}function l(b,x){let M=r[b.id];M===void 0&&(v(b),M=c(b),r[b.id]=M,b.addEventListener("dispose",m));const A=x.program;i.updateUBOMapping(b,A);const y=t.render.frame;s[b.id]!==y&&(h(b),s[b.id]=y)}function c(b){const x=f();b.__bindingPointIndex=x;const M=n.createBuffer(),A=b.__size,y=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,A,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,M),M}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const x=r[b.id],M=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let y=0,w=M.length;y<w;y++){const C=Array.isArray(M[y])?M[y]:[M[y]];for(let D=0,S=C.length;D<S;D++){const R=C[D];if(g(R,y,D,A)===!0){const H=R.__offset,L=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let q=0;q<L.length;q++){const z=L[q],W=p(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,H+O,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,O),O+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(b,x,M,A){const y=b.value,w=x+"_"+M;if(A[w]===void 0)return typeof y=="number"||typeof y=="boolean"?A[w]=y:A[w]=y.clone(),!0;{const C=A[w];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return A[w]=y,!0}else if(C.equals(y)===!1)return C.copy(y),!0}return!1}function v(b){const x=b.uniforms;let M=0;const A=16;for(let w=0,C=x.length;w<C;w++){const D=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,R=D.length;S<R;S++){const H=D[S],L=Array.isArray(H.value)?H.value:[H.value];for(let O=0,q=L.length;O<q;O++){const z=L[O],W=p(z),U=M%A,Y=U%W.boundary,Q=U+Y;M+=Y,Q!==0&&A-Q<W.storage&&(M+=A-Q),H.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=W.storage}}}const y=M%A;return y>0&&(M+=A-y),b.__size=M,b.__cache={},this}function p(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:u,update:l,dispose:d}}class yx{constructor(t={}){const{canvas:e=Km(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=new Uint32Array(4),p=new Int32Array(4);let m=null,d=null;const b=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let A=!1;this._outputColorSpace=gn;let y=0,w=0,C=null,D=-1,S=null;const R=new Re,H=new Re;let L=null;const O=new fe(0);let q=0,z=e.width,W=e.height,U=1,Y=null,Q=null;const ot=new Re(0,0,z,W),mt=new Re(0,0,z,W);let xt=!1;const J=new Zh;let nt=!1,lt=!1;const at=new Pe,_t=new Pe,At=new j,vt=new Re,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function It(){return C===null?U:1}let P=i;function de(T,G){return e.getContext(T,G)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pc}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",st,!1),P===null){const G="webgl2";if(P=de(G,T),P===null)throw de(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let jt,ee,gt,Ht,Ft,Yt,ye,E,_,F,N,V,I,et,Z,tt,K,it,ht,St,Tt,pt,Lt,B;function Et(){jt=new Fv(P),jt.init(),pt=new dx(P,jt),ee=new Sv(P,jt,t,pt),gt=new fx(P,jt),ee.reverseDepthBuffer&&h&&gt.buffers.depth.setReversed(!0),Ht=new Iv(P),Ft=new JE,Yt=new hx(P,jt,gt,Ft,ee,pt,Ht),ye=new bv(M),E=new Rv(M),_=new V0(P),Lt=new Mv(P,_),F=new Pv(P,_,Ht,Lt),N=new Uv(P,F,_,Ht),ht=new Lv(P,ee,Yt),tt=new Av(Ft),V=new $E(M,ye,E,jt,ee,Lt,tt),I=new Ex(M,Ft),et=new tx,Z=new ox(jt),it=new yv(M,ye,E,gt,N,g,u),K=new cx(M,N,ee),B=new xx(P,Ht,ee,gt),St=new Dv(P,jt,Ht),Tt=new Nv(P,jt,Ht),Ht.programs=V.programs,M.capabilities=ee,M.extensions=jt,M.properties=Ft,M.renderLists=et,M.shadowMap=K,M.state=gt,M.info=Ht}Et();const ct=new _x(M,P);this.xr=ct,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=jt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=jt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(z,W,!1))},this.getSize=function(T){return T.set(z,W)},this.setSize=function(T,G,$=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,W=G,e.width=Math.floor(T*U),e.height=Math.floor(G*U),$===!0&&(e.style.width=T+"px",e.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(z*U,W*U).floor()},this.setDrawingBufferSize=function(T,G,$){z=T,W=G,U=$,e.width=Math.floor(T*$),e.height=Math.floor(G*$),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(ot)},this.setViewport=function(T,G,$,X){T.isVector4?ot.set(T.x,T.y,T.z,T.w):ot.set(T,G,$,X),gt.viewport(R.copy(ot).multiplyScalar(U).round())},this.getScissor=function(T){return T.copy(mt)},this.setScissor=function(T,G,$,X){T.isVector4?mt.set(T.x,T.y,T.z,T.w):mt.set(T,G,$,X),gt.scissor(H.copy(mt).multiplyScalar(U).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(T){gt.setScissorTest(xt=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){Q=T},this.getClearColor=function(T){return T.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,$=!0){let X=0;if(T){let k=!1;if(C!==null){const dt=C.texture.format;k=dt===Oc||dt===Bc||dt===Uc}if(k){const dt=C.texture.type,yt=dt===di||dt===er||dt===ps||dt===ms||dt===Ic||dt===Lc,bt=it.getClearColor(),wt=it.getClearAlpha(),Gt=bt.r,Xt=bt.g,Ot=bt.b;yt?(v[0]=Gt,v[1]=Xt,v[2]=Ot,v[3]=wt,P.clearBufferuiv(P.COLOR,0,v)):(p[0]=Gt,p[1]=Xt,p[2]=Ot,p[3]=wt,P.clearBufferiv(P.COLOR,0,p))}else X|=P.COLOR_BUFFER_BIT}G&&(X|=P.DEPTH_BUFFER_BIT),$&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",st,!1),it.dispose(),et.dispose(),Z.dispose(),Ft.dispose(),ye.dispose(),E.dispose(),N.dispose(),Lt.dispose(),B.dispose(),V.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",ro),ct.removeEventListener("sessionend",so),$n.stop()};function Ct(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=Ht.autoReset,G=K.enabled,$=K.autoUpdate,X=K.needsUpdate,k=K.type;Et(),Ht.autoReset=T,K.enabled=G,K.autoUpdate=$,K.needsUpdate=X,K.type=k}function st(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pt(T){const G=T.target;G.removeEventListener("dispose",Pt),Zt(G)}function Zt(T){Ee(T),Ft.remove(T)}function Ee(T){const G=Ft.get(T).programs;G!==void 0&&(G.forEach(function($){V.releaseProgram($)}),T.isShaderMaterial&&V.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,$,X,k,dt){G===null&&(G=Kt);const yt=k.isMesh&&k.matrixWorld.determinant()<0,bt=Fa(T,G,$,X,k);gt.setMaterial(X,yt);let wt=$.index,Gt=1;if(X.wireframe===!0){if(wt=F.getWireframeAttribute($),wt===void 0)return;Gt=2}const Xt=$.drawRange,Ot=$.attributes.position;let ie=Xt.start*Gt,me=(Xt.start+Xt.count)*Gt;dt!==null&&(ie=Math.max(ie,dt.start*Gt),me=Math.min(me,(dt.start+dt.count)*Gt)),wt!==null?(ie=Math.max(ie,0),me=Math.min(me,wt.count)):Ot!=null&&(ie=Math.max(ie,0),me=Math.min(me,Ot.count));const be=me-ie;if(be<0||be===1/0)return;Lt.setup(k,X,bt,$,wt);let we,oe=St;if(wt!==null&&(we=_.get(wt),oe=Tt,oe.setIndex(we)),k.isMesh)X.wireframe===!0?(gt.setLineWidth(X.wireframeLinewidth*It()),oe.setMode(P.LINES)):oe.setMode(P.TRIANGLES);else if(k.isLine){let zt=X.linewidth;zt===void 0&&(zt=1),gt.setLineWidth(zt*It()),k.isLineSegments?oe.setMode(P.LINES):k.isLineLoop?oe.setMode(P.LINE_LOOP):oe.setMode(P.LINE_STRIP)}else k.isPoints?oe.setMode(P.POINTS):k.isSprite&&oe.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Or("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))oe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const zt=k._multiDrawStarts,Xe=k._multiDrawCounts,pe=k._multiDrawCount,Cn=wt?_.get(wt).bytesPerElement:1,ur=Ft.get(X).currentProgram.getUniforms();for(let hn=0;hn<pe;hn++)ur.setValue(P,"_gl_DrawID",hn),oe.render(zt[hn]/Cn,Xe[hn])}else if(k.isInstancedMesh)oe.renderInstances(ie,be,k.count);else if($.isInstancedBufferGeometry){const zt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Xe=Math.min($.instanceCount,zt);oe.renderInstances(ie,be,Xe)}else oe.render(ie,be)};function ue(T,G,$){T.transparent===!0&&T.side===Bn&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,ar(T,G,$),T.side=Ii,T.needsUpdate=!0,ar(T,G,$),T.side=Bn):ar(T,G,$)}this.compile=function(T,G,$=null){$===null&&($=T),d=Z.get($),d.init(G),x.push(d),$.traverseVisible(function(k){k.isLight&&k.layers.test(G.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),T!==$&&T.traverseVisible(function(k){k.isLight&&k.layers.test(G.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();const X=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const dt=k.material;if(dt)if(Array.isArray(dt))for(let yt=0;yt<dt.length;yt++){const bt=dt[yt];ue(bt,$,k),X.add(bt)}else ue(dt,$,k),X.add(dt)}),d=x.pop(),X},this.compileAsync=function(T,G,$=null){const X=this.compile(T,G,$);return new Promise(k=>{function dt(){if(X.forEach(function(yt){Ft.get(yt).currentProgram.isReady()&&X.delete(yt)}),X.size===0){k(T);return}setTimeout(dt,10)}jt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let fn=null;function Tn(T){fn&&fn(T)}function ro(){$n.stop()}function so(){$n.start()}const $n=new Kh;$n.setAnimationLoop(Tn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(T){fn=T,ct.setAnimationLoop(T),T===null?$n.stop():$n.start()},ct.addEventListener("sessionstart",ro),ct.addEventListener("sessionend",so),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(G),G=ct.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,G,C),d=Z.get(T,x.length),d.init(G),x.push(d),_t.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),J.setFromProjectionMatrix(_t),lt=this.localClippingEnabled,nt=tt.init(this.clippingPlanes,lt),m=et.get(T,b.length),m.init(),b.push(m),ct.enabled===!0&&ct.isPresenting===!0){const dt=M.xr.getDepthSensingMesh();dt!==null&&ts(dt,G,-1/0,M.sortObjects)}ts(T,G,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(Y,Q),kt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,kt&&it.addToRenderList(m,T),this.info.render.frame++,nt===!0&&tt.beginShadows();const $=d.state.shadowsArray;K.render($,T,G),nt===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,k=m.transmissive;if(d.setupLights(),G.isArrayCamera){const dt=G.cameras;if(k.length>0)for(let yt=0,bt=dt.length;yt<bt;yt++){const wt=dt[yt];ao(X,k,T,wt)}kt&&it.render(T);for(let yt=0,bt=dt.length;yt<bt;yt++){const wt=dt[yt];oo(m,T,wt,wt.viewport)}}else k.length>0&&ao(X,k,T,G),kt&&it.render(T),oo(m,T,G);C!==null&&w===0&&(Yt.updateMultisampleRenderTarget(C),Yt.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(M,T,G),Lt.resetDefaultState(),D=-1,S=null,x.pop(),x.length>0?(d=x[x.length-1],nt===!0&&tt.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function ts(T,G,$,X){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){X&&vt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(_t);const yt=N.update(T),bt=T.material;bt.visible&&m.push(T,yt,bt,$,vt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){const yt=N.update(T),bt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),vt.copy(T.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),vt.copy(yt.boundingSphere.center)),vt.applyMatrix4(T.matrixWorld).applyMatrix4(_t)),Array.isArray(bt)){const wt=yt.groups;for(let Gt=0,Xt=wt.length;Gt<Xt;Gt++){const Ot=wt[Gt],ie=bt[Ot.materialIndex];ie&&ie.visible&&m.push(T,yt,ie,$,vt.z,Ot)}}else bt.visible&&m.push(T,yt,bt,$,vt.z,null)}}const dt=T.children;for(let yt=0,bt=dt.length;yt<bt;yt++)ts(dt[yt],G,$,X)}function oo(T,G,$,X){const k=T.opaque,dt=T.transmissive,yt=T.transparent;d.setupLightsView($),nt===!0&&tt.setGlobalState(M.clippingPlanes,$),X&&gt.viewport(R.copy(X)),k.length>0&&or(k,G,$),dt.length>0&&or(dt,G,$),yt.length>0&&or(yt,G,$),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function ao(T,G,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new ir(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?$s:di,minFilter:Qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const dt=d.state.transmissionRenderTarget[X.id],yt=X.viewport||R;dt.setSize(yt.z*M.transmissionResolutionScale,yt.w*M.transmissionResolutionScale);const bt=M.getRenderTarget();M.setRenderTarget(dt),M.getClearColor(O),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),kt&&it.render($);const wt=M.toneMapping;M.toneMapping=Ci;const Gt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),nt===!0&&tt.setGlobalState(M.clippingPlanes,X),or(T,$,X),Yt.updateMultisampleRenderTarget(dt),Yt.updateRenderTargetMipmap(dt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ot=0,ie=G.length;Ot<ie;Ot++){const me=G[Ot],be=me.object,we=me.geometry,oe=me.material,zt=me.group;if(oe.side===Bn&&be.layers.test(X.layers)){const Xe=oe.side;oe.side=an,oe.needsUpdate=!0,uo(be,$,X,we,oe,zt),oe.side=Xe,oe.needsUpdate=!0,Xt=!0}}Xt===!0&&(Yt.updateMultisampleRenderTarget(dt),Yt.updateRenderTargetMipmap(dt))}M.setRenderTarget(bt),M.setClearColor(O,q),Gt!==void 0&&(X.viewport=Gt),M.toneMapping=wt}function or(T,G,$){const X=G.isScene===!0?G.overrideMaterial:null;for(let k=0,dt=T.length;k<dt;k++){const yt=T[k],bt=yt.object,wt=yt.geometry,Gt=yt.group;let Xt=yt.material;Xt.allowOverride===!0&&X!==null&&(Xt=X),bt.layers.test($.layers)&&uo(bt,G,$,wt,Xt,Gt)}}function uo(T,G,$,X,k,dt){T.onBeforeRender(M,G,$,X,k,dt),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(M,G,$,X,T,dt),k.transparent===!0&&k.side===Bn&&k.forceSinglePass===!1?(k.side=an,k.needsUpdate=!0,M.renderBufferDirect($,G,X,k,T,dt),k.side=Ii,k.needsUpdate=!0,M.renderBufferDirect($,G,X,k,T,dt),k.side=Bn):M.renderBufferDirect($,G,X,k,T,dt),T.onAfterRender(M,G,$,X,k,dt)}function ar(T,G,$){G.isScene!==!0&&(G=Kt);const X=Ft.get(T),k=d.state.lights,dt=d.state.shadowsArray,yt=k.state.version,bt=V.getParameters(T,k.state,dt,G,$),wt=V.getProgramCacheKey(bt);let Gt=X.programs;X.environment=T.isMeshStandardMaterial?G.environment:null,X.fog=G.fog,X.envMap=(T.isMeshStandardMaterial?E:ye).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Gt===void 0&&(T.addEventListener("dispose",Pt),Gt=new Map,X.programs=Gt);let Xt=Gt.get(wt);if(Xt!==void 0){if(X.currentProgram===Xt&&X.lightsStateVersion===yt)return lo(T,bt),Xt}else bt.uniforms=V.getUniforms(T),T.onBeforeCompile(bt,M),Xt=V.acquireProgram(bt,wt),Gt.set(wt,Xt),X.uniforms=bt.uniforms;const Ot=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ot.clippingPlanes=tt.uniform),lo(T,bt),X.needsLights=Na(T),X.lightsStateVersion=yt,X.needsLights&&(Ot.ambientLightColor.value=k.state.ambient,Ot.lightProbe.value=k.state.probe,Ot.directionalLights.value=k.state.directional,Ot.directionalLightShadows.value=k.state.directionalShadow,Ot.spotLights.value=k.state.spot,Ot.spotLightShadows.value=k.state.spotShadow,Ot.rectAreaLights.value=k.state.rectArea,Ot.ltc_1.value=k.state.rectAreaLTC1,Ot.ltc_2.value=k.state.rectAreaLTC2,Ot.pointLights.value=k.state.point,Ot.pointLightShadows.value=k.state.pointShadow,Ot.hemisphereLights.value=k.state.hemi,Ot.directionalShadowMap.value=k.state.directionalShadowMap,Ot.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ot.spotShadowMap.value=k.state.spotShadowMap,Ot.spotLightMatrix.value=k.state.spotLightMatrix,Ot.spotLightMap.value=k.state.spotLightMap,Ot.pointShadowMap.value=k.state.pointShadowMap,Ot.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Xt,X.uniformsList=null,Xt}function co(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=Ko.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function lo(T,G){const $=Ft.get(T);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function Fa(T,G,$,X,k){G.isScene!==!0&&(G=Kt),Yt.resetTextureUnits();const dt=G.fog,yt=X.isMeshStandardMaterial?G.environment:null,bt=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Yr,wt=(X.isMeshStandardMaterial?E:ye).get(X.envMap||yt),Gt=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xt=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ot=!!$.morphAttributes.position,ie=!!$.morphAttributes.normal,me=!!$.morphAttributes.color;let be=Ci;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(be=M.toneMapping);const we=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=we!==void 0?we.length:0,zt=Ft.get(X),Xe=d.state.lights;if(nt===!0&&(lt===!0||T!==S)){const tn=T===S&&X.id===D;tt.setState(X,T,tn)}let pe=!1;X.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Xe.state.version||zt.outputColorSpace!==bt||k.isBatchedMesh&&zt.batching===!1||!k.isBatchedMesh&&zt.batching===!0||k.isBatchedMesh&&zt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&zt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&zt.instancing===!1||!k.isInstancedMesh&&zt.instancing===!0||k.isSkinnedMesh&&zt.skinning===!1||!k.isSkinnedMesh&&zt.skinning===!0||k.isInstancedMesh&&zt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&zt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&zt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&zt.instancingMorph===!1&&k.morphTexture!==null||zt.envMap!==wt||X.fog===!0&&zt.fog!==dt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==tt.numPlanes||zt.numIntersection!==tt.numIntersection)||zt.vertexAlphas!==Gt||zt.vertexTangents!==Xt||zt.morphTargets!==Ot||zt.morphNormals!==ie||zt.morphColors!==me||zt.toneMapping!==be||zt.morphTargetsCount!==oe)&&(pe=!0):(pe=!0,zt.__version=X.version);let Cn=zt.currentProgram;pe===!0&&(Cn=ar(X,G,k));let ur=!1,hn=!1,es=!1;const De=Cn.getUniforms(),_n=zt.uniforms;if(gt.useProgram(Cn.program)&&(ur=!0,hn=!0,es=!0),X.id!==D&&(D=X.id,hn=!0),ur||S!==T){gt.buffers.depth.getReversed()?(at.copy(T.projectionMatrix),Jm(at),Qm(at),De.setValue(P,"projectionMatrix",at)):De.setValue(P,"projectionMatrix",T.projectionMatrix),De.setValue(P,"viewMatrix",T.matrixWorldInverse);const rn=De.map.cameraPosition;rn!==void 0&&rn.setValue(P,At.setFromMatrixPosition(T.matrixWorld)),ee.logarithmicDepthBuffer&&De.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&De.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,hn=!0,es=!0)}if(k.isSkinnedMesh){De.setOptional(P,k,"bindMatrix"),De.setOptional(P,k,"bindMatrixInverse");const tn=k.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),De.setValue(P,"boneTexture",tn.boneTexture,Yt))}k.isBatchedMesh&&(De.setOptional(P,k,"batchingTexture"),De.setValue(P,"batchingTexture",k._matricesTexture,Yt),De.setOptional(P,k,"batchingIdTexture"),De.setValue(P,"batchingIdTexture",k._indirectTexture,Yt),De.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&De.setValue(P,"batchingColorTexture",k._colorsTexture,Yt));const vn=$.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&ht.update(k,$,Cn),(hn||zt.receiveShadow!==k.receiveShadow)&&(zt.receiveShadow=k.receiveShadow,De.setValue(P,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(_n.envMap.value=wt,_n.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&G.environment!==null&&(_n.envMapIntensity.value=G.environmentIntensity),hn&&(De.setValue(P,"toneMappingExposure",M.toneMappingExposure),zt.needsLights&&Pa(_n,es),dt&&X.fog===!0&&I.refreshFogUniforms(_n,dt),I.refreshMaterialUniforms(_n,X,U,W,d.state.transmissionRenderTarget[T.id]),Ko.upload(P,co(zt),_n,Yt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ko.upload(P,co(zt),_n,Yt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&De.setValue(P,"center",k.center),De.setValue(P,"modelViewMatrix",k.modelViewMatrix),De.setValue(P,"normalMatrix",k.normalMatrix),De.setValue(P,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const tn=X.uniformsGroups;for(let rn=0,Ba=tn.length;rn<Ba;rn++){const zi=tn[rn];B.update(zi,Cn),B.bind(zi,Cn)}}return Cn}function Pa(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Na(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,G,$){const X=Ft.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Ft.get(T.texture).__webglTexture=G,Ft.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const $=Ft.get(T);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0};const Ia=P.createFramebuffer();this.setRenderTarget=function(T,G=0,$=0){C=T,y=G,w=$;let X=!0,k=null,dt=!1,yt=!1;if(T){const wt=Ft.get(T);if(wt.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(P.FRAMEBUFFER,null),X=!1;else if(wt.__webglFramebuffer===void 0)Yt.setupRenderTarget(T);else if(wt.__hasExternalTextures)Yt.rebindTextures(T,Ft.get(T.texture).__webglTexture,Ft.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ot=T.depthTexture;if(wt.__boundDepthTexture!==Ot){if(Ot!==null&&Ft.has(Ot)&&(T.width!==Ot.image.width||T.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(T)}}const Gt=T.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(yt=!0);const Xt=Ft.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xt[G])?k=Xt[G][$]:k=Xt[G],dt=!0):T.samples>0&&Yt.useMultisampledRTT(T)===!1?k=Ft.get(T).__webglMultisampledFramebuffer:Array.isArray(Xt)?k=Xt[$]:k=Xt,R.copy(T.viewport),H.copy(T.scissor),L=T.scissorTest}else R.copy(ot).multiplyScalar(U).floor(),H.copy(mt).multiplyScalar(U).floor(),L=xt;if($!==0&&(k=Ia),gt.bindFramebuffer(P.FRAMEBUFFER,k)&&X&&gt.drawBuffers(T,k),gt.viewport(R),gt.scissor(H),gt.setScissorTest(L),dt){const wt=Ft.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+G,wt.__webglTexture,$)}else if(yt){const wt=Ft.get(T.texture),Gt=G;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,wt.__webglTexture,$,Gt)}else if(T!==null&&$!==0){const wt=Ft.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,wt.__webglTexture,$)}D=-1},this.readRenderTargetPixels=function(T,G,$,X,k,dt,yt,bt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){gt.bindFramebuffer(P.FRAMEBUFFER,wt);try{const Gt=T.textures[bt],Xt=Gt.format,Ot=Gt.type;if(!ee.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-X&&$>=0&&$<=T.height-k&&(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+bt),P.readPixels(G,$,X,k,pt.convert(Xt),pt.convert(Ot),dt))}finally{const Gt=C!==null?Ft.get(C).__webglFramebuffer:null;gt.bindFramebuffer(P.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(T,G,$,X,k,dt,yt,bt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt)if(G>=0&&G<=T.width-X&&$>=0&&$<=T.height-k){gt.bindFramebuffer(P.FRAMEBUFFER,wt);const Gt=T.textures[bt],Xt=Gt.format,Ot=Gt.type;if(!ee.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ie),P.bufferData(P.PIXEL_PACK_BUFFER,dt.byteLength,P.STREAM_READ),T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+bt),P.readPixels(G,$,X,k,pt.convert(Xt),pt.convert(Ot),0);const me=C!==null?Ft.get(C).__webglFramebuffer:null;gt.bindFramebuffer(P.FRAMEBUFFER,me);const be=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await $m(P,be,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ie),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,dt),P.deleteBuffer(ie),P.deleteSync(be),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,$=0){const X=Math.pow(2,-$),k=Math.floor(T.image.width*X),dt=Math.floor(T.image.height*X),yt=G!==null?G.x:0,bt=G!==null?G.y:0;Yt.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,$,0,0,yt,bt,k,dt),gt.unbindTexture()};const La=P.createFramebuffer(),Ua=P.createFramebuffer();this.copyTextureToTexture=function(T,G,$=null,X=null,k=0,dt=null){dt===null&&(k!==0?(Or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),dt=k,k=0):dt=0);let yt,bt,wt,Gt,Xt,Ot,ie,me,be;const we=T.isCompressedTexture?T.mipmaps[dt]:T.image;if($!==null)yt=$.max.x-$.min.x,bt=$.max.y-$.min.y,wt=$.isBox3?$.max.z-$.min.z:1,Gt=$.min.x,Xt=$.min.y,Ot=$.isBox3?$.min.z:0;else{const vn=Math.pow(2,-k);yt=Math.floor(we.width*vn),bt=Math.floor(we.height*vn),T.isDataArrayTexture?wt=we.depth:T.isData3DTexture?wt=Math.floor(we.depth*vn):wt=1,Gt=0,Xt=0,Ot=0}X!==null?(ie=X.x,me=X.y,be=X.z):(ie=0,me=0,be=0);const oe=pt.convert(G.format),zt=pt.convert(G.type);let Xe;G.isData3DTexture?(Yt.setTexture3D(G,0),Xe=P.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Yt.setTexture2DArray(G,0),Xe=P.TEXTURE_2D_ARRAY):(Yt.setTexture2D(G,0),Xe=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,G.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,G.unpackAlignment);const pe=P.getParameter(P.UNPACK_ROW_LENGTH),Cn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ur=P.getParameter(P.UNPACK_SKIP_PIXELS),hn=P.getParameter(P.UNPACK_SKIP_ROWS),es=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,we.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,we.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Xt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ot);const De=T.isDataArrayTexture||T.isData3DTexture,_n=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const vn=Ft.get(T),tn=Ft.get(G),rn=Ft.get(vn.__renderTarget),Ba=Ft.get(tn.__renderTarget);gt.bindFramebuffer(P.READ_FRAMEBUFFER,rn.__webglFramebuffer),gt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ba.__webglFramebuffer);for(let zi=0;zi<wt;zi++)De&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ft.get(T).__webglTexture,k,Ot+zi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ft.get(G).__webglTexture,dt,be+zi)),P.blitFramebuffer(Gt,Xt,yt,bt,ie,me,yt,bt,P.DEPTH_BUFFER_BIT,P.NEAREST);gt.bindFramebuffer(P.READ_FRAMEBUFFER,null),gt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||Ft.has(T)){const vn=Ft.get(T),tn=Ft.get(G);gt.bindFramebuffer(P.READ_FRAMEBUFFER,La),gt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ua);for(let rn=0;rn<wt;rn++)De?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vn.__webglTexture,k,Ot+rn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vn.__webglTexture,k),_n?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,tn.__webglTexture,dt,be+rn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,tn.__webglTexture,dt),k!==0?P.blitFramebuffer(Gt,Xt,yt,bt,ie,me,yt,bt,P.COLOR_BUFFER_BIT,P.NEAREST):_n?P.copyTexSubImage3D(Xe,dt,ie,me,be+rn,Gt,Xt,yt,bt):P.copyTexSubImage2D(Xe,dt,ie,me,Gt,Xt,yt,bt);gt.bindFramebuffer(P.READ_FRAMEBUFFER,null),gt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else _n?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Xe,dt,ie,me,be,yt,bt,wt,oe,zt,we.data):G.isCompressedArrayTexture?P.compressedTexSubImage3D(Xe,dt,ie,me,be,yt,bt,wt,oe,we.data):P.texSubImage3D(Xe,dt,ie,me,be,yt,bt,wt,oe,zt,we):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,dt,ie,me,yt,bt,oe,zt,we.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,dt,ie,me,we.width,we.height,oe,we.data):P.texSubImage2D(P.TEXTURE_2D,dt,ie,me,yt,bt,oe,zt,we);P.pixelStorei(P.UNPACK_ROW_LENGTH,pe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Cn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ur),P.pixelStorei(P.UNPACK_SKIP_ROWS,hn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,es),dt===0&&G.generateMipmaps&&P.generateMipmap(Xe),gt.unbindTexture()},this.copyTextureToTexture3D=function(T,G,$=null,X=null,k=0){return Or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,G,$,X,k)},this.initRenderTarget=function(T){Ft.get(T).__webglFramebuffer===void 0&&Yt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Yt.setTextureCube(T,0):T.isData3DTexture?Yt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Yt.setTexture2DArray(T,0):Yt.setTexture2D(T,0),gt.unbindTexture()},this.resetState=function(){y=0,w=0,C=null,gt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}const bf={type:"change"},Gc={type:"start"},ed={type:"end"},Oo=new Oh,wf=new Si,Mx=Math.cos(70*jm.DEG2RAD),Be=new j,sn=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eu=1e-6;class Dx extends O0{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ur.ROTATE,MIDDLE:Ur.DOLLY,RIGHT:Ur.PAN},this.touches={ONE:Pr.ROTATE,TWO:Pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new nr,this._lastTargetPosition=new j,this._quat=new nr().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ql,this._sphericalDelta=new Ql,this._scale=1,this._panOffset=new j,this._rotateStart=new Wt,this._rotateEnd=new Wt,this._rotateDelta=new Wt,this._panStart=new Wt,this._panEnd=new Wt,this._panDelta=new Wt,this._dollyStart=new Wt,this._dollyEnd=new Wt,this._dollyDelta=new Wt,this._dollyDirection=new j,this._mouse=new Wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ax.bind(this),this._onPointerDown=Sx.bind(this),this._onPointerUp=bx.bind(this),this._onContextMenu=Nx.bind(this),this._onMouseWheel=Cx.bind(this),this._onKeyDown=Rx.bind(this),this._onTouchStart=Fx.bind(this),this._onTouchMove=Px.bind(this),this._onMouseDown=wx.bind(this),this._onMouseMove=Tx.bind(this),this._interceptControlDown=Ix.bind(this),this._interceptControlUp=Lx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bf),this.update(),this.state=ve.NONE}update(t=null){const e=this.object.position;Be.copy(e).sub(this.target),Be.applyQuaternion(this._quat),this._spherical.setFromVector3(Be),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=sn:i>Math.PI&&(i-=sn),r<-Math.PI?r+=sn:r>Math.PI&&(r-=sn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Be.setFromSpherical(this._spherical),Be.applyQuaternion(this._quatInverse),e.copy(this.target).add(Be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Be.length();o=this._clampDistance(a*this._scale);const u=a-o;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),s=!!u}else if(this.object.isOrthographicCamera){const a=new j(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=u!==this.object.zoom;const l=new j(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Oo.origin.copy(this.object.position),Oo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oo.direction))<Mx?this.object.lookAt(this.target):(wf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oo.intersectPlane(wf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Eu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eu||this._lastTargetPosition.distanceToSquared(this.target)>Eu?(this.dispatchEvent(bf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?sn/60*this.autoRotateSpeed*t:sn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Be.setFromMatrixColumn(e,0),Be.multiplyScalar(-t),this._panOffset.add(Be)}_panUp(t,e){this.screenSpacePanning===!0?Be.setFromMatrixColumn(e,1):(Be.setFromMatrixColumn(e,0),Be.crossVectors(this.object.up,Be)),Be.multiplyScalar(t),this._panOffset.add(Be)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Be.copy(r).sub(this.target);let s=Be.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Sx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Ax(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function bx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ed),this.state=ve.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function wx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ur.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ve.DOLLY;break;case Ur.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ve.ROTATE}break;case Ur.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(Gc)}function Tx(n){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Cx(n){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(n.preventDefault(),this.dispatchEvent(Gc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ed))}function Rx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Fx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Pr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ve.TOUCH_ROTATE;break;case Pr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case Pr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ve.TOUCH_DOLLY_PAN;break;case Pr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(Gc)}function Px(n){switch(this._trackPointer(n),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ve.NONE}}function Nx(n){this.enabled!==!1&&n.preventDefault()}function Ix(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Lx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sa(){return sa=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)({}).hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},sa.apply(null,arguments)}var nd={relTol:1e-12,absTol:1e-15,matrix:"Matrix",number:"number",numberFallback:"number",precision:64,predictable:!1,randomSeed:null};function Ux(n,t){if(oa(n,t))return n[t];throw typeof n[t]=="function"&&Ox(n,t)?new Error('Cannot access method "'+t+'" as a property'):new Error('No access to property "'+t+'"')}function Bx(n,t,e){if(oa(n,t))return n[t]=e,e;throw new Error('No access to property "'+t+'"')}function oa(n,t){return!zx(n)&&!Array.isArray(n)?!1:ua(Vx,t)?!0:!(t in Object.prototype||t in Function.prototype)}function Ox(n,t){return n==null||typeof n[t]!="function"||ua(n,t)&&Object.getPrototypeOf&&t in Object.getPrototypeOf(n)?!1:ua(Hx,t)?!0:!(t in Object.prototype||t in Function.prototype)}function zx(n){return typeof n=="object"&&n&&n.constructor===Object}var Vx={length:!0,name:!0},Hx={toString:!0,valueOf:!0,toLocaleString:!0};class kx{constructor(t){this.wrappedObject=t,this[Symbol.iterator]=this.entries}keys(){return Object.keys(this.wrappedObject).filter(t=>this.has(t)).values()}get(t){return Ux(this.wrappedObject,t)}set(t,e){return Bx(this.wrappedObject,t,e),this}has(t){return oa(this.wrappedObject,t)&&t in this.wrappedObject}entries(){return Gx(this.keys(),t=>[t,this.get(t)])}forEach(t){for(var e of this.keys())t(this.get(e),e,this)}delete(t){oa(this.wrappedObject,t)&&delete this.wrappedObject[t]}clear(){for(var t of this.keys())this.delete(t)}get size(){return Object.keys(this.wrappedObject).length}}function Gx(n,t){return{next:()=>{var e=n.next();return e.done?e:{value:t(e.value),done:!1}}}}function Me(n){return typeof n=="number"}function Le(n){return!n||typeof n!="object"||typeof n.constructor!="function"?!1:n.isBigNumber===!0&&typeof n.constructor.prototype=="object"&&n.constructor.prototype.isBigNumber===!0||typeof n.constructor.isDecimal=="function"&&n.constructor.isDecimal(n)===!0}function Wx(n){return typeof n=="bigint"}function id(n){return n&&typeof n=="object"&&Object.getPrototypeOf(n).isComplex===!0||!1}function rd(n){return n&&typeof n=="object"&&Object.getPrototypeOf(n).isFraction===!0||!1}function sd(n){return n&&n.constructor.prototype.isUnit===!0||!1}function Xn(n){return typeof n=="string"}var Oe=Array.isArray;function Fe(n){return n&&n.constructor.prototype.isMatrix===!0||!1}function aa(n){return Array.isArray(n)||Fe(n)}function Xx(n){return n&&n.isDenseMatrix&&n.constructor.prototype.isMatrix===!0||!1}function qx(n){return n&&n.isSparseMatrix&&n.constructor.prototype.isMatrix===!0||!1}function Yx(n){return n&&n.constructor.prototype.isRange===!0||!1}function Wc(n){return n&&n.constructor.prototype.isIndex===!0||!1}function Zx(n){return typeof n=="boolean"}function jx(n){return n&&n.constructor.prototype.isResultSet===!0||!1}function Kx(n){return n&&n.constructor.prototype.isHelp===!0||!1}function $x(n){return typeof n=="function"}function Jx(n){return n instanceof Date}function Qx(n){return n instanceof RegExp}function Xc(n){return!!(n&&typeof n=="object"&&n.constructor===Object&&!id(n)&&!rd(n))}function ty(n){return n?n instanceof Map||n instanceof kx||typeof n.set=="function"&&typeof n.get=="function"&&typeof n.keys=="function"&&typeof n.has=="function":!1}function ey(n){return n===null}function ny(n){return n===void 0}function iy(n){return n&&n.isAccessorNode===!0&&n.constructor.prototype.isNode===!0||!1}function ry(n){return n&&n.isArrayNode===!0&&n.constructor.prototype.isNode===!0||!1}function sy(n){return n&&n.isAssignmentNode===!0&&n.constructor.prototype.isNode===!0||!1}function oy(n){return n&&n.isBlockNode===!0&&n.constructor.prototype.isNode===!0||!1}function ay(n){return n&&n.isConditionalNode===!0&&n.constructor.prototype.isNode===!0||!1}function uy(n){return n&&n.isConstantNode===!0&&n.constructor.prototype.isNode===!0||!1}function cy(n){return n&&n.isFunctionAssignmentNode===!0&&n.constructor.prototype.isNode===!0||!1}function ly(n){return n&&n.isFunctionNode===!0&&n.constructor.prototype.isNode===!0||!1}function fy(n){return n&&n.isIndexNode===!0&&n.constructor.prototype.isNode===!0||!1}function hy(n){return n&&n.isNode===!0&&n.constructor.prototype.isNode===!0||!1}function dy(n){return n&&n.isObjectNode===!0&&n.constructor.prototype.isNode===!0||!1}function py(n){return n&&n.isOperatorNode===!0&&n.constructor.prototype.isNode===!0||!1}function my(n){return n&&n.isParenthesisNode===!0&&n.constructor.prototype.isNode===!0||!1}function gy(n){return n&&n.isRangeNode===!0&&n.constructor.prototype.isNode===!0||!1}function _y(n){return n&&n.isRelationalNode===!0&&n.constructor.prototype.isNode===!0||!1}function vy(n){return n&&n.isSymbolNode===!0&&n.constructor.prototype.isNode===!0||!1}function Ey(n){return n&&n.constructor.prototype.isChain===!0||!1}function Fi(n){var t=typeof n;return t==="object"?n===null?"null":Le(n)?"BigNumber":n.constructor&&n.constructor.name?n.constructor.name:"Object":t}function Ce(n){var t=typeof n;if(t==="number"||t==="bigint"||t==="string"||t==="boolean"||n===null||n===void 0)return n;if(typeof n.clone=="function")return n.clone();if(Array.isArray(n))return n.map(function(e){return Ce(e)});if(n instanceof Date)return new Date(n.valueOf());if(Le(n))return n;if(Xc(n))return xy(n,Ce);if(t==="function")return n;throw new TypeError("Cannot clone: unknown type of value (value: ".concat(n,")"))}function xy(n,t){var e={};for(var i in n)ua(n,i)&&(e[i]=t(n[i]));return e}function jr(n,t){var e,i,r;if(Array.isArray(n)){if(!Array.isArray(t)||n.length!==t.length)return!1;for(i=0,r=n.length;i<r;i++)if(!jr(n[i],t[i]))return!1;return!0}else{if(typeof n=="function")return n===t;if(n instanceof Object){if(Array.isArray(t)||!(t instanceof Object))return!1;for(e in n)if(!(e in t)||!jr(n[e],t[e]))return!1;for(e in t)if(!(e in n))return!1;return!0}else return n===t}}function ua(n,t){return n&&Object.hasOwnProperty.call(n,t)}function yy(n,t){for(var e={},i=0;i<t.length;i++){var r=t[i],s=n[r];s!==void 0&&(e[r]=s)}return e}var My=["Matrix","Array"],Dy=["number","BigNumber","Fraction"],eo=function(t){if(t)throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);return Object.freeze(nd)};sa(eo,nd,{MATRIX_OPTIONS:My,NUMBER_OPTIONS:Dy});function Tf(){return!0}function xn(){return!1}function Tr(){}const Cf="Argument is not a typed-function.";function od(){function n(E){return typeof E=="object"&&E!==null&&E.constructor===Object}const t=[{name:"number",test:function(E){return typeof E=="number"}},{name:"string",test:function(E){return typeof E=="string"}},{name:"boolean",test:function(E){return typeof E=="boolean"}},{name:"Function",test:function(E){return typeof E=="function"}},{name:"Array",test:Array.isArray},{name:"Date",test:function(E){return E instanceof Date}},{name:"RegExp",test:function(E){return E instanceof RegExp}},{name:"Object",test:n},{name:"null",test:function(E){return E===null}},{name:"undefined",test:function(E){return E===void 0}}],e={name:"any",test:Tf,isAny:!0};let i,r,s=0,o={createCount:0};function a(E){const _=i.get(E);if(_)return _;let F='Unknown type "'+E+'"';const N=E.toLowerCase();let V;for(V of r)if(V.toLowerCase()===N){F+='. Did you mean "'+V+'" ?';break}throw new TypeError(F)}function u(E){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"any";const F=_?a(_).index:r.length,N=[];for(let I=0;I<E.length;++I){if(!E[I]||typeof E[I].name!="string"||typeof E[I].test!="function")throw new TypeError("Object with properties {name: string, test: function} expected");const et=E[I].name;if(i.has(et))throw new TypeError('Duplicate type name "'+et+'"');N.push(et),i.set(et,{name:et,test:E[I].test,isAny:E[I].isAny,index:F+I,conversionsTo:[]})}const V=r.slice(F);r=r.slice(0,F).concat(N).concat(V);for(let I=F+N.length;I<r.length;++I)i.get(r[I]).index=I}function l(){i=new Map,r=[],s=0,u([e],!1)}l(),u(t);function c(){let E;for(E of r)i.get(E).conversionsTo=[];s=0}function f(E){const _=r.filter(F=>{const N=i.get(F);return!N.isAny&&N.test(E)});return _.length?_:["any"]}function h(E){return E&&typeof E=="function"&&"_typedFunctionData"in E}function g(E,_,F){if(!h(E))throw new TypeError(Cf);const N=F&&F.exact,V=Array.isArray(_)?_.join(","):_,I=M(V),et=m(I);if(!N||et in E.signatures){const it=E._typedFunctionData.signatureMap.get(et);if(it)return it}const Z=I.length;let tt;if(N){tt=[];let it;for(it in E.signatures)tt.push(E._typedFunctionData.signatureMap.get(it))}else tt=E._typedFunctionData.signatures;for(let it=0;it<Z;++it){const ht=I[it],St=[];let Tt;for(Tt of tt){const pt=C(Tt.params,it);if(!(!pt||ht.restParam&&!pt.restParam)){if(!pt.hasAny){const Lt=x(pt);if(ht.types.some(B=>!Lt.has(B.name)))continue}St.push(Tt)}}if(tt=St,tt.length===0)break}let K;for(K of tt)if(K.params.length<=Z)return K;throw new TypeError("Signature not found (signature: "+(E.name||"unnamed")+"("+m(I,", ")+"))")}function v(E,_,F){return g(E,_,F).implementation}function p(E,_){const F=a(_);if(F.test(E))return E;const N=F.conversionsTo;if(N.length===0)throw new Error("There are no conversions to "+_+" defined.");for(let V=0;V<N.length;V++)if(a(N[V].from).test(E))return N[V].convert(E);throw new Error("Cannot convert "+E+" to "+_)}function m(E){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:",";return E.map(F=>F.name).join(_)}function d(E){const _=E.indexOf("...")===0,N=(_?E.length>3?E.slice(3):"any":E).split("|").map(Z=>a(Z.trim()));let V=!1,I=_?"...":"";return{types:N.map(function(Z){return V=Z.isAny||V,I+=Z.name+"|",{name:Z.name,typeIndex:Z.index,test:Z.test,isAny:Z.isAny,conversion:null,conversionIndex:-1}}),name:I.slice(0,-1),hasAny:V,hasConversion:!1,restParam:_}}function b(E){const _=E.types.map(et=>et.name),F=W(_);let N=E.hasAny,V=E.name;const I=F.map(function(et){const Z=a(et.from);return N=Z.isAny||N,V+="|"+et.from,{name:et.from,typeIndex:Z.index,test:Z.test,isAny:Z.isAny,conversion:et,conversionIndex:et.index}});return{types:E.types.concat(I),name:V,hasAny:N,hasConversion:I.length>0,restParam:E.restParam}}function x(E){return E.typeSet||(E.typeSet=new Set,E.types.forEach(_=>E.typeSet.add(_.name))),E.typeSet}function M(E){const _=[];if(typeof E!="string")throw new TypeError("Signatures must be strings");const F=E.trim();if(F==="")return _;const N=F.split(",");for(let V=0;V<N.length;++V){const I=d(N[V].trim());if(I.restParam&&V!==N.length-1)throw new SyntaxError('Unexpected rest parameter "'+N[V]+'": only allowed for the last parameter');if(I.types.length===0)return null;_.push(I)}return _}function A(E){const _=At(E);return _?_.restParam:!1}function y(E){if(!E||E.types.length===0)return Tf;if(E.types.length===1)return a(E.types[0].name).test;if(E.types.length===2){const _=a(E.types[0].name).test,F=a(E.types[1].name).test;return function(V){return _(V)||F(V)}}else{const _=E.types.map(function(F){return a(F.name).test});return function(N){for(let V=0;V<_.length;V++)if(_[V](N))return!0;return!1}}}function w(E){let _,F,N;if(A(E)){_=_t(E).map(y);const V=_.length,I=y(At(E)),et=function(Z){for(let tt=V;tt<Z.length;tt++)if(!I(Z[tt]))return!1;return!0};return function(tt){for(let K=0;K<_.length;K++)if(!_[K](tt[K]))return!1;return et(tt)&&tt.length>=V+1}}else return E.length===0?function(I){return I.length===0}:E.length===1?(F=y(E[0]),function(I){return F(I[0])&&I.length===1}):E.length===2?(F=y(E[0]),N=y(E[1]),function(I){return F(I[0])&&N(I[1])&&I.length===2}):(_=E.map(y),function(I){for(let et=0;et<_.length;et++)if(!_[et](I[et]))return!1;return I.length===_.length})}function C(E,_){return _<E.length?E[_]:A(E)?At(E):null}function D(E,_){const F=C(E,_);return F?x(F):new Set}function S(E){return E.conversion===null||E.conversion===void 0}function R(E,_){const F=new Set;return E.forEach(N=>{const V=D(N.params,_);let I;for(I of V)F.add(I)}),F.has("any")?["any"]:Array.from(F)}function H(E,_,F){let N,V;const I=E||"unnamed";let et=F,Z;for(Z=0;Z<_.length;Z++){const ht=[];if(et.forEach(St=>{const Tt=C(St.params,Z),pt=y(Tt);(Z<St.params.length||A(St.params))&&pt(_[Z])&&ht.push(St)}),ht.length===0){if(V=R(et,Z),V.length>0){const St=f(_[Z]);return N=new TypeError("Unexpected type of argument in function "+I+" (expected: "+V.join(" or ")+", actual: "+St.join(" | ")+", index: "+Z+")"),N.data={category:"wrongType",fn:I,index:Z,actual:St,expected:V},N}}else et=ht}const tt=et.map(function(ht){return A(ht.params)?1/0:ht.params.length});if(_.length<Math.min.apply(null,tt))return V=R(et,Z),N=new TypeError("Too few arguments in function "+I+" (expected: "+V.join(" or ")+", index: "+_.length+")"),N.data={category:"tooFewArgs",fn:I,index:_.length,expected:V},N;const K=Math.max.apply(null,tt);if(_.length>K)return N=new TypeError("Too many arguments in function "+I+" (expected: "+K+", actual: "+_.length+")"),N.data={category:"tooManyArgs",fn:I,index:_.length,expectedLength:K},N;const it=[];for(let ht=0;ht<_.length;++ht)it.push(f(_[ht]).join("|"));return N=new TypeError('Arguments of type "'+it.join(", ")+'" do not match any of the defined signatures of function '+I+"."),N.data={category:"mismatch",actual:it},N}function L(E){let _=r.length+1;for(let F=0;F<E.types.length;F++)S(E.types[F])&&(_=Math.min(_,E.types[F].typeIndex));return _}function O(E){let _=s+1;for(let F=0;F<E.types.length;F++)S(E.types[F])||(_=Math.min(_,E.types[F].conversionIndex));return _}function q(E,_){if(E.hasAny){if(!_.hasAny)return 1}else if(_.hasAny)return-1;if(E.restParam){if(!_.restParam)return 1}else if(_.restParam)return-1;if(E.hasConversion){if(!_.hasConversion)return 1}else if(_.hasConversion)return-1;const F=L(E)-L(_);if(F<0)return-1;if(F>0)return 1;const N=O(E)-O(_);return N<0?-1:N>0?1:0}function z(E,_){const F=E.params,N=_.params,V=At(F),I=At(N),et=A(F),Z=A(N);if(et&&V.hasAny){if(!Z||!I.hasAny)return 1}else if(Z&&I.hasAny)return-1;let tt=0,K=0,it;for(it of F)it.hasAny&&++tt,it.hasConversion&&++K;let ht=0,St=0;for(it of N)it.hasAny&&++ht,it.hasConversion&&++St;if(tt!==ht)return tt-ht;if(et&&V.hasConversion){if(!Z||!I.hasConversion)return 1}else if(Z&&I.hasConversion)return-1;if(K!==St)return K-St;if(et){if(!Z)return 1}else if(Z)return-1;const Tt=(F.length-N.length)*(et?-1:1);if(Tt!==0)return Tt;const pt=[];let Lt=0;for(let Et=0;Et<F.length;++Et){const ct=q(F[Et],N[Et]);pt.push(ct),Lt+=ct}if(Lt!==0)return Lt;let B;for(B of pt)if(B!==0)return B;return 0}function W(E){if(E.length===0)return[];const _=E.map(a);E.length>1&&_.sort((V,I)=>V.index-I.index);let F=_[0].conversionsTo;if(E.length===1)return F;F=F.concat([]);const N=new Set(E);for(let V=1;V<_.length;++V){let I;for(I of _[V].conversionsTo)N.has(I.from)||(F.push(I),N.add(I.from))}return F}function U(E,_){let F=_;if(E.some(V=>V.hasConversion)){const V=A(E),I=E.map(Y);F=function(){const Z=[],tt=V?arguments.length-1:arguments.length;for(let K=0;K<tt;K++)Z[K]=I[K](arguments[K]);return V&&(Z[tt]=arguments[tt].map(I[tt])),_.apply(this,Z)}}let N=F;if(A(E)){const V=E.length-1;N=function(){return F.apply(this,vt(arguments,0,V).concat([vt(arguments,V)]))}}return N}function Y(E){let _,F,N,V;const I=[],et=[];switch(E.types.forEach(function(Z){Z.conversion&&(I.push(a(Z.conversion.from).test),et.push(Z.conversion.convert))}),et.length){case 0:return function(tt){return tt};case 1:return _=I[0],N=et[0],function(tt){return _(tt)?N(tt):tt};case 2:return _=I[0],F=I[1],N=et[0],V=et[1],function(tt){return _(tt)?N(tt):F(tt)?V(tt):tt};default:return function(tt){for(let K=0;K<et.length;K++)if(I[K](tt))return et[K](tt);return tt}}}function Q(E){function _(F,N,V){if(N<F.length){const I=F[N];let et=[];if(I.restParam){const Z=I.types.filter(S);Z.length<I.types.length&&et.push({types:Z,name:"..."+Z.map(tt=>tt.name).join("|"),hasAny:Z.some(tt=>tt.isAny),hasConversion:!1,restParam:!0}),et.push(I)}else et=I.types.map(function(Z){return{types:[Z],name:Z.name,hasAny:Z.isAny,hasConversion:Z.conversion,restParam:!1}});return kt(et,function(Z){return _(F,N+1,V.concat([Z]))})}else return[V]}return _(E,0,[])}function ot(E,_){const F=Math.max(E.length,_.length);for(let Z=0;Z<F;Z++){const tt=D(E,Z),K=D(_,Z);let it=!1,ht;for(ht of K)if(tt.has(ht)){it=!0;break}if(!it)return!1}const N=E.length,V=_.length,I=A(E),et=A(_);return I?et?N===V:V>=N:et?N>=V:N===V}function mt(E){return E.map(_=>ee(_)?de(_.referToSelf.callback):jt(_)?P(_.referTo.references,_.referTo.callback):_)}function xt(E,_,F){const N=[];let V;for(V of E){let I=F[V];if(typeof I!="number")throw new TypeError('No definition for referenced signature "'+V+'"');if(I=_[I],typeof I!="function")return!1;N.push(I)}return N}function J(E,_,F){const N=mt(E),V=new Array(N.length).fill(!1);let I=!0;for(;I;){I=!1;let et=!0;for(let Z=0;Z<N.length;++Z){if(V[Z])continue;const tt=N[Z];if(ee(tt))N[Z]=tt.referToSelf.callback(F),N[Z].referToSelf=tt.referToSelf,V[Z]=!0,et=!1;else if(jt(tt)){const K=xt(tt.referTo.references,N,_);K?(N[Z]=tt.referTo.callback.apply(this,K),N[Z].referTo=tt.referTo,V[Z]=!0,et=!1):I=!0}}if(et&&I)throw new SyntaxError("Circular reference detected in resolving typed.referTo")}return N}function nt(E){const _=/\bthis(\(|\.signatures\b)/;Object.keys(E).forEach(F=>{const N=E[F];if(_.test(N.toString()))throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.")})}function lt(E,_){if(o.createCount++,Object.keys(_).length===0)throw new SyntaxError("No signatures provided");o.warnAgainstDeprecatedThis&&nt(_);const F=[],N=[],V={},I=[];let et;for(et in _){if(!Object.prototype.hasOwnProperty.call(_,et))continue;const X=M(et);if(!X)continue;F.forEach(function(bt){if(ot(bt,X))throw new TypeError('Conflicting signatures "'+m(bt)+'" and "'+m(X)+'".')}),F.push(X);const k=N.length;N.push(_[et]);const dt=X.map(b);let yt;for(yt of Q(dt)){const bt=m(yt);I.push({params:yt,name:bt,fn:k}),yt.every(wt=>!wt.hasConversion)&&(V[bt]=k)}}I.sort(z);const Z=J(N,V,$);let tt;for(tt in V)Object.prototype.hasOwnProperty.call(V,tt)&&(V[tt]=Z[V[tt]]);const K=[],it=new Map;for(tt of I)it.has(tt.name)||(tt.fn=Z[tt.fn],K.push(tt),it.set(tt.name,tt));const ht=K[0]&&K[0].params.length<=2&&!A(K[0].params),St=K[1]&&K[1].params.length<=2&&!A(K[1].params),Tt=K[2]&&K[2].params.length<=2&&!A(K[2].params),pt=K[3]&&K[3].params.length<=2&&!A(K[3].params),Lt=K[4]&&K[4].params.length<=2&&!A(K[4].params),B=K[5]&&K[5].params.length<=2&&!A(K[5].params),Et=ht&&St&&Tt&&pt&&Lt&&B;for(let X=0;X<K.length;++X)K[X].test=w(K[X].params);const ct=ht?y(K[0].params[0]):xn,Ct=St?y(K[1].params[0]):xn,ft=Tt?y(K[2].params[0]):xn,st=pt?y(K[3].params[0]):xn,Pt=Lt?y(K[4].params[0]):xn,Zt=B?y(K[5].params[0]):xn,Ee=ht?y(K[0].params[1]):xn,ue=St?y(K[1].params[1]):xn,fn=Tt?y(K[2].params[1]):xn,Tn=pt?y(K[3].params[1]):xn,ro=Lt?y(K[4].params[1]):xn,so=B?y(K[5].params[1]):xn;for(let X=0;X<K.length;++X)K[X].implementation=U(K[X].params,K[X].fn);const $n=ht?K[0].implementation:Tr,ts=St?K[1].implementation:Tr,oo=Tt?K[2].implementation:Tr,ao=pt?K[3].implementation:Tr,or=Lt?K[4].implementation:Tr,uo=B?K[5].implementation:Tr,ar=ht?K[0].params.length:-1,co=St?K[1].params.length:-1,lo=Tt?K[2].params.length:-1,Fa=pt?K[3].params.length:-1,Pa=Lt?K[4].params.length:-1,Na=B?K[5].params.length:-1,Ia=Et?6:0,La=K.length,Ua=K.map(X=>X.test),T=K.map(X=>X.implementation),G=function(){for(let k=Ia;k<La;k++)if(Ua[k](arguments))return T[k].apply(this,arguments);return o.onMismatch(E,arguments,K)};function $(X,k){return arguments.length===ar&&ct(X)&&Ee(k)?$n.apply(this,arguments):arguments.length===co&&Ct(X)&&ue(k)?ts.apply(this,arguments):arguments.length===lo&&ft(X)&&fn(k)?oo.apply(this,arguments):arguments.length===Fa&&st(X)&&Tn(k)?ao.apply(this,arguments):arguments.length===Pa&&Pt(X)&&ro(k)?or.apply(this,arguments):arguments.length===Na&&Zt(X)&&so(k)?uo.apply(this,arguments):G.apply(this,arguments)}try{Object.defineProperty($,"name",{value:E})}catch{}return $.signatures=V,$._typedFunctionData={signatures:K,signatureMap:it},$}function at(E,_,F){throw H(E,_,F)}function _t(E){return vt(E,0,E.length-1)}function At(E){return E[E.length-1]}function vt(E,_,F){return Array.prototype.slice.call(E,_,F)}function Kt(E,_){for(let F=0;F<E.length;F++)if(_(E[F]))return E[F]}function kt(E,_){return Array.prototype.concat.apply([],E.map(_))}function It(){const E=_t(arguments).map(F=>m(M(F))),_=At(arguments);if(typeof _!="function")throw new TypeError("Callback function expected as last argument");return P(E,_)}function P(E,_){return{referTo:{references:E,callback:_}}}function de(E){if(typeof E!="function")throw new TypeError("Callback function expected as first argument");return{referToSelf:{callback:E}}}function jt(E){return E&&typeof E.referTo=="object"&&Array.isArray(E.referTo.references)&&typeof E.referTo.callback=="function"}function ee(E){return E&&typeof E.referToSelf=="object"&&typeof E.referToSelf.callback=="function"}function gt(E,_){if(!E)return _;if(_&&_!==E){const F=new Error("Function names do not match (expected: "+E+", actual: "+_+")");throw F.data={actual:_,expected:E},F}return E}function Ht(E){let _;for(const F in E)Object.prototype.hasOwnProperty.call(E,F)&&(h(E[F])||typeof E[F].signature=="string")&&(_=gt(_,E[F].name));return _}function Ft(E,_){let F;for(F in _)if(Object.prototype.hasOwnProperty.call(_,F)){if(F in E&&_[F]!==E[F]){const N=new Error('Signature "'+F+'" is defined twice');throw N.data={signature:F,sourceFunction:_[F],destFunction:E[F]},N}E[F]=_[F]}}const Yt=o;o=function(E){const _=typeof E=="string",F=_?1:0;let N=_?E:"";const V={};for(let I=F;I<arguments.length;++I){const et=arguments[I];let Z={},tt;if(typeof et=="function"?(tt=et.name,typeof et.signature=="string"?Z[et.signature]=et:h(et)&&(Z=et.signatures)):n(et)&&(Z=et,_||(tt=Ht(et))),Object.keys(Z).length===0){const K=new TypeError("Argument to 'typed' at index "+I+" is not a (typed) function, nor an object with signatures as keys and functions as values.");throw K.data={index:I,argument:et},K}_||(N=gt(N,tt)),Ft(V,Z)}return lt(N||"",V)},o.create=od,o.createCount=Yt.createCount,o.onMismatch=at,o.throwMismatchError=at,o.createError=H,o.clear=l,o.clearConversions=c,o.addTypes=u,o._findType=a,o.referTo=It,o.referToSelf=de,o.convert=p,o.findSignature=g,o.find=v,o.isTypedFunction=h,o.warnAgainstDeprecatedThis=!0,o.addType=function(E,_){let F="any";_!==!1&&i.has("Object")&&(F="Object"),o.addTypes([E],F)};function ye(E){if(!E||typeof E.from!="string"||typeof E.to!="string"||typeof E.convert!="function")throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");if(E.to===E.from)throw new SyntaxError('Illegal to define conversion from "'+E.from+'" to itself.')}return o.addConversion=function(E){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{override:!1};ye(E);const F=a(E.to),N=F.conversionsTo.find(V=>V.from===E.from);if(N)if(_&&_.override)o.removeConversion({from:N.from,to:E.to,convert:N.convert});else throw new Error('There is already a conversion from "'+E.from+'" to "'+F.name+'"');F.conversionsTo.push({from:E.from,convert:E.convert,index:s++})},o.addConversions=function(E,_){E.forEach(F=>o.addConversion(F,_))},o.removeConversion=function(E){ye(E);const _=a(E.to),F=Kt(_.conversionsTo,V=>V.from===E.from);if(!F)throw new Error("Attempt to remove nonexistent conversion from "+E.from+" to "+E.to);if(F.convert!==E.convert)throw new Error("Conversion to remove does not match existing conversion");const N=_.conversionsTo.indexOf(F);_.conversionsTo.splice(N,1)},o.resolve=function(E,_){if(!h(E))throw new TypeError(Cf);const F=E._typedFunctionData.signatures;for(let N=0;N<F.length;++N)if(F[N].test(_))return F[N];return null},o}const ca=od();function he(n,t,e,i){function r(s){var o=yy(s,t.map(by));return Sy(n,t,s),e(o)}return r.isFactory=!0,r.fn=n,r.dependencies=t.slice().sort(),i&&(r.meta=i),r}function Sy(n,t,e){var i=t.filter(s=>!Ay(s)).every(s=>e[s]!==void 0);if(!i){var r=t.filter(s=>e[s]===void 0);throw new Error('Cannot create function "'.concat(n,'", ')+"some dependencies are missing: ".concat(r.map(s=>'"'.concat(s,'"')).join(", "),"."))}}function Ay(n){return n&&n[0]==="?"}function by(n){return n&&n[0]==="?"?n.slice(1):n}function Ve(n){return typeof n=="boolean"?!0:isFinite(n)?n===Math.round(n):!1}function xu(n,t,e){var i={2:"0b",8:"0o",16:"0x"},r=i[t],s="";if(e){if(e<1)throw new Error("size must be in greater than 0");if(!Ve(e))throw new Error("size must be an integer");if(n>2**(e-1)-1||n<-(2**(e-1)))throw new Error("Value must be in range [-2^".concat(e-1,", 2^").concat(e-1,"-1]"));if(!Ve(n))throw new Error("Value must be an integer");n<0&&(n=n+2**e),s="i".concat(e)}var o="";return n<0&&(n=-n,o="-"),"".concat(o).concat(r).concat(n.toString(t)).concat(s)}function mc(n,t){if(typeof t=="function")return t(n);if(n===1/0)return"Infinity";if(n===-1/0)return"-Infinity";if(isNaN(n))return"NaN";var{notation:e,precision:i,wordSize:r}=ad(t);switch(e){case"fixed":return Ty(n,i);case"exponential":return ud(n,i);case"engineering":return wy(n,i);case"bin":return xu(n,2,r);case"oct":return xu(n,8,r);case"hex":return xu(n,16,r);case"auto":return Cy(n,i,t).replace(/((\.\d*?)(0+))($|e)/,function(){var s=arguments[2],o=arguments[4];return s!=="."?s+o:o});default:throw new Error('Unknown notation "'+e+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function ad(n){var t="auto",e,i;if(n!==void 0)if(Me(n))e=n;else if(Le(n))e=n.toNumber();else if(Xc(n))n.precision!==void 0&&(e=Rf(n.precision,()=>{throw new Error('Option "precision" must be a number or BigNumber')})),n.wordSize!==void 0&&(i=Rf(n.wordSize,()=>{throw new Error('Option "wordSize" must be a number or BigNumber')})),n.notation&&(t=n.notation);else throw new Error("Unsupported type of options, number, BigNumber, or object expected");return{notation:t,precision:e,wordSize:i}}function Aa(n){var t=String(n).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);if(!t)throw new SyntaxError("Invalid number "+n);var e=t[1],i=t[2],r=parseFloat(t[4]||"0"),s=i.indexOf(".");r+=s!==-1?s-1:i.length-1;var o=i.replace(".","").replace(/^0*/,function(a){return r-=a.length,""}).replace(/0*$/,"").split("").map(function(a){return parseInt(a)});return o.length===0&&(o.push(0),r++),{sign:e,coefficients:o,exponent:r}}function wy(n,t){if(isNaN(n)||!isFinite(n))return String(n);var e=Aa(n),i=ba(e,t),r=i.exponent,s=i.coefficients,o=r%3===0?r:r<0?r-3-r%3:r-r%3;if(Me(t))for(;t>s.length||r-o+1>s.length;)s.push(0);else for(var a=Math.abs(r-o)-(s.length-1),u=0;u<a;u++)s.push(0);for(var l=Math.abs(r-o),c=1;l>0;)c++,l--;var f=s.slice(c).join(""),h=Me(t)&&f.length||f.match(/[1-9]/)?"."+f:"",g=s.slice(0,c).join("")+h+"e"+(r>=0?"+":"")+o.toString();return i.sign+g}function Ty(n,t){if(isNaN(n)||!isFinite(n))return String(n);var e=Aa(n),i=typeof t=="number"?ba(e,e.exponent+1+t):e,r=i.coefficients,s=i.exponent+1,o=s+(t||0);return r.length<o&&(r=r.concat(Vr(o-r.length))),s<0&&(r=Vr(-s+1).concat(r),s=1),s<r.length&&r.splice(s,0,s===0?"0.":"."),i.sign+r.join("")}function ud(n,t){if(isNaN(n)||!isFinite(n))return String(n);var e=Aa(n),i=t?ba(e,t):e,r=i.coefficients,s=i.exponent;r.length<t&&(r=r.concat(Vr(t-r.length)));var o=r.shift();return i.sign+o+(r.length>0?"."+r.join(""):"")+"e"+(s>=0?"+":"")+s}function Cy(n,t,e){if(isNaN(n)||!isFinite(n))return String(n);var i=Ff(e==null?void 0:e.lowerExp,-3),r=Ff(e==null?void 0:e.upperExp,5),s=Aa(n),o=t?ba(s,t):s;if(o.exponent<i||o.exponent>=r)return ud(n,t);var a=o.coefficients,u=o.exponent;a.length<t&&(a=a.concat(Vr(t-a.length))),a=a.concat(Vr(u-a.length+1+(a.length<t?t-a.length:0))),a=Vr(-u).concat(a);var l=u>0?u:0;return l<a.length-1&&a.splice(l+1,0,"."),o.sign+a.join("")}function ba(n,t){for(var e={sign:n.sign,coefficients:n.coefficients,exponent:n.exponent},i=e.coefficients;t<=0;)i.unshift(0),e.exponent++,t++;if(i.length>t){var r=i.splice(t,i.length-t);if(r[0]>=5){var s=t-1;for(i[s]++;i[s]===10;)i.pop(),s===0&&(i.unshift(0),e.exponent++,s++),s--,i[s]++}}return e}function Vr(n){for(var t=[],e=0;e<n;e++)t.push(0);return t}function Ry(n){return n.toExponential().replace(/e.*$/,"").replace(/^0\.?0*|\./,"").length}function la(n,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1e-8,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;if(e<=0)throw new Error("Relative tolerance must be greater than 0");if(i<0)throw new Error("Absolute tolerance must be at least 0");return isNaN(n)||isNaN(t)?!1:!isFinite(n)||!isFinite(t)?n===t:n===t?!0:Math.abs(n-t)<=Math.max(e*Math.max(Math.abs(n),Math.abs(t)),i)}function Rf(n,t){if(Me(n))return n;if(Le(n))return n.toNumber();t()}function Ff(n,t){return Me(n)?n:Le(n)?n.toNumber():t}var cd=function(){return cd=ca.create,ca},Fy=["?BigNumber","?Complex","?DenseMatrix","?Fraction"],Py=he("typed",Fy,function(t){var{BigNumber:e,Complex:i,DenseMatrix:r,Fraction:s}=t,o=cd();return o.clear(),o.addTypes([{name:"number",test:Me},{name:"Complex",test:id},{name:"BigNumber",test:Le},{name:"bigint",test:Wx},{name:"Fraction",test:rd},{name:"Unit",test:sd},{name:"identifier",test:a=>Xn&&/^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(a)},{name:"string",test:Xn},{name:"Chain",test:Ey},{name:"Array",test:Oe},{name:"Matrix",test:Fe},{name:"DenseMatrix",test:Xx},{name:"SparseMatrix",test:qx},{name:"Range",test:Yx},{name:"Index",test:Wc},{name:"boolean",test:Zx},{name:"ResultSet",test:jx},{name:"Help",test:Kx},{name:"function",test:$x},{name:"Date",test:Jx},{name:"RegExp",test:Qx},{name:"null",test:ey},{name:"undefined",test:ny},{name:"AccessorNode",test:iy},{name:"ArrayNode",test:ry},{name:"AssignmentNode",test:sy},{name:"BlockNode",test:oy},{name:"ConditionalNode",test:ay},{name:"ConstantNode",test:uy},{name:"FunctionNode",test:ly},{name:"FunctionAssignmentNode",test:cy},{name:"IndexNode",test:fy},{name:"Node",test:hy},{name:"ObjectNode",test:dy},{name:"OperatorNode",test:py},{name:"ParenthesisNode",test:my},{name:"RangeNode",test:gy},{name:"RelationalNode",test:_y},{name:"SymbolNode",test:vy},{name:"Map",test:ty},{name:"Object",test:Xc}]),o.addConversions([{from:"number",to:"BigNumber",convert:function(u){if(e||zo(u),Ry(u)>15)throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: "+u+"). Use function bignumber(x) to convert to BigNumber.");return new e(u)}},{from:"number",to:"Complex",convert:function(u){return i||Vo(u),new i(u,0)}},{from:"BigNumber",to:"Complex",convert:function(u){return i||Vo(u),new i(u.toNumber(),0)}},{from:"bigint",to:"number",convert:function(u){if(u>Number.MAX_SAFE_INTEGER)throw new TypeError("Cannot implicitly convert bigint to number: value exceeds the max safe integer value (value: "+u+")");return Number(u)}},{from:"bigint",to:"BigNumber",convert:function(u){return e||zo(u),new e(u.toString())}},{from:"bigint",to:"Fraction",convert:function(u){return s||Ho(u),new s(u)}},{from:"Fraction",to:"BigNumber",convert:function(u){throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.")}},{from:"Fraction",to:"Complex",convert:function(u){return i||Vo(u),new i(u.valueOf(),0)}},{from:"number",to:"Fraction",convert:function(u){s||Ho(u);var l=new s(u);if(l.valueOf()!==u)throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: "+u+"). Use function fraction(x) to convert to Fraction.");return l}},{from:"string",to:"number",convert:function(u){var l=Number(u);if(isNaN(l))throw new Error('Cannot convert "'+u+'" to a number');return l}},{from:"string",to:"BigNumber",convert:function(u){e||zo(u);try{return new e(u)}catch{throw new Error('Cannot convert "'+u+'" to BigNumber')}}},{from:"string",to:"bigint",convert:function(u){try{return BigInt(u)}catch{throw new Error('Cannot convert "'+u+'" to BigInt')}}},{from:"string",to:"Fraction",convert:function(u){s||Ho(u);try{return new s(u)}catch{throw new Error('Cannot convert "'+u+'" to Fraction')}}},{from:"string",to:"Complex",convert:function(u){i||Vo(u);try{return new i(u)}catch{throw new Error('Cannot convert "'+u+'" to Complex')}}},{from:"boolean",to:"number",convert:function(u){return+u}},{from:"boolean",to:"BigNumber",convert:function(u){return e||zo(u),new e(+u)}},{from:"boolean",to:"bigint",convert:function(u){return BigInt(+u)}},{from:"boolean",to:"Fraction",convert:function(u){return s||Ho(u),new s(+u)}},{from:"boolean",to:"string",convert:function(u){return String(u)}},{from:"Array",to:"Matrix",convert:function(u){return r||Ny(),new r(u)}},{from:"Matrix",to:"Array",convert:function(u){return u.valueOf()}}]),o.onMismatch=(a,u,l)=>{var c=o.createError(a,u,l);if(["wrongType","mismatch"].includes(c.data.category)&&u.length===1&&aa(u[0])&&l.some(h=>!h.params.includes(","))){var f=new TypeError("Function '".concat(a,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(a,")'."));throw f.data=c.data,f}throw c},o.onMismatch=(a,u,l)=>{var c=o.createError(a,u,l);if(["wrongType","mismatch"].includes(c.data.category)&&u.length===1&&aa(u[0])&&l.some(h=>!h.params.includes(","))){var f=new TypeError("Function '".concat(a,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(a,")'."));throw f.data=c.data,f}throw c},o});function zo(n){throw new Error("Cannot convert value ".concat(n," into a BigNumber: no class 'BigNumber' provided"))}function Vo(n){throw new Error("Cannot convert value ".concat(n," into a Complex number: no class 'Complex' provided"))}function Ny(){throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided")}function Ho(n){throw new Error("Cannot convert value ".concat(n," into a Fraction, no class 'Fraction' provided."))}/*!
 *  decimal.js v10.5.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var Ir=9e15,Oi=1e9,gc="0123456789abcdef",fa="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",ha="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",_c={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-Ir,maxE:Ir,crypto:!1},ld,li,qt=!0,wa="[DecimalError] ",Ui=wa+"Invalid argument: ",fd=wa+"Precision limit exceeded",hd=wa+"crypto unavailable",dd="[object Decimal]",Qe=Math.floor,ze=Math.pow,Iy=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,Ly=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,Uy=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,pd=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Gn=1e7,Vt=7,By=9007199254740991,Oy=fa.length-1,vc=ha.length-1,ut={toStringTag:dd};ut.absoluteValue=ut.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),Bt(n)};ut.ceil=function(){return Bt(new this.constructor(this),this.e+1,2)};ut.clampedTo=ut.clamp=function(n,t){var e,i=this,r=i.constructor;if(n=new r(n),t=new r(t),!n.s||!t.s)return new r(NaN);if(n.gt(t))throw Error(Ui+t);return e=i.cmp(n),e<0?n:i.cmp(t)>0?t:new r(i)};ut.comparedTo=ut.cmp=function(n){var t,e,i,r,s=this,o=s.d,a=(n=new s.constructor(n)).d,u=s.s,l=n.s;if(!o||!a)return!u||!l?NaN:u!==l?u:o===a?0:!o^u<0?1:-1;if(!o[0]||!a[0])return o[0]?u:a[0]?-l:0;if(u!==l)return u;if(s.e!==n.e)return s.e>n.e^u<0?1:-1;for(i=o.length,r=a.length,t=0,e=i<r?i:r;t<e;++t)if(o[t]!==a[t])return o[t]>a[t]^u<0?1:-1;return i===r?0:i>r^u<0?1:-1};ut.cosine=ut.cos=function(){var n,t,e=this,i=e.constructor;return e.d?e.d[0]?(n=i.precision,t=i.rounding,i.precision=n+Math.max(e.e,e.sd())+Vt,i.rounding=1,e=zy(i,Ed(i,e)),i.precision=n,i.rounding=t,Bt(li==2||li==3?e.neg():e,n,t,!0)):new i(1):new i(NaN)};ut.cubeRoot=ut.cbrt=function(){var n,t,e,i,r,s,o,a,u,l,c=this,f=c.constructor;if(!c.isFinite()||c.isZero())return new f(c);for(qt=!1,s=c.s*ze(c.s*c,1/3),!s||Math.abs(s)==1/0?(e=qe(c.d),n=c.e,(s=(n-e.length+1)%3)&&(e+=s==1||s==-2?"0":"00"),s=ze(e,1/3),n=Qe((n+1)/3)-(n%3==(n<0?-1:2)),s==1/0?e="5e"+n:(e=s.toExponential(),e=e.slice(0,e.indexOf("e")+1)+n),i=new f(e),i.s=c.s):i=new f(s.toString()),o=(n=f.precision)+3;;)if(a=i,u=a.times(a).times(a),l=u.plus(c),i=xe(l.plus(c).times(a),l.plus(u),o+2,1),qe(a.d).slice(0,o)===(e=qe(i.d)).slice(0,o))if(e=e.slice(o-3,o+1),e=="9999"||!r&&e=="4999"){if(!r&&(Bt(a,n+1,0),a.times(a).times(a).eq(c))){i=a;break}o+=4,r=1}else{(!+e||!+e.slice(1)&&e.charAt(0)=="5")&&(Bt(i,n+1,1),t=!i.times(i).times(i).eq(c));break}return qt=!0,Bt(i,n,f.rounding,t)};ut.decimalPlaces=ut.dp=function(){var n,t=this.d,e=NaN;if(t){if(n=t.length-1,e=(n-Qe(this.e/Vt))*Vt,n=t[n],n)for(;n%10==0;n/=10)e--;e<0&&(e=0)}return e};ut.dividedBy=ut.div=function(n){return xe(this,new this.constructor(n))};ut.dividedToIntegerBy=ut.divToInt=function(n){var t=this,e=t.constructor;return Bt(xe(t,new e(n),0,1,1),e.precision,e.rounding)};ut.equals=ut.eq=function(n){return this.cmp(n)===0};ut.floor=function(){return Bt(new this.constructor(this),this.e+1,3)};ut.greaterThan=ut.gt=function(n){return this.cmp(n)>0};ut.greaterThanOrEqualTo=ut.gte=function(n){var t=this.cmp(n);return t==1||t===0};ut.hyperbolicCosine=ut.cosh=function(){var n,t,e,i,r,s=this,o=s.constructor,a=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return a;e=o.precision,i=o.rounding,o.precision=e+Math.max(s.e,s.sd())+4,o.rounding=1,r=s.d.length,r<32?(n=Math.ceil(r/3),t=(1/Ca(4,n)).toString()):(n=16,t="2.3283064365386962890625e-10"),s=Kr(o,1,s.times(t),new o(1),!0);for(var u,l=n,c=new o(8);l--;)u=s.times(s),s=a.minus(u.times(c.minus(u.times(c))));return Bt(s,o.precision=e,o.rounding=i,!0)};ut.hyperbolicSine=ut.sinh=function(){var n,t,e,i,r=this,s=r.constructor;if(!r.isFinite()||r.isZero())return new s(r);if(t=s.precision,e=s.rounding,s.precision=t+Math.max(r.e,r.sd())+4,s.rounding=1,i=r.d.length,i<3)r=Kr(s,2,r,r,!0);else{n=1.4*Math.sqrt(i),n=n>16?16:n|0,r=r.times(1/Ca(5,n)),r=Kr(s,2,r,r,!0);for(var o,a=new s(5),u=new s(16),l=new s(20);n--;)o=r.times(r),r=r.times(a.plus(o.times(u.times(o).plus(l))))}return s.precision=t,s.rounding=e,Bt(r,t,e,!0)};ut.hyperbolicTangent=ut.tanh=function(){var n,t,e=this,i=e.constructor;return e.isFinite()?e.isZero()?new i(e):(n=i.precision,t=i.rounding,i.precision=n+7,i.rounding=1,xe(e.sinh(),e.cosh(),i.precision=n,i.rounding=t)):new i(e.s)};ut.inverseCosine=ut.acos=function(){var n=this,t=n.constructor,e=n.abs().cmp(1),i=t.precision,r=t.rounding;return e!==-1?e===0?n.isNeg()?Zn(t,i,r):new t(0):new t(NaN):n.isZero()?Zn(t,i+4,r).times(.5):(t.precision=i+6,t.rounding=1,n=new t(1).minus(n).div(n.plus(1)).sqrt().atan(),t.precision=i,t.rounding=r,n.times(2))};ut.inverseHyperbolicCosine=ut.acosh=function(){var n,t,e=this,i=e.constructor;return e.lte(1)?new i(e.eq(1)?0:NaN):e.isFinite()?(n=i.precision,t=i.rounding,i.precision=n+Math.max(Math.abs(e.e),e.sd())+4,i.rounding=1,qt=!1,e=e.times(e).minus(1).sqrt().plus(e),qt=!0,i.precision=n,i.rounding=t,e.ln()):new i(e)};ut.inverseHyperbolicSine=ut.asinh=function(){var n,t,e=this,i=e.constructor;return!e.isFinite()||e.isZero()?new i(e):(n=i.precision,t=i.rounding,i.precision=n+2*Math.max(Math.abs(e.e),e.sd())+6,i.rounding=1,qt=!1,e=e.times(e).plus(1).sqrt().plus(e),qt=!0,i.precision=n,i.rounding=t,e.ln())};ut.inverseHyperbolicTangent=ut.atanh=function(){var n,t,e,i,r=this,s=r.constructor;return r.isFinite()?r.e>=0?new s(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(n=s.precision,t=s.rounding,i=r.sd(),Math.max(i,n)<2*-r.e-1?Bt(new s(r),n,t,!0):(s.precision=e=i-r.e,r=xe(r.plus(1),new s(1).minus(r),e+n,1),s.precision=n+4,s.rounding=1,r=r.ln(),s.precision=n,s.rounding=t,r.times(.5))):new s(NaN)};ut.inverseSine=ut.asin=function(){var n,t,e,i,r=this,s=r.constructor;return r.isZero()?new s(r):(t=r.abs().cmp(1),e=s.precision,i=s.rounding,t!==-1?t===0?(n=Zn(s,e+4,i).times(.5),n.s=r.s,n):new s(NaN):(s.precision=e+6,s.rounding=1,r=r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(),s.precision=e,s.rounding=i,r.times(2)))};ut.inverseTangent=ut.atan=function(){var n,t,e,i,r,s,o,a,u,l=this,c=l.constructor,f=c.precision,h=c.rounding;if(l.isFinite()){if(l.isZero())return new c(l);if(l.abs().eq(1)&&f+4<=vc)return o=Zn(c,f+4,h).times(.25),o.s=l.s,o}else{if(!l.s)return new c(NaN);if(f+4<=vc)return o=Zn(c,f+4,h).times(.5),o.s=l.s,o}for(c.precision=a=f+10,c.rounding=1,e=Math.min(28,a/Vt+2|0),n=e;n;--n)l=l.div(l.times(l).plus(1).sqrt().plus(1));for(qt=!1,t=Math.ceil(a/Vt),i=1,u=l.times(l),o=new c(l),r=l;n!==-1;)if(r=r.times(u),s=o.minus(r.div(i+=2)),r=r.times(u),o=s.plus(r.div(i+=2)),o.d[t]!==void 0)for(n=t;o.d[n]===s.d[n]&&n--;);return e&&(o=o.times(2<<e-1)),qt=!0,Bt(o,c.precision=f,c.rounding=h,!0)};ut.isFinite=function(){return!!this.d};ut.isInteger=ut.isInt=function(){return!!this.d&&Qe(this.e/Vt)>this.d.length-2};ut.isNaN=function(){return!this.s};ut.isNegative=ut.isNeg=function(){return this.s<0};ut.isPositive=ut.isPos=function(){return this.s>0};ut.isZero=function(){return!!this.d&&this.d[0]===0};ut.lessThan=ut.lt=function(n){return this.cmp(n)<0};ut.lessThanOrEqualTo=ut.lte=function(n){return this.cmp(n)<1};ut.logarithm=ut.log=function(n){var t,e,i,r,s,o,a,u,l=this,c=l.constructor,f=c.precision,h=c.rounding,g=5;if(n==null)n=new c(10),t=!0;else{if(n=new c(n),e=n.d,n.s<0||!e||!e[0]||n.eq(1))return new c(NaN);t=n.eq(10)}if(e=l.d,l.s<0||!e||!e[0]||l.eq(1))return new c(e&&!e[0]?-1/0:l.s!=1?NaN:e?0:1/0);if(t)if(e.length>1)s=!0;else{for(r=e[0];r%10===0;)r/=10;s=r!==1}if(qt=!1,a=f+g,o=wi(l,a),i=t?da(c,a+10):wi(n,a),u=xe(o,i,a,1),Es(u.d,r=f,h))do if(a+=10,o=wi(l,a),i=t?da(c,a+10):wi(n,a),u=xe(o,i,a,1),!s){+qe(u.d).slice(r+1,r+15)+1==1e14&&(u=Bt(u,f+1,0));break}while(Es(u.d,r+=10,h));return qt=!0,Bt(u,f,h)};ut.minus=ut.sub=function(n){var t,e,i,r,s,o,a,u,l,c,f,h,g=this,v=g.constructor;if(n=new v(n),!g.d||!n.d)return!g.s||!n.s?n=new v(NaN):g.d?n.s=-n.s:n=new v(n.d||g.s!==n.s?g:NaN),n;if(g.s!=n.s)return n.s=-n.s,g.plus(n);if(l=g.d,h=n.d,a=v.precision,u=v.rounding,!l[0]||!h[0]){if(h[0])n.s=-n.s;else if(l[0])n=new v(g);else return new v(u===3?-0:0);return qt?Bt(n,a,u):n}if(e=Qe(n.e/Vt),c=Qe(g.e/Vt),l=l.slice(),s=c-e,s){for(f=s<0,f?(t=l,s=-s,o=h.length):(t=h,e=c,o=l.length),i=Math.max(Math.ceil(a/Vt),o)+2,s>i&&(s=i,t.length=1),t.reverse(),i=s;i--;)t.push(0);t.reverse()}else{for(i=l.length,o=h.length,f=i<o,f&&(o=i),i=0;i<o;i++)if(l[i]!=h[i]){f=l[i]<h[i];break}s=0}for(f&&(t=l,l=h,h=t,n.s=-n.s),o=l.length,i=h.length-o;i>0;--i)l[o++]=0;for(i=h.length;i>s;){if(l[--i]<h[i]){for(r=i;r&&l[--r]===0;)l[r]=Gn-1;--l[r],l[i]+=Gn}l[i]-=h[i]}for(;l[--o]===0;)l.pop();for(;l[0]===0;l.shift())--e;return l[0]?(n.d=l,n.e=Ta(l,e),qt?Bt(n,a,u):n):new v(u===3?-0:0)};ut.modulo=ut.mod=function(n){var t,e=this,i=e.constructor;return n=new i(n),!e.d||!n.s||n.d&&!n.d[0]?new i(NaN):!n.d||e.d&&!e.d[0]?Bt(new i(e),i.precision,i.rounding):(qt=!1,i.modulo==9?(t=xe(e,n.abs(),0,3,1),t.s*=n.s):t=xe(e,n,0,i.modulo,1),t=t.times(n),qt=!0,e.minus(t))};ut.naturalExponential=ut.exp=function(){return Ec(this)};ut.naturalLogarithm=ut.ln=function(){return wi(this)};ut.negated=ut.neg=function(){var n=new this.constructor(this);return n.s=-n.s,Bt(n)};ut.plus=ut.add=function(n){var t,e,i,r,s,o,a,u,l,c,f=this,h=f.constructor;if(n=new h(n),!f.d||!n.d)return!f.s||!n.s?n=new h(NaN):f.d||(n=new h(n.d||f.s===n.s?f:NaN)),n;if(f.s!=n.s)return n.s=-n.s,f.minus(n);if(l=f.d,c=n.d,a=h.precision,u=h.rounding,!l[0]||!c[0])return c[0]||(n=new h(f)),qt?Bt(n,a,u):n;if(s=Qe(f.e/Vt),i=Qe(n.e/Vt),l=l.slice(),r=s-i,r){for(r<0?(e=l,r=-r,o=c.length):(e=c,i=s,o=l.length),s=Math.ceil(a/Vt),o=s>o?s+1:o+1,r>o&&(r=o,e.length=1),e.reverse();r--;)e.push(0);e.reverse()}for(o=l.length,r=c.length,o-r<0&&(r=o,e=c,c=l,l=e),t=0;r;)t=(l[--r]=l[r]+c[r]+t)/Gn|0,l[r]%=Gn;for(t&&(l.unshift(t),++i),o=l.length;l[--o]==0;)l.pop();return n.d=l,n.e=Ta(l,i),qt?Bt(n,a,u):n};ut.precision=ut.sd=function(n){var t,e=this;if(n!==void 0&&n!==!!n&&n!==1&&n!==0)throw Error(Ui+n);return e.d?(t=md(e.d),n&&e.e+1>t&&(t=e.e+1)):t=NaN,t};ut.round=function(){var n=this,t=n.constructor;return Bt(new t(n),n.e+1,t.rounding)};ut.sine=ut.sin=function(){var n,t,e=this,i=e.constructor;return e.isFinite()?e.isZero()?new i(e):(n=i.precision,t=i.rounding,i.precision=n+Math.max(e.e,e.sd())+Vt,i.rounding=1,e=Hy(i,Ed(i,e)),i.precision=n,i.rounding=t,Bt(li>2?e.neg():e,n,t,!0)):new i(NaN)};ut.squareRoot=ut.sqrt=function(){var n,t,e,i,r,s,o=this,a=o.d,u=o.e,l=o.s,c=o.constructor;if(l!==1||!a||!a[0])return new c(!l||l<0&&(!a||a[0])?NaN:a?o:1/0);for(qt=!1,l=Math.sqrt(+o),l==0||l==1/0?(t=qe(a),(t.length+u)%2==0&&(t+="0"),l=Math.sqrt(t),u=Qe((u+1)/2)-(u<0||u%2),l==1/0?t="5e"+u:(t=l.toExponential(),t=t.slice(0,t.indexOf("e")+1)+u),i=new c(t)):i=new c(l.toString()),e=(u=c.precision)+3;;)if(s=i,i=s.plus(xe(o,s,e+2,1)).times(.5),qe(s.d).slice(0,e)===(t=qe(i.d)).slice(0,e))if(t=t.slice(e-3,e+1),t=="9999"||!r&&t=="4999"){if(!r&&(Bt(s,u+1,0),s.times(s).eq(o))){i=s;break}e+=4,r=1}else{(!+t||!+t.slice(1)&&t.charAt(0)=="5")&&(Bt(i,u+1,1),n=!i.times(i).eq(o));break}return qt=!0,Bt(i,u,c.rounding,n)};ut.tangent=ut.tan=function(){var n,t,e=this,i=e.constructor;return e.isFinite()?e.isZero()?new i(e):(n=i.precision,t=i.rounding,i.precision=n+10,i.rounding=1,e=e.sin(),e.s=1,e=xe(e,new i(1).minus(e.times(e)).sqrt(),n+10,0),i.precision=n,i.rounding=t,Bt(li==2||li==4?e.neg():e,n,t,!0)):new i(NaN)};ut.times=ut.mul=function(n){var t,e,i,r,s,o,a,u,l,c=this,f=c.constructor,h=c.d,g=(n=new f(n)).d;if(n.s*=c.s,!h||!h[0]||!g||!g[0])return new f(!n.s||h&&!h[0]&&!g||g&&!g[0]&&!h?NaN:!h||!g?n.s/0:n.s*0);for(e=Qe(c.e/Vt)+Qe(n.e/Vt),u=h.length,l=g.length,u<l&&(s=h,h=g,g=s,o=u,u=l,l=o),s=[],o=u+l,i=o;i--;)s.push(0);for(i=l;--i>=0;){for(t=0,r=u+i;r>i;)a=s[r]+g[i]*h[r-i-1]+t,s[r--]=a%Gn|0,t=a/Gn|0;s[r]=(s[r]+t)%Gn|0}for(;!s[--o];)s.pop();return t?++e:s.shift(),n.d=s,n.e=Ta(s,e),qt?Bt(n,f.precision,f.rounding):n};ut.toBinary=function(n,t){return qc(this,2,n,t)};ut.toDecimalPlaces=ut.toDP=function(n,t){var e=this,i=e.constructor;return e=new i(e),n===void 0?e:(ln(n,0,Oi),t===void 0?t=i.rounding:ln(t,0,8),Bt(e,n+e.e+1,t))};ut.toExponential=function(n,t){var e,i=this,r=i.constructor;return n===void 0?e=Kn(i,!0):(ln(n,0,Oi),t===void 0?t=r.rounding:ln(t,0,8),i=Bt(new r(i),n+1,t),e=Kn(i,!0,n+1)),i.isNeg()&&!i.isZero()?"-"+e:e};ut.toFixed=function(n,t){var e,i,r=this,s=r.constructor;return n===void 0?e=Kn(r):(ln(n,0,Oi),t===void 0?t=s.rounding:ln(t,0,8),i=Bt(new s(r),n+r.e+1,t),e=Kn(i,!1,n+i.e+1)),r.isNeg()&&!r.isZero()?"-"+e:e};ut.toFraction=function(n){var t,e,i,r,s,o,a,u,l,c,f,h,g=this,v=g.d,p=g.constructor;if(!v)return new p(g);if(l=e=new p(1),i=u=new p(0),t=new p(i),s=t.e=md(v)-g.e-1,o=s%Vt,t.d[0]=ze(10,o<0?Vt+o:o),n==null)n=s>0?t:l;else{if(a=new p(n),!a.isInt()||a.lt(l))throw Error(Ui+a);n=a.gt(t)?s>0?t:l:a}for(qt=!1,a=new p(qe(v)),c=p.precision,p.precision=s=v.length*Vt*2;f=xe(a,t,0,1,1),r=e.plus(f.times(i)),r.cmp(n)!=1;)e=i,i=r,r=l,l=u.plus(f.times(r)),u=r,r=t,t=a.minus(f.times(r)),a=r;return r=xe(n.minus(e),i,0,1,1),u=u.plus(r.times(l)),e=e.plus(r.times(i)),u.s=l.s=g.s,h=xe(l,i,s,1).minus(g).abs().cmp(xe(u,e,s,1).minus(g).abs())<1?[l,i]:[u,e],p.precision=c,qt=!0,h};ut.toHexadecimal=ut.toHex=function(n,t){return qc(this,16,n,t)};ut.toNearest=function(n,t){var e=this,i=e.constructor;if(e=new i(e),n==null){if(!e.d)return e;n=new i(1),t=i.rounding}else{if(n=new i(n),t===void 0?t=i.rounding:ln(t,0,8),!e.d)return n.s?e:n;if(!n.d)return n.s&&(n.s=e.s),n}return n.d[0]?(qt=!1,e=xe(e,n,0,t,1).times(n),qt=!0,Bt(e)):(n.s=e.s,e=n),e};ut.toNumber=function(){return+this};ut.toOctal=function(n,t){return qc(this,8,n,t)};ut.toPower=ut.pow=function(n){var t,e,i,r,s,o,a=this,u=a.constructor,l=+(n=new u(n));if(!a.d||!n.d||!a.d[0]||!n.d[0])return new u(ze(+a,l));if(a=new u(a),a.eq(1))return a;if(i=u.precision,s=u.rounding,n.eq(1))return Bt(a,i,s);if(t=Qe(n.e/Vt),t>=n.d.length-1&&(e=l<0?-l:l)<=By)return r=gd(u,a,e,i),n.s<0?new u(1).div(r):Bt(r,i,s);if(o=a.s,o<0){if(t<n.d.length-1)return new u(NaN);if((n.d[t]&1)==0&&(o=1),a.e==0&&a.d[0]==1&&a.d.length==1)return a.s=o,a}return e=ze(+a,l),t=e==0||!isFinite(e)?Qe(l*(Math.log("0."+qe(a.d))/Math.LN10+a.e+1)):new u(e+"").e,t>u.maxE+1||t<u.minE-1?new u(t>0?o/0:0):(qt=!1,u.rounding=a.s=1,e=Math.min(12,(t+"").length),r=Ec(n.times(wi(a,i+e)),i),r.d&&(r=Bt(r,i+5,1),Es(r.d,i,s)&&(t=i+10,r=Bt(Ec(n.times(wi(a,t+e)),t),t+5,1),+qe(r.d).slice(i+1,i+15)+1==1e14&&(r=Bt(r,i+1,0)))),r.s=o,qt=!0,u.rounding=s,Bt(r,i,s))};ut.toPrecision=function(n,t){var e,i=this,r=i.constructor;return n===void 0?e=Kn(i,i.e<=r.toExpNeg||i.e>=r.toExpPos):(ln(n,1,Oi),t===void 0?t=r.rounding:ln(t,0,8),i=Bt(new r(i),n,t),e=Kn(i,n<=i.e||i.e<=r.toExpNeg,n)),i.isNeg()&&!i.isZero()?"-"+e:e};ut.toSignificantDigits=ut.toSD=function(n,t){var e=this,i=e.constructor;return n===void 0?(n=i.precision,t=i.rounding):(ln(n,1,Oi),t===void 0?t=i.rounding:ln(t,0,8)),Bt(new i(e),n,t)};ut.toString=function(){var n=this,t=n.constructor,e=Kn(n,n.e<=t.toExpNeg||n.e>=t.toExpPos);return n.isNeg()&&!n.isZero()?"-"+e:e};ut.truncated=ut.trunc=function(){return Bt(new this.constructor(this),this.e+1,1)};ut.valueOf=ut.toJSON=function(){var n=this,t=n.constructor,e=Kn(n,n.e<=t.toExpNeg||n.e>=t.toExpPos);return n.isNeg()?"-"+e:e};function qe(n){var t,e,i,r=n.length-1,s="",o=n[0];if(r>0){for(s+=o,t=1;t<r;t++)i=n[t]+"",e=Vt-i.length,e&&(s+=Ai(e)),s+=i;o=n[t],i=o+"",e=Vt-i.length,e&&(s+=Ai(e))}else if(o===0)return"0";for(;o%10===0;)o/=10;return s+o}function ln(n,t,e){if(n!==~~n||n<t||n>e)throw Error(Ui+n)}function Es(n,t,e,i){var r,s,o,a;for(s=n[0];s>=10;s/=10)--t;return--t<0?(t+=Vt,r=0):(r=Math.ceil((t+1)/Vt),t%=Vt),s=ze(10,Vt-t),a=n[r]%s|0,i==null?t<3?(t==0?a=a/100|0:t==1&&(a=a/10|0),o=e<4&&a==99999||e>3&&a==49999||a==5e4||a==0):o=(e<4&&a+1==s||e>3&&a+1==s/2)&&(n[r+1]/s/100|0)==ze(10,t-2)-1||(a==s/2||a==0)&&(n[r+1]/s/100|0)==0:t<4?(t==0?a=a/1e3|0:t==1?a=a/100|0:t==2&&(a=a/10|0),o=(i||e<4)&&a==9999||!i&&e>3&&a==4999):o=((i||e<4)&&a+1==s||!i&&e>3&&a+1==s/2)&&(n[r+1]/s/1e3|0)==ze(10,t-3)-1,o}function $o(n,t,e){for(var i,r=[0],s,o=0,a=n.length;o<a;){for(s=r.length;s--;)r[s]*=t;for(r[0]+=gc.indexOf(n.charAt(o++)),i=0;i<r.length;i++)r[i]>e-1&&(r[i+1]===void 0&&(r[i+1]=0),r[i+1]+=r[i]/e|0,r[i]%=e)}return r.reverse()}function zy(n,t){var e,i,r;if(t.isZero())return t;i=t.d.length,i<32?(e=Math.ceil(i/3),r=(1/Ca(4,e)).toString()):(e=16,r="2.3283064365386962890625e-10"),n.precision+=e,t=Kr(n,1,t.times(r),new n(1));for(var s=e;s--;){var o=t.times(t);t=o.times(o).minus(o).times(8).plus(1)}return n.precision-=e,t}var xe=function(){function n(i,r,s){var o,a=0,u=i.length;for(i=i.slice();u--;)o=i[u]*r+a,i[u]=o%s|0,a=o/s|0;return a&&i.unshift(a),i}function t(i,r,s,o){var a,u;if(s!=o)u=s>o?1:-1;else for(a=u=0;a<s;a++)if(i[a]!=r[a]){u=i[a]>r[a]?1:-1;break}return u}function e(i,r,s,o){for(var a=0;s--;)i[s]-=a,a=i[s]<r[s]?1:0,i[s]=a*o+i[s]-r[s];for(;!i[0]&&i.length>1;)i.shift()}return function(i,r,s,o,a,u){var l,c,f,h,g,v,p,m,d,b,x,M,A,y,w,C,D,S,R,H,L=i.constructor,O=i.s==r.s?1:-1,q=i.d,z=r.d;if(!q||!q[0]||!z||!z[0])return new L(!i.s||!r.s||(q?z&&q[0]==z[0]:!z)?NaN:q&&q[0]==0||!z?O*0:O/0);for(u?(g=1,c=i.e-r.e):(u=Gn,g=Vt,c=Qe(i.e/g)-Qe(r.e/g)),R=z.length,D=q.length,d=new L(O),b=d.d=[],f=0;z[f]==(q[f]||0);f++);if(z[f]>(q[f]||0)&&c--,s==null?(y=s=L.precision,o=L.rounding):a?y=s+(i.e-r.e)+1:y=s,y<0)b.push(1),v=!0;else{if(y=y/g+2|0,f=0,R==1){for(h=0,z=z[0],y++;(f<D||h)&&y--;f++)w=h*u+(q[f]||0),b[f]=w/z|0,h=w%z|0;v=h||f<D}else{for(h=u/(z[0]+1)|0,h>1&&(z=n(z,h,u),q=n(q,h,u),R=z.length,D=q.length),C=R,x=q.slice(0,R),M=x.length;M<R;)x[M++]=0;H=z.slice(),H.unshift(0),S=z[0],z[1]>=u/2&&++S;do h=0,l=t(z,x,R,M),l<0?(A=x[0],R!=M&&(A=A*u+(x[1]||0)),h=A/S|0,h>1?(h>=u&&(h=u-1),p=n(z,h,u),m=p.length,M=x.length,l=t(p,x,m,M),l==1&&(h--,e(p,R<m?H:z,m,u))):(h==0&&(l=h=1),p=z.slice()),m=p.length,m<M&&p.unshift(0),e(x,p,M,u),l==-1&&(M=x.length,l=t(z,x,R,M),l<1&&(h++,e(x,R<M?H:z,M,u))),M=x.length):l===0&&(h++,x=[0]),b[f++]=h,l&&x[0]?x[M++]=q[C]||0:(x=[q[C]],M=1);while((C++<D||x[0]!==void 0)&&y--);v=x[0]!==void 0}b[0]||b.shift()}if(g==1)d.e=c,ld=v;else{for(f=1,h=b[0];h>=10;h/=10)f++;d.e=f+c*g-1,Bt(d,a?s+d.e+1:s,o,v)}return d}}();function Bt(n,t,e,i){var r,s,o,a,u,l,c,f,h,g=n.constructor;t:if(t!=null){if(f=n.d,!f)return n;for(r=1,a=f[0];a>=10;a/=10)r++;if(s=t-r,s<0)s+=Vt,o=t,c=f[h=0],u=c/ze(10,r-o-1)%10|0;else if(h=Math.ceil((s+1)/Vt),a=f.length,h>=a)if(i){for(;a++<=h;)f.push(0);c=u=0,r=1,s%=Vt,o=s-Vt+1}else break t;else{for(c=a=f[h],r=1;a>=10;a/=10)r++;s%=Vt,o=s-Vt+r,u=o<0?0:c/ze(10,r-o-1)%10|0}if(i=i||t<0||f[h+1]!==void 0||(o<0?c:c%ze(10,r-o-1)),l=e<4?(u||i)&&(e==0||e==(n.s<0?3:2)):u>5||u==5&&(e==4||i||e==6&&(s>0?o>0?c/ze(10,r-o):0:f[h-1])%10&1||e==(n.s<0?8:7)),t<1||!f[0])return f.length=0,l?(t-=n.e+1,f[0]=ze(10,(Vt-t%Vt)%Vt),n.e=-t||0):f[0]=n.e=0,n;if(s==0?(f.length=h,a=1,h--):(f.length=h+1,a=ze(10,Vt-s),f[h]=o>0?(c/ze(10,r-o)%ze(10,o)|0)*a:0),l)for(;;)if(h==0){for(s=1,o=f[0];o>=10;o/=10)s++;for(o=f[0]+=a,a=1;o>=10;o/=10)a++;s!=a&&(n.e++,f[0]==Gn&&(f[0]=1));break}else{if(f[h]+=a,f[h]!=Gn)break;f[h--]=0,a=1}for(s=f.length;f[--s]===0;)f.pop()}return qt&&(n.e>g.maxE?(n.d=null,n.e=NaN):n.e<g.minE&&(n.e=0,n.d=[0])),n}function Kn(n,t,e){if(!n.isFinite())return vd(n);var i,r=n.e,s=qe(n.d),o=s.length;return t?(e&&(i=e-o)>0?s=s.charAt(0)+"."+s.slice(1)+Ai(i):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(n.e<0?"e":"e+")+n.e):r<0?(s="0."+Ai(-r-1)+s,e&&(i=e-o)>0&&(s+=Ai(i))):r>=o?(s+=Ai(r+1-o),e&&(i=e-r-1)>0&&(s=s+"."+Ai(i))):((i=r+1)<o&&(s=s.slice(0,i)+"."+s.slice(i)),e&&(i=e-o)>0&&(r+1===o&&(s+="."),s+=Ai(i))),s}function Ta(n,t){var e=n[0];for(t*=Vt;e>=10;e/=10)t++;return t}function da(n,t,e){if(t>Oy)throw qt=!0,e&&(n.precision=e),Error(fd);return Bt(new n(fa),t,1,!0)}function Zn(n,t,e){if(t>vc)throw Error(fd);return Bt(new n(ha),t,e,!0)}function md(n){var t=n.length-1,e=t*Vt+1;if(t=n[t],t){for(;t%10==0;t/=10)e--;for(t=n[0];t>=10;t/=10)e++}return e}function Ai(n){for(var t="";n--;)t+="0";return t}function gd(n,t,e,i){var r,s=new n(1),o=Math.ceil(i/Vt+4);for(qt=!1;;){if(e%2&&(s=s.times(t),Nf(s.d,o)&&(r=!0)),e=Qe(e/2),e===0){e=s.d.length-1,r&&s.d[e]===0&&++s.d[e];break}t=t.times(t),Nf(t.d,o)}return qt=!0,s}function Pf(n){return n.d[n.d.length-1]&1}function _d(n,t,e){for(var i,r,s=new n(t[0]),o=0;++o<t.length;){if(r=new n(t[o]),!r.s){s=r;break}i=s.cmp(r),(i===e||i===0&&s.s===e)&&(s=r)}return s}function Ec(n,t){var e,i,r,s,o,a,u,l=0,c=0,f=0,h=n.constructor,g=h.rounding,v=h.precision;if(!n.d||!n.d[0]||n.e>17)return new h(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:NaN);for(t==null?(qt=!1,u=v):u=t,a=new h(.03125);n.e>-2;)n=n.times(a),f+=5;for(i=Math.log(ze(2,f))/Math.LN10*2+5|0,u+=i,e=s=o=new h(1),h.precision=u;;){if(s=Bt(s.times(n),u,1),e=e.times(++c),a=o.plus(xe(s,e,u,1)),qe(a.d).slice(0,u)===qe(o.d).slice(0,u)){for(r=f;r--;)o=Bt(o.times(o),u,1);if(t==null)if(l<3&&Es(o.d,u-i,g,l))h.precision=u+=10,e=s=a=new h(1),c=0,l++;else return Bt(o,h.precision=v,g,qt=!0);else return h.precision=v,o}o=a}}function wi(n,t){var e,i,r,s,o,a,u,l,c,f,h,g=1,v=10,p=n,m=p.d,d=p.constructor,b=d.rounding,x=d.precision;if(p.s<0||!m||!m[0]||!p.e&&m[0]==1&&m.length==1)return new d(m&&!m[0]?-1/0:p.s!=1?NaN:m?0:p);if(t==null?(qt=!1,c=x):c=t,d.precision=c+=v,e=qe(m),i=e.charAt(0),Math.abs(s=p.e)<15e14){for(;i<7&&i!=1||i==1&&e.charAt(1)>3;)p=p.times(n),e=qe(p.d),i=e.charAt(0),g++;s=p.e,i>1?(p=new d("0."+e),s++):p=new d(i+"."+e.slice(1))}else return l=da(d,c+2,x).times(s+""),p=wi(new d(i+"."+e.slice(1)),c-v).plus(l),d.precision=x,t==null?Bt(p,x,b,qt=!0):p;for(f=p,u=o=p=xe(p.minus(1),p.plus(1),c,1),h=Bt(p.times(p),c,1),r=3;;){if(o=Bt(o.times(h),c,1),l=u.plus(xe(o,new d(r),c,1)),qe(l.d).slice(0,c)===qe(u.d).slice(0,c))if(u=u.times(2),s!==0&&(u=u.plus(da(d,c+2,x).times(s+""))),u=xe(u,new d(g),c,1),t==null)if(Es(u.d,c-v,b,a))d.precision=c+=v,l=o=p=xe(f.minus(1),f.plus(1),c,1),h=Bt(p.times(p),c,1),r=a=1;else return Bt(u,d.precision=x,b,qt=!0);else return d.precision=x,u;u=l,r+=2}}function vd(n){return String(n.s*n.s/0)}function Jo(n,t){var e,i,r;for((e=t.indexOf("."))>-1&&(t=t.replace(".","")),(i=t.search(/e/i))>0?(e<0&&(e=i),e+=+t.slice(i+1),t=t.substring(0,i)):e<0&&(e=t.length),i=0;t.charCodeAt(i)===48;i++);for(r=t.length;t.charCodeAt(r-1)===48;--r);if(t=t.slice(i,r),t){if(r-=i,n.e=e=e-i-1,n.d=[],i=(e+1)%Vt,e<0&&(i+=Vt),i<r){for(i&&n.d.push(+t.slice(0,i)),r-=Vt;i<r;)n.d.push(+t.slice(i,i+=Vt));t=t.slice(i),i=Vt-t.length}else i-=r;for(;i--;)t+="0";n.d.push(+t),qt&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function Vy(n,t){var e,i,r,s,o,a,u,l,c;if(t.indexOf("_")>-1){if(t=t.replace(/(\d)_(?=\d)/g,"$1"),pd.test(t))return Jo(n,t)}else if(t==="Infinity"||t==="NaN")return+t||(n.s=NaN),n.e=NaN,n.d=null,n;if(Ly.test(t))e=16,t=t.toLowerCase();else if(Iy.test(t))e=2;else if(Uy.test(t))e=8;else throw Error(Ui+t);for(s=t.search(/p/i),s>0?(u=+t.slice(s+1),t=t.substring(2,s)):t=t.slice(2),s=t.indexOf("."),o=s>=0,i=n.constructor,o&&(t=t.replace(".",""),a=t.length,s=a-s,r=gd(i,new i(e),s,s*2)),l=$o(t,e,Gn),c=l.length-1,s=c;l[s]===0;--s)l.pop();return s<0?new i(n.s*0):(n.e=Ta(l,c),n.d=l,qt=!1,o&&(n=xe(n,r,a*4)),u&&(n=n.times(Math.abs(u)<54?ze(2,u):$r.pow(2,u))),qt=!0,n)}function Hy(n,t){var e,i=t.d.length;if(i<3)return t.isZero()?t:Kr(n,2,t,t);e=1.4*Math.sqrt(i),e=e>16?16:e|0,t=t.times(1/Ca(5,e)),t=Kr(n,2,t,t);for(var r,s=new n(5),o=new n(16),a=new n(20);e--;)r=t.times(t),t=t.times(s.plus(r.times(o.times(r).minus(a))));return t}function Kr(n,t,e,i,r){var s,o,a,u,l=n.precision,c=Math.ceil(l/Vt);for(qt=!1,u=e.times(e),a=new n(i);;){if(o=xe(a.times(u),new n(t++*t++),l,1),a=r?i.plus(o):i.minus(o),i=xe(o.times(u),new n(t++*t++),l,1),o=a.plus(i),o.d[c]!==void 0){for(s=c;o.d[s]===a.d[s]&&s--;);if(s==-1)break}s=a,a=i,i=o,o=s}return qt=!0,o.d.length=c+1,o}function Ca(n,t){for(var e=n;--t;)e*=n;return e}function Ed(n,t){var e,i=t.s<0,r=Zn(n,n.precision,1),s=r.times(.5);if(t=t.abs(),t.lte(s))return li=i?4:1,t;if(e=t.divToInt(r),e.isZero())li=i?3:2;else{if(t=t.minus(e.times(r)),t.lte(s))return li=Pf(e)?i?2:3:i?4:1,t;li=Pf(e)?i?1:4:i?3:2}return t.minus(r).abs()}function qc(n,t,e,i){var r,s,o,a,u,l,c,f,h,g=n.constructor,v=e!==void 0;if(v?(ln(e,1,Oi),i===void 0?i=g.rounding:ln(i,0,8)):(e=g.precision,i=g.rounding),!n.isFinite())c=vd(n);else{for(c=Kn(n),o=c.indexOf("."),v?(r=2,t==16?e=e*4-3:t==8&&(e=e*3-2)):r=t,o>=0&&(c=c.replace(".",""),h=new g(1),h.e=c.length-o,h.d=$o(Kn(h),10,r),h.e=h.d.length),f=$o(c,10,r),s=u=f.length;f[--u]==0;)f.pop();if(!f[0])c=v?"0p+0":"0";else{if(o<0?s--:(n=new g(n),n.d=f,n.e=s,n=xe(n,h,e,i,0,r),f=n.d,s=n.e,l=ld),o=f[e],a=r/2,l=l||f[e+1]!==void 0,l=i<4?(o!==void 0||l)&&(i===0||i===(n.s<0?3:2)):o>a||o===a&&(i===4||l||i===6&&f[e-1]&1||i===(n.s<0?8:7)),f.length=e,l)for(;++f[--e]>r-1;)f[e]=0,e||(++s,f.unshift(1));for(u=f.length;!f[u-1];--u);for(o=0,c="";o<u;o++)c+=gc.charAt(f[o]);if(v){if(u>1)if(t==16||t==8){for(o=t==16?4:3,--u;u%o;u++)c+="0";for(f=$o(c,r,t),u=f.length;!f[u-1];--u);for(o=1,c="1.";o<u;o++)c+=gc.charAt(f[o])}else c=c.charAt(0)+"."+c.slice(1);c=c+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)c="0"+c;c="0."+c}else if(++s>u)for(s-=u;s--;)c+="0";else s<u&&(c=c.slice(0,s)+"."+c.slice(s))}c=(t==16?"0x":t==2?"0b":t==8?"0o":"")+c}return n.s<0?"-"+c:c}function Nf(n,t){if(n.length>t)return n.length=t,!0}function ky(n){return new this(n).abs()}function Gy(n){return new this(n).acos()}function Wy(n){return new this(n).acosh()}function Xy(n,t){return new this(n).plus(t)}function qy(n){return new this(n).asin()}function Yy(n){return new this(n).asinh()}function Zy(n){return new this(n).atan()}function jy(n){return new this(n).atanh()}function Ky(n,t){n=new this(n),t=new this(t);var e,i=this.precision,r=this.rounding,s=i+4;return!n.s||!t.s?e=new this(NaN):!n.d&&!t.d?(e=Zn(this,s,1).times(t.s>0?.25:.75),e.s=n.s):!t.d||n.isZero()?(e=t.s<0?Zn(this,i,r):new this(0),e.s=n.s):!n.d||t.isZero()?(e=Zn(this,s,1).times(.5),e.s=n.s):t.s<0?(this.precision=s,this.rounding=1,e=this.atan(xe(n,t,s,1)),t=Zn(this,s,1),this.precision=i,this.rounding=r,e=n.s<0?e.minus(t):e.plus(t)):e=this.atan(xe(n,t,s,1)),e}function $y(n){return new this(n).cbrt()}function Jy(n){return Bt(n=new this(n),n.e+1,2)}function Qy(n,t,e){return new this(n).clamp(t,e)}function t1(n){if(!n||typeof n!="object")throw Error(wa+"Object expected");var t,e,i,r=n.defaults===!0,s=["precision",1,Oi,"rounding",0,8,"toExpNeg",-Ir,0,"toExpPos",0,Ir,"maxE",0,Ir,"minE",-Ir,0,"modulo",0,9];for(t=0;t<s.length;t+=3)if(e=s[t],r&&(this[e]=_c[e]),(i=n[e])!==void 0)if(Qe(i)===i&&i>=s[t+1]&&i<=s[t+2])this[e]=i;else throw Error(Ui+e+": "+i);if(e="crypto",r&&(this[e]=_c[e]),(i=n[e])!==void 0)if(i===!0||i===!1||i===0||i===1)if(i)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[e]=!0;else throw Error(hd);else this[e]=!1;else throw Error(Ui+e+": "+i);return this}function e1(n){return new this(n).cos()}function n1(n){return new this(n).cosh()}function xd(n){var t,e,i;function r(s){var o,a,u,l=this;if(!(l instanceof r))return new r(s);if(l.constructor=r,If(s)){l.s=s.s,qt?!s.d||s.e>r.maxE?(l.e=NaN,l.d=null):s.e<r.minE?(l.e=0,l.d=[0]):(l.e=s.e,l.d=s.d.slice()):(l.e=s.e,l.d=s.d?s.d.slice():s.d);return}if(u=typeof s,u==="number"){if(s===0){l.s=1/s<0?-1:1,l.e=0,l.d=[0];return}if(s<0?(s=-s,l.s=-1):l.s=1,s===~~s&&s<1e7){for(o=0,a=s;a>=10;a/=10)o++;qt?o>r.maxE?(l.e=NaN,l.d=null):o<r.minE?(l.e=0,l.d=[0]):(l.e=o,l.d=[s]):(l.e=o,l.d=[s]);return}if(s*0!==0){s||(l.s=NaN),l.e=NaN,l.d=null;return}return Jo(l,s.toString())}if(u==="string")return(a=s.charCodeAt(0))===45?(s=s.slice(1),l.s=-1):(a===43&&(s=s.slice(1)),l.s=1),pd.test(s)?Jo(l,s):Vy(l,s);if(u==="bigint")return s<0?(s=-s,l.s=-1):l.s=1,Jo(l,s.toString());throw Error(Ui+s)}if(r.prototype=ut,r.ROUND_UP=0,r.ROUND_DOWN=1,r.ROUND_CEIL=2,r.ROUND_FLOOR=3,r.ROUND_HALF_UP=4,r.ROUND_HALF_DOWN=5,r.ROUND_HALF_EVEN=6,r.ROUND_HALF_CEIL=7,r.ROUND_HALF_FLOOR=8,r.EUCLID=9,r.config=r.set=t1,r.clone=xd,r.isDecimal=If,r.abs=ky,r.acos=Gy,r.acosh=Wy,r.add=Xy,r.asin=qy,r.asinh=Yy,r.atan=Zy,r.atanh=jy,r.atan2=Ky,r.cbrt=$y,r.ceil=Jy,r.clamp=Qy,r.cos=e1,r.cosh=n1,r.div=i1,r.exp=r1,r.floor=s1,r.hypot=o1,r.ln=a1,r.log=u1,r.log10=l1,r.log2=c1,r.max=f1,r.min=h1,r.mod=d1,r.mul=p1,r.pow=m1,r.random=g1,r.round=_1,r.sign=v1,r.sin=E1,r.sinh=x1,r.sqrt=y1,r.sub=M1,r.sum=D1,r.tan=S1,r.tanh=A1,r.trunc=b1,n===void 0&&(n={}),n&&n.defaults!==!0)for(i=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],t=0;t<i.length;)n.hasOwnProperty(e=i[t++])||(n[e]=this[e]);return r.config(n),r}function i1(n,t){return new this(n).div(t)}function r1(n){return new this(n).exp()}function s1(n){return Bt(n=new this(n),n.e+1,3)}function o1(){var n,t,e=new this(0);for(qt=!1,n=0;n<arguments.length;)if(t=new this(arguments[n++]),t.d)e.d&&(e=e.plus(t.times(t)));else{if(t.s)return qt=!0,new this(1/0);e=t}return qt=!0,e.sqrt()}function If(n){return n instanceof $r||n&&n.toStringTag===dd||!1}function a1(n){return new this(n).ln()}function u1(n,t){return new this(n).log(t)}function c1(n){return new this(n).log(2)}function l1(n){return new this(n).log(10)}function f1(){return _d(this,arguments,-1)}function h1(){return _d(this,arguments,1)}function d1(n,t){return new this(n).mod(t)}function p1(n,t){return new this(n).mul(t)}function m1(n,t){return new this(n).pow(t)}function g1(n){var t,e,i,r,s=0,o=new this(1),a=[];if(n===void 0?n=this.precision:ln(n,1,Oi),i=Math.ceil(n/Vt),this.crypto)if(crypto.getRandomValues)for(t=crypto.getRandomValues(new Uint32Array(i));s<i;)r=t[s],r>=429e7?t[s]=crypto.getRandomValues(new Uint32Array(1))[0]:a[s++]=r%1e7;else if(crypto.randomBytes){for(t=crypto.randomBytes(i*=4);s<i;)r=t[s]+(t[s+1]<<8)+(t[s+2]<<16)+((t[s+3]&127)<<24),r>=214e7?crypto.randomBytes(4).copy(t,s):(a.push(r%1e7),s+=4);s=i/4}else throw Error(hd);else for(;s<i;)a[s++]=Math.random()*1e7|0;for(i=a[--s],n%=Vt,i&&n&&(r=ze(10,Vt-n),a[s]=(i/r|0)*r);a[s]===0;s--)a.pop();if(s<0)e=0,a=[0];else{for(e=-1;a[0]===0;e-=Vt)a.shift();for(i=1,r=a[0];r>=10;r/=10)i++;i<Vt&&(e-=Vt-i)}return o.e=e,o.d=a,o}function _1(n){return Bt(n=new this(n),n.e+1,this.rounding)}function v1(n){return n=new this(n),n.d?n.d[0]?n.s:0*n.s:n.s||NaN}function E1(n){return new this(n).sin()}function x1(n){return new this(n).sinh()}function y1(n){return new this(n).sqrt()}function M1(n,t){return new this(n).sub(t)}function D1(){var n=0,t=arguments,e=new this(t[n]);for(qt=!1;e.s&&++n<t.length;)e=e.plus(t[n]);return qt=!0,Bt(e,this.precision,this.rounding)}function S1(n){return new this(n).tan()}function A1(n){return new this(n).tanh()}function b1(n){return Bt(n=new this(n),n.e+1,1)}ut[Symbol.for("nodejs.util.inspect.custom")]=ut.toString;ut[Symbol.toStringTag]="Decimal";var $r=ut.constructor=xd(_c);fa=new $r(fa);ha=new $r(ha);var w1="BigNumber",T1=["?on","config"],C1=he(w1,T1,n=>{var{on:t,config:e}=n,i=$r.clone({precision:e.precision,modulo:$r.EUCLID});return i.prototype=Object.create(i.prototype),i.prototype.type="BigNumber",i.prototype.isBigNumber=!0,i.prototype.toJSON=function(){return{mathjs:"BigNumber",value:this.toString()}},i.fromJSON=function(r){return new i(r.value)},t&&t("config",function(r,s){r.precision!==s.precision&&i.config({precision:r.precision})}),i},{isClass:!0});const je=Math.cosh||function(n){return Math.abs(n)<1e-9?1-n:(Math.exp(n)+Math.exp(-n))*.5},yn=Math.sinh||function(n){return Math.abs(n)<1e-9?n:(Math.exp(n)-Math.exp(-n))*.5},R1=function(n){const t=Math.PI/4;if(-t>n||n>t)return Math.cos(n)-1;const e=n*n;return e*(e*(e*(e*(e*(e*(e*(e/20922789888e3-1/87178291200)+1/479001600)-1/3628800)+1/40320)-1/720)+1/24)-1/2)},yu=function(n,t){return n=Math.abs(n),t=Math.abs(t),n<t&&([n,t]=[t,n]),n<1e8?Math.sqrt(n*n+t*t):(t/=n,n*Math.sqrt(1+t*t))},Cr=function(){throw SyntaxError("Invalid Param")};function Mu(n,t){const e=Math.abs(n),i=Math.abs(t);return n===0?Math.log(i):t===0?Math.log(e):e<3e3&&i<3e3?Math.log(n*n+t*t)*.5:(n=n*.5,t=t*.5,.5*Math.log(n*n+t*t)+Math.LN2)}const F1={re:0,im:0},Zi=function(n,t){const e=F1;if(n==null)e.re=e.im=0;else if(t!==void 0)e.re=n,e.im=t;else switch(typeof n){case"object":if("im"in n&&"re"in n)e.re=n.re,e.im=n.im;else if("abs"in n&&"arg"in n){if(!isFinite(n.abs)&&isFinite(n.arg))return rt.INFINITY;e.re=n.abs*Math.cos(n.arg),e.im=n.abs*Math.sin(n.arg)}else if("r"in n&&"phi"in n){if(!isFinite(n.r)&&isFinite(n.phi))return rt.INFINITY;e.re=n.r*Math.cos(n.phi),e.im=n.r*Math.sin(n.phi)}else n.length===2?(e.re=n[0],e.im=n[1]):Cr();break;case"string":e.im=e.re=0;const i=n.replace(/_/g,"").match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g);let r=1,s=0;i===null&&Cr();for(let o=0;o<i.length;o++){const a=i[o];a===" "||a==="	"||a===`
`||(a==="+"?r++:a==="-"?s++:a==="i"||a==="I"?(r+s===0&&Cr(),i[o+1]!==" "&&!isNaN(i[o+1])?(e.im+=parseFloat((s%2?"-":"")+i[o+1]),o++):e.im+=parseFloat((s%2?"-":"")+"1"),r=s=0):((r+s===0||isNaN(a))&&Cr(),i[o+1]==="i"||i[o+1]==="I"?(e.im+=parseFloat((s%2?"-":"")+a),o++):e.re+=parseFloat((s%2?"-":"")+a),r=s=0))}r+s>0&&Cr();break;case"number":e.im=0,e.re=n;break;default:Cr()}return isNaN(e.re)||isNaN(e.im),e};function rt(n,t){if(!(this instanceof rt))return new rt(n,t);const e=Zi(n,t);this.re=e.re,this.im=e.im}rt.prototype={re:0,im:0,sign:function(){const n=yu(this.re,this.im);return new rt(this.re/n,this.im/n)},add:function(n,t){const e=Zi(n,t),i=this.isInfinite(),r=!(isFinite(e.re)&&isFinite(e.im));return i||r?i&&r?rt.NAN:rt.INFINITY:new rt(this.re+e.re,this.im+e.im)},sub:function(n,t){const e=Zi(n,t),i=this.isInfinite(),r=!(isFinite(e.re)&&isFinite(e.im));return i||r?i&&r?rt.NAN:rt.INFINITY:new rt(this.re-e.re,this.im-e.im)},mul:function(n,t){const e=Zi(n,t),i=this.isInfinite(),r=!(isFinite(e.re)&&isFinite(e.im)),s=this.re===0&&this.im===0,o=e.re===0&&e.im===0;return i&&o||r&&s?rt.NAN:i||r?rt.INFINITY:e.im===0&&this.im===0?new rt(this.re*e.re,0):new rt(this.re*e.re-this.im*e.im,this.re*e.im+this.im*e.re)},div:function(n,t){const e=Zi(n,t),i=this.isInfinite(),r=!(isFinite(e.re)&&isFinite(e.im)),s=this.re===0&&this.im===0,o=e.re===0&&e.im===0;if(s&&o||i&&r)return rt.NAN;if(o||i)return rt.INFINITY;if(s||r)return rt.ZERO;if(e.im===0)return new rt(this.re/e.re,this.im/e.re);if(Math.abs(e.re)<Math.abs(e.im)){const a=e.re/e.im,u=e.re*a+e.im;return new rt((this.re*a+this.im)/u,(this.im*a-this.re)/u)}else{const a=e.im/e.re,u=e.im*a+e.re;return new rt((this.re+this.im*a)/u,(this.im-this.re*a)/u)}},pow:function(n,t){const e=Zi(n,t),i=this.re===0&&this.im===0;if(e.re===0&&e.im===0)return rt.ONE;if(e.im===0){if(this.im===0&&this.re>0)return new rt(Math.pow(this.re,e.re),0);if(this.re===0)switch((e.re%4+4)%4){case 0:return new rt(Math.pow(this.im,e.re),0);case 1:return new rt(0,Math.pow(this.im,e.re));case 2:return new rt(-Math.pow(this.im,e.re),0);case 3:return new rt(0,-Math.pow(this.im,e.re))}}if(i&&e.re>0)return rt.ZERO;const s=Math.atan2(this.im,this.re),o=Mu(this.re,this.im);let a=Math.exp(e.re*o-e.im*s),u=e.im*o+e.re*s;return new rt(a*Math.cos(u),a*Math.sin(u))},sqrt:function(){const n=this.re,t=this.im;if(t===0)return n>=0?new rt(Math.sqrt(n),0):new rt(0,Math.sqrt(-n));const e=yu(n,t);let i=Math.sqrt(.5*(e+Math.abs(n))),r=Math.abs(t)/(2*i);return n>=0?new rt(i,t<0?-r:r):new rt(r,t<0?-i:i)},exp:function(){const n=Math.exp(this.re);return this.im===0?new rt(n,0):new rt(n*Math.cos(this.im),n*Math.sin(this.im))},expm1:function(){const n=this.re,t=this.im;return new rt(Math.expm1(n)*Math.cos(t)+R1(t),Math.exp(n)*Math.sin(t))},log:function(){const n=this.re,t=this.im;return t===0&&n>0?new rt(Math.log(n),0):new rt(Mu(n,t),Math.atan2(t,n))},abs:function(){return yu(this.re,this.im)},arg:function(){return Math.atan2(this.im,this.re)},sin:function(){const n=this.re,t=this.im;return new rt(Math.sin(n)*je(t),Math.cos(n)*yn(t))},cos:function(){const n=this.re,t=this.im;return new rt(Math.cos(n)*je(t),-Math.sin(n)*yn(t))},tan:function(){const n=2*this.re,t=2*this.im,e=Math.cos(n)+je(t);return new rt(Math.sin(n)/e,yn(t)/e)},cot:function(){const n=2*this.re,t=2*this.im,e=Math.cos(n)-je(t);return new rt(-Math.sin(n)/e,yn(t)/e)},sec:function(){const n=this.re,t=this.im,e=.5*je(2*t)+.5*Math.cos(2*n);return new rt(Math.cos(n)*je(t)/e,Math.sin(n)*yn(t)/e)},csc:function(){const n=this.re,t=this.im,e=.5*je(2*t)-.5*Math.cos(2*n);return new rt(Math.sin(n)*je(t)/e,-Math.cos(n)*yn(t)/e)},asin:function(){const n=this.re,t=this.im,e=new rt(t*t-n*n+1,-2*n*t).sqrt(),i=new rt(e.re-t,e.im+n).log();return new rt(i.im,-i.re)},acos:function(){const n=this.re,t=this.im,e=new rt(t*t-n*n+1,-2*n*t).sqrt(),i=new rt(e.re-t,e.im+n).log();return new rt(Math.PI/2-i.im,i.re)},atan:function(){const n=this.re,t=this.im;if(n===0){if(t===1)return new rt(0,1/0);if(t===-1)return new rt(0,-1/0)}const e=n*n+(1-t)*(1-t),i=new rt((1-t*t-n*n)/e,-2*n/e).log();return new rt(-.5*i.im,.5*i.re)},acot:function(){const n=this.re,t=this.im;if(t===0)return new rt(Math.atan2(1,n),0);const e=n*n+t*t;return e!==0?new rt(n/e,-t/e).atan():new rt(n!==0?n/0:0,t!==0?-t/0:0).atan()},asec:function(){const n=this.re,t=this.im;if(n===0&&t===0)return new rt(0,1/0);const e=n*n+t*t;return e!==0?new rt(n/e,-t/e).acos():new rt(n!==0?n/0:0,t!==0?-t/0:0).acos()},acsc:function(){const n=this.re,t=this.im;if(n===0&&t===0)return new rt(Math.PI/2,1/0);const e=n*n+t*t;return e!==0?new rt(n/e,-t/e).asin():new rt(n!==0?n/0:0,t!==0?-t/0:0).asin()},sinh:function(){const n=this.re,t=this.im;return new rt(yn(n)*Math.cos(t),je(n)*Math.sin(t))},cosh:function(){const n=this.re,t=this.im;return new rt(je(n)*Math.cos(t),yn(n)*Math.sin(t))},tanh:function(){const n=2*this.re,t=2*this.im,e=je(n)+Math.cos(t);return new rt(yn(n)/e,Math.sin(t)/e)},coth:function(){const n=2*this.re,t=2*this.im,e=je(n)-Math.cos(t);return new rt(yn(n)/e,-Math.sin(t)/e)},csch:function(){const n=this.re,t=this.im,e=Math.cos(2*t)-je(2*n);return new rt(-2*yn(n)*Math.cos(t)/e,2*je(n)*Math.sin(t)/e)},sech:function(){const n=this.re,t=this.im,e=Math.cos(2*t)+je(2*n);return new rt(2*je(n)*Math.cos(t)/e,-2*yn(n)*Math.sin(t)/e)},asinh:function(){let n=this.im;this.im=-this.re,this.re=n;const t=this.asin();return this.re=-this.im,this.im=n,n=t.re,t.re=-t.im,t.im=n,t},acosh:function(){const n=this.acos();if(n.im<=0){const t=n.re;n.re=-n.im,n.im=t}else{const t=n.im;n.im=-n.re,n.re=t}return n},atanh:function(){const n=this.re,t=this.im,e=n>1&&t===0,i=1-n,r=1+n,s=i*i+t*t,o=s!==0?new rt((r*i-t*t)/s,(t*i+r*t)/s):new rt(n!==-1?n/0:0,t!==0?t/0:0),a=o.re;return o.re=Mu(o.re,o.im)/2,o.im=Math.atan2(o.im,a)/2,e&&(o.im=-o.im),o},acoth:function(){const n=this.re,t=this.im;if(n===0&&t===0)return new rt(0,Math.PI/2);const e=n*n+t*t;return e!==0?new rt(n/e,-t/e).atanh():new rt(n!==0?n/0:0,t!==0?-t/0:0).atanh()},acsch:function(){const n=this.re,t=this.im;if(t===0)return new rt(n!==0?Math.log(n+Math.sqrt(n*n+1)):1/0,0);const e=n*n+t*t;return e!==0?new rt(n/e,-t/e).asinh():new rt(n!==0?n/0:0,t!==0?-t/0:0).asinh()},asech:function(){const n=this.re,t=this.im;if(this.isZero())return rt.INFINITY;const e=n*n+t*t;return e!==0?new rt(n/e,-t/e).acosh():new rt(n!==0?n/0:0,t!==0?-t/0:0).acosh()},inverse:function(){if(this.isZero())return rt.INFINITY;if(this.isInfinite())return rt.ZERO;const n=this.re,t=this.im,e=n*n+t*t;return new rt(n/e,-t/e)},conjugate:function(){return new rt(this.re,-this.im)},neg:function(){return new rt(-this.re,-this.im)},ceil:function(n){return n=Math.pow(10,n||0),new rt(Math.ceil(this.re*n)/n,Math.ceil(this.im*n)/n)},floor:function(n){return n=Math.pow(10,n||0),new rt(Math.floor(this.re*n)/n,Math.floor(this.im*n)/n)},round:function(n){return n=Math.pow(10,n||0),new rt(Math.round(this.re*n)/n,Math.round(this.im*n)/n)},equals:function(n,t){const e=Zi(n,t);return Math.abs(e.re-this.re)<=rt.EPSILON&&Math.abs(e.im-this.im)<=rt.EPSILON},clone:function(){return new rt(this.re,this.im)},toString:function(){let n=this.re,t=this.im,e="";return this.isNaN()?"NaN":this.isInfinite()?"Infinity":(Math.abs(n)<rt.EPSILON&&(n=0),Math.abs(t)<rt.EPSILON&&(t=0),t===0?e+n:(n!==0?(e+=n,e+=" ",t<0?(t=-t,e+="-"):e+="+",e+=" "):t<0&&(t=-t,e+="-"),t!==1&&(e+=t),e+"i"))},toVector:function(){return[this.re,this.im]},valueOf:function(){return this.im===0?this.re:null},isNaN:function(){return isNaN(this.re)||isNaN(this.im)},isZero:function(){return this.im===0&&this.re===0},isFinite:function(){return isFinite(this.re)&&isFinite(this.im)},isInfinite:function(){return!this.isFinite()}};rt.ZERO=new rt(0,0);rt.ONE=new rt(1,0);rt.I=new rt(0,1);rt.PI=new rt(Math.PI,0);rt.E=new rt(Math.E,0);rt.INFINITY=new rt(1/0,1/0);rt.NAN=new rt(NaN,NaN);rt.EPSILON=1e-15;var P1="Complex",N1=[],I1=he(P1,N1,()=>(Object.defineProperty(rt,"name",{value:"Complex"}),rt.prototype.constructor=rt,rt.prototype.type="Complex",rt.prototype.isComplex=!0,rt.prototype.toJSON=function(){return{mathjs:"Complex",re:this.re,im:this.im}},rt.prototype.toPolar=function(){return{r:this.abs(),phi:this.arg()}},rt.prototype.format=function(n){var t="",e=this.im,i=this.re,r=mc(this.re,n),s=mc(this.im,n),o=Me(n)?n:n?n.precision:null;if(o!==null){var a=Math.pow(10,-o);Math.abs(i/e)<a&&(i=0),Math.abs(e/i)<a&&(e=0)}return e===0?t=r:i===0?e===1?t="i":e===-1?t="-i":t=s+"i":e<0?e===-1?t=r+" - i":t=r+" - "+s.substring(1)+"i":e===1?t=r+" + i":t=r+" + "+s+"i",t},rt.fromPolar=function(n){switch(arguments.length){case 1:{var t=arguments[0];if(typeof t=="object")return rt(t);throw new TypeError("Input has to be an object with r and phi keys.")}case 2:{var e=arguments[0],i=arguments[1];if(Me(e)){if(sd(i)&&i.hasBase("ANGLE")&&(i=i.toNumber("rad")),Me(i))return new rt({r:e,phi:i});throw new TypeError("Phi is not a number nor an angle unit.")}else throw new TypeError("Radius r is not a number.")}default:throw new SyntaxError("Wrong number of arguments in function fromPolar")}},rt.prototype.valueOf=rt.prototype.toString,rt.fromJSON=function(n){return new rt(n)},rt.compare=function(n,t){return n.re>t.re?1:n.re<t.re?-1:n.im>t.im?1:n.im<t.im?-1:0},rt),{isClass:!0});typeof BigInt>"u"&&(BigInt=function(n){if(isNaN(n))throw new Error("");return n});const Ut=BigInt(0),$t=BigInt(1),xs=BigInt(2),xc=BigInt(5),on=BigInt(10),L1=2e3,Mt={s:$t,n:Ut,d:$t};function ri(n,t){try{n=BigInt(n)}catch{throw Mi()}return n*t}function In(n){return typeof n=="bigint"?n:Math.floor(n)}function Se(n,t){if(t===Ut)throw Yc();const e=Object.create(Sn.prototype);e.s=n<Ut?-$t:$t,n=n<Ut?-n:n;const i=$i(n,t);return e.n=n/i,e.d=t/i,e}function Rr(n){const t={};let e=n,i=xs,r=xc-$t;for(;r<=e;){for(;e%i===Ut;)e/=i,t[i]=(t[i]||Ut)+$t;r+=$t+xs*i++}return e!==n?e>1&&(t[e]=(t[e]||Ut)+$t):t[n]=(t[n]||Ut)+$t,t}const We=function(n,t){let e=Ut,i=$t,r=$t;if(n!=null)if(t!==void 0){if(typeof n=="bigint")e=n;else{if(isNaN(n))throw Mi();if(n%1!==0)throw Lf();e=BigInt(n)}if(typeof t=="bigint")i=t;else{if(isNaN(t))throw Mi();if(t%1!==0)throw Lf();i=BigInt(t)}r=e*i}else if(typeof n=="object"){if("d"in n&&"n"in n)e=BigInt(n.n),i=BigInt(n.d),"s"in n&&(e*=BigInt(n.s));else if(0 in n)e=BigInt(n[0]),1 in n&&(i=BigInt(n[1]));else if(typeof n=="bigint")e=n;else throw Mi();r=e*i}else if(typeof n=="number"){if(isNaN(n))throw Mi();if(n<0&&(r=-$t,n=-n),n%1===0)e=BigInt(n);else{let s=1,o=0,a=1,u=1,l=1,c=1e7;for(n>=1&&(s=10**Math.floor(1+Math.log10(n)),n/=s);a<=c&&l<=c;){let f=(o+u)/(a+l);if(n===f){a+l<=c?(e=o+u,i=a+l):l>a?(e=u,i=l):(e=o,i=a);break}else n>f?(o+=u,a+=l):(u+=o,l+=a),a>c?(e=u,i=l):(e=o,i=a)}e=BigInt(e)*BigInt(s),i=BigInt(i)}}else if(typeof n=="string"){let s=0,o=Ut,a=Ut,u=Ut,l=$t,c=$t,f=n.replace(/_/g,"").match(/\d+|./g);if(f===null)throw Mi();if(f[s]==="-"?(r=-$t,s++):f[s]==="+"&&s++,f.length===s+1?a=ri(f[s++],r):f[s+1]==="."||f[s]==="."?(f[s]!=="."&&(o=ri(f[s++],r)),s++,(s+1===f.length||f[s+1]==="("&&f[s+3]===")"||f[s+1]==="'"&&f[s+3]==="'")&&(a=ri(f[s],r),l=on**BigInt(f[s].length),s++),(f[s]==="("&&f[s+2]===")"||f[s]==="'"&&f[s+2]==="'")&&(u=ri(f[s+1],r),c=on**BigInt(f[s+1].length)-$t,s+=3)):f[s+1]==="/"||f[s+1]===":"?(a=ri(f[s],r),l=ri(f[s+2],$t),s+=3):f[s+3]==="/"&&f[s+1]===" "&&(o=ri(f[s],r),a=ri(f[s+2],r),l=ri(f[s+4],$t),s+=5),f.length<=s)i=l*c,r=e=u+i*o+c*a;else throw Mi()}else if(typeof n=="bigint")e=n,r=n,i=$t;else throw Mi();if(i===Ut)throw Yc();Mt.s=r<Ut?-$t:$t,Mt.n=e<Ut?-e:e,Mt.d=i<Ut?-i:i};function U1(n,t,e){let i=$t;for(;t>Ut;n=n*n%e,t>>=$t)t&$t&&(i=i*n%e);return i}function B1(n,t){for(;t%xs===Ut;t/=xs);for(;t%xc===Ut;t/=xc);if(t===$t)return Ut;let e=on%t,i=1;for(;e!==$t;i++)if(e=e*on%t,i>L1)return Ut;return BigInt(i)}function O1(n,t,e){let i=$t,r=U1(on,e,t);for(let s=0;s<300;s++){if(i===r)return BigInt(s);i=i*on%t,r=r*on%t}return 0}function $i(n,t){if(!n)return t;if(!t)return n;for(;;){if(n%=t,!n)return t;if(t%=n,!t)return n}}function Sn(n,t){if(We(n,t),this instanceof Sn)n=$i(Mt.d,Mt.n),this.s=Mt.s,this.n=Mt.n/n,this.d=Mt.d/n;else return Se(Mt.s*Mt.n,Mt.d)}var Yc=function(){return new Error("Division by Zero")},Mi=function(){return new Error("Invalid argument")},Lf=function(){return new Error("Parameters must be integer")};Sn.prototype={s:$t,n:Ut,d:$t,abs:function(){return Se(this.n,this.d)},neg:function(){return Se(-this.s*this.n,this.d)},add:function(n,t){return We(n,t),Se(this.s*this.n*Mt.d+Mt.s*this.d*Mt.n,this.d*Mt.d)},sub:function(n,t){return We(n,t),Se(this.s*this.n*Mt.d-Mt.s*this.d*Mt.n,this.d*Mt.d)},mul:function(n,t){return We(n,t),Se(this.s*Mt.s*this.n*Mt.n,this.d*Mt.d)},div:function(n,t){return We(n,t),Se(this.s*Mt.s*this.n*Mt.d,this.d*Mt.n)},clone:function(){return Se(this.s*this.n,this.d)},mod:function(n,t){if(n===void 0)return Se(this.s*this.n%this.d,$t);if(We(n,t),Ut===Mt.n*this.d)throw Yc();return Se(this.s*(Mt.d*this.n)%(Mt.n*this.d),Mt.d*this.d)},gcd:function(n,t){return We(n,t),Se($i(Mt.n,this.n)*$i(Mt.d,this.d),Mt.d*this.d)},lcm:function(n,t){return We(n,t),Mt.n===Ut&&this.n===Ut?Se(Ut,$t):Se(Mt.n*this.n,$i(Mt.n,this.n)*$i(Mt.d,this.d))},inverse:function(){return Se(this.s*this.d,this.n)},pow:function(n,t){if(We(n,t),Mt.d===$t)return Mt.s<Ut?Se((this.s*this.d)**Mt.n,this.n**Mt.n):Se((this.s*this.n)**Mt.n,this.d**Mt.n);if(this.s<Ut)return null;let e=Rr(this.n),i=Rr(this.d),r=$t,s=$t;for(let o in e)if(o!=="1"){if(o==="0"){r=Ut;break}if(e[o]*=Mt.n,e[o]%Mt.d===Ut)e[o]/=Mt.d;else return null;r*=BigInt(o)**e[o]}for(let o in i)if(o!=="1"){if(i[o]*=Mt.n,i[o]%Mt.d===Ut)i[o]/=Mt.d;else return null;s*=BigInt(o)**i[o]}return Mt.s<Ut?Se(s,r):Se(r,s)},log:function(n,t){if(We(n,t),this.s<=Ut||Mt.s<=Ut)return null;const e={},i=Rr(Mt.n),r=Rr(Mt.d),s=Rr(this.n),o=Rr(this.d);for(const l in r)i[l]=(i[l]||Ut)-r[l];for(const l in o)s[l]=(s[l]||Ut)-o[l];for(const l in i)l!=="1"&&(e[l]=!0);for(const l in s)l!=="1"&&(e[l]=!0);let a=null,u=null;for(const l in e){const c=i[l]||Ut,f=s[l]||Ut;if(c===Ut){if(f!==Ut)return null;continue}let h=f,g=c;const v=$i(h,g);if(h/=v,g/=v,a===null&&u===null)a=h,u=g;else if(h*u!==a*g)return null}return a!==null&&u!==null?Se(a,u):null},equals:function(n,t){return We(n,t),this.s*this.n*Mt.d===Mt.s*Mt.n*this.d},lt:function(n,t){return We(n,t),this.s*this.n*Mt.d<Mt.s*Mt.n*this.d},lte:function(n,t){return We(n,t),this.s*this.n*Mt.d<=Mt.s*Mt.n*this.d},gt:function(n,t){return We(n,t),this.s*this.n*Mt.d>Mt.s*Mt.n*this.d},gte:function(n,t){return We(n,t),this.s*this.n*Mt.d>=Mt.s*Mt.n*this.d},compare:function(n,t){We(n,t);let e=this.s*this.n*Mt.d-Mt.s*Mt.n*this.d;return(Ut<e)-(e<Ut)},ceil:function(n){return n=on**BigInt(n||0),Se(In(this.s*n*this.n/this.d)+(n*this.n%this.d>Ut&&this.s>=Ut?$t:Ut),n)},floor:function(n){return n=on**BigInt(n||0),Se(In(this.s*n*this.n/this.d)-(n*this.n%this.d>Ut&&this.s<Ut?$t:Ut),n)},round:function(n){return n=on**BigInt(n||0),Se(In(this.s*n*this.n/this.d)+this.s*((this.s>=Ut?$t:Ut)+xs*(n*this.n%this.d)>this.d?$t:Ut),n)},roundTo:function(n,t){We(n,t);const e=this.n*Mt.d,i=this.d*Mt.n,r=e%i;let s=In(e/i);return r+r>=i&&s++,Se(this.s*s*Mt.n,Mt.d)},divisible:function(n,t){return We(n,t),!(!(Mt.n*this.d)||this.n*Mt.d%(Mt.n*this.d))},valueOf:function(){return Number(this.s*this.n)/Number(this.d)},toString:function(n){let t=this.n,e=this.d;n=n||15;let i=B1(t,e),r=O1(t,e,i),s=this.s<Ut?"-":"";if(s+=In(t/e),t%=e,t*=on,t&&(s+="."),i){for(let o=r;o--;)s+=In(t/e),t%=e,t*=on;s+="(";for(let o=i;o--;)s+=In(t/e),t%=e,t*=on;s+=")"}else for(let o=n;t&&o--;)s+=In(t/e),t%=e,t*=on;return s},toFraction:function(n){let t=this.n,e=this.d,i=this.s<Ut?"-":"";if(e===$t)i+=t;else{let r=In(t/e);n&&r>Ut&&(i+=r,i+=" ",t%=e),i+=t,i+="/",i+=e}return i},toLatex:function(n){let t=this.n,e=this.d,i=this.s<Ut?"-":"";if(e===$t)i+=t;else{let r=In(t/e);n&&r>Ut&&(i+=r,t%=e),i+="\\frac{",i+=t,i+="}{",i+=e,i+="}"}return i},toContinued:function(){let n=this.n,t=this.d,e=[];do{e.push(In(n/t));let i=n%t;n=t,t=i}while(n!==$t);return e},simplify:function(n){const t=BigInt(1/(n||.001)|0),e=this.abs(),i=e.toContinued();for(let r=1;r<i.length;r++){let s=Se(i[r-1],$t);for(let a=r-2;a>=0;a--)s=s.inverse().add(i[a]);let o=s.sub(e);if(o.n*t<o.d)return s.mul(this.s)}return this}};var z1="Fraction",V1=[],H1=he(z1,V1,()=>(Object.defineProperty(Sn,"name",{value:"Fraction"}),Sn.prototype.constructor=Sn,Sn.prototype.type="Fraction",Sn.prototype.isFraction=!0,Sn.prototype.toJSON=function(){return{mathjs:"Fraction",n:String(this.s*this.n),d:String(this.d)}},Sn.fromJSON=function(n){return new Sn(n)},Sn),{isClass:!0}),k1="Matrix",G1=[],W1=he(k1,G1,()=>{function n(){if(!(this instanceof n))throw new SyntaxError("Constructor must be called with the new operator")}return n.prototype.type="Matrix",n.prototype.isMatrix=!0,n.prototype.storage=function(){throw new Error("Cannot invoke storage on a Matrix interface")},n.prototype.datatype=function(){throw new Error("Cannot invoke datatype on a Matrix interface")},n.prototype.create=function(t,e){throw new Error("Cannot invoke create on a Matrix interface")},n.prototype.subset=function(t,e,i){throw new Error("Cannot invoke subset on a Matrix interface")},n.prototype.get=function(t){throw new Error("Cannot invoke get on a Matrix interface")},n.prototype.set=function(t,e,i){throw new Error("Cannot invoke set on a Matrix interface")},n.prototype.resize=function(t,e){throw new Error("Cannot invoke resize on a Matrix interface")},n.prototype.reshape=function(t,e){throw new Error("Cannot invoke reshape on a Matrix interface")},n.prototype.clone=function(){throw new Error("Cannot invoke clone on a Matrix interface")},n.prototype.size=function(){throw new Error("Cannot invoke size on a Matrix interface")},n.prototype.map=function(t,e){throw new Error("Cannot invoke map on a Matrix interface")},n.prototype.forEach=function(t){throw new Error("Cannot invoke forEach on a Matrix interface")},n.prototype[Symbol.iterator]=function(){throw new Error("Cannot iterate a Matrix interface")},n.prototype.toArray=function(){throw new Error("Cannot invoke toArray on a Matrix interface")},n.prototype.valueOf=function(){throw new Error("Cannot invoke valueOf on a Matrix interface")},n.prototype.format=function(t){throw new Error("Cannot invoke format on a Matrix interface")},n.prototype.toString=function(){throw new Error("Cannot invoke toString on a Matrix interface")},n},{isClass:!0});function Du(n,t,e){var i=n.constructor,r=new i(2),s="";if(e){if(e<1)throw new Error("size must be in greater than 0");if(!Ve(e))throw new Error("size must be an integer");if(n.greaterThan(r.pow(e-1).sub(1))||n.lessThan(r.pow(e-1).mul(-1)))throw new Error("Value must be in range [-2^".concat(e-1,", 2^").concat(e-1,"-1]"));if(!n.isInteger())throw new Error("Value must be an integer");n.lessThan(0)&&(n=n.add(r.pow(e))),s="i".concat(e)}switch(t){case 2:return"".concat(n.toBinary()).concat(s);case 8:return"".concat(n.toOctal()).concat(s);case 16:return"".concat(n.toHexadecimal()).concat(s);default:throw new Error("Base ".concat(t," not supported "))}}function X1(n,t){if(typeof t=="function")return t(n);if(!n.isFinite())return n.isNaN()?"NaN":n.gt(0)?"Infinity":"-Infinity";var{notation:e,precision:i,wordSize:r}=ad(t);switch(e){case"fixed":return Y1(n,i);case"exponential":return Uf(n,i);case"engineering":return q1(n,i);case"bin":return Du(n,2,r);case"oct":return Du(n,8,r);case"hex":return Du(n,16,r);case"auto":{var s=Bf(t==null?void 0:t.lowerExp,-3),o=Bf(t==null?void 0:t.upperExp,5);if(n.isZero())return"0";var a,u=n.toSignificantDigits(i),l=u.e;return l>=s&&l<o?a=u.toFixed():a=Uf(n,i),a.replace(/((\.\d*?)(0+))($|e)/,function(){var c=arguments[2],f=arguments[4];return c!=="."?c+f:f})}default:throw new Error('Unknown notation "'+e+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function q1(n,t){var e=n.e,i=e%3===0?e:e<0?e-3-e%3:e-e%3,r=n.mul(Math.pow(10,-i)),s=r.toPrecision(t);if(s.includes("e")){var o=n.constructor;s=new o(s).toFixed()}return s+"e"+(e>=0?"+":"")+i.toString()}function Uf(n,t){return t!==void 0?n.toExponential(t-1):n.toExponential()}function Y1(n,t){return n.toFixed(t)}function Bf(n,t){return Me(n)?n:Le(n)?n.toNumber():t}function Ie(n,t){var e=Z1(n,t);return t&&typeof t=="object"&&"truncate"in t&&e.length>t.truncate?e.substring(0,t.truncate-3)+"...":e}function Z1(n,t){if(typeof n=="number")return mc(n,t);if(Le(n))return X1(n,t);if(j1(n))return!t||t.fraction!=="decimal"?"".concat(n.s*n.n,"/").concat(n.d):n.toString();if(Array.isArray(n))return yd(n,t);if(Xn(n))return Of(n);if(typeof n=="function")return n.syntax?String(n.syntax):"function";if(n&&typeof n=="object"){if(typeof n.format=="function")return n.format(t);if(n&&n.toString(t)!=={}.toString())return n.toString(t);var e=Object.keys(n).map(i=>Of(i)+": "+Ie(n[i],t));return"{"+e.join(", ")+"}"}return String(n)}function Of(n){for(var t=String(n),e="",i=0;i<t.length;){var r=t.charAt(i);e+=r in zf?zf[r]:r,i++}return'"'+e+'"'}var zf={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"};function yd(n,t){if(Array.isArray(n)){for(var e="[",i=n.length,r=0;r<i;r++)r!==0&&(e+=", "),e+=yd(n[r],t);return e+="]",e}else return Ie(n,t)}function j1(n){return n&&typeof n=="object"&&typeof n.s=="bigint"&&typeof n.n=="bigint"&&typeof n.d=="bigint"||!1}function Ae(n,t,e){if(!(this instanceof Ae))throw new SyntaxError("Constructor must be called with the new operator");this.actual=n,this.expected=t,this.relation=e,this.message="Dimension mismatch ("+(Array.isArray(n)?"["+n.join(", ")+"]":n)+" "+(this.relation||"!=")+" "+(Array.isArray(t)?"["+t.join(", ")+"]":t)+")",this.stack=new Error().stack}Ae.prototype=new RangeError;Ae.prototype.constructor=RangeError;Ae.prototype.name="DimensionError";Ae.prototype.isDimensionError=!0;function Qr(n,t,e){if(!(this instanceof Qr))throw new SyntaxError("Constructor must be called with the new operator");this.index=n,arguments.length<3?(this.min=0,this.max=t):(this.min=t,this.max=e),this.min!==void 0&&this.index<this.min?this.message="Index out of range ("+this.index+" < "+this.min+")":this.max!==void 0&&this.index>=this.max?this.message="Index out of range ("+this.index+" > "+(this.max-1)+")":this.message="Index out of range ("+this.index+")",this.stack=new Error().stack}Qr.prototype=new RangeError;Qr.prototype.constructor=RangeError;Qr.prototype.name="IndexError";Qr.prototype.isIndexError=!0;function cn(n){for(var t=[];Array.isArray(n);)t.push(n.length),n=n[0];return t}function Md(n,t,e){var i,r=n.length;if(r!==t[e])throw new Ae(r,t[e]);if(e<t.length-1){var s=e+1;for(i=0;i<r;i++){var o=n[i];if(!Array.isArray(o))throw new Ae(t.length-1,t.length,"<");Md(n[i],t,s)}}else for(i=0;i<r;i++)if(Array.isArray(n[i]))throw new Ae(t.length+1,t.length,">")}function Vf(n,t){var e=t.length===0;if(e){if(Array.isArray(n))throw new Ae(n.length,0)}else Md(n,t,0)}function Te(n,t){if(n!==void 0){if(!Me(n)||!Ve(n))throw new TypeError("Index must be an integer (value: "+n+")");if(n<0||typeof t=="number"&&n>=t)throw new Qr(n,t)}}function yc(n,t,e){if(!Array.isArray(t))throw new TypeError("Array expected");if(t.length===0)throw new Error("Resizing to scalar is not supported");t.forEach(function(r){if(!Me(r)||!Ve(r)||r<0)throw new TypeError("Invalid size, must contain positive integers (size: "+Ie(t)+")")}),(Me(n)||Le(n))&&(n=[n]);var i=e!==void 0?e:0;return Mc(n,t,0,i),n}function Mc(n,t,e,i){var r,s,o=n.length,a=t[e],u=Math.min(o,a);if(n.length=a,e<t.length-1){var l=e+1;for(r=0;r<u;r++)s=n[r],Array.isArray(s)||(s=[s],n[r]=s),Mc(s,t,l,i);for(r=u;r<a;r++)s=[],n[r]=s,Mc(s,t,l,i)}else{for(r=0;r<u;r++)for(;Array.isArray(n[r]);)n[r]=n[r][0];for(r=u;r<a;r++)n[r]=i}}function Dd(n,t){var e=$1(n,!0),i=e.length;if(!Array.isArray(n)||!Array.isArray(t))throw new TypeError("Array expected");if(t.length===0)throw new Ae(0,i,"!=");t=Zc(t,i);var r=Sd(t);if(i!==r)throw new Ae(r,i,"!=");try{return K1(e,t)}catch(s){throw s instanceof Ae?new Ae(r,i,"!="):s}}function Zc(n,t){var e=Sd(n),i=n.slice(),r=-1,s=n.indexOf(r),o=n.indexOf(r,s+1)>=0;if(o)throw new Error("More than one wildcard in sizes");var a=s>=0,u=t%e===0;if(a)if(u)i[s]=-t/e;else throw new Error("Could not replace wildcard, since "+t+" is no multiple of "+-e);return i}function Sd(n){return n.reduce((t,e)=>t*e,1)}function K1(n,t){for(var e=n,i,r=t.length-1;r>0;r--){var s=t[r];i=[];for(var o=e.length/s,a=0;a<o;a++)i.push(e.slice(a*s,(a+1)*s));e=i}return e}function Ad(n,t,e,i){var r=i||cn(n);if(e)for(var s=0;s<e;s++)n=[n],r.unshift(1);for(n=bd(n,t,0);r.length<t;)r.push(1);return n}function bd(n,t,e){var i,r;if(Array.isArray(n)){var s=e+1;for(i=0,r=n.length;i<r;i++)n[i]=bd(n[i],t,s)}else for(var o=e;o<t;o++)n=[n];return n}function $1(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(!Array.isArray(n))return n;if(typeof t!="boolean")throw new TypeError("Boolean expected for second argument of flatten");var e=[];return t?r(n):i(n),e;function i(s){for(var o=0;o<s.length;o++){var a=s[o];Array.isArray(a)?i(a):e.push(a)}}function r(s){if(Array.isArray(s[0]))for(var o=0;o<s.length;o++)r(s[o]);else for(var a=0;a<s.length;a++)e.push(s[a])}}function jc(n,t){for(var e,i=0,r=0;r<n.length;r++){var s=n[r],o=Array.isArray(s);if(r===0&&o&&(i=s.length),o&&s.length!==i)return;var a=o?jc(s,t):t(s);if(e===void 0)e=a;else if(e!==a)return"mixed"}return e}function wd(n,t,e,i){if(i<e){if(n.length!==t.length)throw new Ae(n.length,t.length);for(var r=[],s=0;s<n.length;s++)r[s]=wd(n[s],t[s],e,i+1);return r}else return n.concat(t)}function J1(){var n=Array.prototype.slice.call(arguments,0,-1),t=Array.prototype.slice.call(arguments,-1);if(n.length===1)return n[0];if(n.length>1)return n.slice(1).reduce(function(e,i){return wd(e,i,t,0)},n[0]);throw new Error("Wrong number of arguments in function concat")}function Q1(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];for(var i=t.map(h=>h.length),r=Math.max(...i),s=new Array(r).fill(null),o=0;o<t.length;o++)for(var a=t[o],u=i[o],l=0;l<u;l++){var c=r-u+l;a[l]>s[c]&&(s[c]=a[l])}for(var f=0;f<t.length;f++)Td(t[f],s);return s}function Td(n,t){for(var e=t.length,i=n.length,r=0;r<i;r++){var s=e-i+r;if(n[r]<t[s]&&n[r]>1||n[r]>t[s])throw new Error("shape mismatch: mismatch is found in arg with shape (".concat(n,") not possible to broadcast dimension ").concat(i," with size ").concat(n[r]," to size ").concat(t[s]))}}function Hf(n,t){var e=cn(n);if(jr(e,t))return n;Td(e,t);var i=Q1(e,t),r=i.length,s=[...Array(r-e.length).fill(1),...e],o=eM(n);e.length<r&&(o=Dd(o,s),e=cn(o));for(var a=0;a<r;a++)e[a]<i[a]&&(o=tM(o,i[a],a),e=cn(o));return o}function tM(n,t,e){return J1(...Array(t).fill(n),e)}function Cd(n,t){if(!Array.isArray(n))throw new Error("Array expected");var e=cn(n);if(t.length!==e.length)throw new Ae(t.length,e.length);for(var i=0;i<t.length;i++)Te(t[i],e[i]);return t.reduce((r,s)=>r[s],n)}function kf(n,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(n.length===0)return[];if(e)return s(n);var i=[];return r(n,0);function r(o,a){if(Array.isArray(o)){for(var u=o.length,l=Array(u),c=0;c<u;c++)i[a]=c,l[c]=r(o[c],a+1);return l}else return t(o,i.slice(0,a),n)}function s(o){if(Array.isArray(o)){for(var a=o.length,u=Array(a),l=0;l<a;l++)u[l]=s(o[l]);return u}else return t(o)}}function eM(n){return sa([],n)}function pa(n,t,e){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(ca.isTypedFunction(n)){var r;if(i)r=1;else{var s=(t.isMatrix?t.size():cn(t)).map(()=>0),o=t.isMatrix?t.get(s):Cd(t,s);r=rM(n,o,s,t)}var a;if(t.isMatrix&&t.dataType!=="mixed"&&t.dataType!==void 0){var u=nM(n,r);a=u!==void 0?u:n}else a=n;return r>=1&&r<=3?{isUnary:r===1,fn:function(){for(var c=arguments.length,f=new Array(c),h=0;h<c;h++)f[h]=arguments[h];return Gf(a,f.slice(0,r),e,n.name)}}:{isUnary:!1,fn:function(){for(var c=arguments.length,f=new Array(c),h=0;h<c;h++)f[h]=arguments[h];return Gf(a,f,e,n.name)}}}return i===void 0?{isUnary:iM(n),fn:n}:{isUnary:i,fn:n}}function nM(n,t){var e=[];if(Object.entries(n.signatures).forEach(i=>{var[r,s]=i;r.split(",").length===t&&e.push(s)}),e.length===1)return e[0]}function iM(n){if(n.length!==1)return!1;var t=n.toString();if(/arguments/.test(t))return!1;var e=t.match(/\(.*?\)/);return!/\.\.\./.test(e)}function rM(n,t,e,i){for(var r=[t,e,i],s=3;s>0;s--){var o=r.slice(0,s);if(ca.resolve(n,o)!==null)return s}}function Gf(n,t,e,i){try{return n(...t)}catch(r){sM(r,t,e,i)}}function sM(n,t,e,i){var r;if(n instanceof TypeError&&((r=n.data)===null||r===void 0?void 0:r.category)==="wrongType"){var s=[];throw s.push("value: ".concat(Fi(t[0]))),t.length>=2&&s.push("index: ".concat(Fi(t[1]))),t.length>=3&&s.push("array: ".concat(Fi(t[2]))),new TypeError("Function ".concat(e," cannot apply callback arguments ")+"".concat(i,"(").concat(s.join(", "),") at index ").concat(JSON.stringify(t[1])))}else throw new TypeError("Function ".concat(e," cannot apply callback arguments ")+"to function ".concat(i,": ").concat(n.message))}var oM="DenseMatrix",aM=["Matrix"],uM=he(oM,aM,n=>{var{Matrix:t}=n;function e(c,f){if(!(this instanceof e))throw new SyntaxError("Constructor must be called with the new operator");if(f&&!Xn(f))throw new Error("Invalid datatype: "+f);if(Fe(c))c.type==="DenseMatrix"?(this._data=Ce(c._data),this._size=Ce(c._size),this._datatype=f||c._datatype):(this._data=c.toArray(),this._size=c.size(),this._datatype=f||c._datatype);else if(c&&Oe(c.data)&&Oe(c.size))this._data=c.data,this._size=c.size,Vf(this._data,this._size),this._datatype=f||c.datatype;else if(Oe(c))this._data=l(c),this._size=cn(this._data),Vf(this._data,this._size),this._datatype=f;else{if(c)throw new TypeError("Unsupported type of data ("+Fi(c)+")");this._data=[],this._size=[0],this._datatype=f}}e.prototype=new t,e.prototype.createDenseMatrix=function(c,f){return new e(c,f)},Object.defineProperty(e,"name",{value:"DenseMatrix"}),e.prototype.constructor=e,e.prototype.type="DenseMatrix",e.prototype.isDenseMatrix=!0,e.prototype.getDataType=function(){return jc(this._data,Fi)},e.prototype.storage=function(){return"dense"},e.prototype.datatype=function(){return this._datatype},e.prototype.create=function(c,f){return new e(c,f)},e.prototype.subset=function(c,f,h){switch(arguments.length){case 1:return i(this,c);case 2:case 3:return s(this,c,f,h);default:throw new SyntaxError("Wrong number of arguments")}},e.prototype.get=function(c){return Cd(this._data,c)},e.prototype.set=function(c,f,h){if(!Oe(c))throw new TypeError("Array expected");if(c.length<this._size.length)throw new Ae(c.length,this._size.length,"<");var g,v,p,m=c.map(function(b){return b+1});u(this,m,h);var d=this._data;for(g=0,v=c.length-1;g<v;g++)p=c[g],Te(p,d.length),d=d[p];return p=c[c.length-1],Te(p,d.length),d[p]=f,this};function i(c,f){if(!Wc(f))throw new TypeError("Invalid index");var h=f.isScalar();if(h)return c.get(f.min());var g=f.size();if(g.length!==c._size.length)throw new Ae(g.length,c._size.length);for(var v=f.min(),p=f.max(),m=0,d=c._size.length;m<d;m++)Te(v[m],c._size[m]),Te(p[m],c._size[m]);var b=new e([]),x=r(c._data,f);return b._size=x.size,b._datatype=c._datatype,b._data=x.data,b}function r(c,f){var h=f.size().length-1,g=Array(h);return{data:v(c),size:g};function v(p){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,d=f.dimension(m);return g[m]=d.size()[0],m<h?d.map(b=>(Te(b,p.length),v(p[b],m+1))).valueOf():d.map(b=>(Te(b,p.length),p[b])).valueOf()}}function s(c,f,h,g){if(!f||f.isIndex!==!0)throw new TypeError("Invalid index");var v=f.size(),p=f.isScalar(),m;if(Fe(h)?(m=h.size(),h=h.valueOf()):m=cn(h),p){if(m.length!==0)throw new TypeError("Scalar expected");c.set(f.min(),h,g)}else{if(!jr(m,v))try{m.length===0?h=Hf([h],v):h=Hf(h,v),m=cn(h)}catch{}if(v.length<c._size.length)throw new Ae(v.length,c._size.length,"<");if(m.length<v.length){for(var d=0,b=0;v[d]===1&&m[d]===1;)d++;for(;v[d]===1;)b++,d++;h=Ad(h,v.length,b,m)}if(!jr(v,m))throw new Ae(v,m,">");var x=f.max().map(function(M){return M+1});u(c,x,g),o(c._data,f,h)}return c}function o(c,f,h){var g=f.size().length-1;v(c,h);function v(p,m){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,b=f.dimension(d);d<g?b.forEach((x,M)=>{Te(x,p.length),v(p[x],m[M[0]],d+1)}):b.forEach((x,M)=>{Te(x,p.length),p[x]=m[M[0]]})}}e.prototype.resize=function(c,f,h){if(!aa(c))throw new TypeError("Array or Matrix expected");var g=c.valueOf().map(p=>Array.isArray(p)&&p.length===1?p[0]:p),v=h?this.clone():this;return a(v,g,f)};function a(c,f,h){if(f.length===0){for(var g=c._data;Oe(g);)g=g[0];return g}return c._size=f.slice(0),c._data=yc(c._data,c._size,h),c}e.prototype.reshape=function(c,f){var h=f?this.clone():this;h._data=Dd(h._data,c);var g=h._size.reduce((v,p)=>v*p);return h._size=Zc(c,g),h};function u(c,f,h){for(var g=c._size.slice(0),v=!1;g.length<f.length;)g.push(0),v=!0;for(var p=0,m=f.length;p<m;p++)f[p]>g[p]&&(g[p]=f[p],v=!0);v&&a(c,g,h)}e.prototype.clone=function(){var c=new e({data:Ce(this._data),size:Ce(this._size),datatype:this._datatype});return c},e.prototype.size=function(){return this._size.slice(0)},e.prototype.map=function(c){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,h=this,g=h._size.length-1;if(g<0)return h.clone();var v=pa(c,h,"map",f),p=v.fn,m=h.create(void 0,h._datatype);if(m._size=h._size,f||v.isUnary)return m._data=y(h._data),m;if(g===0){for(var d=h.valueOf(),b=Array(d.length),x=0;x<d.length;x++)b[x]=p(d[x],[x],h);return m._data=b,m}var M=[];return m._data=A(h._data),m;function A(w){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,D=Array(w.length);if(C<g)for(var S=0;S<w.length;S++)M[C]=S,D[S]=A(w[S],C+1);else for(var R=0;R<w.length;R++)M[C]=R,D[R]=p(w[R],M.slice(),h);return D}function y(w){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,D=Array(w.length);if(C<g)for(var S=0;S<w.length;S++)D[S]=y(w[S],C+1);else for(var R=0;R<w.length;R++)D[R]=p(w[R]);return D}},e.prototype.forEach=function(c){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,h=this,g=h._size.length-1;if(g<0)return;var v=pa(c,h,"map",f),p=v.fn;if(f||v.isUnary){x(h._data);return}if(g===0){for(var m=0;m<h._data.length;m++)p(h._data[m],[m],h);return}var d=[];b(h._data);function b(M){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(A<g)for(var y=0;y<M.length;y++)d[A]=y,b(M[y],A+1);else for(var w=0;w<M.length;w++)d[A]=w,p(M[w],d.slice(),h)}function x(M){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(A<g)for(var y=0;y<M.length;y++)x(M[y],A+1);else for(var w=0;w<M.length;w++)p(M[w])}},e.prototype[Symbol.iterator]=function*(){var c=this._size.length-1;if(!(c<0)){if(c===0){for(var f=0;f<this._data.length;f++)yield{value:this._data[f],index:[f]};return}var h=[],g=function*(p,m){if(m<c)for(var d=0;d<p.length;d++)h[m]=d,yield*g(p[d],m+1);else for(var b=0;b<p.length;b++)h[m]=b,yield{value:p[b],index:h.slice()}};yield*g(this._data,0)}},e.prototype.rows=function(){var c=[],f=this.size();if(f.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");var h=this._data;for(var g of h)c.push(new e([g],this._datatype));return c},e.prototype.columns=function(){var c=this,f=[],h=this.size();if(h.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");for(var g=this._data,v=function(d){var b=g.map(x=>[x[d]]);f.push(new e(b,c._datatype))},p=0;p<h[1];p++)v(p);return f},e.prototype.toArray=function(){return Ce(this._data)},e.prototype.valueOf=function(){return this._data},e.prototype.format=function(c){return Ie(this._data,c)},e.prototype.toString=function(){return Ie(this._data)},e.prototype.toJSON=function(){return{mathjs:"DenseMatrix",data:this._data,size:this._size,datatype:this._datatype}},e.prototype.diagonal=function(c){if(c){if(Le(c)&&(c=c.toNumber()),!Me(c)||!Ve(c))throw new TypeError("The parameter k must be an integer number")}else c=0;for(var f=c>0?c:0,h=c<0?-c:0,g=this._size[0],v=this._size[1],p=Math.min(g-h,v-f),m=[],d=0;d<p;d++)m[d]=this._data[d+h][d+f];return new e({data:m,size:[p],datatype:this._datatype})},e.diagonal=function(c,f,h,g){if(!Oe(c))throw new TypeError("Array expected, size parameter");if(c.length!==2)throw new Error("Only two dimensions matrix are supported");if(c=c.map(function(w){if(Le(w)&&(w=w.toNumber()),!Me(w)||!Ve(w)||w<1)throw new Error("Size values must be positive integers");return w}),h){if(Le(h)&&(h=h.toNumber()),!Me(h)||!Ve(h))throw new TypeError("The parameter k must be an integer number")}else h=0;var v=h>0?h:0,p=h<0?-h:0,m=c[0],d=c[1],b=Math.min(m-p,d-v),x;if(Oe(f)){if(f.length!==b)throw new Error("Invalid value array length");x=function(C){return f[C]}}else if(Fe(f)){var M=f.size();if(M.length!==1||M[0]!==b)throw new Error("Invalid matrix length");x=function(C){return f.get([C])}}else x=function(){return f};g||(g=Le(x(0))?x(0).mul(0):0);var A=[];if(c.length>0){A=yc(A,c,g);for(var y=0;y<b;y++)A[y+p][y+v]=x(y)}return new e({data:A,size:[m,d]})},e.fromJSON=function(c){return new e(c)},e.prototype.swapRows=function(c,f){if(!Me(c)||!Ve(c)||!Me(f)||!Ve(f))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return Te(c,this._size[0]),Te(f,this._size[0]),e._swapRows(c,f,this._data),this},e._swapRows=function(c,f,h){var g=h[c];h[c]=h[f],h[f]=g};function l(c){return Fe(c)?l(c.valueOf()):Oe(c)?c.map(l):c}return e},{isClass:!0});function sr(n,t,e){if(!e)return Fe(n)?n.map(r=>t(r),!1,!0):kf(n,t,!0);var i=r=>r===0?r:t(r);return Fe(n)?n.map(r=>i(r),!1,!0):kf(n,i,!0)}var Rd="number",Kc="number, number";function Fd(n){return Math.abs(n)}Fd.signature=Rd;function Pd(n,t){return n+t}Pd.signature=Kc;function Nd(n,t){return n-t}Nd.signature=Kc;function Id(n,t){return n*t}Id.signature=Kc;function Ld(n){return-n}Ld.signature=Rd;function cM(n,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1e-9,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;if(e<=0)throw new Error("Relative tolerance must be greater than 0");if(i<0)throw new Error("Absolute tolerance must be at least 0");return n.isNaN()||t.isNaN()?!1:!n.isFinite()||!t.isFinite()?n.eq(t):n.eq(t)?!0:n.minus(t).abs().lte(n.constructor.max(n.constructor.max(n.abs(),t.abs()).mul(e),i))}var Wf="isZero",lM=["typed","equalScalar"],fM=he(Wf,lM,n=>{var{typed:t,equalScalar:e}=n;return t(Wf,{"number | BigNumber | Complex | Fraction":i=>e(i,0),bigint:i=>i===0n,Unit:t.referToSelf(i=>r=>t.find(i,r.valueType())(r.value)),"Array | Matrix":t.referToSelf(i=>r=>sr(r,i))})});function hM(n,t,e,i){return la(n.re,t.re,e,i)&&la(n.im,t.im,e,i)}var dM=he("compareUnits",["typed"],n=>{var{typed:t}=n;return{"Unit, Unit":t.referToSelf(e=>(i,r)=>{if(!i.equalBase(r))throw new Error("Cannot compare units with different base");return t.find(e,[i.valueType(),r.valueType()])(i.value,r.value)})}}),ma="equalScalar",pM=["typed","config"],mM=he(ma,pM,n=>{var{typed:t,config:e}=n,i=dM({typed:t});return t(ma,{"boolean, boolean":function(s,o){return s===o},"number, number":function(s,o){return la(s,o,e.relTol,e.absTol)},"BigNumber, BigNumber":function(s,o){return s.eq(o)||cM(s,o,e.relTol,e.absTol)},"bigint, bigint":function(s,o){return s===o},"Fraction, Fraction":function(s,o){return s.equals(o)},"Complex, Complex":function(s,o){return hM(s,o,e.relTol,e.absTol)}},i)});he(ma,["typed","config"],n=>{var{typed:t,config:e}=n;return t(ma,{"number, number":function(r,s){return la(r,s,e.relTol,e.absTol)}})});var gM="SparseMatrix",_M=["typed","equalScalar","Matrix"],vM=he(gM,_M,n=>{var{typed:t,equalScalar:e,Matrix:i}=n;function r(p,m){if(!(this instanceof r))throw new SyntaxError("Constructor must be called with the new operator");if(m&&!Xn(m))throw new Error("Invalid datatype: "+m);if(Fe(p))s(this,p,m);else if(p&&Oe(p.index)&&Oe(p.ptr)&&Oe(p.size))this._values=p.values,this._index=p.index,this._ptr=p.ptr,this._size=p.size,this._datatype=m||p.datatype;else if(Oe(p))o(this,p,m);else{if(p)throw new TypeError("Unsupported type of data ("+Fi(p)+")");this._values=[],this._index=[],this._ptr=[0],this._size=[0,0],this._datatype=m}}function s(p,m,d){m.type==="SparseMatrix"?(p._values=m._values?Ce(m._values):void 0,p._index=Ce(m._index),p._ptr=Ce(m._ptr),p._size=Ce(m._size),p._datatype=d||m._datatype):o(p,m.valueOf(),d||m._datatype)}function o(p,m,d){p._values=[],p._index=[],p._ptr=[],p._datatype=d;var b=m.length,x=0,M=e,A=0;if(Xn(d)&&(M=t.find(e,[d,d])||e,A=t.convert(0,d)),b>0){var y=0;do{p._ptr.push(p._index.length);for(var w=0;w<b;w++){var C=m[w];if(Oe(C)){if(y===0&&x<C.length&&(x=C.length),y<C.length){var D=C[y];M(D,A)||(p._values.push(D),p._index.push(w))}}else y===0&&x<1&&(x=1),M(C,A)||(p._values.push(C),p._index.push(w))}y++}while(y<x)}p._ptr.push(p._index.length),p._size=[b,x]}r.prototype=new i,r.prototype.createSparseMatrix=function(p,m){return new r(p,m)},Object.defineProperty(r,"name",{value:"SparseMatrix"}),r.prototype.constructor=r,r.prototype.type="SparseMatrix",r.prototype.isSparseMatrix=!0,r.prototype.getDataType=function(){return jc(this._values,Fi)},r.prototype.storage=function(){return"sparse"},r.prototype.datatype=function(){return this._datatype},r.prototype.create=function(p,m){return new r(p,m)},r.prototype.density=function(){var p=this._size[0],m=this._size[1];return p!==0&&m!==0?this._index.length/(p*m):0},r.prototype.subset=function(p,m,d){if(!this._values)throw new Error("Cannot invoke subset on a Pattern only matrix");switch(arguments.length){case 1:return a(this,p);case 2:case 3:return u(this,p,m,d);default:throw new SyntaxError("Wrong number of arguments")}};function a(p,m){if(!Wc(m))throw new TypeError("Invalid index");var d=m.isScalar();if(d)return p.get(m.min());var b=m.size();if(b.length!==p._size.length)throw new Ae(b.length,p._size.length);var x,M,A,y,w=m.min(),C=m.max();for(x=0,M=p._size.length;x<M;x++)Te(w[x],p._size[x]),Te(C[x],p._size[x]);var D=p._values,S=p._index,R=p._ptr,H=m.dimension(0),L=m.dimension(1),O=[],q=[];H.forEach(function(Y,Q){q[Y]=Q[0],O[Y]=!0});var z=D?[]:void 0,W=[],U=[];return L.forEach(function(Y){for(U.push(W.length),A=R[Y],y=R[Y+1];A<y;A++)x=S[A],O[x]===!0&&(W.push(q[x]),z&&z.push(D[A]))}),U.push(W.length),new r({values:z,index:W,ptr:U,size:b,datatype:p._datatype})}function u(p,m,d,b){if(!m||m.isIndex!==!0)throw new TypeError("Invalid index");var x=m.size(),M=m.isScalar(),A;if(Fe(d)?(A=d.size(),d=d.toArray()):A=cn(d),M){if(A.length!==0)throw new TypeError("Scalar expected");p.set(m.min(),d,b)}else{if(x.length!==1&&x.length!==2)throw new Ae(x.length,p._size.length,"<");if(A.length<x.length){for(var y=0,w=0;x[y]===1&&A[y]===1;)y++;for(;x[y]===1;)w++,y++;d=Ad(d,x.length,w,A)}if(!jr(x,A))throw new Ae(x,A,">");if(x.length===1){var C=m.dimension(0);C.forEach(function(R,H){Te(R),p.set([R,0],d[H[0]],b)})}else{var D=m.dimension(0),S=m.dimension(1);D.forEach(function(R,H){Te(R),S.forEach(function(L,O){Te(L),p.set([R,L],d[H[0]][O[0]],b)})})}}return p}r.prototype.get=function(p){if(!Oe(p))throw new TypeError("Array expected");if(p.length!==this._size.length)throw new Ae(p.length,this._size.length);if(!this._values)throw new Error("Cannot invoke get on a Pattern only matrix");var m=p[0],d=p[1];Te(m,this._size[0]),Te(d,this._size[1]);var b=l(m,this._ptr[d],this._ptr[d+1],this._index);return b<this._ptr[d+1]&&this._index[b]===m?this._values[b]:0},r.prototype.set=function(p,m,d){if(!Oe(p))throw new TypeError("Array expected");if(p.length!==this._size.length)throw new Ae(p.length,this._size.length);if(!this._values)throw new Error("Cannot invoke set on a Pattern only matrix");var b=p[0],x=p[1],M=this._size[0],A=this._size[1],y=e,w=0;Xn(this._datatype)&&(y=t.find(e,[this._datatype,this._datatype])||e,w=t.convert(0,this._datatype)),(b>M-1||x>A-1)&&(h(this,Math.max(b+1,M),Math.max(x+1,A),d),M=this._size[0],A=this._size[1]),Te(b,M),Te(x,A);var C=l(b,this._ptr[x],this._ptr[x+1],this._index);return C<this._ptr[x+1]&&this._index[C]===b?y(m,w)?c(C,x,this._values,this._index,this._ptr):this._values[C]=m:y(m,w)||f(C,b,x,m,this._values,this._index,this._ptr),this};function l(p,m,d,b){if(d-m===0)return d;for(var x=m;x<d;x++)if(b[x]===p)return x;return m}function c(p,m,d,b,x){d.splice(p,1),b.splice(p,1);for(var M=m+1;M<x.length;M++)x[M]--}function f(p,m,d,b,x,M,A){x.splice(p,0,b),M.splice(p,0,m);for(var y=d+1;y<A.length;y++)A[y]++}r.prototype.resize=function(p,m,d){if(!aa(p))throw new TypeError("Array or Matrix expected");var b=p.valueOf().map(M=>Array.isArray(M)&&M.length===1?M[0]:M);if(b.length!==2)throw new Error("Only two dimensions matrix are supported");b.forEach(function(M){if(!Me(M)||!Ve(M)||M<0)throw new TypeError("Invalid size, must contain positive integers (size: "+Ie(b)+")")});var x=d?this.clone():this;return h(x,b[0],b[1],m)};function h(p,m,d,b){var x=b||0,M=e,A=0;Xn(p._datatype)&&(M=t.find(e,[p._datatype,p._datatype])||e,A=t.convert(0,p._datatype),x=t.convert(x,p._datatype));var y=!M(x,A),w=p._size[0],C=p._size[1],D,S,R;if(d>C){for(S=C;S<d;S++)if(p._ptr[S]=p._values.length,y)for(D=0;D<w;D++)p._values.push(x),p._index.push(D);p._ptr[d]=p._values.length}else d<C&&(p._ptr.splice(d+1,C-d),p._values.splice(p._ptr[d],p._values.length),p._index.splice(p._ptr[d],p._index.length));if(C=d,m>w){if(y){var H=0;for(S=0;S<C;S++){p._ptr[S]=p._ptr[S]+H,R=p._ptr[S+1]+H;var L=0;for(D=w;D<m;D++,L++)p._values.splice(R+L,0,x),p._index.splice(R+L,0,D),H++}p._ptr[C]=p._values.length}}else if(m<w){var O=0;for(S=0;S<C;S++){p._ptr[S]=p._ptr[S]-O;var q=p._ptr[S],z=p._ptr[S+1]-O;for(R=q;R<z;R++)D=p._index[R],D>m-1&&(p._values.splice(R,1),p._index.splice(R,1),O++)}p._ptr[S]=p._values.length}return p._size[0]=m,p._size[1]=d,p}r.prototype.reshape=function(p,m){if(!Oe(p))throw new TypeError("Array expected");if(p.length!==2)throw new Error("Sparse matrices can only be reshaped in two dimensions");p.forEach(function(Y){if(!Me(Y)||!Ve(Y)||Y<=-2||Y===0)throw new TypeError("Invalid size, must contain positive integers or -1 (size: "+Ie(p)+")")});var d=this._size[0]*this._size[1];p=Zc(p,d);var b=p[0]*p[1];if(d!==b)throw new Error("Reshaping sparse matrix will result in the wrong number of elements");var x=m?this.clone():this;if(this._size[0]===p[0]&&this._size[1]===p[1])return x;for(var M=[],A=0;A<x._ptr.length;A++)for(var y=0;y<x._ptr[A+1]-x._ptr[A];y++)M.push(A);for(var w=x._values.slice(),C=x._index.slice(),D=0;D<x._index.length;D++){var S=C[D],R=M[D],H=S*x._size[1]+R;M[D]=H%p[1],C[D]=Math.floor(H/p[1])}x._values.length=0,x._index.length=0,x._ptr.length=p[1]+1,x._size=p.slice();for(var L=0;L<x._ptr.length;L++)x._ptr[L]=0;for(var O=0;O<w.length;O++){var q=C[O],z=M[O],W=w[O],U=l(q,x._ptr[z],x._ptr[z+1],x._index);f(U,q,z,W,x._values,x._index,x._ptr)}return x},r.prototype.clone=function(){var p=new r({values:this._values?Ce(this._values):void 0,index:Ce(this._index),ptr:Ce(this._ptr),size:Ce(this._size),datatype:this._datatype});return p},r.prototype.size=function(){return this._size.slice(0)},r.prototype.map=function(p,m){if(!this._values)throw new Error("Cannot invoke map on a Pattern only matrix");var d=this,b=this._size[0],x=this._size[1],M=pa(p,d,"map"),A=function(w,C,D){return M.fn(w,[C,D],d)};return g(this,0,b-1,0,x-1,A,m)};function g(p,m,d,b,x,M,A){var y=[],w=[],C=[],D=e,S=0;Xn(p._datatype)&&(D=t.find(e,[p._datatype,p._datatype])||e,S=t.convert(0,p._datatype));for(var R=function(xt,J,nt){var lt=M(xt,J,nt);D(lt,S)||(y.push(lt),w.push(J))},H=b;H<=x;H++){C.push(y.length);var L=p._ptr[H],O=p._ptr[H+1];if(A)for(var q=L;q<O;q++){var z=p._index[q];z>=m&&z<=d&&R(p._values[q],z-m,H-b)}else{for(var W={},U=L;U<O;U++){var Y=p._index[U];W[Y]=p._values[U]}for(var Q=m;Q<=d;Q++){var ot=Q in W?W[Q]:0;R(ot,Q-m,H-b)}}}return C.push(y.length),new r({values:y,index:w,ptr:C,size:[d-m+1,x-b+1]})}r.prototype.forEach=function(p,m){if(!this._values)throw new Error("Cannot invoke forEach on a Pattern only matrix");for(var d=this,b=this._size[0],x=this._size[1],M=pa(p,d,"forEach"),A=0;A<x;A++){var y=this._ptr[A],w=this._ptr[A+1];if(m)for(var C=y;C<w;C++){var D=this._index[C];M.fn(this._values[C],[D,A],d)}else{for(var S={},R=y;R<w;R++){var H=this._index[R];S[H]=this._values[R]}for(var L=0;L<b;L++){var O=L in S?S[L]:0;M.fn(O,[L,A],d)}}}},r.prototype[Symbol.iterator]=function*(){if(!this._values)throw new Error("Cannot iterate a Pattern only matrix");for(var p=this._size[1],m=0;m<p;m++)for(var d=this._ptr[m],b=this._ptr[m+1],x=d;x<b;x++){var M=this._index[x];yield{value:this._values[x],index:[M,m]}}},r.prototype.toArray=function(){return v(this._values,this._index,this._ptr,this._size,!0)},r.prototype.valueOf=function(){return v(this._values,this._index,this._ptr,this._size,!1)};function v(p,m,d,b,x){var M=b[0],A=b[1],y=[],w,C;for(w=0;w<M;w++)for(y[w]=[],C=0;C<A;C++)y[w][C]=0;for(C=0;C<A;C++)for(var D=d[C],S=d[C+1],R=D;R<S;R++)w=m[R],y[w][C]=p?x?Ce(p[R]):p[R]:1;return y}return r.prototype.format=function(p){for(var m=this._size[0],d=this._size[1],b=this.density(),x="Sparse Matrix ["+Ie(m,p)+" x "+Ie(d,p)+"] density: "+Ie(b,p)+`
`,M=0;M<d;M++)for(var A=this._ptr[M],y=this._ptr[M+1],w=A;w<y;w++){var C=this._index[w];x+=`
    (`+Ie(C,p)+", "+Ie(M,p)+") ==> "+(this._values?Ie(this._values[w],p):"X")}return x},r.prototype.toString=function(){return Ie(this.toArray())},r.prototype.toJSON=function(){return{mathjs:"SparseMatrix",values:this._values,index:this._index,ptr:this._ptr,size:this._size,datatype:this._datatype}},r.prototype.diagonal=function(p){if(p){if(Le(p)&&(p=p.toNumber()),!Me(p)||!Ve(p))throw new TypeError("The parameter k must be an integer number")}else p=0;var m=p>0?p:0,d=p<0?-p:0,b=this._size[0],x=this._size[1],M=Math.min(b-d,x-m),A=[],y=[],w=[];w[0]=0;for(var C=m;C<x&&A.length<M;C++)for(var D=this._ptr[C],S=this._ptr[C+1],R=D;R<S;R++){var H=this._index[R];if(H===C-m+d){A.push(this._values[R]),y[A.length-1]=H-d;break}}return w.push(A.length),new r({values:A,index:y,ptr:w,size:[M,1]})},r.fromJSON=function(p){return new r(p)},r.diagonal=function(p,m,d,b,x){if(!Oe(p))throw new TypeError("Array expected, size parameter");if(p.length!==2)throw new Error("Only two dimensions matrix are supported");if(p=p.map(function(Y){if(Le(Y)&&(Y=Y.toNumber()),!Me(Y)||!Ve(Y)||Y<1)throw new Error("Size values must be positive integers");return Y}),d){if(Le(d)&&(d=d.toNumber()),!Me(d)||!Ve(d))throw new TypeError("The parameter k must be an integer number")}else d=0;var M=e,A=0;Xn(x)&&(M=t.find(e,[x,x])||e,A=t.convert(0,x));var y=d>0?d:0,w=d<0?-d:0,C=p[0],D=p[1],S=Math.min(C-w,D-y),R;if(Oe(m)){if(m.length!==S)throw new Error("Invalid value array length");R=function(Q){return m[Q]}}else if(Fe(m)){var H=m.size();if(H.length!==1||H[0]!==S)throw new Error("Invalid matrix length");R=function(Q){return m.get([Q])}}else R=function(){return m};for(var L=[],O=[],q=[],z=0;z<D;z++){q.push(L.length);var W=z-y;if(W>=0&&W<S){var U=R(W);M(U,A)||(O.push(W+w),L.push(U))}}return q.push(L.length),new r({values:L,index:O,ptr:q,size:[C,D]})},r.prototype.swapRows=function(p,m){if(!Me(p)||!Ve(p)||!Me(m)||!Ve(m))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return Te(p,this._size[0]),Te(m,this._size[0]),r._swapRows(p,m,this._size[1],this._values,this._index,this._ptr),this},r._forEachRow=function(p,m,d,b,x){for(var M=b[p],A=b[p+1],y=M;y<A;y++)x(d[y],m[y])},r._swapRows=function(p,m,d,b,x,M){for(var A=0;A<d;A++){var y=M[A],w=M[A+1],C=l(p,y,w,x),D=l(m,y,w,x);if(C<w&&D<w&&x[C]===p&&x[D]===m){if(b){var S=b[C];b[C]=b[D],b[D]=S}continue}if(C<w&&x[C]===p&&(D>=w||x[D]!==m)){var R=b?b[C]:void 0;x.splice(D,0,m),b&&b.splice(D,0,R),x.splice(D<=C?C+1:C,1),b&&b.splice(D<=C?C+1:C,1);continue}if(D<w&&x[D]===m&&(C>=w||x[C]!==p)){var H=b?b[D]:void 0;x.splice(C,0,p),b&&b.splice(C,0,H),x.splice(C<=D?D+1:D,1),b&&b.splice(C<=D?D+1:D,1)}}},r},{isClass:!0}),EM="number",xM=["typed"];function yM(n){var t=n.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/);if(t){var e={"0b":2,"0o":8,"0x":16}[t[1]],i=t[2],r=t[3];return{input:n,radix:e,integerPart:i,fractionalPart:r}}else return null}function MM(n){for(var t=parseInt(n.integerPart,n.radix),e=0,i=0;i<n.fractionalPart.length;i++){var r=parseInt(n.fractionalPart[i],n.radix);e+=r/Math.pow(n.radix,i+1)}var s=t+e;if(isNaN(s))throw new SyntaxError('String "'+n.input+'" is not a valid number');return s}var DM=he(EM,xM,n=>{var{typed:t}=n,e=t("number",{"":function(){return 0},number:function(r){return r},string:function(r){if(r==="NaN")return NaN;var s=yM(r);if(s)return MM(s);var o=0,a=r.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);a&&(o=Number(a[2]),r=a[1]);var u=Number(r);if(isNaN(u))throw new SyntaxError('String "'+r+'" is not a valid number');if(a){if(u>2**o-1)throw new SyntaxError('String "'.concat(r,'" is out of range'));u>=2**(o-1)&&(u=u-2**o)}return u},BigNumber:function(r){return r.toNumber()},bigint:function(r){return Number(r)},Fraction:function(r){return r.valueOf()},Unit:t.referToSelf(i=>r=>{var s=r.clone();return s.value=i(r.value),s}),null:function(r){return 0},"Unit, string | Unit":function(r,s){return r.toNumber(s)},"Array | Matrix":t.referToSelf(i=>r=>sr(r,i))});return e.fromJSON=function(i){return parseFloat(i.value)},e}),SM="bignumber",AM=["typed","BigNumber"],bM=he(SM,AM,n=>{var{typed:t,BigNumber:e}=n;return t("bignumber",{"":function(){return new e(0)},number:function(r){return new e(r+"")},string:function(r){var s=r.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);if(s){var o=s[2],a=e(s[1]),u=new e(2).pow(Number(o));if(a.gt(u.sub(1)))throw new SyntaxError('String "'.concat(r,'" is out of range'));var l=new e(2).pow(Number(o)-1);return a.gte(l)?a.sub(u):a}return new e(r)},BigNumber:function(r){return r},bigint:function(r){return new e(r.toString())},Unit:t.referToSelf(i=>r=>{var s=r.clone();return s.value=i(r.value),s}),Fraction:function(r){return new e(String(r.n)).div(String(r.d)).times(String(r.s))},null:function(r){return new e(0)},"Array | Matrix":t.referToSelf(i=>r=>sr(r,i))})}),wM="fraction",TM=["typed","Fraction"],CM=he(wM,TM,n=>{var{typed:t,Fraction:e}=n;return t("fraction",{number:function(r){if(!isFinite(r)||isNaN(r))throw new Error(r+" cannot be represented as a fraction");return new e(r)},string:function(r){return new e(r)},"number, number":function(r,s){return new e(r,s)},"bigint, bigint":function(r,s){return new e(r,s)},null:function(r){return new e(0)},BigNumber:function(r){return new e(r.toString())},bigint:function(r){return new e(r.toString())},Fraction:function(r){return r},Unit:t.referToSelf(i=>r=>{var s=r.clone();return s.value=i(r.value),s}),Object:function(r){return new e(r)},"Array | Matrix":t.referToSelf(i=>r=>sr(r,i))})}),Xf="matrix",RM=["typed","Matrix","DenseMatrix","SparseMatrix"],FM=he(Xf,RM,n=>{var{typed:t,Matrix:e,DenseMatrix:i,SparseMatrix:r}=n;return t(Xf,{"":function(){return s([])},string:function(a){return s([],a)},"string, string":function(a,u){return s([],a,u)},Array:function(a){return s(a)},Matrix:function(a){return s(a,a.storage())},"Array | Matrix, string":s,"Array | Matrix, string, string":s});function s(o,a,u){if(a==="dense"||a==="default"||a===void 0)return new i(o,u);if(a==="sparse")return new r(o,u);throw new TypeError("Unknown matrix type "+JSON.stringify(a)+".")}}),qf="unaryMinus",PM=["typed"],NM=he(qf,PM,n=>{var{typed:t}=n;return t(qf,{number:Ld,"Complex | BigNumber | Fraction":e=>e.neg(),bigint:e=>-e,Unit:t.referToSelf(e=>i=>{var r=i.clone();return r.value=t.find(e,r.valueType())(i.value),r}),"Array | Matrix":t.referToSelf(e=>i=>sr(i,e,!0))})}),Yf="abs",IM=["typed"],LM=he(Yf,IM,n=>{var{typed:t}=n;return t(Yf,{number:Fd,"Complex | BigNumber | Fraction | Unit":e=>e.abs(),bigint:e=>e<0n?-e:e,"Array | Matrix":t.referToSelf(e=>i=>sr(i,e,!0))})}),Zf="addScalar",UM=["typed"],BM=he(Zf,UM,n=>{var{typed:t}=n;return t(Zf,{"number, number":Pd,"Complex, Complex":function(i,r){return i.add(r)},"BigNumber, BigNumber":function(i,r){return i.plus(r)},"bigint, bigint":function(i,r){return i+r},"Fraction, Fraction":function(i,r){return i.add(r)},"Unit, Unit":t.referToSelf(e=>(i,r)=>{if(i.value===null||i.value===void 0)throw new Error("Parameter x contains a unit with undefined value");if(r.value===null||r.value===void 0)throw new Error("Parameter y contains a unit with undefined value");if(!i.equalBase(r))throw new Error("Units do not match");var s=i.clone();return s.value=t.find(e,[s.valueType(),r.valueType()])(s.value,r.value),s.fixPrefix=!1,s})})}),jf="subtractScalar",OM=["typed"],zM=he(jf,OM,n=>{var{typed:t}=n;return t(jf,{"number, number":Nd,"Complex, Complex":function(i,r){return i.sub(r)},"BigNumber, BigNumber":function(i,r){return i.minus(r)},"bigint, bigint":function(i,r){return i-r},"Fraction, Fraction":function(i,r){return i.sub(r)},"Unit, Unit":t.referToSelf(e=>(i,r)=>{if(i.value===null||i.value===void 0)throw new Error("Parameter x contains a unit with undefined value");if(r.value===null||r.value===void 0)throw new Error("Parameter y contains a unit with undefined value");if(!i.equalBase(r))throw new Error("Units do not match");var s=i.clone();return s.value=t.find(e,[s.valueType(),r.valueType()])(s.value,r.value),s.fixPrefix=!1,s})})}),VM="matAlgo11xS0s",HM=["typed","equalScalar"],kM=he(VM,HM,n=>{var{typed:t,equalScalar:e}=n;return function(r,s,o,a){var u=r._values,l=r._index,c=r._ptr,f=r._size,h=r._datatype;if(!u)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var g=f[0],v=f[1],p,m=e,d=0,b=o;typeof h=="string"&&(p=h,m=t.find(e,[p,p]),d=t.convert(0,p),s=t.convert(s,p),b=t.find(o,[p,p]));for(var x=[],M=[],A=[],y=0;y<v;y++){A[y]=M.length;for(var w=c[y],C=c[y+1],D=w;D<C;D++){var S=l[D],R=a?b(s,u[D]):b(u[D],s);m(R,d)||(M.push(S),x.push(R))}}return A[v]=M.length,r.createSparseMatrix({values:x,index:M,ptr:A,size:[g,v],datatype:p})}}),GM="matAlgo14xDs",WM=["typed"],XM=he(GM,WM,n=>{var{typed:t}=n;return function(r,s,o,a){var u=r._data,l=r._size,c=r._datatype,f,h=o;typeof c=="string"&&(f=c,s=t.convert(s,f),h=t.find(o,[f,f]));var g=l.length>0?e(h,0,l,l[0],u,s,a):[];return r.createDenseMatrix({data:g,size:Ce(l),datatype:f})};function e(i,r,s,o,a,u,l){var c=[];if(r===s.length-1)for(var f=0;f<o;f++)c[f]=l?i(u,a[f]):i(a[f],u);else for(var h=0;h<o;h++)c[h]=e(i,r+1,s,s[r+1],a[h],u,l);return c}}),qM="multiplyScalar",YM=["typed"],ZM=he(qM,YM,n=>{var{typed:t}=n;return t("multiplyScalar",{"number, number":Id,"Complex, Complex":function(i,r){return i.mul(r)},"BigNumber, BigNumber":function(i,r){return i.times(r)},"bigint, bigint":function(i,r){return i*r},"Fraction, Fraction":function(i,r){return i.mul(r)},"number | Fraction | BigNumber | Complex, Unit":(e,i)=>i.multiply(e),"Unit, number | Fraction | BigNumber | Complex | Unit":(e,i)=>e.multiply(i)})}),Kf="multiply",jM=["typed","matrix","addScalar","multiplyScalar","equalScalar","dot"],KM=he(Kf,jM,n=>{var{typed:t,matrix:e,addScalar:i,multiplyScalar:r,equalScalar:s,dot:o}=n,a=kM({typed:t,equalScalar:s}),u=XM({typed:t});function l(A,y){switch(A.length){case 1:switch(y.length){case 1:if(A[0]!==y[0])throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");break;case 2:if(A[0]!==y[0])throw new RangeError("Dimension mismatch in multiplication. Vector length ("+A[0]+") must match Matrix rows ("+y[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+y.length+" dimensions)")}break;case 2:switch(y.length){case 1:if(A[1]!==y[0])throw new RangeError("Dimension mismatch in multiplication. Matrix columns ("+A[1]+") must match Vector length ("+y[0]+")");break;case 2:if(A[1]!==y[0])throw new RangeError("Dimension mismatch in multiplication. Matrix A columns ("+A[1]+") must match Matrix B rows ("+y[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+y.length+" dimensions)")}break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has "+A.length+" dimensions)")}}function c(A,y,w){if(w===0)throw new Error("Cannot multiply two empty vectors");return o(A,y)}function f(A,y){if(y.storage()!=="dense")throw new Error("Support for SparseMatrix not implemented");return h(A,y)}function h(A,y){var w=A._data,C=A._size,D=A._datatype||A.getDataType(),S=y._data,R=y._size,H=y._datatype||y.getDataType(),L=C[0],O=R[1],q,z=i,W=r;D&&H&&D===H&&typeof D=="string"&&D!=="mixed"&&(q=D,z=t.find(i,[q,q]),W=t.find(r,[q,q]));for(var U=[],Y=0;Y<O;Y++){for(var Q=W(w[0],S[0][Y]),ot=1;ot<L;ot++)Q=z(Q,W(w[ot],S[ot][Y]));U[Y]=Q}return A.createDenseMatrix({data:U,size:[O],datatype:D===A._datatype&&H===y._datatype?q:void 0})}var g=t("_multiplyMatrixVector",{"DenseMatrix, any":p,"SparseMatrix, any":b}),v=t("_multiplyMatrixMatrix",{"DenseMatrix, DenseMatrix":m,"DenseMatrix, SparseMatrix":d,"SparseMatrix, DenseMatrix":x,"SparseMatrix, SparseMatrix":M});function p(A,y){var w=A._data,C=A._size,D=A._datatype||A.getDataType(),S=y._data,R=y._datatype||y.getDataType(),H=C[0],L=C[1],O,q=i,z=r;D&&R&&D===R&&typeof D=="string"&&D!=="mixed"&&(O=D,q=t.find(i,[O,O]),z=t.find(r,[O,O]));for(var W=[],U=0;U<H;U++){for(var Y=w[U],Q=z(Y[0],S[0]),ot=1;ot<L;ot++)Q=q(Q,z(Y[ot],S[ot]));W[U]=Q}return A.createDenseMatrix({data:W,size:[H],datatype:D===A._datatype&&R===y._datatype?O:void 0})}function m(A,y){var w=A._data,C=A._size,D=A._datatype||A.getDataType(),S=y._data,R=y._size,H=y._datatype||y.getDataType(),L=C[0],O=C[1],q=R[1],z,W=i,U=r;D&&H&&D===H&&typeof D=="string"&&D!=="mixed"&&D!=="mixed"&&(z=D,W=t.find(i,[z,z]),U=t.find(r,[z,z]));for(var Y=[],Q=0;Q<L;Q++){var ot=w[Q];Y[Q]=[];for(var mt=0;mt<q;mt++){for(var xt=U(ot[0],S[0][mt]),J=1;J<O;J++)xt=W(xt,U(ot[J],S[J][mt]));Y[Q][mt]=xt}}return A.createDenseMatrix({data:Y,size:[L,q],datatype:D===A._datatype&&H===y._datatype?z:void 0})}function d(A,y){var w=A._data,C=A._size,D=A._datatype||A.getDataType(),S=y._values,R=y._index,H=y._ptr,L=y._size,O=y._datatype||y._data===void 0?y._datatype:y.getDataType();if(!S)throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");var q=C[0],z=L[1],W,U=i,Y=r,Q=s,ot=0;D&&O&&D===O&&typeof D=="string"&&D!=="mixed"&&(W=D,U=t.find(i,[W,W]),Y=t.find(r,[W,W]),Q=t.find(s,[W,W]),ot=t.convert(0,W));for(var mt=[],xt=[],J=[],nt=y.createSparseMatrix({values:mt,index:xt,ptr:J,size:[q,z],datatype:D===A._datatype&&O===y._datatype?W:void 0}),lt=0;lt<z;lt++){J[lt]=xt.length;var at=H[lt],_t=H[lt+1];if(_t>at)for(var At=0,vt=0;vt<q;vt++){for(var Kt=vt+1,kt=void 0,It=at;It<_t;It++){var P=R[It];At!==Kt?(kt=Y(w[vt][P],S[It]),At=Kt):kt=U(kt,Y(w[vt][P],S[It]))}At===Kt&&!Q(kt,ot)&&(xt.push(vt),mt.push(kt))}}return J[z]=xt.length,nt}function b(A,y){var w=A._values,C=A._index,D=A._ptr,S=A._datatype||A._data===void 0?A._datatype:A.getDataType();if(!w)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var R=y._data,H=y._datatype||y.getDataType(),L=A._size[0],O=y._size[0],q=[],z=[],W=[],U,Y=i,Q=r,ot=s,mt=0;S&&H&&S===H&&typeof S=="string"&&S!=="mixed"&&(U=S,Y=t.find(i,[U,U]),Q=t.find(r,[U,U]),ot=t.find(s,[U,U]),mt=t.convert(0,U));var xt=[],J=[];W[0]=0;for(var nt=0;nt<O;nt++){var lt=R[nt];if(!ot(lt,mt))for(var at=D[nt],_t=D[nt+1],At=at;At<_t;At++){var vt=C[At];J[vt]?xt[vt]=Y(xt[vt],Q(lt,w[At])):(J[vt]=!0,z.push(vt),xt[vt]=Q(lt,w[At]))}}for(var Kt=z.length,kt=0;kt<Kt;kt++){var It=z[kt];q[kt]=xt[It]}return W[1]=z.length,A.createSparseMatrix({values:q,index:z,ptr:W,size:[L,1],datatype:S===A._datatype&&H===y._datatype?U:void 0})}function x(A,y){var w=A._values,C=A._index,D=A._ptr,S=A._datatype||A._data===void 0?A._datatype:A.getDataType();if(!w)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var R=y._data,H=y._datatype||y.getDataType(),L=A._size[0],O=y._size[0],q=y._size[1],z,W=i,U=r,Y=s,Q=0;S&&H&&S===H&&typeof S=="string"&&S!=="mixed"&&(z=S,W=t.find(i,[z,z]),U=t.find(r,[z,z]),Y=t.find(s,[z,z]),Q=t.convert(0,z));for(var ot=[],mt=[],xt=[],J=A.createSparseMatrix({values:ot,index:mt,ptr:xt,size:[L,q],datatype:S===A._datatype&&H===y._datatype?z:void 0}),nt=[],lt=[],at=0;at<q;at++){xt[at]=mt.length;for(var _t=at+1,At=0;At<O;At++){var vt=R[At][at];if(!Y(vt,Q))for(var Kt=D[At],kt=D[At+1],It=Kt;It<kt;It++){var P=C[It];lt[P]!==_t?(lt[P]=_t,mt.push(P),nt[P]=U(vt,w[It])):nt[P]=W(nt[P],U(vt,w[It]))}}for(var de=xt[at],jt=mt.length,ee=de;ee<jt;ee++){var gt=mt[ee];ot[ee]=nt[gt]}}return xt[q]=mt.length,J}function M(A,y){var w=A._values,C=A._index,D=A._ptr,S=A._datatype||A._data===void 0?A._datatype:A.getDataType(),R=y._values,H=y._index,L=y._ptr,O=y._datatype||y._data===void 0?y._datatype:y.getDataType(),q=A._size[0],z=y._size[1],W=w&&R,U,Y=i,Q=r;S&&O&&S===O&&typeof S=="string"&&S!=="mixed"&&(U=S,Y=t.find(i,[U,U]),Q=t.find(r,[U,U]));for(var ot=W?[]:void 0,mt=[],xt=[],J=A.createSparseMatrix({values:ot,index:mt,ptr:xt,size:[q,z],datatype:S===A._datatype&&O===y._datatype?U:void 0}),nt=W?[]:void 0,lt=[],at,_t,At,vt,Kt,kt,It,P,de=0;de<z;de++){xt[de]=mt.length;var jt=de+1;for(Kt=L[de],kt=L[de+1],vt=Kt;vt<kt;vt++)if(P=H[vt],W)for(_t=D[P],At=D[P+1],at=_t;at<At;at++)It=C[at],lt[It]!==jt?(lt[It]=jt,mt.push(It),nt[It]=Q(R[vt],w[at])):nt[It]=Y(nt[It],Q(R[vt],w[at]));else for(_t=D[P],At=D[P+1],at=_t;at<At;at++)It=C[at],lt[It]!==jt&&(lt[It]=jt,mt.push(It));if(W)for(var ee=xt[de],gt=mt.length,Ht=ee;Ht<gt;Ht++){var Ft=mt[Ht];ot[Ht]=nt[Ft]}}return xt[z]=mt.length,J}return t(Kf,r,{"Array, Array":t.referTo("Matrix, Matrix",A=>(y,w)=>{l(cn(y),cn(w));var C=A(e(y),e(w));return Fe(C)?C.valueOf():C}),"Matrix, Matrix":function(y,w){var C=y.size(),D=w.size();return l(C,D),C.length===1?D.length===1?c(y,w,C[0]):f(y,w):D.length===1?g(y,w):v(y,w)},"Matrix, Array":t.referTo("Matrix,Matrix",A=>(y,w)=>A(y,e(w))),"Array, Matrix":t.referToSelf(A=>(y,w)=>A(e(y,w.storage()),w)),"SparseMatrix, any":function(y,w){return a(y,w,r,!1)},"DenseMatrix, any":function(y,w){return u(y,w,r,!1)},"any, SparseMatrix":function(y,w){return a(w,y,r,!0)},"any, DenseMatrix":function(y,w){return u(w,y,r,!0)},"Array, any":function(y,w){return u(e(y),w,r,!1).valueOf()},"any, Array":function(y,w){return u(e(w),y,r,!0).valueOf()},"any, any":r,"any, any, ...any":t.referToSelf(A=>(y,w,C)=>{for(var D=A(y,w),S=0;S<C.length;S++)D=A(D,C[S]);return D})})}),$f="conj",$M=["typed"],JM=he($f,$M,n=>{var{typed:t}=n;return t($f,{"number | BigNumber | Fraction":e=>e,Complex:e=>e.conjugate(),Unit:t.referToSelf(e=>i=>new i.constructor(e(i.toNumeric()),i.formatUnits())),"Array | Matrix":t.referToSelf(e=>i=>sr(i,e))})}),Jf="identity",QM=["typed","config","matrix","BigNumber","DenseMatrix","SparseMatrix"],tD=he(Jf,QM,n=>{var{typed:t,config:e,matrix:i,BigNumber:r,DenseMatrix:s,SparseMatrix:o}=n;return t(Jf,{"":function(){return e.matrix==="Matrix"?i([]):[]},string:function(c){return i(c)},"number | BigNumber":function(c){return u(c,c,e.matrix==="Matrix"?"dense":void 0)},"number | BigNumber, string":function(c,f){return u(c,c,f)},"number | BigNumber, number | BigNumber":function(c,f){return u(c,f,e.matrix==="Matrix"?"dense":void 0)},"number | BigNumber, number | BigNumber, string":function(c,f,h){return u(c,f,h)},Array:function(c){return a(c)},"Array, string":function(c,f){return a(c,f)},Matrix:function(c){return a(c.valueOf(),c.storage())},"Matrix, string":function(c,f){return a(c.valueOf(),f)}});function a(l,c){switch(l.length){case 0:return c?i(c):[];case 1:return u(l[0],l[0],c);case 2:return u(l[0],l[1],c);default:throw new Error("Vector containing two values expected")}}function u(l,c,f){var h=Le(l)||Le(c)?r:null;if(Le(l)&&(l=l.toNumber()),Le(c)&&(c=c.toNumber()),!Ve(l)||l<1)throw new Error("Parameters in function identity must be positive integers");if(!Ve(c)||c<1)throw new Error("Parameters in function identity must be positive integers");var g=h?new r(1):1,v=h?new h(0):0,p=[l,c];if(f){if(f==="sparse")return o.diagonal(p,g,0,v);if(f==="dense")return s.diagonal(p,g,0,v);throw new TypeError('Unknown matrix type "'.concat(f,'"'))}for(var m=yc([],p,v),d=l<c?l:c,b=0;b<d;b++)m[b][b]=g;return m}});function eD(){throw new Error('No "bignumber" implementation available')}function nD(){throw new Error('No "fraction" implementation available')}function iD(){throw new Error('No "matrix" implementation available')}var Qf="size",rD=["typed","config","?matrix"],sD=he(Qf,rD,n=>{var{typed:t,config:e,matrix:i}=n;return t(Qf,{Matrix:function(s){return s.create(s.size(),"number")},Array:cn,string:function(s){return e.matrix==="Array"?[s.length]:i([s.length],"dense","number")},"number | Complex | BigNumber | Unit | boolean | null":function(s){return e.matrix==="Array"?[]:i?i([],"dense","number"):iD()}})}),oD="numeric",aD=["number","?bignumber","?fraction"],uD=he(oD,aD,n=>{var{number:t,bignumber:e,fraction:i}=n,r={string:!0,number:!0,BigNumber:!0,Fraction:!0},s={number:o=>t(o),BigNumber:e?o=>e(o):eD,bigint:o=>BigInt(o),Fraction:i?o=>i(o):nD};return function(a){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"number",l=arguments.length>2?arguments[2]:void 0;if(l!==void 0)throw new SyntaxError("numeric() takes one or two arguments");var c=Fi(a);if(!(c in r))throw new TypeError("Cannot convert "+a+' of type "'+c+'"; valid input types are '+Object.keys(r).join(", "));if(!(u in s))throw new TypeError("Cannot convert "+a+' to type "'+u+'"; valid output types are '+Object.keys(s).join(", "));return u===c?a:s[u](a)}}),th="divideScalar",cD=["typed","numeric"],lD=he(th,cD,n=>{var{typed:t,numeric:e}=n;return t(th,{"number, number":function(r,s){return r/s},"Complex, Complex":function(r,s){return r.div(s)},"BigNumber, BigNumber":function(r,s){return r.div(s)},"bigint, bigint":function(r,s){return r/s},"Fraction, Fraction":function(r,s){return r.div(s)},"Unit, number | Complex | Fraction | BigNumber | Unit":(i,r)=>i.divide(r),"number | Fraction | Complex | BigNumber, Unit":(i,r)=>r.divideInto(i)})});function fD(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var eh="dot",hD=["typed","addScalar","multiplyScalar","conj","size"],dD=he(eh,hD,n=>{var{typed:t,addScalar:e,multiplyScalar:i,conj:r,size:s}=n;return t(eh,{"Array | DenseMatrix, Array | DenseMatrix":a,"SparseMatrix, SparseMatrix":u});function o(c,f){var h=l(c),g=l(f),v,p;if(h.length===1)v=h[0];else if(h.length===2&&h[1]===1)v=h[0];else throw new RangeError("Expected a column vector, instead got a matrix of size ("+h.join(", ")+")");if(g.length===1)p=g[0];else if(g.length===2&&g[1]===1)p=g[0];else throw new RangeError("Expected a column vector, instead got a matrix of size ("+g.join(", ")+")");if(v!==p)throw new RangeError("Vectors must have equal length ("+v+" != "+p+")");if(v===0)throw new RangeError("Cannot calculate the dot product of empty vectors");return v}function a(c,f){var h=o(c,f),g=Fe(c)?c._data:c,v=Fe(c)?c._datatype||c.getDataType():void 0,p=Fe(f)?f._data:f,m=Fe(f)?f._datatype||f.getDataType():void 0,d=l(c).length===2,b=l(f).length===2,x=e,M=i;if(v&&m&&v===m&&typeof v=="string"&&v!=="mixed"){var A=v;x=t.find(e,[A,A]),M=t.find(i,[A,A])}if(!d&&!b){for(var y=M(r(g[0]),p[0]),w=1;w<h;w++)y=x(y,M(r(g[w]),p[w]));return y}if(!d&&b){for(var C=M(r(g[0]),p[0][0]),D=1;D<h;D++)C=x(C,M(r(g[D]),p[D][0]));return C}if(d&&!b){for(var S=M(r(g[0][0]),p[0]),R=1;R<h;R++)S=x(S,M(r(g[R][0]),p[R]));return S}if(d&&b){for(var H=M(r(g[0][0]),p[0][0]),L=1;L<h;L++)H=x(H,M(r(g[L][0]),p[L][0]));return H}}function u(c,f){o(c,f);for(var h=c._index,g=c._values,v=f._index,p=f._values,m=0,d=e,b=i,x=0,M=0;x<h.length&&M<v.length;){var A=h[x],y=v[M];if(A<y){x++;continue}if(A>y){M++;continue}A===y&&(m=d(m,b(g[x],p[M])),x++,M++)}return m}function l(c){return Fe(c)?c.size():s(c)}}),nh="det",pD=["typed","matrix","subtractScalar","multiply","divideScalar","isZero","unaryMinus"],mD=he(nh,pD,n=>{var{typed:t,matrix:e,subtractScalar:i,multiply:r,divideScalar:s,isZero:o,unaryMinus:a}=n;return t(nh,{any:function(c){return Ce(c)},"Array | Matrix":function(c){var f;switch(Fe(c)?f=c.size():Array.isArray(c)?(c=e(c),f=c.size()):f=[],f.length){case 0:return Ce(c);case 1:if(f[0]===1)return Ce(c.valueOf()[0]);if(f[0]===0)return 1;throw new RangeError("Matrix must be square (size: "+Ie(f)+")");case 2:{var h=f[0],g=f[1];if(h===g)return u(c.clone().valueOf(),h);if(g===0)return 1;throw new RangeError("Matrix must be square (size: "+Ie(f)+")")}default:throw new RangeError("Matrix must be two dimensional (size: "+Ie(f)+")")}}});function u(l,c,f){if(c===1)return Ce(l[0][0]);if(c===2)return i(r(l[0][0],l[1][1]),r(l[1][0],l[0][1]));for(var h=!1,g=new Array(c).fill(0).map((w,C)=>C),v=0;v<c;v++){var p=g[v];if(o(l[p][v])){var m=void 0;for(m=v+1;m<c;m++)if(!o(l[g[m]][v])){p=g[m],g[m]=g[v],g[v]=p,h=!h;break}if(m===c)return l[p][v]}for(var d=l[p][v],b=v===0?1:l[g[v-1]][v-1],x=v+1;x<c;x++)for(var M=g[x],A=v+1;A<c;A++)l[M][A]=s(i(r(l[M][A],d),r(l[M][v],l[p][A])),b)}var y=l[g[c-1]][c-1];return h?a(y):y}}),ih="inv",gD=["typed","matrix","divideScalar","addScalar","multiply","unaryMinus","det","identity","abs"],_D=he(ih,gD,n=>{var{typed:t,matrix:e,divideScalar:i,addScalar:r,multiply:s,unaryMinus:o,det:a,identity:u,abs:l}=n;return t(ih,{"Array | Matrix":function(h){var g=Fe(h)?h.size():cn(h);switch(g.length){case 1:if(g[0]===1)return Fe(h)?e([i(1,h.valueOf()[0])]):[i(1,h[0])];throw new RangeError("Matrix must be square (size: "+Ie(g)+")");case 2:{var v=g[0],p=g[1];if(v===p)return Fe(h)?e(c(h.valueOf(),v,p),h.storage()):c(h,v,p);throw new RangeError("Matrix must be square (size: "+Ie(g)+")")}default:throw new RangeError("Matrix must be two dimensional (size: "+Ie(g)+")")}},any:function(h){return i(1,h)}});function c(f,h,g){var v,p,m,d,b;if(h===1){if(d=f[0][0],d===0)throw Error("Cannot calculate inverse, determinant is zero");return[[i(1,d)]]}else if(h===2){var x=a(f);if(x===0)throw Error("Cannot calculate inverse, determinant is zero");return[[i(f[1][1],x),i(o(f[0][1]),x)],[i(o(f[1][0]),x),i(f[0][0],x)]]}else{var M=f.concat();for(v=0;v<h;v++)M[v]=M[v].concat();for(var A=u(h).valueOf(),y=0;y<g;y++){var w=l(M[y][y]),C=y;for(v=y+1;v<h;)l(M[v][y])>w&&(w=l(M[v][y]),C=v),v++;if(w===0)throw Error("Cannot calculate inverse, determinant is zero");v=C,v!==y&&(b=M[y],M[y]=M[v],M[v]=b,b=A[y],A[y]=A[v],A[v]=b);var D=M[y],S=A[y];for(v=0;v<h;v++){var R=M[v],H=A[v];if(v!==y){if(R[y]!==0){for(m=i(o(R[y]),D[y]),p=y;p<g;p++)R[p]=r(R[p],s(m,D[p]));for(p=0;p<g;p++)H[p]=r(H[p],s(m,S[p]))}}else{for(m=D[y],p=y;p<g;p++)R[p]=i(R[p],m);for(p=0;p<g;p++)H[p]=i(H[p],m)}}}return A}}}),$c=C1({config:eo}),vD=I1({}),Ud=H1({}),Jc=W1({}),Qc=uM({Matrix:Jc}),Ue=Py({BigNumber:$c,Complex:vD,DenseMatrix:Qc,Fraction:Ud}),ED=LM({typed:Ue}),tl=BM({typed:Ue}),xD=JM({typed:Ue}),el=mM({config:eo,typed:Ue}),yD=fM({equalScalar:el,typed:Ue}),Bd=ZM({typed:Ue}),MD=DM({typed:Ue}),Od=vM({Matrix:Jc,equalScalar:el,typed:Ue}),DD=zM({typed:Ue}),SD=bM({BigNumber:$c,typed:Ue}),no=FM({DenseMatrix:Qc,Matrix:Jc,SparseMatrix:Od,typed:Ue}),AD=CM({Fraction:Ud,typed:Ue}),bD=tD({BigNumber:$c,DenseMatrix:Qc,SparseMatrix:Od,config:eo,matrix:no,typed:Ue}),wD=uD({bignumber:SD,fraction:AD,number:MD}),TD=sD({matrix:no,config:eo,typed:Ue}),zd=NM({typed:Ue}),Vd=lD({numeric:wD,typed:Ue}),CD=dD({addScalar:tl,conj:xD,multiplyScalar:Bd,size:TD,typed:Ue}),ga=KM({addScalar:tl,dot:CD,equalScalar:el,matrix:no,multiplyScalar:Bd,typed:Ue}),RD=mD({divideScalar:Vd,isZero:yD,matrix:no,multiply:ga,subtractScalar:DD,typed:Ue,unaryMinus:zd}),FD=_D({abs:ED,addScalar:tl,det:RD,divideScalar:Vd,identity:bD,matrix:no,multiply:ga,typed:Ue,unaryMinus:zd});function PD(n){return typeof n=="function"}function nl(n){return n!==null&&typeof n=="object"}const ND=["string","number","bigint","boolean"];function Dc(n){return n==null||ND.includes(typeof n)?!0:Array.isArray(n)?n.every(t=>Dc(t)):typeof n=="object"?Object.getPrototypeOf(n)===Object.prototype:!1}const ys=Symbol("box"),il=Symbol("is-writable");function ID(n){return nl(n)&&ys in n}function LD(n){return se.isBox(n)&&il in n}function se(n){let t=ai(_h(n));return{[ys]:!0,[il]:!0,get current(){return Nt(t)},set current(e){ce(t,e,!0)}}}function UD(n,t){const e=le(n);return t?{[ys]:!0,[il]:!0,get current(){return Nt(e)},set current(i){t(i)}}:{[ys]:!0,get current(){return n()}}}function BD(n){return se.isBox(n)?n:PD(n)?se.with(n):se(n)}function OD(n){return Object.entries(n).reduce((t,[e,i])=>se.isBox(i)?(se.isWritableBox(i)?Object.defineProperty(t,e,{get(){return i.current},set(r){i.current=r}}):Object.defineProperty(t,e,{get(){return i.current}}),t):Object.assign(t,{[e]:i}),{})}function zD(n){return se.isWritableBox(n)?{[ys]:!0,get current(){return n.current}}:n}se.from=BD;se.with=UD;se.flatten=OD;se.readonly=zD;se.isBox=ID;se.isWritableBox=LD;function VD(...n){return function(t){var e;for(const i of n)if(i){if(t.defaultPrevented)return;typeof i=="function"?i.call(this,t):(e=i.current)==null||e.call(this,t)}}}var Fr={},Su,rh;function HD(){if(rh)return Su;rh=1;var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,t=/\n/g,e=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,r=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,o=/^[;\s]*/,a=/^\s+|\s+$/g,u=`
`,l="/",c="*",f="",h="comment",g="declaration";Su=function(p,m){if(typeof p!="string")throw new TypeError("First argument must be a string");if(!p)return[];m=m||{};var d=1,b=1;function x(L){var O=L.match(t);O&&(d+=O.length);var q=L.lastIndexOf(u);b=~q?L.length-q:b+L.length}function M(){var L={line:d,column:b};return function(O){return O.position=new A(L),C(),O}}function A(L){this.start=L,this.end={line:d,column:b},this.source=m.source}A.prototype.content=p;function y(L){var O=new Error(m.source+":"+d+":"+b+": "+L);if(O.reason=L,O.filename=m.source,O.line=d,O.column=b,O.source=p,!m.silent)throw O}function w(L){var O=L.exec(p);if(O){var q=O[0];return x(q),p=p.slice(q.length),O}}function C(){w(e)}function D(L){var O;for(L=L||[];O=S();)O!==!1&&L.push(O);return L}function S(){var L=M();if(!(l!=p.charAt(0)||c!=p.charAt(1))){for(var O=2;f!=p.charAt(O)&&(c!=p.charAt(O)||l!=p.charAt(O+1));)++O;if(O+=2,f===p.charAt(O-1))return y("End of comment missing");var q=p.slice(2,O-2);return b+=2,x(q),p=p.slice(O),b+=2,L({type:h,comment:q})}}function R(){var L=M(),O=w(i);if(O){if(S(),!w(r))return y("property missing ':'");var q=w(s),z=L({type:g,property:v(O[0].replace(n,f)),value:q?v(q[0].replace(n,f)):f});return w(o),z}}function H(){var L=[];D(L);for(var O;O=R();)O!==!1&&(L.push(O),D(L));return L}return C(),H()};function v(p){return p?p.replace(a,f):f}return Su}var sh;function kD(){if(sh)return Fr;sh=1;var n=Fr&&Fr.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(Fr,"__esModule",{value:!0}),Fr.default=e;var t=n(HD());function e(i,r){var s=null;if(!i||typeof i!="string")return s;var o=(0,t.default)(i),a=typeof r=="function";return o.forEach(function(u){if(u.type==="declaration"){var l=u.property,c=u.value;a?r(l,c,u):c&&(s=s||{},s[l]=c)}}),s}return Fr}var GD=kD();const oh=fD(GD),WD=oh.default||oh,XD=/\d/,qD=["-","_","/","."];function YD(n=""){if(!XD.test(n))return n!==n.toLowerCase()}function ZD(n){const t=[];let e="",i,r;for(const s of n){const o=qD.includes(s);if(o===!0){t.push(e),e="",i=void 0;continue}const a=YD(s);if(r===!1){if(i===!1&&a===!0){t.push(e),e=s,i=a;continue}if(i===!0&&a===!1&&e.length>1){const u=e.at(-1);t.push(e.slice(0,Math.max(0,e.length-1))),e=u+s,i=a;continue}}e+=s,i=a,r=o}return t.push(e),t}function Hd(n){return n?ZD(n).map(t=>KD(t)).join(""):""}function jD(n){return $D(Hd(n||""))}function KD(n){return n?n[0].toUpperCase()+n.slice(1):""}function $D(n){return n?n[0].toLowerCase()+n.slice(1):""}function ko(n){if(!n)return{};const t={};function e(i,r){if(i.startsWith("-moz-")||i.startsWith("-webkit-")||i.startsWith("-ms-")||i.startsWith("-o-")){t[Hd(i)]=r;return}if(i.startsWith("--")){t[i]=r;return}t[jD(i)]=r}return WD(n,e),t}function rl(...n){return(...t)=>{for(const e of n)typeof e=="function"&&e(...t)}}function JD(n,t){const e=RegExp(n,"g");return i=>{if(typeof i!="string")throw new TypeError(`expected an argument of type string, but got ${typeof i}`);return i.match(e)?i.replace(e,t):i}}const QD=JD(/[A-Z]/,n=>`-${n.toLowerCase()}`);function tS(n){if(!n||typeof n!="object"||Array.isArray(n))throw new TypeError(`expected an argument of type object, but got ${typeof n}`);return Object.keys(n).map(t=>`${QD(t)}: ${n[t]};`).join(`
`)}function kd(n={}){return tS(n).replace(`
`," ")}const eS={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",transform:"translateX(-100%)"};kd(eS);const nS=["onabort","onanimationcancel","onanimationend","onanimationiteration","onanimationstart","onauxclick","onbeforeinput","onbeforetoggle","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncompositionend","oncompositionstart","oncompositionupdate","oncontextlost","oncontextmenu","oncontextrestored","oncopy","oncuechange","oncut","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","onfocusin","onfocusout","onformdata","ongotpointercapture","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onlostpointercapture","onmousedown","onmouseenter","onmouseleave","onmousemove","onmouseout","onmouseover","onmouseup","onpaste","onpause","onplay","onplaying","onpointercancel","onpointerdown","onpointerenter","onpointerleave","onpointermove","onpointerout","onpointerover","onpointerup","onprogress","onratechange","onreset","onresize","onscroll","onscrollend","onsecuritypolicyviolation","onseeked","onseeking","onselect","onselectionchange","onselectstart","onslotchange","onstalled","onsubmit","onsuspend","ontimeupdate","ontoggle","ontouchcancel","ontouchend","ontouchmove","ontouchstart","ontransitioncancel","ontransitionend","ontransitionrun","ontransitionstart","onvolumechange","onwaiting","onwebkitanimationend","onwebkitanimationiteration","onwebkitanimationstart","onwebkittransitionend","onwheel"],iS=new Set(nS);function rS(n){return iS.has(n)}function sl(...n){const t={...n[0]};for(let e=1;e<n.length;e++){const i=n[e];if(i){for(const r of Object.keys(i)){const s=t[r],o=i[r],a=typeof s=="function",u=typeof o=="function";if(a&&rS(r)){const l=s,c=o;t[r]=VD(l,c)}else if(a&&u)t[r]=rl(s,o);else if(r==="class"){const l=Dc(s),c=Dc(o);l&&c?t[r]=Lr(s,o):l?t[r]=Lr(s):c&&(t[r]=Lr(o))}else if(r==="style"){const l=typeof s=="object",c=typeof o=="object",f=typeof s=="string",h=typeof o=="string";if(l&&c)t[r]={...s,...o};else if(l&&h){const g=ko(o);t[r]={...s,...g}}else if(f&&c){const g=ko(s);t[r]={...g,...o}}else if(f&&h){const g=ko(s),v=ko(o);t[r]={...g,...v}}else l?t[r]=s:c?t[r]=o:f?t[r]=s:h&&(t[r]=o)}else t[r]=o!==void 0?o:s}for(const r of Object.getOwnPropertySymbols(i)){const s=t[r],o=i[r];t[r]=o!==void 0?o:s}}}return typeof t.style=="object"&&(t.style=kd(t.style).replaceAll(`
`," ")),t.hidden!==!0&&(t.hidden=void 0,delete t.hidden),t.disabled!==!0&&(t.disabled=void 0,delete t.disabled),t}const sS=typeof window<"u"?window:void 0;function oS(n){let t=n.activeElement;for(;t!=null&&t.shadowRoot;){const e=t.shadowRoot.activeElement;if(e===t)break;t=e}return t}var Hr,Ms;class aS{constructor(t={}){re(this,Hr);re(this,Ms);const{window:e=sS,document:i=e==null?void 0:e.document}=t;e!==void 0&&(Vi(this,Hr,i),Vi(this,Ms,sm(r=>{const s=Yn(e,"focusin",r),o=Yn(e,"focusout",r);return()=>{s(),o()}})))}get current(){var t;return(t=Rt(this,Ms))==null||t.call(this),Rt(this,Hr)?oS(Rt(this,Hr)):null}}Hr=new WeakMap,Ms=new WeakMap;new aS;var Ds,oi;class uS{constructor(t){re(this,Ds);re(this,oi);Vi(this,Ds,t),Vi(this,oi,Symbol(t))}get key(){return Rt(this,oi)}exists(){return Pp(Rt(this,oi))}get(){const t=gl(Rt(this,oi));if(t===void 0)throw new Error(`Context "${Rt(this,Ds)}" not found`);return t}getOr(t){const e=gl(Rt(this,oi));return e===void 0?t:e}set(t){return Np(Rt(this,oi),t)}}Ds=new WeakMap,oi=new WeakMap;function cS(n,t){switch(n){case"post":Tc(t);break;case"pre":Ip(t);break}}function Gd(n,t,e,i={}){const{lazy:r=!1}=i;let s=!r,o=Array.isArray(n)?[]:void 0;cS(t,()=>{const a=Array.isArray(n)?n.map(l=>l()):n();if(!s){s=!0,o=a;return}const u=jn(()=>e(a,o));return o=a,u})}function Ra(n,t,e){Gd(n,"post",t,e)}function lS(n,t,e){Gd(n,"pre",t,e)}Ra.pre=lS;function Wd(n){Tc(()=>jn(()=>n()))}const fS=9;function hS(n){return nl(n)&&n.nodeType===fS}function dS(n){var t;return nl(n)&&((t=n.constructor)==null?void 0:t.name)==="VisualViewport"}function pS(n){return hS(n)?n:dS(n)?n.document:(n==null?void 0:n.ownerDocument)??document}function mS(n){let t=n.activeElement;for(;t!=null&&t.shadowRoot;){const e=t.shadowRoot.activeElement;if(e===t)break;t=e}return t}var Ss;class gS{constructor(t){te(this,"element");re(this,Ss,le(()=>this.element.current?this.element.current.getRootNode()??document:document));te(this,"getDocument",()=>pS(this.root));te(this,"getWindow",()=>this.getDocument().defaultView??window);te(this,"getActiveElement",()=>mS(this.root));te(this,"isActiveElement",t=>t===this.getActiveElement());te(this,"querySelector",t=>this.root?this.root.querySelector(t):null);te(this,"querySelectorAll",t=>this.root?this.root.querySelectorAll(t):[]);te(this,"setTimeout",(t,e)=>this.getWindow().setTimeout(t,e));te(this,"clearTimeout",t=>this.getWindow().clearTimeout(t));typeof t=="function"?this.element=se.with(t):this.element=t}get root(){return Nt(Rt(this,Ss))}set root(t){ce(Rt(this,Ss),t)}getElementById(t){return this.root.getElementById(t)}}Ss=new WeakMap;function ol(n,t){return{[Gp()]:e=>se.isBox(n)?(n.current=e,jn(()=>t==null?void 0:t(e)),()=>{"isConnected"in e&&e.isConnected||(n.current=null)}):(n(e),jn(()=>t==null?void 0:t(e)),()=>{"isConnected"in e&&e.isConnected||n(null)})}}function Xd(n){return n?"true":"false"}function io(n){return n?"":void 0}var kr,As;class _S{constructor(t){re(this,kr);re(this,As);te(this,"attrs");Vi(this,kr,t.getVariant?t.getVariant():null),Vi(this,As,Rt(this,kr)?`data-${Rt(this,kr)}-`:`data-${t.component}-`),this.getAttr=this.getAttr.bind(this),this.selector=this.selector.bind(this),this.attrs=Object.fromEntries(t.parts.map(e=>[e,this.getAttr(e)]))}getAttr(t,e){return e?`data-${e}-${t}`:`${Rt(this,As)}${t}`}selector(t,e){return`[${this.getAttr(t,e)}]`}}kr=new WeakMap,As=new WeakMap;function vS(n){const t=new _S(n);return{...t.attrs,selector:t.selector,getAttr:t.getAttr}}const qd="ArrowDown",Yd="ArrowLeft",Zd="ArrowRight",jd="ArrowUp",Kd="End",$d="Home";function ah(){}function al(n,t){return`bits-${n}`}function Jd(n){return n instanceof Element||n instanceof SVGElement}function ES(n,t){return n>=0&&n<t.length}function uh(n,t,e){const i={position:"absolute"};return n==="lr"?(i.left=`${t}%`,i.right=`${e}%`):n==="rl"?(i.right=`${t}%`,i.left=`${e}%`):n==="bt"?(i.bottom=`${t}%`,i.top=`${e}%`):(i.top=`${t}%`,i.bottom=`${e}%`),i}function Qd(n,t){const e={position:"absolute"};return n==="lr"?(e.left=`${t}%`,e.translate="-50% 0"):n==="rl"?(e.right=`${t}%`,e.translate="50% 0"):n==="bt"?(e.bottom=`${t}%`,e.translate="0 50%"):(e.top=`${t}%`,e.translate="0 -50%"),e}function tp(n,t,e){const i={position:"absolute"};return n==="lr"?(i.left=`${t}%`,i.translate=`${e}% 0`):n==="rl"?(i.right=`${t}%`,i.translate=`${-e}% 0`):n==="bt"?(i.bottom=`${t}%`,i.translate=`0 ${-e}%`):(i.top=`${t}%`,i.translate=`0 ${e}%`),i}function xS(n){if(Math.floor(n)===n)return 0;const t=n.toString();if(t.indexOf(".")!==-1&&t.indexOf("e-")===-1)return t.split(".")[1].length;if(t.indexOf("e-")!==-1){const e=t.split("e-");return parseInt(e[1],10)}return 0}function yS(n,t){const e=Math.pow(10,t);return Math.round(n*e)/e}function ul(n,t,e){if(typeof n=="number"){const i=e-t;let r=Math.ceil(i/n);const s=xS(n),o=Math.pow(10,s),a=Math.round(i*o),u=Math.round(n*o);a%u===0&&r++;const l=[];for(let c=0;c<r;c++){const f=t+c*n,h=yS(f,s);l.push(h)}return l}return[...new Set(n)].filter(i=>i>=t&&i<=e).sort((i,r)=>i-r)}function tr(n,t){if(t.length===0)return n;let e=t[0],i=Math.abs(n-e);for(const r of t){const s=Math.abs(n-r);s<i&&(i=s,e=r)}return e}function Go(n,t,e){const i=t.indexOf(n);return i===-1?tr(n,t):e==="next"?i<t.length-1?t[i+1]:n:i>0?t[i-1]:n}function MS(n,t,e=!0){const[i,r]=n,[s,o]=t,a=(o-s)/(r-i);return u=>{const l=s+a*(u-i);return e?l>Math.max(s,o)?Math.max(s,o):l<Math.min(s,o)?Math.min(s,o):l:l}}const Pi=vS({component:"slider",parts:["root","thumb","range","tick","tick-label","thumb-label"]}),cl=new uS("Slider.Root");var bs,ws,Ts,_a,Cs;class ep{constructor(t){te(this,"opts");te(this,"attachment");re(this,bs,ai(!1));re(this,ws,le(()=>this.opts.orientation.current==="horizontal"?this.opts.dir.current==="rtl"?"rl":"lr":this.opts.dir.current==="rtl"?"tb":"bt"));re(this,Ts,le(()=>ul(this.opts.step.current,this.opts.min.current,this.opts.max.current)));te(this,"domContext");re(this,_a,le(()=>{if(!this.opts.disabled.current)return this.opts.orientation.current==="horizontal"?"pan-y":"pan-x"}));te(this,"getAllThumbs",()=>{const t=this.opts.ref.current;return t?Array.from(t.querySelectorAll(Pi.selector("thumb"))):[]});te(this,"getThumbScale",()=>{var l,c,f;const t=(l=this.opts.trackPadding)==null?void 0:l.current;if(t!==void 0&&t>0)return[t,100-t];if(this.opts.thumbPositioning.current==="exact")return[0,100];const e=this.opts.orientation.current==="vertical",i=this.getAllThumbs()[0],r=e?i==null?void 0:i.offsetHeight:i==null?void 0:i.offsetWidth;if(r===void 0||Number.isNaN(r)||r===0)return[0,100];const s=e?(c=this.opts.ref.current)==null?void 0:c.offsetHeight:(f=this.opts.ref.current)==null?void 0:f.offsetWidth;if(s===void 0||Number.isNaN(s)||s===0)return[0,100];const o=r/2/s*100,a=o,u=100-o;return[a,u]});te(this,"getPositionFromValue",t=>{const e=this.getThumbScale();return MS([this.opts.min.current,this.opts.max.current],e)(t)});re(this,Cs,le(()=>({id:this.opts.id.current,"data-orientation":this.opts.orientation.current,"data-disabled":io(this.opts.disabled.current),style:{touchAction:Nt(Rt(this,_a))},[Pi.root]:"",...this.attachment})));this.opts=t,this.attachment=ol(t.ref),this.domContext=new gS(this.opts.ref)}get isActive(){return Nt(Rt(this,bs))}set isActive(t){ce(Rt(this,bs),t,!0)}get direction(){return Nt(Rt(this,ws))}set direction(t){ce(Rt(this,ws),t)}get normalizedSteps(){return Nt(Rt(this,Ts))}set normalizedSteps(t){ce(Rt(this,Ts),t)}isThumbActive(t){return this.isActive}get props(){return Nt(Rt(this,Cs))}set props(t){ce(Rt(this,Cs),t)}}bs=new WeakMap,ws=new WeakMap,Ts=new WeakMap,_a=new WeakMap,Cs=new WeakMap;var Rs,Fs,Ps,Ns,Is,Ls,Us;class DS extends ep{constructor(e){super(e);te(this,"opts");te(this,"isMulti",!1);te(this,"isTickValueSelected",e=>this.opts.value.current===e);te(this,"updateValue",e=>{this.opts.value.current=tr(e,this.normalizedSteps)});te(this,"handlePointerMove",e=>{if(!this.isActive||this.opts.disabled.current)return;e.preventDefault(),e.stopPropagation();const i=this.opts.ref.current,r=this.getAllThumbs()[0];if(!i||!r)return;r.focus();const{left:s,right:o,top:a,bottom:u}=i.getBoundingClientRect();this.direction==="lr"?this.applyPosition({clientXY:e.clientX,start:s,end:o}):this.direction==="rl"?this.applyPosition({clientXY:e.clientX,start:o,end:s}):this.direction==="bt"?this.applyPosition({clientXY:e.clientY,start:u,end:a}):this.direction==="tb"&&this.applyPosition({clientXY:e.clientY,start:a,end:u})});te(this,"handlePointerDown",e=>{if(e.button!==0||this.opts.disabled.current)return;const i=this.opts.ref.current,r=this.getAllThumbs()[0];if(!r||!i)return;const s=e.composedPath()[0]??e.target;!Jd(s)||!i.contains(s)||(e.preventDefault(),r.focus(),this.isActive=!0,this.handlePointerMove(e))});te(this,"handlePointerUp",()=>{this.opts.disabled.current||(this.isActive&&this.opts.onValueCommit.current(jn(()=>this.opts.value.current)),this.isActive=!1)});re(this,Rs,le(()=>{const e=this.opts.value.current;return Array.from({length:1},()=>{const i=e,r=this.getPositionFromValue(i),s=Qd(this.direction,r);return{role:"slider","aria-valuemin":this.opts.min.current,"aria-valuemax":this.opts.max.current,"aria-valuenow":i,"aria-disabled":Xd(this.opts.disabled.current),"aria-orientation":this.opts.orientation.current,"data-value":i,"data-orientation":this.opts.orientation.current,style:s,[Pi.thumb]:""}})}));re(this,Fs,le(()=>this.thumbsPropsArr.map((e,i)=>i)));re(this,Ps,le(()=>{const e=this.normalizedSteps,i=this.opts.value.current;return e.map((r,s)=>{const o=this.getPositionFromValue(r),a=s===0,u=s===e.length-1,l=a?0:u?-100:-50,c=tp(this.direction,o,l),f=r<=i;return{"data-disabled":io(this.opts.disabled.current),"data-orientation":this.opts.orientation.current,"data-bounded":f?"":void 0,"data-value":r,"data-selected":this.isTickValueSelected(r)?"":void 0,style:c,[Pi.tick]:""}})}));re(this,Ns,le(()=>this.ticksPropsArr.map((e,i)=>i)));re(this,Is,le(()=>this.ticksPropsArr.map((e,i)=>({value:e["data-value"],index:i}))));re(this,Ls,le(()=>[{value:this.opts.value.current,index:0}]));re(this,Us,le(()=>({ticks:this.ticksRenderArr,thumbs:this.thumbsRenderArr,tickItems:this.tickItemsArr,thumbItems:this.thumbItemsArr})));this.opts=e,Wd(()=>rl(Yn(this.domContext.getDocument(),"pointerdown",this.handlePointerDown),Yn(this.domContext.getDocument(),"pointerup",this.handlePointerUp),Yn(this.domContext.getDocument(),"pointermove",this.handlePointerMove),Yn(this.domContext.getDocument(),"pointerleave",this.handlePointerUp))),Ra([()=>this.opts.step.current,()=>this.opts.min.current,()=>this.opts.max.current,()=>this.opts.value.current],([i,r,s,o])=>{const a=ul(i,r,s),u=c=>a.includes(c),l=c=>tr(c,a);u(o)||(this.opts.value.current=l(o))})}applyPosition({clientXY:e,start:i,end:r}){const s=this.opts.min.current,o=this.opts.max.current,u=(e-i)/(r-i)*(o-s)+s;if(u<s)this.updateValue(s);else if(u>o)this.updateValue(o);else{const l=this.normalizedSteps,c=tr(u,l);this.updateValue(c)}}get thumbsPropsArr(){return Nt(Rt(this,Rs))}set thumbsPropsArr(e){ce(Rt(this,Rs),e)}get thumbsRenderArr(){return Nt(Rt(this,Fs))}set thumbsRenderArr(e){ce(Rt(this,Fs),e)}get ticksPropsArr(){return Nt(Rt(this,Ps))}set ticksPropsArr(e){ce(Rt(this,Ps),e)}get ticksRenderArr(){return Nt(Rt(this,Ns))}set ticksRenderArr(e){ce(Rt(this,Ns),e)}get tickItemsArr(){return Nt(Rt(this,Is))}set tickItemsArr(e){ce(Rt(this,Is),e)}get thumbItemsArr(){return Nt(Rt(this,Ls))}set thumbItemsArr(e){ce(Rt(this,Ls),e)}get snippetProps(){return Nt(Rt(this,Us))}set snippetProps(e){ce(Rt(this,Us),e)}}Rs=new WeakMap,Fs=new WeakMap,Ps=new WeakMap,Ns=new WeakMap,Is=new WeakMap,Ls=new WeakMap,Us=new WeakMap;var Bs,Os,va,zs,Vs,Hs,ks,Gs,Ws,Xs;class SS extends ep{constructor(e){super(e);te(this,"opts");te(this,"isMulti",!0);re(this,Bs,ai(null));re(this,Os,ai(0));te(this,"isTickValueSelected",e=>this.opts.value.current.includes(e));re(this,va,e=>{const i=this.getAllThumbs();if(!i.length)return;for(const a of i)a.blur();const r=i.map(a=>{if(this.opts.orientation.current==="horizontal"){const{left:u,right:l}=a.getBoundingClientRect();return Math.abs(e.clientX-(u+l)/2)}else{const{top:u,bottom:l}=a.getBoundingClientRect();return Math.abs(e.clientY-(u+l)/2)}}),s=i[r.indexOf(Math.min(...r))],o=i.indexOf(s);return{node:s,idx:o}});te(this,"handlePointerMove",e=>{if(!this.isActive||this.opts.disabled.current)return;e.preventDefault(),e.stopPropagation();const i=this.opts.ref.current,r=this.activeThumb;if(!i||!r)return;r.node.focus();const{left:s,right:o,top:a,bottom:u}=i.getBoundingClientRect(),l=this.direction;l==="lr"?this.applyPosition({clientXY:e.clientX,activeThumbIdx:r.idx,start:s,end:o}):l==="rl"?this.applyPosition({clientXY:e.clientX,activeThumbIdx:r.idx,start:o,end:s}):l==="bt"?this.applyPosition({clientXY:e.clientY,activeThumbIdx:r.idx,start:u,end:a}):l==="tb"&&this.applyPosition({clientXY:e.clientY,activeThumbIdx:r.idx,start:a,end:u})});te(this,"handlePointerDown",e=>{if(e.button!==0||this.opts.disabled.current)return;const i=this.opts.ref.current,r=Rt(this,va).call(this,e);if(!r||!i)return;const s=e.composedPath()[0]??e.target;!Jd(s)||!i.contains(s)||(e.preventDefault(),this.activeThumb=r,r.node.focus(),this.isActive=!0,this.handlePointerMove(e))});te(this,"handlePointerUp",()=>{this.opts.disabled.current||(this.isActive&&this.opts.onValueCommit.current(jn(()=>this.opts.value.current)),this.isActive=!1)});te(this,"getAllThumbs",()=>{const e=this.opts.ref.current;return e?Array.from(e.querySelectorAll(Pi.selector("thumb"))):[]});te(this,"updateValue",(e,i)=>{const r=this.opts.value.current;if(!r.length){this.opts.value.current.push(e);return}if(r[i]===e)return;const o=[...r];if(!ES(i,o))return;const a=o[i]>e?-1:1,u=()=>{var h;const c=i+a;o[i]=o[c],o[c]=e;const f=this.getAllThumbs();f.length&&((h=f[c])==null||h.focus(),this.activeThumb={node:f[c],idx:c})};if(this.opts.autoSort.current&&(a===-1&&e<o[i-1]||a===1&&e>o[i+1])){u(),this.opts.value.current=o;return}const l=this.normalizedSteps;o[i]=tr(e,l),this.opts.value.current=o});re(this,zs,le(()=>{const e=this.opts.value.current;return Array.from({length:e.length||1},(i,r)=>{const s=jn(()=>this.currentThumbIdx);s<e.length&&jn(()=>{this.currentThumbIdx=s+1});const o=e[r],a=this.getPositionFromValue(o??0),u=Qd(this.direction,a);return{role:"slider","aria-valuemin":this.opts.min.current,"aria-valuemax":this.opts.max.current,"aria-valuenow":o,"aria-disabled":Xd(this.opts.disabled.current),"aria-orientation":this.opts.orientation.current,"data-value":o,"data-orientation":this.opts.orientation.current,style:u,[Pi.thumb]:""}})}));re(this,Vs,le(()=>this.thumbsPropsArr.map((e,i)=>i)));re(this,Hs,le(()=>{const e=this.normalizedSteps,i=this.opts.value.current;return e.map((r,s)=>{const o=this.getPositionFromValue(r),a=s===0,u=s===e.length-1,l=a?0:u?-100:-50,c=tp(this.direction,o,l),f=i.length===1?r<=i[0]:i[0]<=r&&r<=i[i.length-1];return{"data-disabled":io(this.opts.disabled.current),"data-orientation":this.opts.orientation.current,"data-bounded":f?"":void 0,"data-value":r,style:c,[Pi.tick]:""}})}));re(this,ks,le(()=>this.ticksPropsArr.map((e,i)=>i)));re(this,Gs,le(()=>this.ticksPropsArr.map((e,i)=>({value:e["data-value"],index:i}))));re(this,Ws,le(()=>this.opts.value.current.map((i,r)=>({value:i,index:r}))));re(this,Xs,le(()=>({ticks:this.ticksRenderArr,thumbs:this.thumbsRenderArr,tickItems:this.tickItemsArr,thumbItems:this.thumbItemsArr})));this.opts=e,Wd(()=>rl(Yn(this.domContext.getDocument(),"pointerdown",this.handlePointerDown),Yn(this.domContext.getDocument(),"pointerup",this.handlePointerUp),Yn(this.domContext.getDocument(),"pointermove",this.handlePointerMove),Yn(this.domContext.getDocument(),"pointerleave",this.handlePointerUp))),Ra([()=>this.opts.step.current,()=>this.opts.min.current,()=>this.opts.max.current,()=>this.opts.value.current],([i,r,s,o])=>{const a=ul(i,r,s),u=c=>a.includes(c),l=c=>tr(c,a);o.some(c=>!u(c))&&(this.opts.value.current=o.map(l))})}get activeThumb(){return Nt(Rt(this,Bs))}set activeThumb(e){ce(Rt(this,Bs),e,!0)}get currentThumbIdx(){return Nt(Rt(this,Os))}set currentThumbIdx(e){ce(Rt(this,Os),e,!0)}isThumbActive(e){var i;return this.isActive&&((i=this.activeThumb)==null?void 0:i.idx)===e}applyPosition({clientXY:e,activeThumbIdx:i,start:r,end:s}){const o=this.opts.min.current,a=this.opts.max.current,l=(e-r)/(s-r)*(a-o)+o;if(l<o)this.updateValue(o,i);else if(l>a)this.updateValue(a,i);else{const c=this.normalizedSteps,f=tr(l,c);this.updateValue(f,i)}}get thumbsPropsArr(){return Nt(Rt(this,zs))}set thumbsPropsArr(e){ce(Rt(this,zs),e)}get thumbsRenderArr(){return Nt(Rt(this,Vs))}set thumbsRenderArr(e){ce(Rt(this,Vs),e)}get ticksPropsArr(){return Nt(Rt(this,Hs))}set ticksPropsArr(e){ce(Rt(this,Hs),e)}get ticksRenderArr(){return Nt(Rt(this,ks))}set ticksRenderArr(e){ce(Rt(this,ks),e)}get tickItemsArr(){return Nt(Rt(this,Gs))}set tickItemsArr(e){ce(Rt(this,Gs),e)}get thumbItemsArr(){return Nt(Rt(this,Ws))}set thumbItemsArr(e){ce(Rt(this,Ws),e)}get snippetProps(){return Nt(Rt(this,Xs))}set snippetProps(e){ce(Rt(this,Xs),e)}}Bs=new WeakMap,Os=new WeakMap,va=new WeakMap,zs=new WeakMap,Vs=new WeakMap,Hs=new WeakMap,ks=new WeakMap,Gs=new WeakMap,Ws=new WeakMap,Xs=new WeakMap;class AS{static create(t){const{type:e,...i}=t,r=e==="single"?new DS(i):new SS(i);return cl.set(r)}}const bS=[Yd,Zd,jd,qd,$d,Kd];var qs,Ys;const ll=class ll{constructor(t,e){te(this,"opts");te(this,"root");te(this,"attachment");re(this,qs,le(()=>{var t;if(Array.isArray(this.root.opts.value.current)){const e=this.root.opts.value.current.length>1?this.root.getPositionFromValue(Math.min(...this.root.opts.value.current)??0):0,i=100-this.root.getPositionFromValue(Math.max(...this.root.opts.value.current)??0);return{position:"absolute",...uh(this.root.direction,e,i)}}else{const e=(t=this.root.opts.trackPadding)==null?void 0:t.current,i=this.root.opts.value.current,r=this.root.opts.max.current,s=0,o=e!==void 0&&e>0&&i===r?0:100-this.root.getPositionFromValue(i);return{position:"absolute",...uh(this.root.direction,s,o)}}}));re(this,Ys,le(()=>({id:this.opts.id.current,"data-orientation":this.root.opts.orientation.current,"data-disabled":io(this.root.opts.disabled.current),style:this.rangeStyles,[Pi.range]:"",...this.attachment})));this.opts=t,this.root=e,this.attachment=ol(t.ref)}static create(t){return new ll(t,cl.get())}get rangeStyles(){return Nt(Rt(this,qs))}set rangeStyles(t){ce(Rt(this,qs),t)}get props(){return Nt(Rt(this,Ys))}set props(t){ce(Rt(this,Ys),t)}};qs=new WeakMap,Ys=new WeakMap;let Sc=ll;var Ea,mn,Ln,Zs;const fl=class fl{constructor(t,e){re(this,mn);te(this,"opts");te(this,"root");te(this,"attachment");re(this,Ea,le(()=>this.root.opts.disabled.current||this.opts.disabled.current));re(this,Zs,le(()=>({...this.root.thumbsPropsArr[this.opts.index.current],id:this.opts.id.current,onkeydown:this.onkeydown,"data-active":this.root.isThumbActive(this.opts.index.current)?"":void 0,"data-disabled":io(this.opts.disabled.current||this.root.opts.disabled.current),tabindex:this.opts.disabled.current||this.root.opts.disabled.current?-1:0,...this.attachment})));this.opts=t,this.root=e,this.attachment=ol(t.ref),this.onkeydown=this.onkeydown.bind(this)}static create(t){return new fl(t,cl.get())}onkeydown(t){if(Nt(Rt(this,Ea)))return;const e=this.opts.ref.current;if(!e)return;const i=this.root.getAllThumbs();if(!i.length)return;const r=i.indexOf(e);if(this.root.isMulti&&(this.root.currentThumbIdx=r),!bS.includes(t.key))return;t.preventDefault();const s=this.root.opts.min.current,o=this.root.opts.max.current,a=this.root.opts.value.current,u=Array.isArray(a)?a[r]:a,l=this.root.opts.orientation.current,c=this.root.direction,f=this.root.normalizedSteps;switch(t.key){case $d:Rn(this,mn,Ln).call(this,s);break;case Kd:Rn(this,mn,Ln).call(this,o);break;case Yd:if(l!=="horizontal")break;if(t.metaKey){const h=c==="rl"?o:s;Rn(this,mn,Ln).call(this,h)}else{const g=Go(u,f,c==="rl"?"next":"prev");Rn(this,mn,Ln).call(this,g)}break;case Zd:if(l!=="horizontal")break;if(t.metaKey){const h=c==="rl"?s:o;Rn(this,mn,Ln).call(this,h)}else{const g=Go(u,f,c==="rl"?"prev":"next");Rn(this,mn,Ln).call(this,g)}break;case jd:if(t.metaKey){const h=c==="tb"?s:o;Rn(this,mn,Ln).call(this,h)}else{const g=Go(u,f,c==="tb"?"prev":"next");Rn(this,mn,Ln).call(this,g)}break;case qd:if(t.metaKey){const h=c==="tb"?o:s;Rn(this,mn,Ln).call(this,h)}else{const g=Go(u,f,c==="tb"?"next":"prev");Rn(this,mn,Ln).call(this,g)}break}this.root.opts.onValueCommit.current(this.root.opts.value.current)}get props(){return Nt(Rt(this,Zs))}set props(t){ce(Rt(this,Zs),t)}};Ea=new WeakMap,mn=new WeakSet,Ln=function(t){this.root.isMulti?this.root.updateValue(t,this.opts.index.current):this.root.updateValue(t)},Zs=new WeakMap;let Ac=fl;var wS=Bi("<span><!></span>");function ch(n,t){const e=bc();js(t,!0);let i=Ke(t,"id",19,()=>al(e)),r=Ke(t,"ref",15,null),s=Ke(t,"value",15),o=Ke(t,"onValueChange",3,ah),a=Ke(t,"onValueCommit",3,ah),u=Ke(t,"disabled",3,!1),l=Ke(t,"step",3,1),c=Ke(t,"dir",3,"ltr"),f=Ke(t,"autoSort",3,!0),h=Ke(t,"orientation",3,"horizontal"),g=Ke(t,"thumbPositioning",3,"contain"),v=Rc(t,["$$slots","$$events","$$legacy","children","child","id","ref","value","type","onValueChange","onValueCommit","disabled","min","max","step","dir","autoSort","orientation","thumbPositioning","trackPadding"]);const p=le(()=>t.min!==void 0?t.min:Array.isArray(l())?Math.min(...l()):0),m=le(()=>t.max!==void 0?t.max:Array.isArray(l())?Math.max(...l()):100);function d(){if(s()===void 0)return t.type==="single"?Nt(p):[]}d(),Ra.pre(()=>s(),()=>{d()});const b=AS.create({id:se.with(()=>i()),ref:se.with(()=>r(),C=>r(C)),value:se.with(()=>s(),C=>{s(C),o()(C)}),onValueCommit:se.with(()=>a()),disabled:se.with(()=>u()),min:se.with(()=>Nt(p)),max:se.with(()=>Nt(m)),step:se.with(()=>l()),dir:se.with(()=>c()),autoSort:se.with(()=>f()),orientation:se.with(()=>h()),thumbPositioning:se.with(()=>g()),type:t.type,trackPadding:se.with(()=>t.trackPadding)}),x=le(()=>sl(v,b.props));var M=Ni(),A=Un(M);{var y=C=>{var D=Ni(),S=Un(D),R=Qo(()=>({props:Nt(x),...b.snippetProps}));Gr(S,()=>t.child,()=>Nt(R)),$e(C,D)},w=C=>{var D=wS();Fc(D,()=>({...Nt(x)}));var S=Mn(D);Gr(S,()=>t.children??Cc,()=>b.snippetProps),Dn(D),$e(C,D)};ya(A,C=>{t.child?C(y):C(w,!1)})}$e(n,M),Ks()}var TS=Bi("<span><!></span>");function lh(n,t){const e=bc();js(t,!0);let i=Ke(t,"ref",15,null),r=Ke(t,"id",19,()=>al(e)),s=Rc(t,["$$slots","$$events","$$legacy","children","child","ref","id"]);const o=Sc.create({id:se.with(()=>r()),ref:se.with(()=>i(),h=>i(h))}),a=le(()=>sl(s,o.props));var u=Ni(),l=Un(u);{var c=h=>{var g=Ni(),v=Un(g);Gr(v,()=>t.child,()=>({props:Nt(a)})),$e(h,g)},f=h=>{var g=TS();Fc(g,()=>({...Nt(a)}));var v=Mn(g);Gr(v,()=>t.children??Cc),Dn(g),$e(h,g)};ya(l,h=>{t.child?h(c):h(f,!1)})}$e(n,u),Ks()}var CS=Bi("<span><!></span>");function fh(n,t){const e=bc();js(t,!0);let i=Ke(t,"ref",15,null),r=Ke(t,"id",19,()=>al(e)),s=Ke(t,"disabled",3,!1),o=Rc(t,["$$slots","$$events","$$legacy","children","child","ref","id","index","disabled"]);const a=Ac.create({id:se.with(()=>r()),ref:se.with(()=>i(),g=>i(g)),index:se.with(()=>t.index),disabled:se.with(()=>s())}),u=le(()=>sl(o,a.props));var l=Ni(),c=Un(l);{var f=g=>{var v=Ni(),p=Un(v),m=Qo(()=>({active:a.root.isThumbActive(a.opts.index.current),props:Nt(u)}));Gr(p,()=>t.child,()=>Nt(m)),$e(g,v)},h=g=>{var v=CS();Fc(v,()=>({...Nt(u)}));var p=Mn(v),m=Qo(()=>({active:a.root.isThumbActive(a.opts.index.current)}));Gr(p,()=>t.children??Cc,()=>Nt(m)),Dn(v),$e(g,v)};ya(c,g=>{t.child?g(f):g(h,!1)})}$e(n,l),Ks()}var RS=Bi('<p class="mb-2 text-sm"><b> </b> kaarten</p>'),FS=Bi('<p class="mb-2 text-sm">... kaarten</p>'),PS=Bi('<span class="bg-dark-10 relative h-1.5 w-full grow cursor-pointer overflow-hidden rounded-full"><!></span> <!>',1),NS=Bi('<span class="bg-dark-10 relative h-1.5 w-full grow cursor-pointer overflow-hidden rounded-full"><!></span> <!>',1),IS=Bi('<div class="rounded opacity-0 hover:opacity-100 shadow-lg bg-[#ffffffcc] outline-red text-center fixed w-full md:max-w-[220px] bottom-4 left-4 p-5"><!> <p class="mb-2 text-sm">van <b> </b> tot <b> </b></p> <!> <br/> <p class="mb-2 text-sm"> </p> <!></div> <div class="container svelte-scoz8s"></div> <div class="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-wrap drop-shadow-[2px_2px_0px_#eef]"><div class="basis-2/2 p-2"><a href="https://www.cultureelerfgoed.nl/"><img class="mx-auto h-20" alt="RCE Logo" src="/img/svg/rce-logo.svg"/></a></div> <div class="basis-2/2 p-2"><a href="https://www.stowa.nl/"><img class="mx-auto h-10" alt="STOWA Logo" src="/img/svg/stowa-logo.svg"/></a></div> <div class="basis-1/2 p-2"><a href="https://allmaps.org/"><img class="mx-auto h-15" alt="Allmaps Logo" src="/img/svg/allmaps-logo.svg"/></a></div> <div class="basis-1/2 p-2"><a href="https://www.tudelft.nl/"><img class="mx-auto h-20" alt="TU Delft Logo" src="/img/svg/tu-logo.svg"/></a></div> <div class="basis-2/2 p-2"><a href="https://www.linkedin.com/company/de-geomaten/"><img class="mx-auto h-10" alt="De Geomaten Logo" src="/img/svg/geomaten-logo.svg"/></a></div></div>',1);function LS(n,t){js(t,!0);let e=ai(0),i=ai(0),r=ai(_h([1850,2e3])),s=ai(35),o;const a=512,u=["https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/01-1874-389916-georef.json","https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/02-1874-456650-georef.json","https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/03-1874-455650-georef.json","https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/04-1874-456550-georef.json","https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/05-1874-456551-georef.json","https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/06-1874-456552-georef.json","https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/07-1874-456588-georef.json","https://raw.githubusercontent.com/tu-delft-heritage/watertijdreis-data/refs/heads/main/content/annotations/08-1874-456553-georef.json"];function l(W){const U=W.match(/<polygon points="([^"]+)"/);return U?U[1].trim().split(" ").map(Y=>Y.split(",").map(Number)):[]}function c(W,U){const Q=(U-5.5)*1e3,ot=(W-53)*-1e3*2-2e3;return new Wt(Q,ot)}function f(W,U){const Y=[],Q=[],ot=[];for(let nt=0;nt<3;nt++){const[lt,at]=W[nt];Y.push([lt,at,1]);const _t=U[nt];Q.push(_t.x),ot.push(_t.y)}const mt=FD(Y),xt=ga(mt,Q),J=ga(mt,ot);return function([lt,at]){return new Wt(xt[0]*lt+xt[1]*at+xt[2],J[0]*lt+J[1]*at+J[2])}}const h=new Map;async function g(W){const Y=await(await fetch("/years.json")).json();for(let Q of Y)h.set(Q.id,Q.year);for(const Q of u)try{const mt=await(await fetch(Q)).json();await v(mt,W)}catch(ot){console.error(`Failed to load ${Q}`,ot)}}function v(W,U){for(const Y of W.items){if(Y.id.includes("f33303da7e3baae9-b"))continue;const Q=Y.target.source.id+`/full/${a},/0/default.jpg`,ot=Y.target.source.width,mt=Y.target.source.height,xt=a/ot,J=mt*xt,nt=l(Y.target.selector.value);if(nt.length<3)continue;const lt=nt.map(([gt,Ht])=>[gt*xt,Ht*xt]),at=Y.body.features.map(gt=>gt.geometry.coordinates),At=Y.body.features.map(gt=>gt.properties.resourceCoords.map(Number)).map(([gt,Ht])=>[gt*xt,Ht*xt]),vt=at.map(([gt,Ht])=>c(Ht,gt)),Kt=f(At,vt),kt=[],It=[];for(let gt=1;gt<lt.length-1;gt++){const Ht=[0,gt,gt+1];for(let Ft of Ht){const[Yt,ye]=lt[Ft],E=Kt([Yt,ye]);kt.push(E.x,E.y,0),It.push(Yt/a,1-ye/J)}}const P=new mi;P.setAttribute("position",new hi(kt,3)),P.setAttribute("uv",new hi(It,2)),P.computeVertexNormals();const de=new ia({color:15658734,wireframe:!0,side:Bn}),jt=new Vn(P,de);new L0().load(Q,gt=>{gt.encoding=void 0,gt.colorSpace=gn,gt.anisotropy=16;const Ht=new ia({map:gt,side:Bn,transparent:!1,opacity:1}),Ft=new Vn(P.clone(),Ht);Ft.userData.year=h.get(Y.id),Ft.position.z=((1850-Ft.userData.year)/150+.5)*Nt(s)*100,jt.position.z=Ft.position.z,U.add(Ft),U.remove(jt)})}}function p(W,U){const Y=document.createElement("canvas");Y.width=256,Y.height=64;const Q=Y.getContext("2d");Q.fillStyle="#fff",Q.font='70px monospace, Times New Roman, "Helvetica Neue", Helvetica, Arial, sans-serif',Q.textAlign="center",Q.textBaseline="middle",Q.fillText(W,Y.width/2,Y.height/2);const ot=new C0(Y);ot.minFilter=On,ot.generateMipmaps=!1;const mt=new qh({map:ot,depthTest:!1}),xt=new b0(mt);return xt.scale.set(300,75,1),xt.position.copy(U),xt.userData.year=parseInt(W,10),xt}let m,d=ai(!1);Tc(()=>{if(Nt(r)&&m)for(let W of m.children)W.visible=W.userData.year>=Nt(r)[0]&&W.userData.year<=Nt(r)[1];if(Nt(s)&&m)for(let W of m.children)W.position.z=((1850-W.userData.year)/150+.5)*Nt(s)*100;if(!m){m=new S0,m.background=new fe(16777215),m.background=new fe(3355494),console.log(m);const W=1850,U=2e3,Y=25,Q=Nt(s)*100;for(let nt=W;nt<=U;nt+=Y){const lt=((1850-nt)/150+.5)*Q,at=[new j(0,3e3,lt)];for(const _t of at){const At=p(nt.toString(),_t);m.add(At)}}const ot=new An(60,o.clientWidth/o.clientHeight,.1,1e5);ot.position.set(0,0,-6e3),ot.up.set(0,-1,0),ot.lookAt(0,0,0);const mt=new yx({antialias:!0});mt.setSize(Nt(i),Nt(e)),mt.outputEncoding=void 0,o.appendChild(mt.domElement);const xt=new Dx(ot,mt.domElement);xt.enableDamping=!0,xt.dampingFactor=.05,g(m).then(()=>ce(d,!0));const J=()=>{requestAnimationFrame(J),m.rotation.y+=.0025,xt.update(),mt.render(m,ot)};J()}});var b=IS(),x=Un(b),M=Mn(x);{var A=W=>{var U=RS(),Y=Mn(U),Q=Mn(Y,!0);Dn(Y),vl(),Dn(U),_l(()=>fo(Q,m.children.length)),$e(W,U)},y=W=>{var U=FS();$e(W,U)};ya(M,W=>{Nt(d)?W(A):W(y,!1)})}var w=Jn(M,2),C=Jn(Mn(w)),D=Mn(C,!0);Dn(C);var S=Jn(C,2),R=Mn(S,!0);Dn(S),Dn(w);var H=Jn(w,2);{const W=(U,Y)=>{let Q=()=>Y==null?void 0:Y().thumbItems;var ot=PS(),mt=Un(ot),xt=Mn(mt);cr(xt,()=>lh,(nt,lt)=>{lt(nt,{class:"bg-foreground absolute h-full"})}),Dn(mt);var J=Jn(mt,2);El(J,17,Q,({index:nt})=>nt,(nt,lt)=>{let at=()=>Nt(lt).index;var _t=Ni(),At=Un(_t);const vt=le(()=>Lr("border-border-input bg-background hover:border-dark-40 focus-visible:ring-foreground dark:bg-foreground dark:shadow-card data-active:border-dark-40 focus-visible:outline-hidden data-active:scale-[0.98] block size-[20px] cursor-pointer rounded-full border shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"));cr(At,()=>fh,(Kt,kt)=>{kt(Kt,{get index(){return at()},get class(){return Nt(vt)}})}),$e(nt,_t)}),$e(U,ot)};cr(H,()=>ch,(U,Y)=>{Y(U,{type:"multiple",min:1800,max:2025,class:"relative flex w-full touch-none select-none items-center",get value(){return Nt(r)},set value(Q){ce(r,Q,!0)},children:W,$$slots:{default:!0}})})}var L=Jn(H,4),O=Mn(L);Dn(L);var q=Jn(L,2);{const W=(U,Y)=>{let Q=()=>Y==null?void 0:Y().thumbItems;var ot=NS(),mt=Un(ot),xt=Mn(mt);cr(xt,()=>lh,(nt,lt)=>{lt(nt,{class:"bg-foreground absolute h-full"})}),Dn(mt);var J=Jn(mt,2);El(J,17,Q,({index:nt})=>nt,(nt,lt)=>{let at=()=>Nt(lt).index;var _t=Ni(),At=Un(_t);const vt=le(()=>Lr("border-border-input bg-background hover:border-dark-40 focus-visible:ring-foreground dark:bg-foreground dark:shadow-card data-active:border-dark-40 focus-visible:outline-hidden data-active:scale-[0.98] block size-[20px] cursor-pointer rounded-full border shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"));cr(At,()=>fh,(Kt,kt)=>{kt(Kt,{get index(){return at()},get class(){return Nt(vt)}})}),$e(nt,_t)}),$e(U,ot)};cr(q,()=>ch,(U,Y)=>{Y(U,{type:"single",min:0,max:100,class:"relative flex w-full touch-none select-none items-center",get value(){return Nt(s)},set value(Q){ce(s,Q,!0)},children:W,$$slots:{default:!0}})})}Dn(x);var z=Jn(x,2);kp(z,W=>o=W,()=>o),vl(2),_l(()=>{fo(D,Nt(r)[0]),fo(R,Nt(r)[1]),fo(O,`z-verschuiving: ${Nt(s)??""}%`)}),bl("innerWidth",W=>ce(i,W,!0)),bl("innerHeight",W=>ce(e,W,!0)),$e(n,b),Ks()}function GS(n,t){js(t,!1);const e=!0;return LS(n,{}),im(t,"prerender",e),Ks({prerender:e})}export{GS as component};
