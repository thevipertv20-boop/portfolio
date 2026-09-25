import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

type ReferenceId = 'reference1' | 'reference2' | 'reference3';

type ReferencePosition = 'previous' | 'active' | 'next';

interface Reference {
  id: ReferenceId;
  name: string;
}

interface VisibleReference {
  reference: Reference;
  position: ReferencePosition;
}

@Component({
  selector: 'app-references',
  styleUrl: './references.scss',
  templateUrl: './references.html',
})
export class References {
  protected readonly t = inject(LanguageService).t;

  protected readonly references: Reference[] = [
    { id: 'reference1', name: '[Name 1]' },
    { id: 'reference2', name: '[Name 2]' },
    { id: 'reference3', name: '[Name 3]' },
  ];

  protected readonly activeIndex = signal(0);

  protected readonly visibleReferences = computed<VisibleReference[]>(() => {
    const index = this.activeIndex();
    return [
      { reference: this.referenceAt(index - 1), position: 'previous' },
      { reference: this.referenceAt(index), position: 'active' },
      { reference: this.referenceAt(index + 1), position: 'next' },
    ];
  });

  protected next(): void {
    this.goTo(this.activeIndex() + 1);
  }

  protected previous(): void {
    this.goTo(this.activeIndex() - 1);
  }

  protected goTo(index: number): void {
    this.activeIndex.set(this.wrap(index));
  }

  private referenceAt(index: number): Reference {
    return this.references[this.wrap(index)];
  }

  private wrap(index: number): number {
    const count = this.references.length;
    return (index % count + count) % count;
  }
}
