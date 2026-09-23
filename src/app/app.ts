import { Component, ElementRef, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { AboutMe } from './components/about-me/about-me';
import { Skills } from './components/skills/skills';
import { FeaturedProjects } from './components/featured-projects/featured-projects';

@Component({
  imports: [RouterOutlet, Header, Hero, AboutMe, Skills, FeaturedProjects],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  host: {
    '(document:mousemove)': 'moveGlow($event)',
    '(document:mouseout)': 'hideGlow($event)',
  },
})
export class App {
  protected readonly title = signal('portfolio');

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  /* Figma-Pro-Tip: globaler Glow folgt dem Cursor über die ganze Seite.
     Nur CSS-Variablen/Klasse setzen, damit kein Layout neu berechnet wird. */
  protected moveGlow(event: MouseEvent): void {
    const element = this.host.nativeElement;
    element.style.setProperty('--glow-x', `${event.clientX}px`);
    element.style.setProperty('--glow-y', `${event.clientY}px`);
    element.classList.add('glow-visible');
  }

  /* Maus verlässt das Fenster: Glow blendet an letzter Position aus */
  protected hideGlow(event: MouseEvent): void {
    if (!event.relatedTarget) {
      this.host.nativeElement.classList.remove('glow-visible');
    }
  }
}
