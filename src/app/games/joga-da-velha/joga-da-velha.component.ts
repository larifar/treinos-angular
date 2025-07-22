import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-joga-da-velha',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './joga-da-velha.component.html',
  styleUrl: './joga-da-velha.component.css'
})
export class JogaDaVelhaComponent {
board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

private players = ["X", "O"];
winner = false;
gameover = false;
currentPlayer = this.players[0];

winnerPositions = [
  [ [0,0], [0,1], [0,2] ], // Linha 1
  [ [1,0], [1,1], [1,2] ], // Linha 2 (meio)
  [ [2,0], [2,1], [2,2] ], // Linha 3
  [ [0,0], [1,0], [2,0] ], // Coluna 1
  [ [0,1], [1,1], [2,1] ], // Coluna 2
  [ [0,2], [1,2], [2,2] ], // Coluna 3
  [ [0,0], [1,1], [2,2] ], // Diagonal principal
  [ [0,2], [1,1], [2,0] ]  // Diagonal secundária
]

makeMove(row: number, line: number){
  if(this.board[row][line] == "" && !this.gameover){

    this.board[row][line] = this.currentPlayer;
    this.verifyEndGame()

    if(this.winner){
      this.shootConfetti()
      console.log(this.currentPlayer  + " venceu a partida!")
      return
    } else if(this.gameover){
      console.log("EMPATE")
      return
    }
    this.changePlayer()
  }

}

changePlayer(){
  if(this.currentPlayer == "X"){
    this.currentPlayer = this.players[1];
  } else{
    this.currentPlayer = this.players[0]
  }
}

  verifyWinner(){
    this.winnerPositions.forEach(position => {
      const [element1, element2, element3] = position; //posição vencedora

      const value1 = this.board[element1[0]][element1[1]] //primeira valor (x ou o)
      const value2 = this.board[element2[0]][element2[1]] //segundo valor

      if(value1!= "" && value2 == value1){ // se nao for vazia e forem iguais
        const value3 = this.board[element3[0]][element3[1]] // terceiro valor

        if(value3 == value1){ //se valores forem iguais tem vencedor
          this.winner = true;
          this.gameover = true;
        }
      }
    }
  )}

  verifyEndGame(){
    this.verifyWinner()
    if(this.board.flat().every(cell => cell != "")){ // true se não há posições livres;
      this.gameover = true;
    }
  }

  shootConfetti(){
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
  });
  }

}

