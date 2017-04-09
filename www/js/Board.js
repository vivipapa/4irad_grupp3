class Board {
  // has a number of slots and columns etc
  	constructor(){
		this.data = this.createNewBoard();
	}

	createNewBoard(){
		let data = [];
		for(let i = 0; i < 6; i++){
			data.push([0,0,0,0,0,0,0]);
		}
		return data;
	}

  checkIfWinningPlayer(){}
}



let board = new Board();
console.log(board.data);