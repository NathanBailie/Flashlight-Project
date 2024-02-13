"use strict"

"use strict"

let items = document.querySelectorAll('.item');

for (let item of items) {
    item.style.setProperty('--clr', createRGB());

    item.addEventListener('mousemove', (e) => {
        let x = e.pageX - item.offsetLeft;
        let y = e.pageY - item.offsetTop;

        item.style.setProperty('--x', x + 'px');
        item.style.setProperty('--y', y + 'px');
    })
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRGB() {
    let red = getRandomNum(0, 255);
    let green = getRandomNum(0, 255);
    let blue = getRandomNum(0, 255);

    return `rgb(${red}, ${green}, ${blue})`;
};
