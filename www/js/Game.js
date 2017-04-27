function gameInit() {
    $(".player").html(players[currPlayerIndex].name);
    drawTable(rows, columns);

    if (players[0].type == "computer"){
        console.log("player1 = computer!!!");
       $('.board').append(computerClick);  
      
    }

    $('.board').on('click', 'td', clickCell);
    $('#btn-reset').on('click', resetPage);

    // call resizer once initially and then
    // every time the window resizes
    setTimeout(resizer,0);
    $(window).resize(resizer);
}

function resetPage() {
    let reloadPage = function () {
        location.reload();

    }

    $('#btn-reset').slideUp(500, reloadPage);
    $('#btn-close').slideUp(500, reloadPage);
}

function loadPage() {
    $('#btn-reset').slideUp(500);
    $('#btn-close').slideUp(500);
}

function announceDraw(){    
    $('.cell').prop('disabled', true);
    $('#btn-reset').css('visibility', 'visible');
    $('#btn-reset').slideDown(500);
    $('#btn-close').css('visibility', 'visible');
    $('#btn-close').slideDown(500);
    $('.announcement').html('Det blev oavgjort!!!');   
    
}

function announceWin() {
    $('.cell').prop('disabled', true);
    $('#btn-reset').css('visibility', 'visible');
    $('#btn-reset').slideDown(500);
    $('#btn-close').css('visibility', 'visible');
    $('#btn-close').slideDown(500);
    $('.announcement').html(players[currPlayerIndex].name + ' vinner efter ' + players[currPlayerIndex].moves + ' drag!');
    players[currPlayerIndex].winner = true;
    addWinner();
    
}
