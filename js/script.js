



/**
 * Carrocel de imagens
 */
let images = document.getElementById('images');
let btnPrev = document.getElementById('prev');
let btnNext = document.getElementById('next');
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

btnNext.addEventListener('click', () => {
    position++;
    changeImage();
    console.log(-position * imgWidth);
});

btnPrev.addEventListener('click', () => {
    position--;
    changeImage();
    console.log(-position * imgWidth);
});

