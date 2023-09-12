const createMenuPage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";

  const menuList = document.createElement("ul");
  const menuItem1 = document.createElement("li");
  menuItem1.textContent = "Carbonara Verde di Pistacchio";
  const recipe1 = document.createElement("p");
  recipe1.textContent =
    "Pistachio cream, guanciale bacon, burrata, basil, olive oil";
  const photo1 = document.createElement("img");
  photo1.src = "../images/carbonara.jpg";
  photo1.alt = "Carbonara pasta photo";
  photo1.height = "200";

  const menuItem2 = document.createElement("li");
  menuItem2.textContent = "N'duja, stracciatella e guanciale";
  const recipe2 = document.createElement("p");
  recipe2.textContent =
    "N'juda, stracciatella cheese, guanciale bacon, olive oil";
  const photo2 = document.createElement("img");
  photo2.src = "../images/guanciale.jpg";
  photo2.alt = "Guanciale pasta photo";
  photo2.height = "200";

  const menuItem3 = document.createElement("li");
  menuItem3.textContent = "Pasta Tartufata";
  const recipe3 = document.createElement("p");
  recipe3.textContent =
    "Truffle pasta, butter, Grana Padano cheese, fresh black truffle";
  const photo3 = document.createElement("img");
  photo3.src = "../images/tartufata.jpg";
  photo3.alt = "Tartufata pasta photo";
  photo3.height = "200";

  const menuItem4 = document.createElement("li");
  menuItem4.textContent = "Spaghetti con verdure grigliate";
  const recipe4 = document.createElement("p");
  recipe4.textContent = "Grilled pepper and eggplant, herbs, garlic, olive oil";
  const photo4 = document.createElement("img");
  photo4.src = "../images/verdure.jpg";
  photo4.alt = "Verdure pasta photo";
  photo4.height = "200";

  const menuItem5 = document.createElement("li");
  menuItem5.textContent = "Quattro Formaggi";
  const recipe5 = document.createElement("p");
  recipe5.textContent =
    "Primavera pizza sauce, mozzarella fior di latte, goat milk cheese, gorgonzola, grana padano, fresh basil, pesto";
  const photo5 = document.createElement("img");
  photo5.src = "../images/formaggi.jpg";
  photo5.alt = "Formaggi pizza photo";
  photo5.height = "200";

  const menuItem6 = document.createElement("li");
  menuItem6.textContent = "Vulcano";
  const recipe6 = document.createElement("p");
  recipe6.textContent =
    "Primavera pizza sauce, mozzarella fior di latte, salami piccante, jalopeno, arugula, pesto";
  const photo6 = document.createElement("img");
  photo6.src = "../images/vulcano.jpg";
  photo6.alt = "Vulcano pizza photo";
  photo6.height = "200";

  const menuItem7 = document.createElement("li");
  menuItem7.textContent = "Al Gamberi";
  const recipe7 = document.createElement("p");
  recipe7.textContent =
    "Primavera pizza sauce, mozzarella fior di latte, red onion, tiger prawns, capers, fresh basil, limonett, lemon pepper";
  const photo7 = document.createElement("img");
  photo7.src = "../images/gamberi.jpg";
  photo7.alt = "Gamberi pizza photo";
  photo7.height = "200";

  const menuItem8 = document.createElement("li");
  menuItem8.textContent = "Pizza Primavera";
  const recipe8 = document.createElement("p");
  recipe8.textContent =
    "Primavera pizza sauce, mozzarella fior di latte, prosciutto crudo, arugula, grana padano, pesto";
  const photo8 = document.createElement("img");
  photo8.src = "../images/primavera.jpg";
  photo8.alt = "Primavera photo";
  photo8.height = "200";

  menuList.appendChild(menuItem1);
  menuList.appendChild(recipe1);
  menuList.appendChild(photo1);
  menuList.appendChild(menuItem2);
  menuList.appendChild(recipe2);
  menuList.appendChild(photo2);
  menuList.appendChild(menuItem3);
  menuList.appendChild(recipe3);
  menuList.appendChild(photo3);
  menuList.appendChild(menuItem4);
  menuList.appendChild(recipe4);
  menuList.appendChild(photo4);
  menuList.appendChild(menuItem5);
  menuList.appendChild(recipe5);
  menuList.appendChild(photo5);
  menuList.appendChild(menuItem6);
  menuList.appendChild(recipe6);
  menuList.appendChild(photo6);
  menuList.appendChild(menuItem7);
  menuList.appendChild(recipe7);
  menuList.appendChild(photo7);
  menuList.appendChild(menuItem8);
  menuList.appendChild(recipe8);
  menuList.appendChild(photo8);

  pageContent.appendChild(heading);
  pageContent.appendChild(menuList);

  content.appendChild(pageContent);
};

export default createMenuPage;
