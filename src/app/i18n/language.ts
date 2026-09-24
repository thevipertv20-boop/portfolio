export type Language = 'EN' | 'DE';

export const languages: Language[] = ['EN', 'DE'];

export const translations = {
  EN: {
    header: {
      aboutMe: 'About me',
      skills: 'Skills',
      projects: 'Projects',
    },
    hero: {
      checkMyWork: 'Check my work',
      contactMe: 'Contact me',
      scrollDown: 'Scroll down',
      marquee: ['Available for remote work', 'Frontend Developer', 'Based in Munich', 'Open to work'],
    },
    aboutMe: {
      portraitAlt: 'Portrait of Sebastian Mucha',
      eyebrow: 'Who I Am',
      title: 'About me',
      text:
        "Hey there, I'm Lukas! Write some information about yourself that is IT related. " +
        'Why are you passionate about coding? What is your source of inspiration for ' +
        'improving your programming skills?',
      highlights: [
        'Where are you based? Would you be open to working remotely or potentially relocating?',
        'Show that you are open-minded. Are you enthusiastic about learning new technologies ' +
          'and continually improving your skills?',
        'A brief description of your problem-solving approach. Do you learn from each challenge ' +
          'as you search for the most efficient or elegant solution? You can include some keywords ' +
          'like: analytical thinking, creativity, persistence and collaboration.',
      ],
    },
    skills: {
      eyebrow: 'Technologies',
      title: 'Skill Set',
      text:
        'A short introduction of your skills. Highlight your experience of using different front-end ' +
        'technologies and emphasise your openness to learning and adapting to new technologies. Show how ' +
        'important it is for you to keep up with the rapid changes in web development.',
      subtitleStart: 'You need',
      subtitleHighlight: 'another skill?',
      note: 'Feel free to contact me. I look forward to expanding on my previous knowledge.',
      letsTalk: "Let's Talk",
      growthPopupAlt: 'I have a special interest in learning: React, Vue.js',
    },
    featuredProjects: {
      title: 'Featured Projects',
      text: 'Explore a selection of my work here - Interact with projects to see my skills in action.',
      aboutQuestion: 'What is this project about?',
      descriptions: {
        join:
          'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop ' +
          'functions, assign users and categories.',
        elPolloLoco: '',
        daBubble: '',
      },
      liveTest: 'Live Test',
      nextProject: 'Next project',
      close: 'Close project',
    },
  },
  DE: {
    header: {
      aboutMe: 'Über mich',
      skills: 'Skills',
      projects: 'Projekte',
    },
    hero: {
      checkMyWork: 'Meine Arbeiten',
      contactMe: 'Kontakt',
      scrollDown: 'Nach unten scrollen',
      marquee: ['Verfügbar für Remote-Arbeit', 'Frontend Developer', 'Wohnhaft in München', 'Offen für neue Jobs'],
    },
    aboutMe: {
      portraitAlt: 'Portrait von Sebastian Mucha',
      eyebrow: 'Wer ich bin',
      title: 'Über mich',
      text:
        'Hallo, ich bin Lukas! Schreibe hier etwas IT-Bezogenes über dich. ' +
        'Warum programmierst du mit Leidenschaft? Was inspiriert dich, ' +
        'deine Programmierkenntnisse zu verbessern?',
      highlights: [
        'Wo wohnst du? Wärst du offen für Remote-Arbeit oder einen möglichen Umzug?',
        'Zeige, dass du aufgeschlossen bist. Lernst du gerne neue Technologien ' +
          'und verbesserst kontinuierlich deine Fähigkeiten?',
        'Eine kurze Beschreibung deiner Herangehensweise an Probleme. Lernst du aus jeder ' +
          'Herausforderung, während du nach der effizientesten oder elegantesten Lösung suchst? ' +
          'Du kannst Stichworte nennen wie: analytisches Denken, Kreativität, Ausdauer und Teamarbeit.',
      ],
    },
    skills: {
      eyebrow: 'Technologien',
      title: 'Skill Set',
      text:
        'Eine kurze Einführung in deine Skills. Hebe deine Erfahrung mit verschiedenen ' +
        'Frontend-Technologien hervor und betone deine Offenheit, Neues zu lernen und dich an neue ' +
        'Technologien anzupassen. Zeige, wie wichtig es dir ist, mit den schnellen Veränderungen in der ' +
        'Webentwicklung Schritt zu halten.',
      subtitleStart: 'Fehlt dir',
      subtitleHighlight: 'ein Skill?',
      note: 'Kontaktiere mich gerne. Ich freue mich darauf, mein bisheriges Wissen zu erweitern.',
      letsTalk: 'Schreib mir',
      growthPopupAlt: 'Ich habe ein besonderes Interesse am Lernen: React, Vue.js',
    },
    featuredProjects: {
      title: 'Featured Projects',
      text: 'Entdecke hier eine Auswahl meiner Arbeiten - Interagiere mit den Projekten, um meine Skills in Aktion zu sehen.',
      aboutQuestion: 'Worum geht es in diesem Projekt?',
      descriptions: {
        join:
          'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstelle und organisiere Aufgaben per ' +
          'Drag and Drop, weise Benutzer und Kategorien zu.',
        elPolloLoco: '',
        daBubble: '',
      },
      liveTest: 'Live Test',
      nextProject: 'Nächstes Projekt',
      close: 'Projekt schließen',
    },
  },
};
