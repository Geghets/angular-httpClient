import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


import { KanbanFireRoutingModule } from './kanban-fire-routing.module';
import { KanbanFireComponent } from './kanban-fire.component';
import { TaskComponent } from './task/task.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';


@NgModule({
  declarations: [
    KanbanFireComponent,
    TaskComponent,
    TaskDialogComponent
  ],
  imports: [
    CommonModule,
    KanbanFireRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule
  ],
  entryComponents: [TaskDialogComponent]
})
export class KanbanFireModule { }
