import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectManagerComponent } from './project-manager/project-manager.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagerRoutingModule {}
