import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { ThemeService } from '../services/theme.service';



@NgModule({
  declarations: [SkillsComponent],
  exports: [SkillsComponent],
  imports: [
    CommonModule
  ],
  providers: [ThemeService],
})
export class SkillsModule {}
