const createFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const copyright = document.createElement("p");
  copyright.textContent = "Copyright © 2023 ValeriaBlagodatskaja";
  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/ValeriaBlagodatskaja";

  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
};

export default createFooter;
