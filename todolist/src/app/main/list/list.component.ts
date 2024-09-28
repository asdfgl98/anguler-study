import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() list: string[] = [];
  @Output() removeEvent = new EventEmitter()


  constructor(){}

  removeTodo(todo: string){
    if(confirm("할 일을 삭제하시겠습니까?")){
      this.removeEvent.emit(this.list.filter((item)=> item !== todo))
    }
  }

}
