import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
skills = [
  { name: 'C#', logo: '/Images/csharp-original.png.svg' },
   { name: '.NET', logo: '/Images/dot-net.png.svg' },
   { name: '.NET Core', logo: '/Images/dotnetcore.png.svg' },
    { name: 'EF Core', logo: '/Images/entityframeworkcore.png.svg'  },
    { name: 'HTML5', logo: '/Images/html5.png.svg' },
    { name: 'CSS3', logo: '/Images/css3.png.svg' },
     { name: 'jQuery', logo: '/Images/jquery.png.svg' },
    { name: 'Angular', logo: '/Images/angular.png.svg' },
   
    
    { name: 'SQL Server', logo: '/Images/microsoftsqlserver.png.svg'  },
    { name: 'Azure DevOps', logo: '/Images/azuredevops.png.svg'  },
    { name: 'Azure', logo: '/Images/azure.png.svg'  },
    { name: 'Git', logo: '/Images/git.png.svg' },
    { name: 'GitHub', logo: '/Images/github.png.svg'  },
    { name: 'Visual Studio', logo: '/Images/visualstudio.png.svg' },
    { name: 'VS Code', logo: '/Images/vscode.png.svg' },
    { name: 'Postman', logo: '/Images/postman.png.svg' }
  ];
}
