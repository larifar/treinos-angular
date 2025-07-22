import { Component, inject, ViewContainerRef } from '@angular/core';
import { JogaDaVelhaComponent } from '../../games/joga-da-velha/joga-da-velha.component';

@Component({
  selector: 'app-minigames',
  standalone: true,
  imports: [],
  templateUrl: './minigames.component.html',
  styleUrl: './minigames.component.css'
})
export class MinigamesComponent {
  private viewContainer = inject(ViewContainerRef);
  private gameCreated = false;

  renderJogoDaVelha(){
    if(!this.gameCreated){
      this.viewContainer.createComponent(JogaDaVelhaComponent);
      this.gameCreated = true;
      return;
    }
    this.liberarJogo();
  }

  private liberarJogo(){
    this.viewContainer.clear();
    this.gameCreated = false;
  }
}
