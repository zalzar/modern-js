<<<<<<< HEAD
(()=>{"use strict";console.log("dom file");const e=document.querySelector("body"),o=[{name:"mario",premium:!0},{name:"luigi",premium:!1},{name:"yoshi",premium:!0},{name:"toad",premium:!0},{name:"peach",premium:!1}];e.style.background="peachpuff",(o=>{const m=document.createElement("h1");m.textContent="Hello world from the dom file",e.appendChild(m)})(),console.log(o);const m=(e=>e.filter((e=>e.premium)))(o);console.log(m),console.log("ali@matrix.com"),console.log("from index.js")})();
=======
(()=>{"use strict";console.log("dom file");const e=[{name:"Ali",premium:!0},{name:"Niobe",premium:!1},{name:"Neo",premium:!0},{name:"Link",premium:!0},{name:"Persephone",premium:!0},{name:"Morpheus",premium:!0},{name:"Smith",premium:!1},{name:"Trinity",premium:!0},{name:"Oracle",premium:!1}];document.querySelector("body").style.background="peachpuff";const m=(e=>e.filter((e=>e.premium)))(e);console.log(e,m),console.log("test3")})();
>>>>>>> c908c72a20a4e06e112b1d873a5473d48eee72bd
