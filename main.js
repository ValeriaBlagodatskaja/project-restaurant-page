(()=>{"use strict";const e=function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("header");n.classList.add("header");const c=document.createElement("h2");c.textContent="Primavera";const d=document.createElement("main");d.classList.add("main");const a=document.createElement("h1");a.textContent="Welcome to Primavera";const o=document.createElement("p");o.textContent="Authentic Italian cuisine and cozy ambience";const i=document.createElement("img");i.src="../images/resto-inside.jpg",i.alt="Interiror",i.height="700";const l=document.createElement("footer");l.classList.add("footer");const s=document.createElement("p");s.textContent="Copyright © 2023 ValeriaBlagodatskaja";const m=document.createElement("a");m.href="https://github.com/ValeriaBlagodatskaja",n.appendChild(c),d.appendChild(a),d.appendChild(o),d.appendChild(i),t.appendChild(n),t.appendChild(d),t.appendChild(l),l.appendChild(s),l.appendChild(m),e.appendChild(t)};function t(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}(()=>{const n=document.querySelector("#content"),c=document.createElement("button"),d=document.createElement("button"),a=document.createElement("button");c.setAttribute("id","home-button"),d.setAttribute("id","menu-button"),a.setAttribute("id","contact-button"),c.classList.add("tab"),d.classList.add("tab"),a.classList.add("tab"),c.textContent="Home",d.textContent="Menu",a.textContent="Contact",n.appendChild(c),n.appendChild(d),n.appendChild(a),c.addEventListener("click",(()=>{t(),e()})),d.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="Our Menu";const c=document.createElement("ul"),d=document.createElement("li");d.textContent="Arrabiata";const a=document.createElement("li");a.textContent="Lasagna";const o=document.createElement("li");o.textContent="Antipasti",c.appendChild(d),c.appendChild(a),c.appendChild(o),t.appendChild(n),t.appendChild(c),e.appendChild(t)})()})),a.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("div");n.classList.add("contact-container");const c=document.createElement("div");c.classList.add("map-container");const d=document.createElement("div");d.classList.add("info-container");const a=document.createElement("div");a.classList.add("location");const o=document.createElement("img");o.src="../images/icons8-location-50.png",o.alt="Location Icon",o.height="20",a.appendChild(o);const i=document.createElement("p");i.textContent="Vene 2, Tallinn 10123",a.appendChild(i),d.appendChild(a);const l=document.createElement("div");l.classList.add("hours");const s=document.createElement("img");s.src="../images/icons8-clock-50.png",s.alt="Clock Icon",s.height="20",l.appendChild(s);const m=document.createElement("p");m.textContent="Mon-Sun: 12pm-11pm",l.appendChild(m),d.appendChild(l);const p=document.createElement("div");p.classList.add("phoneDiv");const r=document.createElement("img");r.src="../images/icons8-phone-50.png",r.alt="Phone Icon",r.height="20",p.appendChild(r);const u=document.createElement("p");u.textContent="+372 56960022",p.appendChild(u),d.appendChild(p);const h=document.createElement("div");h.classList.add("messageDiv");const C=document.createElement("img");C.src="../images/icons8-message-50.png",C.alt="Message Icon",C.height="20",h.appendChild(C);const E=document.createElement("h3");E.textContent="Message us",h.appendChild(E),d.appendChild(h);const g=document.createElement("form");g.classList.add("contact-form");const b=document.createElement("input");b.type="text",b.placeholder="Full name",g.appendChild(b);const L=document.createElement("input");L.type="email",L.placeholder="Email",g.appendChild(L);const v=document.createElement("input");v.type="text",v.placeholder="Type your message...",g.appendChild(v);const x=document.createElement("input");x.type="submit",x.value="Submit",x.classList.add("submitButton"),g.appendChild(x),d.appendChild(g),c.appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","map");const t=document.createElement("iframe");return t.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.7696869090214!2d24.744198913627613!3d59.43691567456098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469293621ea661b5%3A0x9268327eedd2d36b!2sItaalia%20Suursaatkond!5e0!3m2!1set!2see!4v1694510633907!5m2!1set!2see",t.width="600",t.height="450",t.style="border:0;",t.allowfullscreen="",t.loading="lazy",t.referrerpolicy="no-referrer-when-downgrade",e.appendChild(t),e})()),n.appendChild(d),n.appendChild(c),t.appendChild(n),e.appendChild(t)})()}))})(),e()})();