import { Injectable, computed, signal } from '@angular/core';
import { translations } from './translations';

export type Language = 'EN' | 'DE';

const STORAGE_KEY = 'portfolio-language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly language = signal<Language>(this.loadLanguage());

  readonly t = computed(() => translations[this.language()]);

  constructor() {
    this.updateHtmlLang();
  }

  setLanguage(language: Language): void {
    this.language.set(language);
    this.saveLanguage(language);
    this.updateHtmlLang();
  }

  private updateHtmlLang(): void {
    document.documentElement.lang = this.language().toLowerCase();
  }

  private loadLanguage(): Language {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === 'DE' ? 'DE' : 'EN';
    } catch {
      return 'EN';
    }
  }

  private saveLanguage(language: Language): void {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
    }
  }
}
