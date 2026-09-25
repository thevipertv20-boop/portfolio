import { Component, ElementRef, Injector, afterNextRender, computed, inject, signal, viewChild } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

type ReferenceId = 'reference1' | 'reference2' | 'reference3';

type ReferencePosition = 'farPrevious' | 'previous' | 'active' | 'next' | 'farNext';

type SlideDirection = 1 | -1;

interface Reference {
  id: ReferenceId;
  name: string;
}

interface VisibleReference {
  reference: Reference;
  position: ReferencePosition;
}

const SLIDE_DURATION = 500;

@Component({
  selector: 'app-references',
  styleUrl: './references.scss',
  templateUrl: './references.html',
})
export class References {
  protected readonly t = inject(LanguageService).t;

  private readonly injector = inject(Injector);

  private readonly slider = viewChild<ElementRef<HTMLElement>>('slider');

  private runningAnimations: Animation[] = [];

  protected readonly references: Reference[] = [
    { id: 'reference1', name: '[Name 1]' },
    { id: 'reference2', name: '[Name 2]' },
    { id: 'reference3', name: '[Name 3]' },
  ];

  protected readonly activeIndex = signal(0);

  protected readonly visibleReferences = computed<VisibleReference[]>(() => {
    const index = this.activeIndex();
    return [
      { reference: this.referenceAt(index - 2), position: 'farPrevious' },
      { reference: this.referenceAt(index - 1), position: 'previous' },
      { reference: this.referenceAt(index), position: 'active' },
      { reference: this.referenceAt(index + 1), position: 'next' },
      { reference: this.referenceAt(index + 2), position: 'farNext' },
    ];
  });

  protected next(): void {
    this.goTo(this.activeIndex() + 1);
  }

  protected previous(): void {
    this.goTo(this.activeIndex() - 1);
  }

  protected goTo(index: number): void {
    const current = this.activeIndex();
    const target = this.wrap(index);
    if (target === current) {
      return;
    }

    this.activeIndex.set(target);
    const direction: SlideDirection = target === this.wrap(current + 1) ? 1 : -1;
    afterNextRender(() => this.slide(direction), { injector: this.injector });
  }

  // FLIP: the cards are already rendered at their new positions, so they start
  // one card distance back and glide into place.
  private slide(direction: SlideDirection): void {
    const slider = this.slider()?.nativeElement;
    if (!slider || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const cards = Array.from(slider.querySelectorAll<HTMLElement>('.reference-card'));
    const [, previousCard, activeCard, nextCard] = cards;
    const distance = nextCard.offsetLeft - activeCard.offsetLeft;
    const outgoingCard = direction === 1 ? previousCard : nextCard;

    const inactiveStyle = this.cardStyle(outgoingCard);
    const activeStyle = this.cardStyle(activeCard);
    const currentOffsets = cards.map((card) => new DOMMatrixReadOnly(getComputedStyle(card).transform).m41);

    this.runningAnimations.forEach((animation) => animation.cancel());

    const timing: KeyframeAnimationOptions = { duration: SLIDE_DURATION, easing: 'ease-in-out' };
    this.runningAnimations = cards.map((card, i) =>
      card.animate(
        [
          { transform: `translateX(${direction * distance + currentOffsets[i]}px)`, visibility: 'visible' },
          { transform: 'translateX(0)', visibility: 'visible' },
        ],
        timing,
      ),
    );

    this.runningAnimations.push(
      activeCard.animate([inactiveStyle, activeStyle], timing),
      outgoingCard.animate([activeStyle, inactiveStyle], timing),
    );

    const quote = activeCard.querySelector('.reference-quote');
    if (quote) {
      this.runningAnimations.push(quote.animate([{ opacity: 0 }, { opacity: 1 }], timing));
    }
  }

  private cardStyle(card: HTMLElement): Keyframe {
    const style = getComputedStyle(card);
    return {
      height: style.height,
      paddingBottom: style.paddingBottom,
      backgroundColor: style.backgroundColor,
      color: style.color,
    };
  }

  private referenceAt(index: number): Reference {
    return this.references[this.wrap(index)];
  }

  private wrap(index: number): number {
    const count = this.references.length;
    return (index % count + count) % count;
  }
}
