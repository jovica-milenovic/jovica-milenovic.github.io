(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{55:function(e,t,n){"use strict";n.r(t),n.d(t,"jm",(function(){return i}));const i={collapsible:{containers:new Map,init:function(e,t){e.addEventListener("transitionend",(function(){e.querySelectorAll(":scope > .list-group-header").forEach(e=>{e.style.opacity="1"===e.style.opacity?"0.99":"1"})}));let n=this;if(!this.containers.has(e)){e.querySelectorAll(":scope > .list-group-header").forEach(e=>{e.addEventListener("click",n.slideToggle)}),this.containers.set(e,{container:e,multiple:t})}},slideToggle:function(e){e.preventDefault();let t=this.nextElementSibling,n=this.parentElement,{multiple:l}=i.collapsible.containers.get(n);if(!l){n.querySelectorAll(":scope .open").forEach(e=>{t!==e&&i.collapsible.toggleSection(e)})}i.collapsible.toggleSection(t)},toggleSection:function(e){let t=e.previousElementSibling;e.style.height=e.scrollHeight+"px",t.classList.toggle("open"),console.log(e.scrollHeight),e.style.height=t.classList.contains("open")?e.scrollHeight+"px":0},destroy:function(e){if(this.containers.has(e)){e.querySelectorAll(":scope > .list-group-header").forEach(e=>{e.removeEventListener("click",headerClickHandler)}),this.containers.delete(e),console.log("destroy called on collapsible")}}},inView:function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}}}}]);
//# sourceMappingURL=chunkFilename.lib2.bundle.js.map