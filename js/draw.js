
window.onload = () => {
    printGrid();
    setEvents();
}

const printGrid = () => {
    let width = _cellsCountX * _cellSize;
    let height = _cellsCountY * _cellSize;
    canvas.style.border = '1px solid grey';
    ctx.fillStyle = 'grey'
    canvas.width = width;
    canvas.height = height;

    for (let x = 0.5; x < width; x += _cellSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, width);
        ctx.moveTo(0, x);
        ctx.lineTo(height, x);
        ctx.stroke();
    }

}

const setEvents = () => {
    canvas.addEventListener('click', (event) => {
        let x = event.clientX;
        let y = event.clientY;
        ctx.fillRect(Math.trunc(x), Math.trunc(y), 10, 10);
    })
}


