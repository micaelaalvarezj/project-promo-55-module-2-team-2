'use strict';

const previewCard = document.querySelector('.preview-card');

// Variables para los checkboxes
const styleOne = document.querySelector('.style-one');
const styleTwo = document.querySelector('.style-two');
const styleThree = document.querySelector('.style-three');

// Variables para los iconos
const githubIcon = document.querySelector('.github-icon');
const emailIcon = document.querySelector('.email-icon');
const phoneIcon = document.querySelector('.phone-icon');
const slackIcon = document.querySelector('.slack-icon');

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
    //previewCard.classList.add('bg-style-one');
    previewCard.classList.remove('bg-style-two');
    previewCard.classList.remove('bg-style-three');
  } else if (style === 'style-two') {
    styleOne.checked = false;
    styleTwo.checked = true;
    styleThree.checked = false;
    githubIcon.src = 'images/icon-green-github.png';
    emailIcon.src = 'images/icon-green-email.png';
    phoneIcon.src = 'images/icon-green-phone.png';
    slackIcon.src = 'images/icon-green-slack.png';
    /*previewCard.classList.add('bg-style-two');
    previewCard.classList.remove('bg-style-one');
    previewCard.classList.remove('bg-style-three');*/
  } else if (style === 'style-three') {
    styleOne.checked = false;
    styleTwo.checked = false;
    styleThree.checked = true;
    githubIcon.src = 'images/icon-orange-github.png';
    emailIcon.src = 'images/icon-orange-email.png';
    phoneIcon.src = 'images/icon-orange-phone.png';
    slackIcon.src = 'images/icon-orange-slack.png';
    /*previewCard.classList.add('bg-style-three');
    previewCard.classList.remove('bg-style-one');
    previewCard.classList.remove('bg-style-two');*/
  }
};

styleOne.addEventListener('click', () => updateIcons('style-one'));
styleTwo.addEventListener('click', () => updateIcons('style-two'));
styleThree.addEventListener('click', () => updateIcons('style-three'));