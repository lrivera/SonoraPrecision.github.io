(function(){var e=navigator.platform.indexOf("Win")>-1;if(e){if(document.getElementsByClassName("main-content")[0]){var t=document.querySelector(".main-content");new PerfectScrollbar(t)}if(document.getElementsByClassName("sidenav")[0]){var l=document.querySelector(".sidenav");new PerfectScrollbar(l)}if(document.getElementsByClassName("navbar-collapse")[0]){var n=document.querySelector(".navbar:not(.navbar-expand-lg) .navbar-collapse");new PerfectScrollbar(n)}if(document.getElementsByClassName("fixed-plugin")[0]){var n=document.querySelector(".fixed-plugin");new PerfectScrollbar(n)}}})();W("navbarBlur");var k=[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));k.map(function(e){return new bootstrap.Popover(e)});var A=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));A.map(function(e){return new bootstrap.Tooltip(e)});if(document.querySelector(".fixed-plugin")){var u=document.querySelector(".fixed-plugin"),h=document.querySelector(".fixed-plugin-button"),p=document.querySelector(".fixed-plugin-button-nav"),N=document.querySelector(".fixed-plugin .card"),T=document.querySelectorAll(".fixed-plugin-close-button"),S=document.getElementById("navbarBlur"),B=document.getElementById("navbarFixed");h&&(h.onclick=function(){u.classList.contains("show")?u.classList.remove("show"):u.classList.add("show")}),p&&(p.onclick=function(){u.classList.contains("show")?u.classList.remove("show"):u.classList.add("show")}),T.forEach(function(e){e.onclick=function(){u.classList.remove("show")}}),document.querySelector("body").onclick=function(e){e.target!=h&&e.target!=p&&e.target.closest(".fixed-plugin .card")!=N&&u.classList.remove("show")},S&&S.getAttribute("navbar-scroll")=="true"&&B.setAttribute("checked","true")}var m=document.querySelectorAll(".nav-pills");m.forEach(function(e,t){var l=document.createElement("div"),n=e.querySelector("li:first-child .nav-link"),r=n.cloneNode();r.innerHTML="-",l.classList.add("moving-tab","position-absolute","nav-link"),l.appendChild(r),e.appendChild(l),e.getElementsByTagName("li").length,l.style.padding="0px",l.style.width=e.querySelector("li:nth-child(1)").offsetWidth+"px",l.style.transform="translate3d(0px, 0px, 0px)",l.style.transition=".5s ease",e.onmouseover=function(s){let o=C(s).closest("li");if(o){let d=Array.from(o.closest("ul").children),c=d.indexOf(o)+1;e.querySelector("li:nth-child("+c+") .nav-link").onclick=function(){l=e.querySelector(".moving-tab");let f=0;if(e.classList.contains("flex-column")){for(var i=1;i<=d.indexOf(o);i++)f+=e.querySelector("li:nth-child("+i+")").offsetHeight;l.style.transform="translate3d(0px,"+f+"px, 0px)",l.style.height=e.querySelector("li:nth-child("+i+")").offsetHeight}else{for(var i=1;i<=d.indexOf(o);i++)f+=e.querySelector("li:nth-child("+i+")").offsetWidth;l.style.transform="translate3d("+f+"px, 0px, 0px)",l.style.width=e.querySelector("li:nth-child("+c+")").offsetWidth+"px"}}}}});window.addEventListener("resize",function(e){m.forEach(function(t,l){t.querySelector(".moving-tab").remove();var n=document.createElement("div"),r=t.querySelector(".nav-link.active").cloneNode();r.innerHTML="-",n.classList.add("moving-tab","position-absolute","nav-link"),n.appendChild(r),t.appendChild(n),n.style.padding="0px",n.style.transition=".5s ease";let s=t.querySelector(".nav-link.active").parentElement;if(s){let o=Array.from(s.closest("ul").children),d=o.indexOf(s)+1,c=0;if(t.classList.contains("flex-column")){for(var a=1;a<=o.indexOf(s);a++)c+=t.querySelector("li:nth-child("+a+")").offsetHeight;n.style.transform="translate3d(0px,"+c+"px, 0px)",n.style.width=t.querySelector("li:nth-child("+d+")").offsetWidth+"px",n.style.height=t.querySelector("li:nth-child("+a+")").offsetHeight}else{for(var a=1;a<=o.indexOf(s);a++)c+=t.querySelector("li:nth-child("+a+")").offsetWidth;n.style.transform="translate3d("+c+"px, 0px, 0px)",n.style.width=t.querySelector("li:nth-child("+d+")").offsetWidth+"px"}}}),window.innerWidth<991?m.forEach(function(t,l){t.classList.contains("flex-column")||t.classList.add("flex-column","on-resize")}):m.forEach(function(t,l){t.classList.contains("on-resize")&&t.classList.remove("flex-column","on-resize")})});function C(e){return e=e||window.event,e.target||e.srcElement}function W(e){const t=document.getElementById(e);let l=t?t.getAttribute("navbar-scroll"):!1,n=5,r=["position-sticky","blur","shadow-blur","mt-4","left-auto","top-1","z-index-sticky"],s=["shadow-none"];l=="true"?window.onscroll=L(function(){window.scrollY>n?a():o()},10):window.onscroll=L(function(){o()},10);function a(){t.classList.add(...r),t.classList.remove(...s),d("blur")}function o(){t&&(t.classList.remove(...r),t.classList.add(...s),d("transparent"))}function d(c){let f=document.querySelectorAll(".navbar-main .nav-link"),i=document.querySelectorAll(".navbar-main .sidenav-toggler-line");c==="blur"?(f.forEach(v=>{v.classList.remove("text-body")}),i.forEach(v=>{v.classList.add("bg-dark")})):c==="transparent"&&(f.forEach(v=>{v.classList.add("text-body")}),i.forEach(v=>{v.classList.remove("bg-dark")}))}}function L(e,t,l){var n;return function(){var r=this,s=arguments,a=function(){n=null,l||e.apply(r,s)},o=l&&!n;clearTimeout(n),n=setTimeout(a,t),o&&e.apply(r,s)}}const w=document.getElementById("iconNavbarSidenav"),b=document.getElementById("iconSidenav"),x=document.getElementById("sidenav-main");let y=document.getElementsByTagName("body")[0],g="g-sidenav-pinned";w&&w.addEventListener("click",q);b&&b.addEventListener("click",q);function q(){y.classList.contains(g)?(y.classList.remove(g),x.classList.remove("bg-transparent")):(y.classList.add(g),x.classList.remove("bg-transparent"),b.classList.remove("d-none"))}document.querySelector("[data-class]");window.addEventListener("resize",E);window.addEventListener("load",E);function E(){let e=document.querySelectorAll('[onclick="sidebarType(this)"]');window.innerWidth<1200?e.forEach(function(t){t.classList.add("disabled")}):e.forEach(function(t){t.classList.remove("disabled")})}
