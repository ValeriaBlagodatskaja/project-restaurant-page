const createContactPage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const div = document.createElement("div");
  div.setAttribute("id", "map");
  pageContent.appendChild(div);

  const iframe = document.createElement("iframe");
  iframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.7696869090214!2d24.744198913627613!3d59.43691567456098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469293621ea661b5%3A0x9268327eedd2d36b!2sItaalia%20Suursaatkond!5e0!3m2!1set!2see!4v1694510633907!5m2!1set!2see";
  iframe.width = "600";
  iframe.height = "450";
  iframe.style = "border:0;";
  iframe.allowfullscreen = "";
  iframe.loading = "lazy";
  iframe.referrerpolicy = "no-referrer-when-downgrade";
  pageContent.appendChild(iframe);

  const form = document.createElement("form");
  form.classList.add("contact-form");

  const h3 = document.createElement("h3");
  h3.textContent = "Message us";
  form.appendChild(h3);

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

  pageContent.appendChild(form);
  content.appendChild(pageContent);
};
export default createContactPage;
