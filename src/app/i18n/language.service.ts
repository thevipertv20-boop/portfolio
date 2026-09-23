import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';
import { Language, TRANSLATIONS } from './translations';

const STORAGE_KEY = 'portfolio-language';

/* Globaler Sprachzustand. Komponenten lesen die Texte über t(); ein Wechsel
   per setLanguage() aktualisiert alle Templates ohne Seiten-Reload. */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);

  readonly language = signal<Language>(this.loadLanguage());
  readonly t = computed(() => TRANSLATIONS[this.language()]);

  constructor() {
    effect(() => {
      this.document.documentElement.lang = this.language().toLowerCase();
    });
  }

  setLanguage(language: Language): void {
    this.language.set(language);
    this.saveLanguage(language);
  }

  /* Gespeicherte Sprache aus localStorage, sonst EN. try/catch, weil
     localStorage z. B. im privaten Modus oder bei blockierten Cookies wirft. */
  private loadLanguage(): Language {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === 'DE' || stored === 'EN' ? stored : 'EN';
    } catch {
      return 'EN';
    }
  }

  private saveLanguage(language: Language): void {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Speichern nicht möglich: Sprache gilt dann nur bis zum Reload.
    }
  }
}
