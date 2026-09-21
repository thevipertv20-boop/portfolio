import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  language = signal<'EN' | 'DE'>('EN');

  setLanguage(language: 'EN' | 'DE'): void {
    this.language.set(language);
  }
}