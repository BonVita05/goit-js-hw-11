/* empty css                      */import{a as d,S as m,i as a}from"./assets/vendor-woitT8w3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function g(n){return d("https://pixabay.com/api/",{params:{key:"53047751-cea4bcad23f1cdb0ee3074407",q:`${n}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12}}).then(({data:o})=>o)}const h=new m(".gallery a",{caption:!0,captionDelay:250,captionPosition:"bottom",nav:!0,showCounter:!0,loop:!0}),c=document.querySelector(".gallery"),u=document.querySelector(".loading"),f=document.querySelector(".loader"),p=document.querySelector("#searchBtn");function y(n=[]){c.innerHTML=n.map(({previewURL:r,tags:i,largeImageURL:o,likes:e,views:t,comments:s,downloads:l})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${o}">
                <img  class="gallery-image" src="${r}" alt="${i}" loading="lazy" 
                title="Title: ${i.split(",")[0].trim()}  |  
                Likes: ${e.toLocaleString()}  |  
                View: ${t.toLocaleString()}  |  
                Comments: ${s.toLocaleString()}  |  
                Downloads: ${l.toLocaleString()}"/>
            </a>
            <ul class="info-container">
                <li class="info-box">
                    <p class="info-title">Likes</p>
                    <p class="info-value">${e.toLocaleString()}</p>
                </li>
                <li class="info-box">
                    <p class="info-title">View</p>
                    <p class="info-value">${t.toLocaleString()}</p>
                </li>
                 <li class="info-box">
                    <p class="info-title">Comments</p>
                    <p class="info-value">${s.toLocaleString()}</p>
                </li>
                <li class="info-box">
                    <p class="info-title">Downloads</p>
                    <p class="info-value">${l.toLocaleString()}</p>
                </li>
            </ul>
        </li>
    `).join(""),h.refresh()}function L(){c.innerHTML=""}function S(){u.hidden=!1}function b(){u.hidden=!0}function $(){f.hidden=!1,p.hidden=!1}function w(){f.hidden=!0,p.hidden=!0}const q=document.querySelector(".form");q.addEventListener("submit",n=>{n.preventDefault(),L();const r=n.target.elements["search-text"],i=r?.value.trim();if(!i){a.warning({message:"Please enter a search term before submitting.",position:"topCenter",timeout:3e3,backgroundColor:"#FFA000",messageColor:"white",close:!1});return}S(),$(),g(i).then(o=>{if(!o.hits.length)throw new Error("Sorry, there are no images matching your search query. Please try again!");y(o.hits)}).catch(o=>{a.error({message:`${o.message??String(o)}`,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}).finally(()=>{r.value="",b(),w()})});
//# sourceMappingURL=index.js.map
