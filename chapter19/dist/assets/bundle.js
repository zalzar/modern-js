(() => { "use strict";
    console.log("dom file"); const e = document.querySelector("body"),
        o = [{ name: "mario", premium: !0 }, { name: "luigi", premium: !1 }, { name: "yoshi", premium: !0 }, { name: "toad", premium: !0 }, { name: "peach", premium: !1 }];
    e.style.background = "peachpuff", (o => { const m = document.createElement("h1");
        m.textContent = "Hello world from the dom file", e.appendChild(m) })(), console.log(o); const m = (e => e.filter((e => e.premium)))(o);
    console.log(m), console.log("ali@matrix.com"), console.log("from index.js") })();