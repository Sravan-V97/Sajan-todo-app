import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { log } from 'console';

import{faTrash} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {

@ViewChild ("tasks") inputName:any;

  title = 'myTodo';

  taskList:any[] = []
  fieldText:string =''

  

  addTodo(ev:any){
    
    if(!ev){
      alert("please enter the task");
      return;
    }
    console.log(ev)
    this.taskList.push({id:this.taskList.length,name:ev})
    console.warn(this.taskList);
  
    this.inputName.nativeElement.value = '';
  }


CompletedTask(id:number){
console.log(id);
let _taskList = [...this.taskList]
console.log(_taskList);
_taskList[id].completed = true
this.taskList = _taskList;
}

  removeList(id:number){
console.warn(id)
this.taskList = this.taskList.filter(list =>list.id!==id);
}

updateTask(ev:any){
  alert("update is not done")
}

}
