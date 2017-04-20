//Call the fuction that adds the winner to the database fyrairad
function addWinner(){
    if (players[currPlayerIndex].winner === true){
      let name = players[currPlayerIndex].name;      
      let moves = players[currPlayerIndex].moves;

      new RunSqlQuery(
      'addPlayer', {
        name: name,
        moves: moves
      },
      function(response){
        console.log('addPlayer',response);
      });
    }

}

// Wait for the DOM to load
$(function(){
  // Run an sql query to get the high score list
  new RunSqlQuery('showBestTenNames',function(hlist){
    // The result has come back from the database
    // loop through them and create HTML elements
    let pos = 1;
    for(let person of hlist){
      $('#highscore tbody').append(
        '<tr>' +
        '<td>' + pos + '</td>' +
        '<td>' + person.name + '</td>' +
        '<td>' + person.moves + '</td>' +
        '</tr>'
      );
      pos++;
    }
  });
});
