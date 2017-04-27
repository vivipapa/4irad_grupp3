
let currPlayerIndex = 0;
let countOfMoves = 0;
const MAX_MOVES = 42;


function advanceTurn() {
    currPlayerIndex++;
    currPlayerIndex = currPlayerIndex % 2;
    players[currPlayerIndex].moves++;
    $(".player").html(players[currPlayerIndex].name);
}

//Function return first free cell from specific column 
function findBottomFreeCell(column) {
    let cell = 0;
    for (let j = 0; j < rows; j++) {
        if (valArr[j][column] > 0) {
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
}

function getBottomCellId(cell) {
    let ID = $(cell).attr('id');
    console.log("ID=", ID);  
    try {
        let coords = ID.split('-');
        coords[1] = parseInt(coords[1]);
        coords[0] = findBottomFreeCell(coords[1]);
        console.log("return getBottomCellId", coords.join('-'));
        return coords.join('-');
    }
    catch (err) {

    }
}

function markWin(...args){
    for(let i = 0; i < args.length; i+=2){
        let row = args[i], col = args[i+1];
        console.log("Markwin row",row,"col",col);
        console.log("FOUND ELEMENT",$('#' + row + '-' + col).length)
        $('#' + row + '-' + col).addClass('winningCell');
    }
}

function checkRow() {
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
}

function checkColumn() {
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
}

function checkDiagonal1() {
    let isDiag = false;
    for (let i = 0; i < rows - 3; i++) {
        for (let j = 0; j < columns - 3; j++) {
            if (valArr[i][j] !== 0) {
                if (valArr[i][j] === valArr[i + 1][j + 1]
                    && valArr[i + 1][j + 1] === valArr[i + 2][j + 2]
                    && valArr[i + 2][j + 2] === valArr[i + 3][j + 3]) {
                    isDiag = true;
                    markWin(i,j,i+1,j+1,i+2,j+2,i+3,j+3);
                    console.log('Diag: ', valArr[i][j], valArr[i + 1][j + 1], valArr[i + 2][j + 2], valArr[i + 3][j + 3]);
                    return isDiag;
                }
            }
        }
    }
}

function checkDiagonal2() {
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
}

function checkBoard(coords) {
    return checkRow() || checkColumn() || checkDiagonal1() || checkDiagonal2(); 
   
}


function getIdTrace(cell) {
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
}

function clickCell() {
    if (window.computerInPlay){
        return;
    }
    let cellId = getBottomCellId(this);
    let cell = $('#' + cellId);
    cellId = cellId.split('-');
    if (cellId[0] >= 0) {
        countOfMoves++;
        valArr[cellId[0]][cellId[1]] = currPlayerIndex + 1;

        cell.css('backgroundColor', players[currPlayerIndex].color);
        if (checkBoard(cellId)) {
            announceWin();
            return;
        }
        else if (countOfMoves >= MAX_MOVES){
                announceDraw();
        }
        else {
            advanceTurn();
        }
    }
    if (players[0].type == "computer" || players[1].type == "computer"){
        window.computerInPlay = true;
        setTimeout(computerClick,2000);
        
    }
}

//function that put a chip in a random column
function computerClick(){
    let try_to_find_cell = true;
    let column = 0;
    do{
        column = Math.floor((Math.random()*7)); // return random integer in interval 0..6
        if(findBottomFreeCell(column)!=-1){

            
            let coords = [findBottomFreeCell(column), column]
            let cellId = coords.join('-'); //string, f.ex. cellId = "5-1"
            let cell = $('#' + cellId);
            cellId = cellId.split('-'); //f.ex. cellId = [5,1]
            if (cellId[0] >= 0) {
                countOfMoves++;
                valArr[cellId[0]][cellId[1]] = currPlayerIndex + 1;

                cell.css('backgroundColor', players[currPlayerIndex].color);
                if (checkBoard(cellId)) {
                    announceWin();
                    try_to_find_cell = false;
                    return;
                }
                else if (countOfMoves >= MAX_MOVES){
                    announceDraw();
                }
                else {
                    advanceTurn();
                }
            }
            try_to_find_cell = false;
             window.computerInPlay = false;
        }   

    }
    while(try_to_find_cell);

}
