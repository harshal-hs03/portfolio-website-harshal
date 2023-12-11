import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { AboutComponent } from './about.component';
import { ThemeService } from '../services/theme.service';

@NgModule({
  declarations: [AboutComponent],
  exports: [AboutComponent],
  imports: [
    CommonModule,
    MatCardModule, // Import MatCardModule
    // Add any other necessary modules
  ],
})
export class AboutModule {}
