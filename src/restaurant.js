function addPrimaveraHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  const h2 = document.createElement("h2");
  h2.textContent = "Primavera";
  header.appendChild(h2);
  return header;
}

function createHomePage() {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const main = document.createElement("main");
  main.classList.add("main");
  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to Primavera";
  const p = document.createElement("p");
  p.textContent = "Authentic Italian cuisine and cozy ambience";
  const image = document.createElement("img");
  image.src = "../images/resto-inside.jpg";
  image.alt = "Interiror";
  image.height = "700";

  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const copyright = document.createElement("p");
  copyright.textContent = "Copyright © 2023 ValeriaBlagodatskaja";
  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/ValeriaBlagodatskaja";

  main.appendChild(h1);
  main.appendChild(p);
  main.appendChild(image);
  pageContent.appendChild(main);
  pageContent.appendChild(footer);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);
  content.appendChild(pageContent);
}

export default createHomePage;
export { addPrimaveraHeader };
