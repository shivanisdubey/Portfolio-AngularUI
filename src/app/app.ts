import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Project } from './project/project';
import { Skills } from './skills/skills';
import { Experience } from './experience/experience';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,About,Contact,About,Project,Skills,Experience,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  activeSection = 'home';

  scrollTo(id: string) {
  this.activeSection = id; // 👈 immediate feedback

  document.getElementById(id)
    ?.scrollIntoView({ behavior: 'smooth' });
}

 
ngAfterViewInit(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    },
    {
      root: null,
      threshold: 0.3,              // 👈 LOWER threshold
      rootMargin: '-120px 0px -60% 0px'
      // 👆 top offset = navbar height
    }
  );

  this.navItems.forEach(item => {
    const section = document.getElementById(item.id);
    if (section) observer.observe(section);
  });
}



}
