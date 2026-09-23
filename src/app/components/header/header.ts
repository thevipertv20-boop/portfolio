import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { Language } from '../../i18n/translations';

@Component({
  selector: 'app-header',
  standalone: true,
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