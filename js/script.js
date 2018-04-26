const overlay = document.querySelector('.overlay');
const gallery = document.querySelector('.gallery');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function htmlGenerator ([v, h]) {
    return `
    <div class="item h${v} v${h}">
        <img src="img/${randomNumber(12)}.jpg">
        <div class="item-overlay">
            <button id="view">View</button>
        </div>
    </div>
    `;
}
function randomNumber (max) {
    return Math.floor((Math.random() * max) + 1);;
}
function buttonClick (e) {
    const pictureSrc = e.currentTarget.querySelector('img').src;
    overlayImage.src = pictureSrc;
    overlay.classList.add("open");

}
function closeImage () {
    overlay.classList.remove("open");
}


let arrGenerator = Array.from({ length: 50 }, () => [randomNumber(4), randomNumber(4)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]);

let htmlConstructor = arrGenerator.map(htmlGenerator).join("");
gallery.innerHTML = htmlConstructor;

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener("click", buttonClick));

overlayClose.addEventListener("click", closeImage);
