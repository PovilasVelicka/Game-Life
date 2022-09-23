// https://www.w3schools.com/graphics/tryit.asp?filename=trygame_controllers_moving

const _cellSize = 10;
const _cellsCountX = 100;
const _cellsCountY = 50;
const _gameContextBachground = 'rgba(52, 158, 0, 1)';
const _gameFieldCellColor = 'rgba(0, 0, 0)';

let _gameStarted = false;
let _gameOwer = false;
let _mousePressed = false;
let _mouseMuved = false;

let _mainGameField = [];
let _mainGameContext = document.getElementById('gameField')
let _currentGeneration;
let _redrawCells = [];

window.onload = () => {
    _mainGameContext.setAttribute('width', `${_cellsCountX * _cellSize}px`);
    _mainGameContext.setAttribute('height', `${_cellsCountY * _cellSize}px`);
    resetGame();
}

document.getElementById('resetGame').addEventListener('click', () => {
    resetGame();
})

_mainGameContext.onmousedown = (event) => {
    if (_gameStarted) return;
    _mousePressed = true
    setPoint(event.offsetX, event.offsetY, true)
}

_mainGameContext.onmousemove = (event) => {
    if (!_mousePressed) return
    _mouseMuved = true
    setPoint(event.offsetX, event.offsetY, true)
}

_mainGameContext.onmouseup = () => {
    _mousePressed = false;
    _mouseMuved = false;
}

_mainGameContext.onmouseleave=()=>{
    _mousePressed = false;
}

document.getElementById('startGame').addEventListener('click', () => {
    if (_gameStarted) return;

    _gameStarted = true;
    let timer = setInterval(() => {
        updateNextGeneration();
        if (_gameOwer) {
            clearInterval(timer);
        }else{
            drawGameField();
        }        
    }, 100);
})







