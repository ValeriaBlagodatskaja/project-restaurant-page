(()=>{"use strict";const e=function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const a=document.createElement("header");a.classList.add("header");const n=document.createElement("h2");n.textContent="Primavera";const c=document.createElement("main");c.classList.add("main");const o=document.createElement("h1");o.textContent="Welcome to Primavera";const d=document.createElement("p");d.textContent="Authentic Italian cuisine and cozy ambience";const i=document.createElement("img");i.src="../images/resto-inside.jpg",i.alt="Interiror",i.height="700";const l=document.createElement("footer");l.classList.add("footer");const s=document.createElement("p");s.textContent="Copyright © 2023 ValeriaBlagodatskaja";const r=document.createElement("a");r.href="https://github.com/ValeriaBlagodatskaja",a.appendChild(n),c.appendChild(o),c.appendChild(d),c.appendChild(i),t.appendChild(a),t.appendChild(c),t.appendChild(l),l.appendChild(s),l.appendChild(r),e.appendChild(t)};function t(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}(()=>{const a=document.querySelector("#content"),n=document.createElement("button"),c=document.createElement("button"),o=document.createElement("button");n.setAttribute("id","home-button"),c.setAttribute("id","menu-button"),o.setAttribute("id","contact-button"),n.classList.add("tab"),c.classList.add("tab"),o.classList.add("tab"),n.textContent="Home",c.textContent="Menu",o.textContent="Contact",a.appendChild(n),a.appendChild(c),a.appendChild(o),n.addEventListener("click",(()=>{t(),e()})),c.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const a=document.createElement("h1");a.classList.add("ourMenu"),a.textContent="Our Menu";const n=document.createElement("ul");n.classList.add("menuList"),[{photoSrc:"../images/carbonara.jpg",name:"Carbonara Verde di Pistacchio",recipe:"Pistachio cream, guanciale bacon, burrata, basil, olive oil"},{photoSrc:"../images/guanciale.jpg",name:"N'duja, stracciatella e guanciale",recipe:"N'juda, stracciatella cheese, guanciale bacon, olive oil"},{name:"Pasta Tartufata",recipe:"Truffle pasta, butter, Grana Padano cheese, fresh black truffle",photoSrc:"../images/tartufata.jpg"},{photoSrc:"../images/verdure.jpg",name:"Spaghetti con verdure grigliate",recipe:"Grilled pepper and eggplant, herbs, garlic, olive oil"},{photoSrc:"../images/formaggi.jpg",name:"Quattro Formaggi",recipe:"Primavera pizza sauce, mozzarella, goat milk cheese, gorgonzola, grana padano, fresh basil"},{photoSrc:"../images/vulcano.jpg",name:"Vulcano",recipe:"Primavera pizza sauce, mozzarella, salami piccante, jalopeno, arugula, pesto"},{photoSrc:"../images/gamberi.jpg",name:"Al Gamberi",recipe:"Primavera pizza sauce, mozzarella, red onion, tiger prawns, capers, limonett, lemon pepper"},{photoSrc:"../images/primavera.jpg",name:"Pizza Primavera",recipe:"Primavera pizza sauce, mozzarella, prosciutto crudo, arugula, grana padano, pesto"}].forEach((e=>{const t=document.createElement("div");t.classList.add("itemDiv");const a=document.createElement("img");a.src=e.photoSrc,a.alt=`${e.name} photo`,a.height="300";const c=document.createElement("li");c.textContent=e.name;const o=document.createElement("p");o.textContent=e.recipe,t.appendChild(a),t.appendChild(c),t.appendChild(o),n.appendChild(t)})),t.appendChild(a),t.appendChild(n),e.appendChild(t)})()})),o.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const a=document.createElement("div");a.classList.add("contact-container");const n=document.createElement("div");n.classList.add("map-container");const c=document.createElement("div");c.classList.add("info-container");const o=document.createElement("div");o.classList.add("location");const d=document.createElement("img");d.src="../images/icons8-location-50.png",d.alt="Location Icon",d.height="20",o.appendChild(d);const i=document.createElement("p");i.textContent="Vene 2, Tallinn 10123",o.appendChild(i),c.appendChild(o);const l=document.createElement("div");l.classList.add("hours");const s=document.createElement("img");s.src="../images/icons8-clock-50.png",s.alt="Clock Icon",s.height="20",l.appendChild(s);const r=document.createElement("p");r.textContent="Mon-Sun: 12pm-11pm",l.appendChild(r),c.appendChild(l);const m=document.createElement("div");m.classList.add("phoneDiv");const p=document.createElement("img");p.src="../images/icons8-phone-50.png",p.alt="Phone Icon",p.height="20",m.appendChild(p);const u=document.createElement("p");u.textContent="+372 56960022",m.appendChild(u),c.appendChild(m);const h=document.createElement("div");h.classList.add("messageDiv");const g=document.createElement("img");g.src="../images/icons8-message-50.png",g.alt="Message Icon",g.height="20",h.appendChild(g);const C=document.createElement("h3");C.textContent="Message us",h.appendChild(C),c.appendChild(h);const E=document.createElement("form");E.classList.add("contact-form");const v=document.createElement("input");v.type="text",v.placeholder="Full name",E.appendChild(v);const b=document.createElement("input");b.type="email",b.placeholder="Email",E.appendChild(b);const f=document.createElement("input");f.type="text",f.placeholder="Type your message...",E.appendChild(f);const L=document.createElement("input");L.type="submit",L.value="Submit",L.classList.add("submitButton"),E.appendChild(L);const z=document.createElement("div");z.classList.add("form-wrapper"),z.appendChild(E),c.appendChild(z),c.appendChild(E),n.appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","map");const t=document.createElement("iframe");return t.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.7696869090214!2d24.744198913627613!3d59.43691567456098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469293621ea661b5%3A0x9268327eedd2d36b!2sItaalia%20Suursaatkond!5e0!3m2!1set!2see!4v1694510633907!5m2!1set!2see",t.width="600",t.height="450",t.style="border:0;",t.allowfullscreen="",t.loading="lazy",t.referrerpolicy="no-referrer-when-downgrade",e.appendChild(t),e})()),a.appendChild(c),a.appendChild(n),t.appendChild(a),e.appendChild(t)})()}))})(),e()})();