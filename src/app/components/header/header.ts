import { Component, inject } from '@angular/core';
import { Language, languages } from '../../i18n/language';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  private languageService = inject(LanguageService);

  languages = languages;
  language = this.languageService.language;
  t = this.languageService.t;

  setLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }
}
