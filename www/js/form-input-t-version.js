 // let player1_name = $('#player1_name').val();
 // let player2_name = $('#player2_name').val();
 // let pl1_type = $('input[name=player1_type]:checked').val();
 // let pl2_type = $('input[name=player2_type]:checked').val();
  // Answer the user
  // (replace all html inside the div #kontakta-oss)
let human_player1 = new Player($('#player1_name').val(), 1, $('input[name=player1_type]:checked').val());
let human_player2 = new Player($('#player2_name').val(), 2, $('input[name=player2_type]:checked').val());
  $('#spela').html(
    '<h1>Name1 ' + human_player1.name + '!</h1>' +
    '<h1>Name2 ' + human_player2.name + '!</h1>' +
    '<h1>Name1_type ' + human_player1.type + '!</h1>' +
    '<h1>Name2_type ' + human_player2.type + '!</h1>' 
  );
  
console.log('main.js: player1_name = ', human_player1.name)