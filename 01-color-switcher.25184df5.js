!function(){var t=document.querySelector("button[data-start]");console.log(t);var o,e=document.querySelector("button[data-stop]");function n(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}console.log(e),t.addEventListener("click",(function(){o||(o=setInterval(n,1e3));t.toggleAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(o),o=null}))}();
//# sourceMappingURL=01-color-switcher.25184df5.js.map
