import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fadeInAnimation } from '../app.animation';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-projects',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  // animations: [fadeInAnimation],
})
export class ProjectsComponent {
  // constructor(public themeService: ThemeService) {}
  projects: Project[] = [
    {
      name: 'Fullscript Integration',
      description: 'Description for Project 1.',
      techStack: 'Java, Spring, JS, REST, oAuth 2.0',
      url: 'https://example.com/project1',
    },
    {
      name: 'Midmark IQConnect interface',
      description: 'Description for Project 2.',
      techStack: 'Java, JNI',
      url: 'https://example.com/project2',
    },
    {
      name: 'Better-Reads',
      description: 'Web app to track book reading',
      techStack: 'Spring Boot, NoSql, Java, Bootstrap, HTML, CSS, JS',
      url: 'https://example.com/project3',
    },
    {
      name: 'Tic-Tac-Toe and various multiplayer console-mini-games',
      description: 'Java Console, and JavaFX UI games',
      techStack: 'JavaFX, Java',
      url: 'https://example.com/project3',
    },

    // Add more projects as needed
  ];
}

interface Project {
  name: string;
  description: string;
  techStack: string;
  url: string;
}
