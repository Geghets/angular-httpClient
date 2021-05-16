import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanFireComponent } from './kanban-fire.component';

const routes: Routes = [{ path: '', component: KanbanFireComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KanbanFireRoutingModule { }
