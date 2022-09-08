const _cellSize = 10;
const _cellsCountX = 100;
const _cellsCountY = 50;
const _gameContextBachground = 'rgba(52, 158, 0,1)';
const _gameContextGridColor = 'rgba(255,255,255,.5)';
const _gameFieldCellColor = 'rgba(0,0,0)'

let _mainGameField = [];
let _mainGameContext = document.getElementById('gameField')
let _currentGeneration;

function clearGameField() {
    for (let x = 0; x < _cellsCountX; x++) {
        _mainGameField[x] = []
        for (let y = 0; y < _cellsCountY; y++) {
            _mainGameField[x][y] = Math.random()<.90?false:true
        }
    }
    _currentGeneration = 0
}

_mainGameContext.onclick = (event) => {
    const xPos = Math.trunc(event.offsetX / _cellSize)
    const yPos = Math.trunc(event.offsetY / _cellSize)
    _mainGameField[xPos][yPos] = true
    drawGameField()
}

window.onload = () => {

    _mainGameContext.setAttribute('width', `${_cellsCountX * _cellSize}px`)
    _mainGameContext.setAttribute('height', `${_cellsCountY * _cellSize}px`)
    _mainGameContext.style = 'border: 1px solid #000000; margin: 50px auto; display: block;'

    clearGameField()
    clearGameContext()
    drawGridLines();
    drawGameField();

}

function clearGameContext() {
    const ctx = _mainGameContext.getContext('2d')
    ctx.clearRect(0, 0, _cellsCountX * _cellSize, _cellsCountY * _cellSize)
    ctx.fillStyle = _gameContextBachground;
    ctx.fillRect(0, 0, _cellsCountX * _cellSize, _cellsCountY * _cellSize)
}

document.getElementById('redrawCanvas').addEventListener('click', () => {
    updateNextGeneration()
    drawGameField();
    setInterval(() => {
        updateNextGeneration();
        drawGameField();
    }, 80);

})



function drawGameField() {
    const ctx = _mainGameContext.getContext('2d')
    for (let x = 0; x < _cellsCountX; x++) {
        for (let y = 0; y < _cellsCountY; y++) {
            ctx.fillStyle = _mainGameField[x][y] ? _gameFieldCellColor : _gameContextBachground;
            ctx.fillRect(x * _cellSize, y * _cellSize, _cellSize, _cellSize)
            ctx.strokeStyle = _gameContextGridColor;
            ctx.strokeRect(x * _cellSize, y * _cellSize, _cellSize, _cellSize)
        }
    }

}






function drawGridLines() {
    const ctx = _mainGameContext.getContext('2d')
    ctx.strokeStyle = _gameContextGridColor
    for (let x = 0; x < _cellsCountX; x++) {
        ctx.moveTo(x * _cellSize, 0);
        ctx.lineTo(x * _cellSize, _cellsCountY * _cellSize);
    }
    for (let y = 0; y < _cellsCountY; y++) {
        ctx.moveTo(0, y * _cellSize);
        ctx.lineTo(_cellsCountX * _cellSize, y * _cellSize);
    }
    ctx.stroke();
}

