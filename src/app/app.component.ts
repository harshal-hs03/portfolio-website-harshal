import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ProjectsModule } from './projects/projects.module';
import { SkillsModule } from "./skills/skills.module";
import { ContactModule } from "./contact/contact.module";
import { ThemeService } from './services/theme.service';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AboutModule } from './about/about.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, ProjectsModule, SkillsModule, ContactModule, AboutModule]
})
export class AppComponent implements OnInit {
  title = 'portfolio-website-harshal';

  constructor(public themeService: ThemeService) {}
  ngOnInit(): void {
    AOS.init();
  }

  toggleDarkTheme(): void {
    this.themeService.toggleDarkTheme();
  }
}
