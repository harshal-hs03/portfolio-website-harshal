import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent],
  imports: [
    CommonModule, MatCardModule
  ]
})
export class ProjectsModule { }
