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
    company: 'Company Name',
    duration: 'Jul 2022 – Present',
    description: 'Worked on scalable web applications and APIs.',
    skills: [
      'C#',
      'ASP.NET MVC',
      'Web API',
      'SQL Server',
      'Angular',
      'Azure'
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'Company Name',
    duration: 'Jan 2022 – Jun 2022',
    description: 'Assisted in backend APIs and debugging.',
    skills: [
      'Java',
      'JavaScript',
      'HTML',
      'CSS',
      'Git'
    ]
  }
];


}
