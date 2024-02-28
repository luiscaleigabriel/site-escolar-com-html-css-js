/**
 * Menu mobile
 */
const btntoogle = document.getElementById('toggle');

function openCloseMenu() {
    btntoogle.classList.toggle('active-menu');
}



/**
 * Carrocel de imagens
 */
const images = document.getElementById('images');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
let imgs = document.getElementsByClassName('carrocel-images__img');

let position = 0;
let imgWidth = imgs[position].clientWidth;

function start() {
    position++;
    changeImage();
}

function changeImage() {
    if(position > imgs.length - 1) {
        position = 0;
    } else if(position < 0) {
        position = imgs.length - 1;
    }

    images.style.transform = `translateX(${ -position * imgWidth}px)`;
}

setInterval(() => {
    position++;
    changeImage();
}, 5000);

btnNext.addEventListener('click', () => {
    position++;
    changeImage();
});

btnPrev.addEventListener('click', () => {
    position--;
    changeImage();
});

