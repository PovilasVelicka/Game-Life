
function updateNextGeneration() {
    const tempGen = getNextGeneration();
    for (let x = 0; x < _cellsCountX; x++) {
        for (let y = 0; y < _cellsCountY; y++) {
            _mainGameField[x][y] = tempGen[x][y]
        }
    }
    _currentGeneration++   
}

function getNextGeneration() {
    let tempGameField=[];
    for (let x = 0; x < _cellsCountX; x++) {
        tempGameField[x] = []
        for (let y = 0; y < _cellsCountY; y++) {
            tempGameField[x][y] = isCanLive(x, y)
        }
    }
    return tempGameField
}

function isCanLive(x, y) {
    const cellNeighbors = neighborsCount(x, y)
    if (_mainGameField[x][y]) {
        return (cellNeighbors === 2 || cellNeighbors === 3) ? true : false
    } else {
        return (cellNeighbors === 3) ? true : false
    }
}

function neighborsCount(x, y) {
    let neighbors = 0
    if (_mainGameField[minVal(x, 'x')][y]) neighbors++
    if (_mainGameField[maxVal(x, 'x')][y]) neighbors++
    if (_mainGameField[x][minVal(y, 'y')]) neighbors++
    if (_mainGameField[x][maxVal(y, 'y')]) neighbors++
    if (_mainGameField[minVal(x, 'x')][minVal(y, 'y')]) neighbors++
    if (_mainGameField[minVal(x, 'x')][maxVal(y, 'y')]) neighbors++
    if (_mainGameField[maxVal(x, 'x')][minVal(y, 'y')]) neighbors++
    if (_mainGameField[maxVal(x, 'x')][maxVal(y, 'y')]) neighbors++
    return neighbors
}

function minVal(current, axisKey) {
    if ((current - 1) < 0) return axisKey === 'x' ? _cellsCountX - 1 : _cellsCountY - 1
    return current - 1
}

function maxVal(current, axisKey) {
    if ((current + 1) > (axisKey === 'x' ? _cellsCountX - 1 : _cellsCountY - 1)) return 0
    return current + 1
}

