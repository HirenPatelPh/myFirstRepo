import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectManagerComponent } from './project-manager/project-manager.component';
import { ProjectManagerRoutingModule } from './project-manager.routing.module';

@NgModule({
  declarations: [ProjectManagerComponent],
  imports: [
    CommonModule,
    ProjectManagerRoutingModule
  ]
})
export class ProjectManagerModule { }
