
const height = '300';
const width = '300';
const backgroundColor = '#808080';
const cellX = 10;
const cellY = 10;
const canvas = document.getElementById("gameField");
const ctx = canvas.getContext('2d');

window.onload = () => {
    printGrid();
}

const printGrid = () => {
    canvas.style.border = '1px solid black';
    canvas.width = width;
    canvas.height = height;

    for (let x = 0.5; x < width; x += cellX) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, width);
    }

    for (let y = 0.5; y < height; y += cellY) {
        ctx.moveTo(y, 0);
        ctx.lineTo(height, 0);
    }
}
