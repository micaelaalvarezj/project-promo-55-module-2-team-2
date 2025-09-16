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
const resetBtn = document.querySelector(".reset-btn");
const form = document.querySelector(".form-container");
const resetInfoBtn = document.querySelector(".reset-info");


//seleccion de clases del html de la tarjeta

const cardName = document.querySelector(".card-name");
const rol = document.querySelector(".card-rol");
const gitHubUser = document.querySelector(".card-github");
const phone = document.querySelector(".card-phone");
const eMail = document.querySelector(".card-email");
const slackUser = document.querySelector(".card-slack");
//eventos

// Imagen (FileReader)
inputImage.addEventListener("change", () => {// change permite escuchar cuando suben el archivo
  const file = inputImage.files[0]; //input de tipo file, permite subir archivos desde la comp.
  if (file) {
    const reader = new FileReader();// filereader lee el contenido del archivo/ imagen y lo convierte en una cadena base64.
    reader.onload = (e) => { //es un evento de filereader
      img.src = e.target.result;//Esa cadena se guarda en e.target.result.
      img.style.maxWidth = "120px"; // tamaño de la imagen
      saveToLocalStorage(); // Guardar imagen también
    };
      reader.readAsDataURL(file);
  }
});

// Texto y otros inputs
inputName.addEventListener("input", () => {
  cardName.textContent = `${inputName.value}`;
});

inputRol.addEventListener("input", () => {
  rol.textContent = `${inputRol.value}`;
});

inputGitHub.addEventListener("input", () => {
  gitHubUser.textContent = `${inputGitHub.value}`;
});

inputSlack.addEventListener("input", () => {
  slackUser.textContent = `${inputSlack.value}`;
});

inputMail.addEventListener("input", () => {
  eMail.textContent = `${inputMail.value}`;
});

inputTel.addEventListener("input", () => {
  phone.textContent = `${inputTel.value}`;
});


// Resetear con el botón
resetBtn.addEventListener("click", () => {
  form.reset();             // limpia todos los inputs del form
  inputImage.value = "";    // asegura que el file input quede vacío
  img.src = "";             // borra la imagen del preview
  userName.textContent = "";
  rol.textContent = "";
  githubUser.textContent = "";
  slackUser.textContent = "";
  eMail.textContent = "";
  phone.textContent = "";
});