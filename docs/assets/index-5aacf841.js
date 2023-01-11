(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const s="/assets/javascript-8dac5379.svg",c=async()=>{const o=await(await fetch("https://api.breakingbadquotes.xyz/v1/quotes")).json();return console.log(o[0]),o[0]},l=async r=>{document.querySelector("#app-title").innerHTML="Breaking Bad App",r.innerHTML="Loading... ⏳";const o=document.createElement("blockquote"),i=document.createElement("h3"),n=document.createElement("button");n.innerText="Next Quote";const e=t=>{o.innerHTML=t.quote,i.innerHTML=t.author,r.replaceChildren(o,i,n)};n.addEventListener("click",async()=>{r.innerHTML="Loading... ⏳";const t=await c();e(t)}),c().then(e)};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${s}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">
      
    </div>
    
  </div>
`;const u=document.querySelector(".card");l(u);
