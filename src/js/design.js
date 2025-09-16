'use strict';

// Variables para los checkboxes
const styleOne = document.querySelector('.style-one');
const styleTwo = document.querySelector('.style-two');
const styleThree = document.querySelector('.style-three');

// Variable para la tarjeta
const previewCard = document.querySelector('.preview-card');

// Función para el cambio de estilos
function updateStyle(style) {
    if (style === 'style-one') {
        styleOne.checked = true;
        styleTwo.checked = false;
        styleThree.checked = false;
        previewCard.classList.add('bg-style-one');
        previewCard.classList.remove('bg-style-two');
        previewCard.classList.remove('bg-style-three');
    } else if (style === 'style-two') {
        styleOne.checked = false;
        styleTwo.checked = true;
        styleThree.checked = false;
        previewCard.classList.remove('bg-style-one');
        previewCard.classList.add('bg-style-two');
        previewCard.classList.remove('bg-style-three');
    } else if (style === 'style-three') {
        styleOne.checked = false;
        styleTwo.checked = false;
        styleThree.checked = true;
        previewCard.classList.remove('bg-style-one');
        previewCard.classList.remove('bg-style-two');
        previewCard.classList.add('bg-style-three');
    }
};

styleOne.addEventListener('click', () => updateStyle('style-one'));
styleTwo.addEventListener('click', () => updateStyle('style-two'));
styleThree.addEventListener('click', () => updateStyle('style-three'));