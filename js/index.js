const _cellSize = 10;
const _cellsCountX = 30;
const _cellsCountY = 30;
let _mainGameField = [];
let _currentGeneration;


function clearGameField() {
    for (let x = 0; x < _cellsCountX; x++) {
        _mainGameField[x] = []
        for (let y = 0; y < _cellsCountY; y++) {
            _mainGameField[x][y] = false
        }
    }
    _currentGeneration = 0
}




