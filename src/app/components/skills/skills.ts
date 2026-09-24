import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

interface Skill {
  name: string;
  icon: string;
  popup?: string;
}

@Component({
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly t = inject(LanguageService).t;

  protected readonly skills: Skill[] = [
    { name: 'HTML', icon: 'assets/icons/Frame 130.png' },
    { name: 'CSS', icon: 'assets/icons/Frame 100.png' },
    { name: 'JavaScript', icon: 'assets/icons/Frame 101.png' },
    { name: 'Material Design', icon: 'assets/icons/Frame 102.png' },
    { name: 'TypeScript', icon: 'assets/icons/Frame 103.png' },
    { name: 'Angular', icon: 'assets/icons/Frame 104.png' },
    { name: 'Supabase', icon: 'assets/icons/Frame 105.png' },
    { name: 'Git', icon: 'assets/icons/Frame 106.png' },
    { name: 'REST-API', icon: 'assets/icons/Frame 107.png' },
    { name: 'Scrum', icon: 'assets/icons/Frame 108.png' },
    { name: 'Growth mindset', icon: 'assets/icons/Frame 109.png', popup: 'assets/icons/Frame 299.png' },
  ];
}
