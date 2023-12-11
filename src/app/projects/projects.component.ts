import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
      url: 'https://github.com/harshal-hs03/Better-Reads',
    },
    {
      name: 'Tic-Tac-Toe UI Game',
      description: 'JavaFX Tic-Tac-Toe game consisting of single and two player mode in it',
      techStack: 'JavaFX, Java',
      url: 'https://github.com/harshal-hs03/Tic-Tac-Toe',
    },
    {
      name: 'Multiplayer console-mini-games',
      description: 'This project consists of various console games',
      techStack: 'Java',
      url: 'https://github.com/harshal-hs03/Console-Games',
    },
    {
      name: 'Todo-List',
      description: 'Spring Masterclass Course project',
      techStack: 'Spring MVC, Java, Maven, JSP',
      url: 'https://github.com/harshal-hs03/todo-list',
    },
    {
      name: 'Sudoku-Solver',
      description: 'Set the sudoku board with the initial values and detect if it can be solved or not with the result displaying in the console',
      techStack: 'Java',
      url: 'https://github.com/harshal-hs03/Sudoku-Solver',
    },
    {
      name: 'Portfolio-Website',
      description: 'Portfolio website that exhibits my expertise and interests',
      techStack: 'Angular, HTML, CSS, Typescript',
      url: 'https://github.com/harshal-hs03/portfolio-website-harshal',
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
