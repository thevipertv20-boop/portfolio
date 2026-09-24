import { Component, DOCUMENT, ElementRef, Injector, afterNextRender, inject, signal, viewChild } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

type ProjectId = 'join' | 'elPolloLoco' | 'daBubble';

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
export class FeaturedProjects {
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
      details: {
        number: '02',
        technologies: [
          { name: 'HTML', icon: 'assets/icons/Frame 130.png' },
          { name: 'CSS', icon: 'assets/icons/Frame 100.png' },
          { name: 'JavaScript', icon: 'assets/icons/Frame 101.png' },
        ],
      },
    },
    {
      id: 'daBubble',
      name: 'DA Bubble',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      image: 'assets/images/Frame 374.png',
      details: {
        number: '03',
        technologies: [
          { name: 'Angular', icon: 'assets/icons/Frame 104.png' },
          { name: 'Firebase' },
          { name: 'TypeScript', icon: 'assets/icons/Frame 103.png' },
        ],
      },
    },
  ];

  protected openProject(project: Project, event: Event): void {
    if (!project.details) {
      return;
    }
    this.trigger = event.currentTarget as HTMLElement;
    this.selectedProject.set(project);
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

  protected closeOnBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeProject();
    }
  }
}
