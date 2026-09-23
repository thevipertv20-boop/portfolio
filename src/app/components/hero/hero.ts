import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild, inject, signal } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero implements AfterViewInit, OnDestroy {
  @ViewChild('marqueeTrack') private marqueeTrackRef?: ElementRef<HTMLElement>;
  @ViewChild('marqueeViewport') private marqueeViewportRef?: ElementRef<HTMLElement>;

  // Anzahl der ".marquee-group"-Kopien im Track. Wird per ResizeObserver so
  // nachgezogen, dass der Track auf JEDER Viewport-Breite (auch sehr breiten
  // Monitoren) immer mindestens eine volle Gruppenbreite über den sichtbaren
  // ".marquee-viewport" hinausragt - siehe updateMarquee() unten.
  protected readonly marqueeGroups = signal<number[]>([0, 1]);

  protected readonly t = inject(LanguageService).t;

  private readonly ngZone = inject(NgZone);
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

      // Animationsdistanz bleibt IMMER exakt eine Gruppenbreite - dadurch
      // landet die nächste (identische) Gruppe pixelgenau dort, wo die
      // vorherige gestartet ist, unabhängig davon wie viele Kopien insgesamt
      // im Track liegen.
      track.style.setProperty('--marquee-group-width', `${groupWidth}px`);

      // Genug Kopien vorhalten, damit der Track auch am Ende der Animation
      // (verschoben um eine Gruppenbreite) noch mindestens eine weitere
      // volle Gruppenbreite über die sichtbare Viewport-Breite hinausragt -
      // so ist nie eine Lücke sichtbar, egal wie breit das Fenster ist.
      const viewportWidth = viewport.getBoundingClientRect().width;
      const needed = Math.max(2, Math.ceil(viewportWidth / groupWidth) + 2);
      if (needed !== this.marqueeGroups().length) {
        this.marqueeGroups.set(Array.from({ length: needed }, (_, i) => i));
      }
    };

    updateMarquee();
    // "Karla" lädt mit font-display: swap - der erste Messwert kann daher
    // noch die Fallback-Schrift widerspiegeln. Sobald die echte Schrift aktiv
    // ist, wird einmalig neu gemessen (unabhängig vom ResizeObserver unten).
    document.fonts.ready.then(updateMarquee);

    // Reagiert auf jede Änderung der sichtbaren Viewport-Breite (Fenster-
    // Resize, Zoom, anderer Monitor). Die Breite einer Gruppe selbst ändert
    // sich dabei nicht (fixe px-Schriftgröße), daher kein Beobachtungs-Loop.
    // Zusätzlich wird die erste Gruppe beobachtet: beim Sprachwechsel ändert
    // sich ihre Textbreite und die Animationsdistanz muss neu gemessen werden.
    // ResizeObserver-Callbacks laufen außerhalb der Angular-Zone - ohne
    // ngZone.run() würde die Signal-Änderung zwar berechnet, aber nie einen
    // Re-Render auslösen (kein "toter" Code, aber unsichtbar für den Nutzer).
    this.resizeObserver = new ResizeObserver(() => this.ngZone.run(updateMarquee));
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
