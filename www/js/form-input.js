/// Wait for the HTML to load - DOM ready
// before adding a click event to our button
$(addStartGameEvent);

//information about players, playersInfo    
//let playersInfo = [];
//Save information about players in a global variable
// playersInfo = [player1, player2];


// Ask jQuery to call the function
// readContactForm when the user clicks
// on something with the class start-btn
function addStartGameEvent(){
  $('#spela').click(jumboSpela);
  $('#changeMenu').click(changeSpelaToAvbryt);
  $('.start-btn').click(readContactForm);
  $(startGame);
  
}
function changeSpelaToAvbryt(){
  // since click functions run before the
  // browser follows a link we need to
  // delay changing the link (for a supershort while)
  if($('#changeMenu a').text()=='Avbryt'){
    // don't do this if the text is already avbryt
    return;
  }
  setTimeout(function(){
    $('#changeMenu a').text('Avbryt');
    $('#changeMenu a').attr('href','#start');
    //$('#changeMenu').click(gotoStartPage);
  },0);
}

function jumboSpela(){
  if($('#changeMenu a').text()=='Avbryt'){
    // don't do this if the text is already avbryt
    return;
  }
  setTimeout(function(){
    $('#changeMenu a').text('Avbryt');
    $('#changeMenu a').attr('href','#start');
  },0);
}


function changeAvbrytToSpela(){
  $('header nav a').click(function(){
    if($(this).text() == 'Spela'){ return; }
    setTimeout(function(){
      $('#changeMenu a').text('Spela');
      $('#changeMenu a').attr('href','#spela');
    },0);
  });
}
$(changeAvbrytToSpela);

function startGame(){

}
//This function read the ContactForm eith information about players and return the 2 players (2 objects with properties: name, number,type)
function readContactForm(){

  // Read values from the form input fields
  let player1 = new Player($('#player1_name').val(), $('input[name=player1_type]:checked').val(),'red',1, false);
  let player2 = new Player($('#player2_name').val(), $('input[name=player2_type]:checked').val(),'yellow',0, false);
  window.players = [player1,player2];
  
  // Check if the return of the checkPlayers is true and if so stay on the same page
  let r = checkPlayers(player1.name, player2.name, player1.type, player2.type);
  if(r.stayOnPage){ 
    return;
  }
  else {
    location.hash ='#spelar';
    gameInit();
   }
}

//function that checks if there are two players or a player and a computer and if the fields are filled with two names 
function checkPlayers(player1_name,player2_name,pl1_type,pl2_type){
  if (player1_name==="" || player2_name===""){
    alert('Fattas en spelare. Fill in båda namn på formen även om du spelar mot en dator.');
    return {stayOnPage:true};
  }
  else if (pl1_type === "computer" && pl2_type === "computer"){
    alert('Vänligen välj minst en mänsklig spelare!');
       return {stayOnPage:true};
  }
  else{
    return {stayOnPage: false};
  }
  
}
/*
  else {
    if (pl1_type==="human" && pl2_type==="human"){
      alert(player1_name + ' spelar mot ' + player2_name +'.');
    }
    else if (pl1_type==="human" && pl2_type==="computer") {
      alert(player1_name + ' spelar mot en dator som heter '+ player2_name +'.');
    }
    else if (pl1_type==="computer" && pl2_type==="human"){
      alert(player2_name + ' spelar mot en dator som heter '+ player1_name +'.');
    }
    else {
       alert('Vänligen välj minst en mänsklig spelare!');
       return {stayOnPage:true};      
    }
    return {stayOnPage:false};
  }  
  
 }
*/
 