var categoryEntries=document.querySelectorAll(".category-entries");for(entry of categoryEntries)entry.scrollWidth<=entry.clientWidth&&entry.parentElement.removeChild(entry.parentElement.querySelector(".category-nav"));function entryScroll(e,t){const r=e.closest(".category-break"),n=r.querySelector(".category-entries");e=r.querySelector(".entry").offsetWidth+60;"prev"===t&&(e*=-1),n.scrollBy({left:e,behavior:"smooth"})}var entry=document.querySelector(".post-content");function getParameterByName(e,t){t=t||window.location.href,e=e.replace(/[\[\]]/g,"\\$&");t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return t?t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):"":null}entry&&window.addEventListener("scroll",()=>{var e=entry.offsetHeight,t=window.innerHeight,r=entry.offsetTop,n=window.pageYOffset;t<e+r?document.documentElement.style.setProperty("--progress",n/(e-t+r)):document.documentElement.style.setProperty("--progress",0)},!1),function(e){e.addEventListener("DOMContentLoaded",function(){e.querySelectorAll(".kg-gallery-image img").forEach(function(e){var t=e.closest(".kg-gallery-image"),r=e.attributes.width.value,e=e.attributes.height.value;t.style.flex=r/e+" 1 0%"})})}((window,document));var action=getParameterByName("action"),success=getParameterByName("success");"subscribe"!=action||null!==success&&"true"!==success||document.rootElement.classList.add("subscribe-success"),"subscribe"==action&&"false"===success&&document.rootElement.classList.add("subscribe-failure");var subscribeButton=document.querySelector(".newsletter-join"),closeButton=document.querySelector(".subscribe-notification .subscribe-close-button");subscribeButton.addEventListener("click",e=>{document.querySelector(".subscribe-overlay form").classList.remove("")}),window.typetura={selectors:[".typetura",".primary-headline",".primary-subheadline",".section-headline",".section-label",".pullquote",".meta","main","article","section","aside","[class*='block']",".typetura-prose h1",".typetura-prose h2",".typetura-prose h3",".typetura-prose h4",".typetura-prose h5",".typetura-prose h6"]},function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function n(e){void 0!==window.ResizeObserver&&new window.ResizeObserver(function(n){window.requestAnimationFrame(function(){if(Array.isArray(n)&&n.length){var e,t=o(n);try{for(t.s();!(e=t.n()).done;){var r=e.value;r.contentRect&&r.target.style.setProperty("--tt-bind",r.contentRect.width)}}catch(e){t.e(e)}finally{t.f()}}})}).observe(e)}window.typetura=window.typetura||{selectors:[".typetura"]},function(){var r=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).selectors||[".typetura"];new Promise(function(e,t){new window.MutationObserver(function(e){e.forEach(function(e){e.addedNodes.forEach(function(e){e.classList&&e.matches(r)&&n(e)})})}).observe(document.documentElement,{childList:!0,attributes:!1,subtree:!0}),n(document.documentElement),e()})}(window.typetura)});
//# sourceMappingURL=goldsguide.js.map