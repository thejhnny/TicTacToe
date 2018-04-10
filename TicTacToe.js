class Game {
  constructor() {
    this.newBoard = [
      '1 | 2 | 3',
      '_________',
      '4 | 5 | 6',
      '_________',
      '7 | 8 | 9'
    ];
    this.board = this.newBoard.slice();
    this.players = ['X', 'O'];
    this.X = [];
    this.O = [];
    this.turn = 'X';
    this.winningCombos = [
      '123',
      '456',
      '789',
      '147',
      '258',
      '369',
      '159',
      '357'
    ];
    this.end = false;
  }
  makeMove(position) {
    if (!this.end) {
      for (var i = 0; i < this.board.length; i++) {
        if (this.board[i].indexOf(position) > -1) {
          var newStr = this.board[i].replace(position, this.turn);
          this.board[i] = newStr;
          this.showBoard();
          if (this.turn === 'X') {
            this.X.push(position);
            console.log(this.checkWin());
            this.turn = 'O';
            return;
          } else {
            this.O.push(position);
            this.checkWin();
            this.turn = 'X';
            return;
          }
        }  
      }
      return 'Position already taken, choose another one';
    } else {
      return 'GAME ENDED ALREADY';
    }
    if (this.turn === 'X') {
      console.log('HERE');
      this.turn = 'O';
    } else {
      console.log('HERE');
      this.turn = 'X';
    }
  }

  showBoard() {
    console.log(this.board.join('\n'));
  }

  checkWin() {
    if (this.turn === 'X') {
      for (var i = 0; i < this.winningCombos.length; i++) {
        var win = this.winningCombos[i].split('').reduce((acc, elem) => {
          return acc && this.X.includes(Number(elem));
        }, true);
        if (win) {
          this.end = true;
          return 'X WINS!';
        }
      }
    } else {
      for (var i = 0; i < this.winningCombos.length; i++) {
        var win = this.winningCombos[i].split('').reduce((acc, elem) => {
          return acc && this.O.includes(elem);
        }, true);
        if (win) {
          return 'O WINS!';
          this.end = true;
        }
      }
    }
    if(this.X.length + this.O.length === 9){
      return 'TIE GAME!';
    }
  }
}
