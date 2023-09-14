const createFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const copyright = document.createElement("p");
  copyright.textContent = "Copyright © 2023 ValeriaBlagodatskaja";
  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/ValeriaBlagodatskaja";
  githubLink.target = "_blank";

  const githubIcon = document.createElement("img");
  githubIcon.src = "../images/icons8-github-30.png";
  githubIcon.alt = "Github icon";
  githubIcon.style.width = "20px";

  githubLink.appendChild(githubIcon);

  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
};

export default createFooter;
