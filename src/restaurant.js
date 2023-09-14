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

  const forkImage = document.createElement("img");
  forkImage.classList.add("forkImage");
  forkImage.src = "../images/fork.jpg";
  forkImage.alt = "Fork image";
  forkImage.height = 400;

  const visitUs = document.createElement("p");
  visitUs.textContent = "Order online or visit us!";

  document.body.style.backgroundImage = "url('../images/resto-inside.jpg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";

  main.appendChild(h1);
  main.appendChild(p);
  main.appendChild(forkImage);
  main.appendChild(visitUs);
  pageContent.appendChild(main);

  content.appendChild(pageContent);

  const footer = document.querySelector(".footer");
  content.appendChild(footer);
}

export default createHomePage;
