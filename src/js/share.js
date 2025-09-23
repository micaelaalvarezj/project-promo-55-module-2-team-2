'use strict';

import domtoimage from 'dom-to-image';

const downloadButton = document.querySelector(".download-card-button");
downloadButton.addEventListener("click", (event) => {
    console.log("click en el botón descargar");
    event.preventDefault ();

domtoimage
.toJpeg(document.querySelector('.preview-card'), { quality: 0.95 })
    .then( (dataUrl) => {
        const link = document.createElement('a');
        link.download = 'tu-firma.jpeg';
        link.href = dataUrl;
        link.click();
    });
});