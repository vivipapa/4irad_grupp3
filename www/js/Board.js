let rows = 6;
let columns = 7;
let valArr = createNewBoard(rows, columns);

function createNewBoard(rows, columns) {
    let arr = new Array(rows);
    for (let i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
        for (let j = 0; j < columns; j++) {
            arr[i][j] = 0;
        }
    }

    return arr;
    console.log(arr);
}

function drawTable(n, m) {
    let t = $(".board");
    for (let i = 0; i < n; i++) {
        let row = $("<tr></tr>");
        $(t).append(row);
        for (let j = 0; j < m; j++) {
            let cell = $("<td class='cell'></td>");
            $(cell).attr('id', i + '-' + j);
            $(cell).data('val', valArr[i][j]);
             console.log($(cell).attr('id'), ' : ', valArr[i][j]);
            $(row).append(cell);
        }
    }
}

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