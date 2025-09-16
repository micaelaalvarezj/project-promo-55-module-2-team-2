'use strict';

console.log("ready!");

const collapsButtonDesign = document.querySelector(".design-control-button");
const handleClicDesignkButton = () => {
    console.log("clic 1");
    document.querySelector(".form-design-card").classList.toggle("collapsed");
};
collapsButtonDesign.addEventListener("click", handleClicDesignkButton);

const collapsButtonForm = document.querySelector(".form-control-button");
const handleClickFormButton = () => {
    //console.log("haz hecho click en el segundo botón");
    console.log("clic 2");
    document.querySelector(".form-container").classList.toggle("collapsed");
};
collapsButtonForm.addEventListener("click", handleClickFormButton);

const collapsButtonDownload = document.querySelector(".download-card-control-button");
const handleClickDownloadButton = () => {
    //console.log("haz hecho click en el segundo botón");
    console.log("clic 3");
    document.querySelector(".download-card").classList.toggle("collapsed");
};
collapsButtonDownload.addEventListener("click", handleClickDownloadButton);