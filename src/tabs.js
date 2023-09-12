import createHomePage from "./restaurant";
import createMenuPage from "./menu";
import createContactPage from "./contact";

const createTabs = () => {
  const content = document.querySelector("#content");

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

  content.appendChild(button1);
  content.appendChild(button2);
  content.appendChild(button3);

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
