import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Language, languages } from '../../i18n/language';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  private languageService = inject(LanguageService);

  languages = languages;
  language = this.languageService.language;
  t = this.languageService.t;

  // Only used on mobile: true while the burger menu is open.
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  setLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }
}
