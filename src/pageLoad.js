function createElements() {
  const content = document.getElementById("content");

  const header = document.createElement("header");
  header.classList.add("header");
  const nav = document.createElement("nav");
  const h2 = document.createElement("h2");
  h2.textContent = "Primavera";
  const ul = document.createElement("ul");
  const navMenu = ["Home", "Menu", "About us", "Contact"];
  navMenu.forEach((item) => {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = `#${item.toLowerCase()}`;
    anchor.textContent = item;
    li.appendChild(anchor);
    ul.appendChild(li);
  });
  header.appendChild(nav);
  nav.appendChild(h2);
  nav.appendChild(ul);

  const main = document.createElement("main");
  main.classList.add("main");
  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to Primavera";
  const p = document.createElement("p");
  p.textContent = "Authentic Italian cuisine and cozy ambience";

  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const copyright = document.createElement("p");
  copyright.textContent = "Copyright © 2023 ValeriaBlagodatskaja";
  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/ValeriaBlagodatskaja";

  main.appendChild(h1);
  main.appendChild(p);
  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);
}

export default createElements;
