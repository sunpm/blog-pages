import{u as p,Q as o,a5 as i,c as u,A as c,H as l,a6 as f,a7 as d,a8 as m,a9 as A,aa as h,ab as g,ac as v,ad as P,ae as y,af as w,ag as C,ah as _,ai as b,Y as R}from"./chunks/framework.f9e03a9a.js";import{t as D}from"./chunks/theme.aad47de1.js";const E={...D,enhanceApp({app:e}){}};function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=r(E),T=p({name:"VitePressApp",setup(){const{site:e}=u();return c(()=>{l(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),f(),d(),m(),s.setup&&s.setup(),()=>A(s.Layout)}});async function O(){const e=x(),a=j();a.provide(h,e);const t=g(e.route);return a.provide(v,t),a.component("Content",P),a.component("ClientOnly",y),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:w}),{app:a,router:e,data:t}}function j(){return C(T)}function x(){let e=o,a;return _(t=>{let n=b(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),o&&(e=!1),R(()=>import(n),[])):null},s.NotFound)}o&&O().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{O as createApp};