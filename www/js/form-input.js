/// Wait for the HTML to load - DOM ready
// before adding a click event to our button
$(addStartGameEvent);

//information about players, playersInfo    
let playersInfo = [];

// Ask jQuery to call the function
// readContactForm when the user clicks
// on something with the class start-btn
function addStartGameEvent(){
  $('.start-btn').click(readContactForm);
  $(startGame);
  
  
}

function startGame(){

}
//This function read the ContactForm eith information about players and return the 2 players (2 objects with properties: name, number,type)
function readContactForm(){

  // Read values from the form input fields
  let player1 = new Player($('#player1_name').val(), 1, $('input[name=player1_type]:checked').val());
  let player2 = new Player($('#player2_name').val(), 2, $('input[name=player2_type]:checked').val());

  
  // Check if the return of the checkPlayers is true and if so stay on the same page
  let r = checkPlayers(player1.name, player2.name, player1.type, player2.type);
  if(r.stayOnPage){ 
    return;
  }
  else {
  // User have filled in all info about players
  
  //Save information about players in a global variable
  playersInfo = [player1, player2];

  // (replace all html inside the div #spela)
  $('#spela').html(


    
    '<h1>Name1 ' + player1.name + '!</h1>' +
    '<h1>Name2 ' + player2.name + '!</h1>' +
    '<h1>Name1_type ' + player1.type + '!</h1>' +
    '<h1>Name2_type ' + player2.type + '!</h1>' 
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