import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  imports: [RouterOutlet, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  host: {
    '(document:mousemove)': 'moveGlow($event)',
    '(document:mouseout)': 'hideGlow($event)',
  },
})
export class App {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    // Router links with a fragment ignore scroll-margin-top, so they get the same offset here.
    inject(ViewportScroller).setOffset(() => [0, this.getHeaderOffset()]);
  }

  // Same value as --header-height in styles.scss, measured on the header itself.
  private getHeaderOffset(): number {
    const header = document.querySelector<HTMLElement>('app-header');
    if (header) {
      return header.offsetHeight;
    }
    return 0;
  }

  protected moveGlow(event: MouseEvent): void {
    const element = this.host.nativeElement;
    element.style.setProperty('--glow-x', `${event.clientX}px`);
    element.style.setProperty('--glow-y', `${event.clientY}px`);
    element.classList.add('glow-visible');
  }

  protected hideGlow(event: MouseEvent): void {
    if (!event.relatedTarget) {
      this.host.nativeElement.classList.remove('glow-visible');
    }
  }
}
