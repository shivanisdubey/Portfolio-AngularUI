import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExperienceM } from './experience.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
 
experiences: ExperienceM[] = [
  {
    role: 'Full Stack .NET Developer',
    company: '',
    duration: 'Jul 2022 – Present',
    description: 'Develop backend components using C# and ASP.NET MVC with Entity Framework and ADO.NET, implementing role-based authorization. Write and optimize SQL Server queries and stored procedures for improved performance. Build interactive web pages using HTML, CSS, jQuery, and AJAX to support business workflows. Resolve production issues to ensure smooth application functionality. Create SSIS packages for data validation and import. Manage version control using TortoiseSVN.',
    skills: [
      'C#',
      'ASP.NET MVC',
      'ADO.NET',
      'Entity Framework',
      'LINQ',
      'MS SQL Server',
      'SSIS',
      'HTML5',
      'CSS3',
      'jQuery',
      'AJAX',
      'Tortoise SVN'
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: '',
    duration: 'Mar 2022 – Jun 2022',
    description: 'Developed RESTful APIs using ASP.NET Core Web API (C#). Worked with Entity Framework, LINQ, and SQL Server for data access. Gained exposure to frontend technologies, explored Azure deployment for cloud-based applications and used Git and GitHub for version control and collaboration.',
    skills: [
      'C#',
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'MS SQL Server',
      'LINQ',
      'Angular',
      'Azure',
      'HTML',
      'CSS',
      'Git',
      'GitHub',
      'Postman'
    ]
  }
];


}
