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
            _mainGameField[x][y] = false// Math.random()<.80?false:true
        }
    }
    _currentGeneration = 0
}
