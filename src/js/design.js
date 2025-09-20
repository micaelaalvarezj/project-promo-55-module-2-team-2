'use strict';

// Variables para los checkboxes
let styleOne = document.querySelector('.style-one');
let styleTwo = document.querySelector('.style-two');
let styleThree = document.querySelector('.style-three');

// Variables para los iconos
let githubIcon = document.querySelector('.github-icon');
let emailIcon = document.querySelector('.email-icon');
let phoneIcon = document.querySelector('.phone-icon');
let slackIcon = document.querySelector('.slack-icon');

// Variable para la preview card
let previewCardBackground = document.querySelector('.preview-card-image');
let logoAdalabWhite = document.querySelector('.logo-adalab');

// Función para cambiar tarjeta según el estilo
function updateIcons(style) {
  if (style === 'style-one') {
    styleOne.checked = true;
    styleTwo.checked = false;
    styleThree.checked = false;
    githubIcon.src = 'images/icon-gray-github.png';
    emailIcon.src = 'images/icon-gray-email.png';
    phoneIcon.src = 'images/icon-gray-phone.png';
    slackIcon.src = 'images/icon-gray-slack.png';
    previewCardBackground.classList.remove('preview-card-image_style2');
    previewCardBackground.classList.remove('preview-card-image_style3');
    logoAdalabWhite.src = 'images/logo-adalab.png';
  } else if (style === 'style-two') {
    styleOne.checked = false;
    styleTwo.checked = true;
    styleThree.checked = false;
    githubIcon.src = 'images/icon-green-github.png';
    emailIcon.src = 'images/icon-green-email.png';
    phoneIcon.src = 'images/icon-green-phone.png';
    slackIcon.src = 'images/icon-green-slack.png';
    previewCardBackground.classList.add('preview-card-image_style2');
    previewCardBackground.classList.remove('preview-card-image_style3');
    logoAdalabWhite.src = 'images/logo-adalab-negativo.png';
  } else if (style === 'style-three') {
    styleOne.checked = false;
    styleTwo.checked = false;
    styleThree.checked = true;
    githubIcon.src = 'images/icon-orange-github.png';
    emailIcon.src = 'images/icon-orange-email.png';
    phoneIcon.src = 'images/icon-orange-phone.png';
    slackIcon.src = 'images/icon-orange-slack.png';
    previewCardBackground.classList.add('preview-card-image_style3');
    previewCardBackground.classList.remove('preview-card-image_style2');
    logoAdalabWhite.src = 'images/logo-adalab-negativo.png';
  }
};

styleOne.addEventListener('click', () => updateIcons('style-one'));
styleTwo.addEventListener('click', () => updateIcons('style-two'));
styleThree.addEventListener('click', () => updateIcons('style-three'));