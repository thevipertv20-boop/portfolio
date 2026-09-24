import { Component, inject } from '@angular/core';
import { Language, LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  private readonly languageService = inject(LanguageService);

  language = this.languageService.language;
  t = this.languageService.t;

  setLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }
}