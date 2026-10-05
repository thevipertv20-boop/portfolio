import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../i18n/language.service';

type SocialLink = {
  label: string;
  url: string;
};

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly t = inject(LanguageService).t;

  protected readonly socialLinks: SocialLink[] = [
    { label: 'Github', url: 'https://github.com/thevipertv20-boop' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sebastian-m1/' },
  ];

  protected readonly emailUrl = 'mailto:thevipertv20@gmail.com';
  protected readonly legalNoticeRoute = '/legal-notice';
  protected readonly privacyPolicyRoute = '/privacy-policy';
}
