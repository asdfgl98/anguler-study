import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  @Output() clickEvent = new EventEmitter()

  constructor(){}

  excuteButton(command: string){
    this.clickEvent.emit(command)
  }
}
