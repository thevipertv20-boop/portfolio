import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-privacy-policy',
  // Shares the legal notice styles so both legal pages always look the same.
  styleUrl: '../legal-notice/legal-notice.scss',
  templateUrl: './privacy-policy.html',
})
export class PrivacyPolicy {
  protected readonly t = inject(LanguageService).t;
}
