function updateGeneration() { document.getElementById('displayGeneration').textContent = `Current generation: ${_currentGeneration}` }


function resetGame() {
    _currentGeneration = 1;
    _gameStarted = false;
    _gameOwer = false;
    _mousePressed = false
    _redrawCells = [];
    clearGameField();
    clearGameContext();
    updateGeneration();
}

function clearGameField() {
    for (let x = 0; x < _cellsCountX; x++) {
        _mainGameField[x] = []
        for (let y = 0; y < _cellsCountY; y++) {
            _mainGameField[x][y] = false;
        }
    }
}

function clearGameContext() {
    const ctx = _mainGameContext.getContext('2d')
    ctx.clearRect(0, 0, _cellsCountX * _cellSize, _cellsCountY * _cellSize)
    ctx.fillStyle = _gameContextBachground;
    ctx.fillRect(0, 0, _cellsCountX * _cellSize, _cellsCountY * _cellSize)
}

function setPoint(offsetX, offsetY, isVisible) {
    const x = Math.trunc(offsetX / _cellSize);
    const y = Math.trunc(offsetY / _cellSize);
    if (_mouseMuved) {
        _mainGameField[x][y] = isVisible;
    } else {
        _mainGameField[x][y] = _mainGameField[x][y] ? false : true;
    }
    _redrawCells.push({ X: x, Y: y });
    drawGameField();
}

function drawGameField() {
    const ctx = _mainGameContext.getContext('2d')
    for (let nextCell = 0; nextCell < _redrawCells.length; nextCell++) {
        const x = _redrawCells[nextCell].X;
        const y = _redrawCells[nextCell].Y;
        ctx.fillStyle = _mainGameField[x][y] ? _gameFieldCellColor : _gameContextBachground;
        ctx.fillRect(x * _cellSize, y * _cellSize, _cellSize, _cellSize);
    }
    _redrawCells = [];
    updateGeneration();

}