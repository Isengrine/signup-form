function getRandomNum() {
    return Math.floor(Math.random() * 4);
}

function generatedImage() {
    switch (imageNum) {
        case 0:
            image = '<img src="./images/legend_image_1.svg" id="legend_img" alt="A placeholder profile picture">';
            break;
        case 1:
            image = '<img src="./images/legend_image_2.svg" id="legend_img" alt="A placeholder profile picture">';
            break;
        case 2:
            image = '<img src="./images/legend_image_3.svg" id="legend_img" alt="A placeholder profile picture">';
            break;
        case 3:
            image = '<img src="./images/legend_image_4.svg" id="legend_img" alt="A placeholder profile picture">';
            break;
    }
    return image;
}

let imageNum = getRandomNum();
let image = "";

const legend = document.getElementById("legend");

window.addEventListener("load", () => {
    legend.innerHTML = generatedImage();
})