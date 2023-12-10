import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-skills',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  // constructor(public themeService: ThemeService) {}

  // toggleDarkTheme(): void {
  //   this.themeService.toggleDarkTheme();
  // }

  skills: Skill[] = [
    {
      title: 'Java',
      description: 'Strong foundation in Java programming language.',
      iconClass: 'fab fa-java', // FontAwesome icon class for Java
    },
    {
      title: 'Spring Framework',
      description: 'Experience with Spring Boot for building web applications.',
      iconClass: 'fas fa-code', // FontAwesome icon class for code (adjust as needed)
    },
    {
      title: 'Microservices',
      description: 'Proficient in building modern web applications with Angular.',
      iconClass: 'fab fa-microservices', // FontAwesome icon class for Angular
    },
    {
      title: 'Angular',
      description: 'Proficient in building modern web applications with Angular.',
      iconClass: 'fab fa-angular', // FontAwesome icon class for Angular
    },
    {
      title: 'Git',
      description: 'Proficient in building modern web applications with Angular.',
      iconClass: 'fab fa-git', // FontAwesome icon class for Angular
    },
    {
      title: 'Javascript',
      description: 'Proficient in building modern web applications with Angular.',
      iconClass: 'fab fa-js-square', // FontAwesome icon class for Angular
    },
    {
      title: 'HTML',
      description: 'Proficient in building modern web applications with Angular.',
      iconClass: 'fab fa-html5', // FontAwesome icon class for Angular
    },
    {
      title: 'CSS',
      description: 'Proficient in building modern web applications with Angular.',
      iconClass: 'fab fa-css3-alt', // FontAwesome icon class for Angular
    },
    {
      title: 'Hibernate',
      description: 'Proficient in building modern web applications with Angular.',
      iconClass: 'fab fa-hibernate', // FontAwesome icon class for Angular
    },
    {
      title: 'Docker',
      description: 'Proficient in building modern web applications with Angular.',
      iconClass: 'fab fa-docker', // FontAwesome icon class for Angular
    },
    {
      title: 'Soap',
      description: 'Proficient in building modern web applications with Angular.',
      iconClass: 'fab fa-soap', // FontAwesome icon class for Angular
    },
    {
      title: 'REST',
      description: 'Proficient in building modern web applications with Angular.',
      iconClass: 'fas fa-sync-alt', // FontAwesome icon class for Angular
    },
    {
      title: 'Apache SVN',
      description: 'Proficient in building modern web applications with Angular.',
      iconClass: 'fab fa-subversion', // FontAwesome icon class for Angular
    },
    {
      title: 'Maven',
      description: 'Proficient in building modern web applications with Angular.',
      iconClass: 'fab fa-maven', // FontAwesome icon class for Angular
    },
    {
      title: 'Gradle',
      description: 'Proficient in building modern web applications with Angular.',
      iconClass: 'fab fa-gradle', // FontAwesome icon class for Angular
    },
    {
      title: 'Apache Tomcat',
      description: 'Proficient in building modern web applications with Angular.',
      iconClass: 'fab fa-tomcat', // FontAwesome icon class for Angular
    },
    // Add more skills as needed
  ];
}

interface Skill {
  title: string;
  description: string;
  iconClass: string; // FontAwesome icon class
}
