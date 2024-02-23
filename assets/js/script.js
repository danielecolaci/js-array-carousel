//Array di immagini
const content = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

const activeImage = 0;
const contentElement = document.querySelector('.content');

/* console.log(content, activeImage, contentElement); */

for (let index = 0; index < content.length; index++) {
    const slide = content[index];
    console.log(slide);

    const slideMarkup = `<img class=${index === activeImage ? 'active' : ''} src="./assets/img/${slide}" alt="">`
    console.log(slideMarkup);

    contentElement.insertAdjacentHTML('beforeend', slideMarkup);


}