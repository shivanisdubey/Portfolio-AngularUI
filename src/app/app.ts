import { Component, HostListener, NgZone, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Project } from './project/project';
import { Skills } from './skills/skills';
import { Experience } from './experience/experience';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,About,Contact,About,Project,Skills,Experience,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor( private ngZone: NgZone) {}
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
  this.activeSection = id; 

  document.getElementById(id)
    ?.scrollIntoView({ behavior: 'smooth' });
}
@HostListener('window:scroll', [])
onScroll() {
  let currentSection = this.navItems[0].id;

  this.navItems.forEach(item => {
    const section = document.getElementById(item.id);
    if (section) {
      const top = section.getBoundingClientRect().top;
      if (top <= 120) { // 120px offset for floating nav
        currentSection = item.id;
      }
    }
  });

  this.activeSection = currentSection;
}

 
ngAfterViewInit(): void {
  // Run after DOM stabilizes
  setTimeout(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          
          if (entry.isIntersecting) {
            // Ensure Angular detects the change
            this.ngZone.run(() => {
              this.activeSection = entry.target.id;
            });
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
        rootMargin: '-100px 0px -50% 0px'
      }
    );

    this.navItems.forEach(item => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });
  }, 0); // small delay to let child components render


    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.id = 'cursorCanvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1000';

    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    // Track cursor
    document.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Pulsing effect variables
    let pulse = 0;
    let pulseDirection = 1;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update pulse
      pulse += 0.3 * pulseDirection;
      if (pulse > 15 || pulse < -15) pulseDirection *= -1; // oscillate

      // Aura radius with pulse
      const auraRadius = 200 + pulse;

      // Jelly-like soft aura using radial gradient
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        auraRadius
      );
      gradient.addColorStop(0, 'rgba(255,255,255,0.1)');
      gradient.addColorStop(0.4, 'rgba(255,255,255,0.05)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');

      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, auraRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      requestAnimationFrame(animate);
    }

    animate();

    // Resize canvas on window resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
}