class Player{
//	name,
//	color,

}

class Board{

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

}

class HighScore{

}

let board = new Board();
console.log(board.data);