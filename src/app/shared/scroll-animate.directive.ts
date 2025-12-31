import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
   standalone: true
})
export class ScrollAnimateDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('visible');
          observer.unobserve(this.el.nativeElement); // animate once
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(this.el.nativeElement);
  }
}
