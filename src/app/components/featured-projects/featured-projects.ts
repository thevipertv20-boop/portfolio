import { Component, DOCUMENT, ElementRef, Injector, OnDestroy, afterNextRender, inject, signal, viewChild } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

type ProjectId = 'join' | 'elPolloLoco' | 'pokemonDex';

interface Technology {
  name: string;
  icon?: string;
}

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
  image?: string;
  details?: ProjectDetails;
}

@Component({
  selector: 'app-featured-projects',
  styleUrl: './featured-projects.scss',
  templateUrl: './featured-projects.html',
  host: {
    '(document:keydown.escape)': 'closeProject()',
  },
})
export class FeaturedProjects implements OnDestroy {
  protected readonly t = inject(LanguageService).t;

  private readonly document = inject(DOCUMENT);
  private readonly injector = inject(Injector);
  private readonly closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');

  private trigger: HTMLElement | null = null;

  protected readonly selectedProject = signal<Project | null>(null);

  protected readonly projects: Project[] = [
    {
      id: 'join',
      name: 'Join',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      image: 'assets/images/Frame 372.png',
      details: {
        number: '01',
        technologies: [
          { name: 'CSS', icon: 'assets/icons/21. Icons - Overlay1.png' },
          { name: 'HTML', icon: 'assets/icons/24. Icons - Overlay (3).png' },
          { name: 'Firebase', icon: 'assets/icons/21. Icons - Overlay.png' },
          { name: 'Angular', icon: 'assets/icons/23. Icons - Overlay (2).png' },
          { name: 'TypeScript', icon: 'assets/icons/22. Icons - Overlay (1).png' },
        ],
      },
    },
    {
      id: 'elPolloLoco',
      name: 'El Pollo Loco',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/images/Frame 373.png',
      details: {
        number: '02',
        technologies: [
          { name: 'HTML', icon: 'assets/icons/24. Icons - Overlay (3).png' },
          { name: 'CSS', icon: 'assets/icons/21. Icons - Overlay1.png' },
          { name: 'JavaScript', icon: 'assets/icons/Property 11=Javascript.png' },
        ],
        github: 'https://github.com/thevipertv20-boop/EL_POLLO_LOCO',
        liveTest: 'https://sebastianmucha.developerakademie.net/EL_Pollo_Loco/',
      },
    },
    {
      id: 'pokemonDex',
      name: 'Pokémon DEX',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/images/Pokémon-Dex im sonnigen Abenteuerland.webp',
      details: {
        number: '03',
        technologies: [
          { name: 'HTML', icon: 'assets/icons/24. Icons - Overlay (3).png' },
          { name: 'CSS', icon: 'assets/icons/21. Icons - Overlay1.png' },
          { name: 'JavaScript', icon: 'assets/icons/Property 11=Javascript.png' },
        ],
        github: 'https://github.com/thevipertv20-boop/PokemondeX',
        liveTest: 'https://sebastianmucha.developerakademie.net/PokemondeX/',
      },
    },
  ];

  protected openProject(project: Project, event: Event): void {
    if (!project.details) {
      return;
    }
    this.trigger = event.currentTarget as HTMLElement;
    this.selectedProject.set(project);
    this.lockPageScroll();
    afterNextRender(() => this.closeButton()?.nativeElement.focus(), { injector: this.injector });
  }

  protected closeProject(): void {
    if (!this.selectedProject()) {
      return;
    }
    this.selectedProject.set(null);
    this.unlockPageScroll();
    this.trigger?.focus();
    this.trigger = null;
  }

  ngOnDestroy(): void {
    this.unlockPageScroll();
  }

  // The page scrolls on <html> (styles.scss), so the lock has to be set there, not on <body>.
  private lockPageScroll(): void {
    const html = this.document.documentElement;
    const scrollbarWidth = window.innerWidth - html.clientWidth;
    html.style.overflow = 'hidden';
    // Keeps the page from jumping sideways while the scrollbar is gone.
    this.document.body.style.paddingRight = scrollbarWidth + 'px';
  }

  private unlockPageScroll(): void {
    this.document.documentElement.style.overflow = '';
    this.document.body.style.paddingRight = '';
  }

  protected showNextProject(): void {
    const currentIndex = this.projects.findIndex((project) => project.id === this.selectedProject()?.id);
    const nextIndex = (currentIndex + 1) % this.projects.length;
    this.selectedProject.set(this.projects[nextIndex]);
  }

  protected closeOnBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeProject();
    }
  }
}
