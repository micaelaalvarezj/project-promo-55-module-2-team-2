'use strict';
console.log("ready");


  // Seleccion inputs
const inputImage = document.querySelector(".input-image");
const inputName = document.querySelector(".input-name");
const inputRol = document.querySelector(".input-rol");
const inputGitHub = document.querySelector(".input-github");
const inputMail = document.querySelector(".input-mail");
const inputTel = document.querySelector(".input-tel");
const inputSlack  = document.querySelector(".input-slack");
const resetBtn = document.querySelector(".reset-button");
const form = document.querySelector(".form-container");
const resetInfoBtn = document.querySelector(".reset-info");


//seleccion de clases del html de la tarjeta

const cardName = document.querySelector(".card-name");
const rol = document.querySelector(".card-rol");
const gitHubUser = document.querySelector(".card-github");
const phone = document.querySelector(".card-phone");
const eMail = document.querySelector(".card-email");
const slackUser = document.querySelector(".card-slack");
const profileImage = document.querySelector(".blank-profile-pic");
const previewCard = document.querySelector(".preview-card");


//eventos

// Imagen
const handleImageChange = (e) => {  //agregue la funcion manejadora que me corrigio en el examen.
  const file = inputImage.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profileImage.src = e.target.result;
      img.style.maxWidth = "120px";
     /*  saveToLocalStorage(); */
    };
    reader.readAsDataURL(file);
  }
};
inputImage.addEventListener("change", handleImageChange);

// Nombre
const handleNameInput = () => {
  cardName.textContent = inputName.value;
};
inputName.addEventListener("input", handleNameInput);

// Rol
const handleRolInput = () => {
  rol.textContent = inputRol.value;
};
inputRol.addEventListener("input", handleRolInput);

// GitHub
const handleGitHubInput = () => {
  gitHubUser.textContent = inputGitHub.value;
};
inputGitHub.addEventListener("input", handleGitHubInput);

// Slack
const handleSlackInput = () => {
  slackUser.textContent = inputSlack.value;
};
inputSlack.addEventListener("input", handleSlackInput);

// Email
const handleMailInput = () => {
  eMail.textContent = inputMail.value;
};
inputMail.addEventListener("input", handleMailInput);

// Teléfono
const handleTelInput = () => {
  phone.textContent = inputTel.value;
};
inputTel.addEventListener("input", handleTelInput);

// Resetear con el botón
resetBtn.addEventListener("click", () => {
  form.reset();             // limpia los inputs
  inputImage.value = "";    // asegura que el file input quede vacío
  previewCard.innerHTML = previewCard;
  // Restaurar tarjeta a su estado inicial
  profileImage.src = defaultCard.image;
  cardName.textContent = defaultCard.name;
  rol.textContent = defaultCard.rol;
  gitHubUser.textContent = defaultCard.github;
  slackUser.textContent = defaultCard.slack;
  eMail.textContent = defaultCard.email;
  phone.textContent = defaultCard.phone;
});







