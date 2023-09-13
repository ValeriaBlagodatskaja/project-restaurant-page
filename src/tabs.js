import createHomePage from "./restaurant";
import createMenuPage from "./menu";
import createContactPage from "./contact";
import { addPrimaveraHeader } from "./restaurant.js";

const createTabs = () => {
  const content = document.querySelector("#content");

  const tabsContainer = document.createElement("div");
  tabsContainer.classList.add("tabsContainer");

  const button1 = document.createElement("button");
  const button2 = document.createElement("button");
  const button3 = document.createElement("button");

  button1.setAttribute("id", "home-button");
  button2.setAttribute("id", "menu-button");
  button3.setAttribute("id", "contact-button");

  button1.classList.add("tab");
  button2.classList.add("tab");
  button3.classList.add("tab");

  button1.textContent = "Home";
  button2.textContent = "Menu";
  button3.textContent = "Contact";

  content.appendChild(addPrimaveraHeader());

  tabsContainer.appendChild(button1);
  tabsContainer.appendChild(button2);
  tabsContainer.appendChild(button3);

  content.appendChild(tabsContainer);

  button1.addEventListener("click", () => {
    clearContent();
    createHomePage();
  });
  button2.addEventListener("click", () => {
    clearContent();
    createMenuPage();
  });
  button3.addEventListener("click", () => {
    clearContent();
    createContactPage();
  });
};

function clearContent() {
  const content = document.querySelector("#content");
  const pageContent = document.querySelector(".page-content");
  if (pageContent) {
    content.removeChild(pageContent);
  }
}

export default createTabs;
