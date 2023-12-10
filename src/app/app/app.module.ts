import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectsModule } from '../projects/projects.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// app.module.ts
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// Import other Angular Material modules as needed



@NgModule({
  declarations: [],
  imports: [
    CommonModule, ProjectsModule, BrowserAnimationsModule
  ]
})
export class AppModule { }
