(()=>{"use strict";console.log("coming from dom");var e,m=document.querySelector("body"),n=[{name:"Ali",premium:!0},{name:"Morpheus",premium:!0},{name:"Link",premium:!1},{name:"Trinity",premium:!0},{name:"Agent Smith",premium:!0},{name:"The Oracle",premium:!0},{name:"Cypher",premium:!1},{name:"Dozer",premium:!1},{name:"Tank",premium:!1},{name:"Niobe",premium:!0},{name:"Merovingian",premium:!0},{name:"Neo",premium:!0},{name:"Persephone",premium:!1},{name:"Seraph",premium:!0},{name:"Lock",premium:!1},{name:"Apoc",premium:!1}],o=function(e){console.log("hello ".concat(e))};console.log("from index file"),console.log("ali.matrix.com"),o("Ali"),o("Morpheus"),o("Link"),m.style.background="peachpuff",(e=document.createElement("h1")).textContent="Hello world",m.appendChild(e),console.log(n);var r=function(e){return e.filter((function(e){return e.premium}))}(n);console.log(r)})();