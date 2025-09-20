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

let cardName = document.querySelector(".card-name");
let rol = document.querySelector(".card-rol");
let gitHubUser = document.querySelector(".card-github");
let phone = document.querySelector(".card-phone");
let eMail = document.querySelector(".card-email");
let slackUser = document.querySelector(".card-slack");
let profileImage = document.querySelector(".blank-profile-pic");
const previewCard = document.querySelector(".preview-card");
const originalPreviewCardHTML = previewCard.innerHTML;
//const formDesign = document.querySelector(".form-design-card");


//eventos

// Imagen
const handleImageChange = (e) => {  //agregue la funcion manejadora que me corrigio en el examen.
  const file = inputImage.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profileImage.src = e.target.result;
      profileImage.style.maxWidth = "120px";
     /*  saveToLocalStorage(); */
    };
    reader.readAsDataURL(file);
  }
};
inputImage.addEventListener("change", handleImageChange);

// Nombre
const handleNameInput = () => {
  cardName.textContent = inputName.value;
  console.log(cardName);
  console.log(inputName);
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

const dataPreviewDefault = {
  username: 'María',
  rol: 'front-end', 
  gitHubUser: 'https://github.com/maria',
  email: 'maria@gmail.com',
  phone: '555 555 555',
  slack: '@_maria',
  profilePic: 'images/blank-profile-pic.png',
  selectedStyle: 'style-one',
  };

/*resetBtn.addEventListener("click", () => {
  form.reset();            // limpia los inputs
  updateIcons('style-one');
  inputImage.value = "";    // asegura que el file input quede vacío
  previewCard.innerHTML = originalPreviewCardHTML;
  cardName = document.querySelector(".card-name");
  rol = document.querySelector(".card-rol");
  gitHubUser = document.querySelector(".card-github");
  phone = document.querySelector(".card-phone");
  eMail = document.querySelector(".card-email");
  slackUser = document.querySelector(".card-slack");
  profileImage = document.querySelector(".blank-profile-pic");
  styleOne = document.querySelector('.style-one');
  styleTwo = document.querySelector('.style-two');
  styleThree = document.querySelector('.style-three');
  githubIcon = document.querySelector('.github-icon');
  emailIcon = document.querySelector('.email-icon');
  phoneIcon = document.querySelector('.phone-icon');
  slackIcon = document.querySelector('.slack-icon');
  previewCardBackground = document.querySelector('.preview-card-image');
  logoAdalabWhite = document.querySelector('.logo-adalab');
});*/

//Resetear con el botón
resetBtn.addEventListener("click", () => {
  form.reset();             // limpia los inputs
  inputImage.value = "";    // asegura que el file input quede vacío
  cardName.textContent = dataPreviewDefault.username;
  rol.textContent = dataPreviewDefault.rol;
  gitHubUser.textContent = dataPreviewDefault.gitHubUser;
  eMail.textContent = dataPreviewDefault.email;
  phone.textContent = dataPreviewDefault.phone;
  slackUser.textContent = dataPreviewDefault.slack;
  profileImage.src = dataPreviewDefault.profilePic;
  updateIcons(dataPreviewDefault.selectedStyle);
});











