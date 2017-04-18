//Call the fuction that adds the winner to the database fyrairad
function addWinner{
    if (players[currPlayerIndex].winner === true){
      let name = players[currPlayerIndex].name;
      let type = players[currPlayerIndex].type;
      let moves = players[currPlayerIndex].moves;

      new RunSqlQuery(
      'addPlayer', {
        name: name
        type: type
        moves: moves
      },
      function(response){
        console.log('addPlayer',response);
      });
    }
}
