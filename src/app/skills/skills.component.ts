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

  // hasSkillsInCategory(category: string): boolean {
  //   return this.skills.some(skill => skill.category === category);
  // }

  hasSkillsInCategoryTesting() {
    return this.testing.length > 0
  }

  hasSkillsInCategoryFrontEnd() {
    return this.frontend.length > 0;
  }

  hasSkillsInCategoryBackEnd() {
    return this.backend.length > 0;
  }
  hasSkillsInCategoryDatabases() {
    return this.databases.length > 0;
  }
  hasSkillsInCategoryTools() {
    return this.tools.length > 0;
  }

  backend: Skill[] = [
    {
      title: 'Java',
      // description: 'Strong foundation in Java programming language.',
      iconClass: 'fab fa-java', // FontAwesome icon class for Java
      category: 'Back-end'
    },
    {
      title: 'Spring Framework',
      // description: 'Experience with Spring Boot for building web applications.',
      iconClass: 'fas fa-code', // FontAwesome icon class for code (adjust as needed)
      category: 'Back-end'
    },
    {
      title: 'Microservices',

      iconClass: 'fas fa-server', // FontAwesome icon class for Angular
      category: 'Back-end'
    },
    {
      title: 'Hibernate',

      iconClass: 'fas fa-code', // FontAwesome icon class for Angular
      category: 'Back-end'
    },
    {
      title: 'Soap',

      iconClass: 'fab fa-soap', // FontAwesome icon class for Angular
      category: 'Back-end'
    },
    {
      title: 'REST',

      iconClass: 'fas fa-sync-alt', // FontAwesome icon class for Angular
      category: 'Back-end'
    },
    {
      title: 'Struts',

      iconClass: 'fas fa-project-diagram', // FontAwesome icon class for Angular
      category: 'Back-end'
    },
    {
      title: 'Apache Kafka',

      iconClass: 'fas fa-exchange-alt', // FontAwesome icon class for Angular
      category: 'Back-end'
    },
    {
      title: 'JavaFx',

      iconClass: 'fas fa-desktop', // FontAwesome icon class for Angular
      category: 'Back-end'
    },
  ];

  databases: Skill[] = [
    {
      title: 'MSSQL',

      iconClass: 'fab fa-microsoft', // FontAwesome icon class for Angular
      category: 'Databases'
    },
    {
      title: 'MySQL',

      iconClass: 'fas fa-database', // FontAwesome icon class for Angular
      category: 'Databases'
    },
    {
      title: 'Oracle',

      iconClass: 'fas fa-database', // FontAwesome icon class for Angular
      category: 'Databases'
    },
    {
      title: 'NoSQL',

      iconClass: 'fas fa-table', // FontAwesome icon class for Angular
      category: 'Databases'
    },
    {
      title: 'Sqlite',

      iconClass: 'fas fa-database', // FontAwesome icon class for Angular
      category: 'Databases'
    },
  ];

  frontend: Skill[] = [
    {
      title: 'Angular',

      iconClass: 'fab fa-angular', // FontAwesome icon class for Angular
      category: 'Front-end'
    },
    {
      title: 'Javascript',

      iconClass: 'fab fa-js-square', // FontAwesome icon class for Angular
      category: 'Front-end'
    },
    {
      title: 'HTML',

      iconClass: 'fab fa-html5', // FontAwesome icon class for Angular
      category: 'Front-end'
    },
    {
      title: 'CSS',

      iconClass: 'fab fa-css3-alt', // FontAwesome icon class for Angular
      category: 'Front-end'
    },
    {
      title: 'jQuery',

      iconClass: 'fab fa-js-square', // FontAwesome icon class for Angular
      category: 'Front-end'
    },
    {
      title: 'Bootstrap',

      iconClass: 'fab fa-bootstrap', // FontAwesome icon class for Angular
      category: 'Front-end'
    },
    {
      title: 'Material UI',

      iconClass: 'fas fa-palette', // FontAwesome icon class for Angular
      category: 'Front-end'
    },
    {
      title: 'Typescript',

      iconClass: 'fas fa-code', // FontAwesome icon class for Angular
      category: 'Front-end'
    },
  ];

  testing: Skill[] = [
    {
      title: 'TestNG',

      iconClass: 'fas fa-check-circle', // FontAwesome icon class for Angular
      category: 'Testing'
    },
    {
      title: 'Selenium',

      iconClass: 'fas fa-globe', // FontAwesome icon class for Angular
      category: 'Testing'
    },
    {
      title: 'Groovy',

      iconClass: 'fas fa-code', // FontAwesome icon class for Angular
      category: 'Testing'
    },
    {
      title: 'JUnit',

      iconClass: 'fab fa-java', // FontAwesome icon class for Angular
      category: 'Testing'
    },
  ];

  tools: Skill[] = [
    {
      title: 'Git',

      iconClass: 'fab fa-git', // FontAwesome icon class for Angular
      category: 'Tools'
    },

    {
      title: 'Docker',

      iconClass: 'fab fa-docker', // FontAwesome icon class for Angular
      category: 'Tools'
    },
    {
      title: 'Apache SVN',

      iconClass: 'fas fa-code', // FontAwesome icon class for Angular
      category: 'Tools'
    },
    {
      title: 'Maven',

      iconClass: 'fas fa-code', // FontAwesome icon class for Angular
      category: 'Tools'
    },
    {
      title: 'Gradle',

      iconClass: 'fas fa-code', // FontAwesome icon class for Angular
      category: 'Tools'
    },
    {
      title: 'Apache Tomcat',

      iconClass: 'fas fa-server', // FontAwesome icon class for Angular
      category: 'Tools'
    },
    {
      title: 'Jira',

      iconClass: 'fab fa-atlassian', // FontAwesome icon class for Angular
      category: 'Tools'
    },
    // Add more skills as needed
  ];

  skillCategories = [
    {
      name: 'FRONT-END',
      skills: this.frontend,
    },
    {
      name: 'BACK-END',
      skills : this.backend,
    },
    {
      name: 'DATABASES',
      skills: this.databases,
    },
    {
      name: 'TESTING',
      skills: this.testing,
    },
    {
      name: 'TOOLS',
      skills: this.tools,
    },
    // Add more categories as needed
  ];

}

interface Skill {
  title: string;
  iconClass: string; // FontAwesome icon class
  category: string;
}

