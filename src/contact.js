const createMap = () => {
  const mapDiv = document.createElement("div");
  mapDiv.setAttribute("id", "map");

  const iframe = document.createElement("iframe");
  iframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.7696869090214!2d24.744198913627613!3d59.43691567456098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469293621ea661b5%3A0x9268327eedd2d36b!2sItaalia%20Suursaatkond!5e0!3m2!1set!2see!4v1694510633907!5m2!1set!2see";
  iframe.width = "600";
  iframe.height = "450";
  iframe.style = "border:0;";
  iframe.allowfullscreen = "";
  iframe.loading = "lazy";
  iframe.referrerpolicy = "no-referrer-when-downgrade";
  mapDiv.appendChild(iframe);

  return mapDiv;
};

const createContactPage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const mapContainer = document.createElement("div");
  mapContainer.classList.add("map-container");

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");

  const locationDiv = document.createElement("div");
  locationDiv.classList.add("location");

  const locationSymbol = document.createElement("img");
  locationSymbol.src = "../images/icons8-location-50.png";
  locationSymbol.alt = "Location Icon";
  locationSymbol.height = "20";
  locationDiv.appendChild(locationSymbol);

  const address = document.createElement("p");
  address.textContent = "Vene 2, Tallinn 10123";
  locationDiv.appendChild(address);

  infoContainer.appendChild(locationDiv);

  const hoursDiv = document.createElement("div");
  hoursDiv.classList.add("hours");

  const clockSymbol = document.createElement("img");
  clockSymbol.src = "../images/icons8-clock-50.png";
  clockSymbol.alt = "Clock Icon";
  clockSymbol.height = "20";
  hoursDiv.appendChild(clockSymbol);

  const workingHours = document.createElement("p");
  workingHours.textContent = "Mon-Sun: 12pm-11pm";
  hoursDiv.appendChild(workingHours);

  infoContainer.appendChild(hoursDiv);

  const phoneDiv = document.createElement("div");
  phoneDiv.classList.add("phoneDiv");

  const phoneSymbol = document.createElement("img");
  phoneSymbol.src = "../images/icons8-phone-50.png";
  phoneSymbol.alt = "Phone Icon";
  phoneSymbol.height = "20";
  phoneDiv.appendChild(phoneSymbol);

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "+372 56960022";
  phoneDiv.appendChild(phoneNumber);

  infoContainer.appendChild(phoneDiv);

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("messageDiv");

  const messageSymbol = document.createElement("img");
  messageSymbol.src = "../images/icons8-message-50.png";
  messageSymbol.alt = "Message Icon";
  messageSymbol.height = "20";
  messageDiv.appendChild(messageSymbol);

  const h3 = document.createElement("h3");
  h3.textContent = "Message us";
  messageDiv.appendChild(h3);

  infoContainer.appendChild(messageDiv);

  const form = document.createElement("form");
  form.classList.add("contact-form");

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Full name";
  form.appendChild(nameInput);

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Email";
  form.appendChild(emailInput);

  const messageInput = document.createElement("input");
  messageInput.type = "text";
  messageInput.placeholder = "Type your message...";
  form.appendChild(messageInput);

  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Submit";
  submitButton.classList.add("submitButton");
  form.appendChild(submitButton);

  infoContainer.appendChild(form);

  mapContainer.appendChild(createMap());

  contactContainer.appendChild(infoContainer);
  contactContainer.appendChild(mapContainer);
  pageContent.appendChild(contactContainer);

  content.appendChild(pageContent);
  const footer = document.querySelector(".footer");
  content.appendChild(footer);
};
export default createContactPage;
