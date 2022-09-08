const _cellSize = 10;
const _cellsCountX = 60;
const _cellsCountY = 60;
let _mainGameField = [];
let _currentGeneration;

window.onload = () => {
    const mainField = document.getElementById('gameField')
    mainField.setAttribute('width', `${_cellsCountX * _cellSize}px`)
    mainField.setAttribute('height', `${_cellsCountY * _cellSize}px`)
    mainField.style = 'border: 1px solid #000000; margin: 50px auto; display: block;'
}

function clearGameField() {
    for (let x = 0; x < _cellsCountX; x++) {
        _mainGameField[x] = []
        for (let y = 0; y < _cellsCountY; y++) {
            _mainGameField[x][y] = false
        }
    }
    _currentGeneration = 0
}




