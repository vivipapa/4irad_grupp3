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


new RunSqlQuery('showBestTenNames',function(hlist){
  console.log("Hi-score list",hlist)
});