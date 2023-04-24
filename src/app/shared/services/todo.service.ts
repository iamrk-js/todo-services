import { Injectable } from '@angular/core';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  todoList: Array<string> = ["HTML", "CSS", "JS", "Bootstrap 3"]
  constructor(private _snackbarService : SnackBarService) { }

  getAllTodos(): Array<string> {
    // we make a API call to get data
    return this.todoList
  }

  addToDoItem(todo:string){
    // API call to add item in DB
    this.todoList.push(todo)
    // alert(`${todo} is added Successfully`)
    this._snackbarService.onOpenSnackbar(`${todo} is added in List`)
  }

  removeItem(){
    /// 
    // alert(`Item is removed Successfully`)
  }


}
