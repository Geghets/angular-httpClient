import { Component, OnInit } from '@angular/core';
import { Task } from './task/task';
import {CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import {TaskDialogComponent, TaskDialogResult} from './task-dialog/task-dialog.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {mapCollection} from '../lib/firebase-utility';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-kanban-fire',
  templateUrl: './kanban-fire.component.html',
  styleUrls: ['./kanban-fire.component.css']
})
export class KanbanFireComponent implements OnInit {

  public todo = [];
  public inProgress = [];
  public done = [];

  constructor(private dialog: MatDialog, private store: AngularFirestore) { }

  ngOnInit(): void {
    this.store.collection('todo').snapshotChanges().pipe(mapCollection, take(1)).subscribe(data => {
      data.forEach(element => {
        switch (element.status) {
          case 'todo':
            this.todo.push(element);
            break;
          case 'inProgress':
            this.inProgress.push(element);
            break;
          case 'done':
            this.done.push(element);
            break;
        }
      });
    });
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer.id === event.container.id) {
      return;
    }

    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );

    const taskId = event.container.data[0].id;
    event.container.data.forEach(element => {
      if (element.status !== event.container.id) {
        this.store.collection('todo').doc(taskId).update({status: event.container.id});
      }
    });

  }

  edit(list: 'todo' | 'edit' | 'inProgress', task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {task}
    });
    dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
      this.store.collection('todo').doc(task.id).update(result.task);
    });
  }

  delete(list, task: Task) {
    this.store.collection('todo').doc(task.id).delete();
    if (list === 'todo') {
      this.deleteFromArray(this.todo, task.id);
    } else if (list === 'inProgress') {
      this.deleteFromArray(this.inProgress, task.id);
    } else {
      this.deleteFromArray(this.done, task.id);
    }
  }

  newTask() {
    const dialogRef = this.dialog.open(TaskDialogComponent, {width: '270px', data: {task: {status: 'todo'}}});
    dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
      this.store.collection('todo').add(result.task);
      this.todo.push(result.task);
    });
  }

  deleteFromArray(array, id) {
    const index = array.findIndex(function (obj) {
      return obj.id === id;
    });

    if (index !== -1) {
      array.splice(index, 1);
    }
  }
}
