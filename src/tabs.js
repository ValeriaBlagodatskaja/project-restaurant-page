import createHomePage from "./restaurant";
import createMenuPage from "./menu";
import createContactPage from "./contact";

const createTabs = () => {
  const content = document.querySelector("#content");

  const header = document.createElement("header");
  header.classList.add("header");

  const h2 = document.createElement("h2");
  h2.textContent = "Primavera";

  header.appendChild(h2);

  const nav = document.createElement("nav");
  nav.id = "tabs";

  const tabNames = ["Home", "Menu", "Contact"];

  tabNames.forEach((tabName) => {
    const button = document.createElement("button");
    button.classList.add("tab");
    button.textContent = tabName;

    if (tabName === "Home") {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      clearContent();
      if (tabName === "Home") {
        createHomePage();
      } else if (tabName === "Menu") {
        createMenuPage();
      } else if (tabName === "Contact") {
        createContactPage();
      }

      document.querySelectorAll(".tab").forEach((tab) => {
        tab.classList.remove("active");
      });

      button.classList.add("active");
    });

    nav.appendChild(button);
  });

  content.appendChild(header);
  header.appendChild(nav);
};

function clearContent() {
  const content = document.querySelector("#content");
  const pageContent = document.querySelector(".page-content");
  if (pageContent) {
    content.removeChild(pageContent);
  }
}

export default createTabs;
