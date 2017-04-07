// Wait for the HTML to load - DOM ready
// before adding a click event to our button
$(addStartGameEvent);

// Ask jQuery to call the function
// readContactForm when the user clicks
// on something with the class start-btn
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

  // Check if the return of the checkPlayers is true and if so stay on the same page
  let r = checkPlayers(player1_name,player2_name,pl1_type,pl2_type);
  if(r.stayOnPage){ return; }
  else {
  // Answer the user
  // (replace all html inside the div #spela)
    $('#spela').html(
      '<h1>Name1 ' + player1_name + '!</h1>' +
      '<h1>Name2 ' + player2_name + '!</h1>' +
      '<h1>Name1_type ' + pl1_type + '!</h1>' +
      '<h1>Name2_type ' + pl2_type + '!</h1>' 
    );
  }
}

//function that checks if there are two players or a player and a computer and if the fields are filled with two names 
function checkPlayers(player1_name,player2_name,pl1_type,pl2_type){
  if (player1_name==="" || player2_name===""){
    alert('You are missing a player. Please fill in both names in the form even if you are playing against a computer');
    return {stayOnPage:true};
  }
  else {
    if (pl1_type==="human" && pl2_type==="human"){
      alert(player1_name + ' you will be playing against ' + player2_name +'.');
    }
    else if (pl1_type==="human" && pl2_type==="computer") {
      alert(player1_name + ' you will be playing against a computer.');
    }
    else if (pl1_type==="computer" && pl2_type==="human"){
      alert(player2_name + ' you will be playing against a computer.');
    }
    else {
      alert('A computer with the name: ' + player1_name + ' is going to play against a computer named: '+ player2_name+ '.');
    }
    return {stayOnPage:false};
  }  

}

