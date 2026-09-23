import { Component, DOCUMENT, ElementRef, Injector, afterNextRender, inject, signal, viewChild } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { Translation } from '../../i18n/translations';

/* Neue Projekte: Beschreibung in translations.ts (featuredProjects.descriptions)
   anlegen - der Schlüssel ist dann automatisch als id erlaubt. */
type ProjectId = keyof Translation['featuredProjects']['descriptions'];

interface Technology {
  name: string;
  /* Figma-Icon; ohne Asset (z. B. Firebase) wird nur der Name angezeigt */
  icon?: string;
}

/* Nur Projekte mit Details sind klickbar und zeigen die Hover-Vorschau.
   Links sind optional und werden nur angezeigt, wenn gesetzt. */
interface ProjectDetails {
  number: string;
  technologies: Technology[];
  github?: string;
  liveTest?: string;
}

interface Project {
  id: ProjectId;
  name: string;
  technologies: string[];
  /* Projektbild für Hover-Vorschau und Modal (nur sichtbar mit details) */
  image?: string;
  details?: ProjectDetails;
}

@Component({
  imports: [],
  selector: 'app-featured-projects',
  styleUrl: './featured-projects.scss',
  templateUrl: './featured-projects.html',
  host: {
    '(document:keydown.escape)': 'closeProject()',
  },
})
export class FeaturedProjects {
  protected readonly t = inject(LanguageService).t;

  private readonly document = inject(DOCUMENT);
  private readonly injector = inject(Injector);
  private readonly closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');

  /* Zeile, die das Modal geöffnet hat - bekommt beim Schließen den Fokus zurück */
  private trigger: HTMLElement | null = null;

  protected readonly selectedProject = signal<Project | null>(null);

  /* Reihenfolge und Technologien wie im Figma-Asset "20.Portfolio menu" */
  protected readonly projects: Project[] = [
    {
      id: 'join',
      name: 'Join',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      image: 'assets/images/Frame 372.png',
      details: {
        number: '01',
        /* Reihenfolge wie im Figma-Modal */
        technologies: [
          { name: 'CSS', icon: 'assets/icons/Frame 100.png' },
          { name: 'HTML', icon: 'assets/icons/Frame 130.png' },
          { name: 'Firebase' },
          { name: 'Angular', icon: 'assets/icons/Frame 104.png' },
          { name: 'TypeScript', icon: 'assets/icons/Frame 103.png' },
        ],
        github: '#',
        liveTest: '#',
      },
    },
    {
      id: 'elPolloLoco',
      name: 'El Pollo Loco',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/images/Frame 373.png',
    },
    {
      id: 'daBubble',
      name: 'DA Bubble',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      image: 'assets/images/Frame 374.png',
    },
  ];

  protected openProject(project: Project, event: Event): void {
    if (!project.details) {
      return;
    }
    this.trigger = event.currentTarget as HTMLElement;
    this.selectedProject.set(project);
    /* Seite hinter dem Modal nicht mitscrollen */
    this.document.body.style.overflow = 'hidden';
    afterNextRender(() => this.closeButton()?.nativeElement.focus(), { injector: this.injector });
  }

  protected closeProject(): void {
    if (!this.selectedProject()) {
      return;
    }
    this.selectedProject.set(null);
    this.document.body.style.overflow = '';
    this.trigger?.focus();
    this.trigger = null;
  }

  /* Klick auf den dunklen Hintergrund schließt, Klicks im Modal nicht */
  protected closeOnBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeProject();
    }
  }
}
