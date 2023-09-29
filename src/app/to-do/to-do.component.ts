import { Component } from '@angular/core';
import { Todo } from './models/ToDoItem';
@Component ({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})


export class ToDoComponent {
  todos : Todo[] = [];
  newTodo : string = "";
  id:number = 1;
  saveTodo(){
    if(this.newTodo){
      let todo = new Todo(this.id, this.newTodo,  true);
      this.todos.push(todo);
      this.newTodo = '';
      this.id = this.id+1;
    }else{
      alert("Please Enter TodoList");
    }
  }
  done(id:number){
    this.todos[id].isDone = !this.todos[id].isDone;
  }
  remove(id:number){
    this.todos = this.todos.filter((v)=>v.id !== id);
  }
}
