const overlay = document.querySelector('.overlay');
const gallery = document.querySelector('.gallery');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function htmlGenerator ([v, h]) {
    return `
    <div class="item h${v} v${h}">
        <img src="img/${randomNumber(12)}.jpg">
        <div class="item-overlay">
            <button>View</button>
        </div>
    </div>
    `;
}

function randomNumber (max) {
    return Math.floor((Math.random() * max) + 1);;
}

let arrGenerator = Array.from({ length: 50 }, () => [randomNumber(4), randomNumber(4)]);

let htmlConstructor = arrGenerator.map(htmlGenerator).join("");
gallery.innerHTML = htmlConstructor;