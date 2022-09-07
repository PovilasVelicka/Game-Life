const _cellSize = 10;
const _cellsCountX = 30;
const _cellsCountY = 30;
let _mainGameField = [_cellsCountX][_cellsCountY];

const redrawGameField = (redrawMethod) => redrawMethod();
const canvas = document.getElementById("gameField");
const ctx = canvas.getContext('2d');




