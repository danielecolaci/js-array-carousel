//Array di immagini
const content = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

let activeImage = 0;
const contentElement = document.querySelector('.content');

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

/* console.log(content, activeImage, contentElement); */

for (let index = 0; index < content.length; index++) {
    const slide = content[index];
    /* console.log(slide); */

    const slideMarkup = `<img class="${index === activeImage ? 'active' : ''}" src="./assets/img/${slide}" alt="">`
    /* console.log(slideMarkup); */

    contentElement.insertAdjacentHTML('beforeend', slideMarkup);

}

//Tasti Prev e Next

console.log(prevButton, nextButton);

prevButton.addEventListener('click', function () {
    console.log('slidePrev');

    activeImage--
    console.log(activeImage);

})

// Next
nextButton.addEventListener('click', function () {
    console.log('slideNext');

    activeImage++
    console.log(activeImage);

    const currentImage = document.querySelector('img.active');
    console.log(currentImage);
    currentImage.classList.remove('active');

    const allImage = document.querySelectorAll('.content img');

    console.log((activeImage, content, allImage));
    console.log(allImage[activeImage]);

    allImage[activeImage].classList.add('active');

})


