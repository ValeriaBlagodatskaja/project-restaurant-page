const createMenuPage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const heading = document.createElement("h1");
  heading.classList.add("ourMenu");
  heading.textContent = "Our Menu";

  const menuList = document.createElement("ul");
  menuList.classList.add("menuList");

  const menuItems = [
    {
      photoSrc: "../images/carbonara.jpg",
      name: "Carbonara Verde di Pistacchio",
      recipe: "Pistachio cream, guanciale bacon, burrata, basil, olive oil",
    },

    {
      photoSrc: "../images/guanciale.jpg",
      name: "N'duja, stracciatella e guanciale",
      recipe: "N'juda, stracciatella cheese, guanciale bacon, olive oil",
    },
    {
      name: "Pasta Tartufata",
      recipe: "Truffle pasta, butter, Grana Padano cheese, fresh black truffle",
      photoSrc: "../images/tartufata.jpg",
    },
    {
      photoSrc: "../images/verdure.jpg",
      name: "Spaghetti con verdure grigliate",
      recipe: "Grilled pepper and eggplant, herbs, garlic, olive oil",
    },
    {
      photoSrc: "../images/formaggi.jpg",
      name: "Quattro Formaggi",
      recipe:
        "Primavera pizza sauce, mozzarella, goat milk cheese, gorgonzola, grana padano, fresh basil",
    },
    {
      photoSrc: "../images/vulcano.jpg",
      name: "Vulcano",
      recipe:
        "Primavera pizza sauce, mozzarella, salami piccante, jalopeno, arugula, pesto",
    },
    {
      photoSrc: "../images/gamberi.jpg",
      name: "Al Gamberi",
      recipe:
        "Primavera pizza sauce, mozzarella, red onion, tiger prawns, capers, limonett, lemon pepper",
    },
    {
      photoSrc: "../images/primavera.jpg",
      name: "Pizza Primavera",
      recipe:
        "Primavera pizza sauce, mozzarella, prosciutto crudo, arugula, grana padano, pesto",
    },
  ];

  menuItems.forEach((menuItem) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("itemDiv");

    const photoElement = document.createElement("img");
    photoElement.src = menuItem.photoSrc;
    photoElement.alt = `${menuItem.name} photo`;
    photoElement.height = "300";

    const menuItemElement = document.createElement("li");
    menuItemElement.textContent = menuItem.name;

    const recipeElement = document.createElement("p");
    recipeElement.textContent = menuItem.recipe;

    itemDiv.appendChild(photoElement);
    itemDiv.appendChild(menuItemElement);
    itemDiv.appendChild(recipeElement);

    menuList.appendChild(itemDiv);
  });

  pageContent.appendChild(heading);
  pageContent.appendChild(menuList);

  content.appendChild(pageContent);
  const footer = document.querySelector(".footer");
  content.appendChild(footer);
};

export default createMenuPage;
