const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const img = document.querySelector('.photo');

let index = 0;

let photos = ['images/my_photo_1.jfif', 'images/my_photo_2.jfif'];

next.onclick = () => {
    if (index === photos.length - 1) {
        index = 0
    } else {
        index++
    }

    img.src = photos[index];

};

prev.onclick = () => {

    if (index === 0) {
        index = photos.length - 1;
    } else {
        index--;
    }

    img.src = photos[index];

};

