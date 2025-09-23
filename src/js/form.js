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
const originalPreviewCardHTML = previewCard.innerHTML;


// Imagen
const handleImageChange = (e) => {  //agregue la funcion manejadora que me corrigio en el examen.
  const file = inputImage.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profileImage.src = e.target.result;
   
      saveToLocalStorage(); 
    };
    reader.readAsDataURL(file);
  }
};
inputImage.addEventListener("change", handleImageChange);

const dataPreviewDefault = {
  username: 'María',
  rol: 'FRONT-END', 
  gitHubUser: 'https://github.com/maria',
  email: 'maria@gmail.com',
  phone: '555 555 555',
  slack: '@_maria',
  profilePic: 'images/default-profile-pic.png',
  selectedStyle: 'style-one',
  };

  const saveToLocalStorage = () => {
  const data = {
    image: profileImage.src,
    name: inputName.value,
    rol: inputRol.value,
    github: inputGitHub.value,
    mail: inputMail.value,
    tel: inputTel.value,
    slack: inputSlack.value,
  };
  localStorage.setItem("cardData", JSON.stringify(data));
};


const loadFromLocalStorage = () => {
  const saved = localStorage.getItem("cardData");

  if (!saved) return;
  const data = JSON.parse(saved);

    // Rellenar inputs
    inputName.value = data.name || ""; 
    inputRol.value = data.rol || "";
    inputGitHub.value = data.github || "";
    inputMail.value = data.mail || "";
    inputTel.value = data.tel || "";
    inputSlack.value = data.slack || "";

    // Rellenar tarjeta
    cardName.textContent = data.name || dataPreviewDefault.username;
    rol.textContent = data.rol || dataPreviewDefault.rol;
    gitHubUser.textContent = data.github || dataPreviewDefault.gitHubUser;
    eMail.textContent = data.mail || dataPreviewDefault.email;
    phone.textContent = data.tel || dataPreviewDefault.phone;
    slackUser.textContent = data.slack || dataPreviewDefault.slack;
    profileImage.src = data.image || dataPreviewDefault.profilePic;
}


//eventos




//  Función manejadora en arrow function
const handleInputChange = () => {
  cardName.textContent = inputName.value || dataPreviewDefault.username;
  rol.textContent = inputRol.value || dataPreviewDefault.rol;
  gitHubUser.textContent = inputGitHub.value || dataPreviewDefault.gitHubUser;
  eMail.textContent = inputMail.value || dataPreviewDefault.email;
  phone.textContent = inputTel.value || dataPreviewDefault.phone;
  slackUser.textContent = inputSlack.value || dataPreviewDefault.slack;
  saveToLocalStorage();
};
[inputName, inputRol, inputGitHub, inputMail, inputTel, inputSlack].forEach(input => {
  input.addEventListener("input", handleInputChange);
});

 document.addEventListener("DOMContentLoaded", loadFromLocalStorage); 

 const handleResetForm = () => {
  form.reset();
  profileImage.src = dataPreviewDefault.profilePic;
  cardName.textContent = dataPreviewDefault.username;
  rol.textContent = dataPreviewDefault.rol;
  gitHubUser.textContent = dataPreviewDefault.gitHubUser;
  eMail.textContent = dataPreviewDefault.email;
  phone.textContent = dataPreviewDefault.phone;
  slackUser.textContent = dataPreviewDefault.slack;
  updateIcons(dataPreviewDefault.selectedStyle);
  localStorage.removeItem("cardData");
  console.log("Formulario y tarjeta reseteados ");
};

resetBtn.addEventListener("click", handleResetForm);









