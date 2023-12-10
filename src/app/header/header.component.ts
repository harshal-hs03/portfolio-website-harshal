import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
// export class HeaderComponent {
//   constructor(private el: ElementRef, private renderer: Renderer2) {}

//   scrollTo(section: string): void {
//     const element = this.el.nativeElement.querySelector(`#${section}`);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
//     }
//   }
// }

export class HeaderComponent {
  constructor(private scrollService: ScrollService, public themeService: ThemeService) {}

  toggleDarkTheme(): void {
    this.themeService.toggleDarkTheme();
  }

  scrollTo(section: string): void {
    this.scrollService.scrollTo(section);
  }


}
