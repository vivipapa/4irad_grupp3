let rows = 6;
let columns = 7;
let valArr = create2DArray(rows, columns);
let currPlayerIndex = 0;

//function xPlayer(name, color) {
//    this.name = name;
//    this.color = color;
//};

//let players = [new xPlayer('Spelare Ett', 'red'), new xPlayer('Spelare Två', 'yellow')];




function create2DArray(rows, columns) {
    let arr = new Array(rows);
    for (let i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
        for (let j = 0; j < columns; j++) {
            arr[i][j] = 0;
        }
    }

    return arr;
};

function drawTable(n, m) {
    let t = $(".board");
    for (let i = 0; i < n; i++) {
        let row = $("<tr></tr>");
        $(t).append(row);
        for (let j = 0; j < m; j++) {
            let cell = $("<td class='cell'></td>");
            $(cell).attr('id', i + '-' + j);
            $(cell).data('val', valArr[i][j]);
            // console.log($(cell).attr('id'), ' : ', valArr[i][j]);
            $(row).append(cell);
        }
    }
};

let advanceTurn = function () {
    currPlayerIndex++;
    currPlayerIndex = currPlayerIndex % 2;
    $(".player").html(players[currPlayerIndex].name);
};

let findBottomFreeCell = function (row) {
    let cell = 0;
    console.log("ROW",row)
    for (let j = 0; j < rows; j++) {
        if (valArr[j][row] > 0) {
            cell = j - 1;
            break;
        }
        if (j === rows - 1) {
            cell = j;
            break;
        }
    }
    console.log("FREE CELL",cell);
    return cell;
};

let getBottomCellId = function (cell) {
    let ID = $(cell).attr('id');
    try {
        let coords = ID.split('-');
        coords[1] = parseInt(coords[1]);
        coords[0] = findBottomFreeCell(coords[1]);
        return coords.join('-');
    }
    catch (err) {

    }
};

function markWin(...args){
    for(let i = 0; i < args.length; i+=2){
        let row = args[i], col = args[i+1];
        console.log("Markwin row",row,"col",col);
        console.log("FOUND ELEMENT",$('#' + row + '-' + col).length)
        $('#' + row + '-' + col).addClass('winningCell');
    }
}

let checkRow = function () {
    let isRow = false;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns - 3; j++) {
            if (valArr[i][j] !== 0) {
                if (valArr[i][j] === valArr[i][j + 1]
                    && valArr[i][j + 1] === valArr[i][j + 2]
                    && valArr[i][j + 2] === valArr[i][j + 3]) {
                    isRow = true;
                    markWin(i,j,i,j+1,i,j+2,i,j+3);
                    console.log('Row: ', valArr[i][j], valArr[i][j + 1], valArr[i][j + 2], valArr[i][j + 3]);
                    return isRow;
                }
            }
        }
    }
};

let checkColumn = function () {
    let isColumn = false;
    for (let i = 0; i < rows - 3; i++) {
        for (let j = 0; j < columns; j++) {
            if (valArr[i][j] !== 0) {
                if (valArr[i][j] === valArr[i + 1][j]
                    && valArr[i + 1][j] === valArr[i + 2][j]
                    && valArr[i + 2][j] === valArr[i + 3][j]) {
                    isColumn = true;
                    markWin(i,j,i+1,j,i+2,j,i+3,j);
                    console.log('Columns: ', valArr[i][j], valArr[i + 1][j], valArr[i + 2][j], valArr[i + 3][j]);
                    return isColumn;
                }
            }
        }
    }
};

let checkDiagonal1 = function () {
    let isDiag = false;
    for (let i = 0; i < rows - 3; i++) {
        for (let j = 0; j < columns - 3; j++) {
            if (valArr[i][j] !== 0) {
                if (valArr[i][j] === valArr[i + 1][j + 1]
                    && valArr[i + 1][j + 1] === valArr[i + 2][j + 2]
                    && valArr[i + 2][j + 2] === valArr[i + 3][j + 3]) {
                    isDiag = true;
                    markWin(i,j,i+1,j+2,i+2,j+2,i+3,j+3);
                    console.log('Diag: ', valArr[i][j], valArr[i + 1][j + 1], valArr[i + 2][j + 2], valArr[i + 3][j + 3]);
                    return isDiag;
                }
            }
        }
    }
};

let checkDiagonal2 = function () {
    let isDiag = false;
    for (let i = 0; i < rows - 3; i++) {
        for (let j = 3; j < columns; j++) {
            if (valArr[i][j] !== 0) {
                if (valArr[i][j] === valArr[i + 1][j - 1]
                    && valArr[i + 1][j - 1] === valArr[i + 2][j - 2]
                    && valArr[i + 2][j - 2] === valArr[i + 3][j - 3]) {
                    isDiag = true;
                    markWin(i,j,i+1,j-1,i+2,j-2,i+3,j-3);
                    console.log('Diag: ', valArr[i][j], valArr[i + 1][j - 1], valArr[i + 2][j - 2], valArr[i + 3][j - 3]);
                    return isDiag;
                }
            }
        }
    }
};

let checkBoard = function (coords) {
    return checkRow() || checkColumn() || checkDiagonal1() || checkDiagonal2();
};

let announceWin = function () {
    $('.cell').prop('disabled', true);
    $('#btn-reset').css('visibility', 'visible');
    $('#btn-reset').slideDown(500);
    $('.announcement').html(players[currPlayerIndex].name + ' vinner!');

};

let getIdTrace = function (cell) {
    let cellId = getBottomCellId(cell);
    let idTrace = [];
    for (let i = 0; i < cellId[0]; i++) {
        try {
            idTrace.push([i, cellId[1]]);
        }
        catch (err) {
        }
    }
    return idTrace;
};



let clickCell = function () {
    let cellId = getBottomCellId(this);
    let cell = $('#' + cellId);
    cellId = cellId.split('-');
    if (cellId[0] >= 0) {
        valArr[cellId[0]][cellId[1]] = currPlayerIndex + 1;

        cell.css('backgroundColor', players[currPlayerIndex].color);
        if (checkBoard(cellId)) {
            announceWin();
        }
        else {
            advanceTurn();
        }
    }
};

let resetPage = function () {
    let reloadPage = function () {
        location.reload();
    };

    $('#btn-reset').slideUp(500, reloadPage);
};

let loadPage = function () {
    $('#btn-reset').slideUp(500);
};

function resizer(){
    let cells = $('.board .cell');
    console.log(cells,cells.length)
    // temporarily remove previously set height
    cells.height(''); 
    // read the width of a cell
    let width = cells.width();
    // set the height to the width for all cells
    cells.height(width);
}

let gameInit = function () {
    $(".player").html(players[currPlayerIndex].name);
    drawTable(rows, columns);

    //$(document).ready(loadPage);
    $('.board').on('click', 'td', clickCell);
    $('#btn-reset').on('click', resetPage);

    // call resizer once initially and then
    // every time the window resizes
    setTimeout(resizer,0);
    $(window).resize(resizer);
};
