import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  imports: [],
  selector: 'app-about-me',
  styleUrl: './about-me.scss',
  templateUrl: './about-me.html',
})
export class AboutMe {
  protected readonly t = inject(LanguageService).t;

  /* Icons der Highlights, Reihenfolge passend zu t().aboutMe.highlights */
  protected readonly highlightIcons = [
    'assets/icons/14. About me Highlights icons.png',
    'assets/icons/15. About me Highlights icons.png',
    'assets/icons/16. About me Highlights icons.png',
  ];
}
