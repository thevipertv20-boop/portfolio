import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, inject, signal } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero implements AfterViewInit, OnDestroy {
  @ViewChild('marqueeTrack') private marqueeTrackRef?: ElementRef<HTMLElement>;
  @ViewChild('marqueeViewport') private marqueeViewportRef?: ElementRef<HTMLElement>;

  protected readonly marqueeGroups = signal<number[]>([0, 1]);

  protected readonly t = inject(LanguageService).t;

  private resizeObserver?: ResizeObserver;

  ngAfterViewInit(): void {
    const track = this.marqueeTrackRef?.nativeElement;
    const viewport = this.marqueeViewportRef?.nativeElement;
    if (!track || !viewport) {
      return;
    }

    const updateMarquee = () => {
      const group = track.querySelector<HTMLElement>('.marquee-group');
      const groupWidth = group?.getBoundingClientRect().width ?? 0;
      if (groupWidth <= 0) {
        return;
      }

      track.style.setProperty('--marquee-group-width', `${groupWidth}px`);

      const viewportWidth = viewport.getBoundingClientRect().width;
      const needed = Math.max(2, Math.ceil(viewportWidth / groupWidth) + 2);
      if (needed !== this.marqueeGroups().length) {
        this.marqueeGroups.set(Array.from({ length: needed }, (_, i) => i));
      }
    };

    updateMarquee();

    this.resizeObserver = new ResizeObserver(updateMarquee);
    this.resizeObserver.observe(viewport);
    const firstGroup = track.querySelector<HTMLElement>('.marquee-group');
    if (firstGroup) {
      this.resizeObserver.observe(firstGroup);
    }
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }
}
