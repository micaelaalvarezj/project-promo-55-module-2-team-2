'use strict';

// Variables para los checkboxes
const styleOne = document.querySelector('.style-one');
const styleTwo = document.querySelector('.style-two');
const styleThree = document.querySelector('.style-three');

// Variables para los iconos
const githubIcon = document.querySelector('.github-icon');
const emailIcon = document.querySelector('.email-icon');
const phoneIcon = document.querySelector('.phone-icon');
const slackIcon = document.querySelector('.slack-icon');

// Variable para la preview card
const previewCardBackground = document.querySelector('.preview-card-image');
const logoAdalabWhite = document.querySelector('.logo-adalab');

// Función para cambiar tarjeta según el estilo
const updateIcons = (style) => {
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
    localStorage.setItem("style",style);
};

styleOne.addEventListener('click', () => updateIcons('style-one'));
styleTwo.addEventListener('click', () => updateIcons('style-two'));
styleThree.addEventListener('click', () => updateIcons('style-three'));

const styleSaved = localStorage.getItem("style");
if(styleSaved) {
    updateIcons(styleSaved);
};

