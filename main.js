(()=>{"use strict";const e=function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("header");n.classList.add("header");const d=document.createElement("h2");d.textContent="Primavera";const a=document.createElement("main");a.classList.add("main");const c=document.createElement("h1");c.textContent="Welcome to Primavera";const o=document.createElement("p");o.textContent="Authentic Italian cuisine and cozy ambience";const l=document.createElement("img");l.src="./images/resto-inside.jpg",l.alt="Interiror",l.height="300";const i=document.createElement("footer");i.classList.add("footer");const m=document.createElement("p");m.textContent="Copyright © 2023 ValeriaBlagodatskaja";const s=document.createElement("a");s.href="https://github.com/ValeriaBlagodatskaja",n.appendChild(d),a.appendChild(c),a.appendChild(o),a.appendChild(l),t.appendChild(n),t.appendChild(a),t.appendChild(i),i.appendChild(m),i.appendChild(s),e.appendChild(t)};function t(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}(()=>{const n=document.querySelector("#content"),d=document.createElement("button"),a=document.createElement("button"),c=document.createElement("button");d.setAttribute("id","home-button"),a.setAttribute("id","menu-button"),c.setAttribute("id","contact-button"),d.classList.add("tab"),a.classList.add("tab"),c.classList.add("tab"),d.textContent="Home",a.textContent="Menu",c.textContent="Contact",n.appendChild(d),n.appendChild(a),n.appendChild(c),d.addEventListener("click",(()=>{t(),e()})),a.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="Our Menu";const d=document.createElement("ul"),a=document.createElement("li");a.textContent="Arrabiata";const c=document.createElement("li");c.textContent="Lasagna";const o=document.createElement("li");o.textContent="Antipasti",d.appendChild(a),d.appendChild(c),d.appendChild(o),t.appendChild(n),t.appendChild(d),e.appendChild(t)})()})),c.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("div");n.setAttribute("id","map"),t.appendChild(n);const d=document.createElement("iframe");d.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.7696869090214!2d24.744198913627613!3d59.43691567456098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469293621ea661b5%3A0x9268327eedd2d36b!2sItaalia%20Suursaatkond!5e0!3m2!1set!2see!4v1694510633907!5m2!1set!2see",d.width="600",d.height="450",d.style="border:0;",d.allowfullscreen="",d.loading="lazy",d.referrerpolicy="no-referrer-when-downgrade",t.appendChild(d);const a=document.createElement("form");a.classList.add("contact-form");const c=document.createElement("h3");c.textContent="Message us",a.appendChild(c);const o=document.createElement("input");o.type="text",o.placeholder="Full name",a.appendChild(o);const l=document.createElement("input");l.type="email",l.placeholder="Email",a.appendChild(l);const i=document.createElement("input");i.type="text",i.placeholder="Type your message...",a.appendChild(i),t.appendChild(a),e.appendChild(t)})()}))})(),e()})();