'use strict';

console.log("ready!");

const collapsButtonDesign = document.querySelector(".design-control-button");
const handleClicDesignkButton = () => {
    document.querySelector(".form-design-card").classList.toggle("collapsed");
};
collapsButtonDesign.addEventListener("click", handleClicDesignkButton);

const collapsButtonForm = document.querySelector(".form-control-button");
const handleClickFormButton = () => {
    document.querySelector(".form-container").classList.toggle("collapsed");
};
collapsButtonForm.addEventListener("click", handleClickFormButton);
