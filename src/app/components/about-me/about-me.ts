import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-about-me',
  styleUrl: './about-me.scss',
  templateUrl: './about-me.html',
})
export class AboutMe {
  protected readonly t = inject(LanguageService).t;

  protected readonly highlightIcons = [
    'assets/icons/14. About me Highlights icons.png',
    'assets/icons/15. About me Highlights icons.png',
    'assets/icons/16. About me Highlights icons.png',
  ];
}
