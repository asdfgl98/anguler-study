import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  todoInput: string ='';
  todoList: string[] = []

  constructor(){}

  addTodo() {  
    if(this.todoInput.trim()){
      this.todoList.push(this.todoInput)
      this.todoInput = ''
    }
  
  }

  updateList($event: string[]){
    this.todoList = $event
  }

}
