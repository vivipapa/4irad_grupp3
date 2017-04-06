// Wait for the HTML to load - DOM ready
// before adding a click event to our button
$(addStartGameEvent);

// Ask jQuery to call the function
// readContactForm when the user clicks
// on something with the class contact-send-btn
function addStartGameEvent(){
  $('.start-btn').click(readContactForm);
  $(startGame);
}

function startGame(){

}

function readContactForm(){

  // Read values from the form input fields
  let player1_name = $('#player1_name').val();
  let player2_name = $('#player2_name').val();
  let pl1_type = $('input[name=player1_type]:checked').val();
  let pl2_type = $('input[name=player2_type]:checked').val();

  // Answer the user
  // (replace all html inside the div #kontakta-oss)
  $('#spela').html(
    '<h1>Name1 ' + player1_name + '!</h1>' +
    '<h1>Name2 ' + player2_name + '!</h1>' +
    '<h1>Name1_type ' + pl1_type + '!</h1>' +
    '<h1>Name2_type ' + pl2_type + '!</h1>' 
  );

}