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
        elPolloLoco:
          'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and ' +
          'tabasco salsa to fight against the crazy hen.',
        daBubble:
          'This App is a Slack Clone App. It revolutionizes team communication and collaboration with ' +
          'its intuitive interface, real-time messaging, and robust channel organization.',
      },
      liveTest: 'Live Test',
      nextProject: 'Next project',
      close: 'Close project',
    },
    references: {
      title: 'What my colleagues say about me',
      previous: 'Previous reference',
      next: 'Next reference',
      goTo: 'Show reference',
      items: {
        reference1: {
          text:
            'Lukas has proven to be a reliable group partner. His technical skills and proactive approach ' +
            'were crucial to the success of our project.',
          role: 'Team Partner',
        },
        reference2: {
          text:
            'I had the good fortune of working with Lukas in a group project at the Developer Akademie that ' +
            'involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was ' +
            "set up for success. He's super knowledgeable, easy to work with, and I'd happily work with him " +
            'again given the chance.',
          role: 'Team Partner',
        },
        reference3: {
          text: 'Our project benefited enormously from Simon efficient way of working.',
          role: 'Frontend Developer',
        },
      },
    },
    contact: {
      eyebrow: 'Contact me',
      title: "Let's work together",
      subtitle: 'Got a problem to solve?',
      text: "I'm looking for new challenges as a frontend developer – whether it's a permanent position, a project or a team that needs support. Tell me about your idea or your open position, and let's find out together how I can contribute with clean, user-friendly web applications.",
      ctaQuestion: 'Need a Frontend developer?',
      ctaLink: "Let's talk!",
      form: {
        nameLabel: "What's your name?",
        namePlaceholder: 'Your name goes here',
        emailLabel: "What's your email?",
        emailPlaceholder: 'youremail@email.com',
        messageLabel: 'How can I help you?',
        messagePlaceholder: 'Hello Sebastian, I am interested in...',
        privacyBefore: "I've read the",
        privacyLink: 'privacy policy',
        privacyAfter: 'and agree to the processing of my data as outlined.',
        submit: 'Say Hello ;)',
      },
      errors: {
        nameRequired: 'Oops! It seems your name is missing',
        emailRequired: 'Oops! Your email is required',
        emailInvalid: 'Please enter a valid email address',
        messageRequired: 'What do you need to develop?',
        privacyRequired: 'Please accept the privacy policy.',
      },
      feedback: {
        success: "Thank you! Your message has been sent. I'll get back to you as soon as possible.",
        error: 'Something went wrong. Please try again later or write me an email directly.',
      },
    },
    footer: {
      logoAlt: 'Sebastian Mucha',
      role: 'Web Developer',
      location: 'Munich Germany',
      email: 'Email',
      legalNotice: 'Legal Notice',
      privacyPolicy: 'Privacy Policy',
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
        elPolloLoco:
          'Jump-and-Run-Spiel mit Wurf-Mechanik, basierend auf objektorientierter Programmierung. Hilf Pepe, ' +
          'Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
        daBubble:
          'Diese App ist ein Slack-Klon. Sie revolutioniert die Kommunikation und Zusammenarbeit im Team ' +
          'mit einer intuitiven Oberfläche, Echtzeit-Nachrichten und einer übersichtlichen Kanalstruktur.',
      },
      liveTest: 'Live Test',
      nextProject: 'Nächstes Projekt',
      close: 'Projekt schließen',
    },
    references: {
      title: 'Was meine Kollegen über mich sagen',
      previous: 'Vorherige Referenz',
      next: 'Nächste Referenz',
      goTo: 'Referenz anzeigen',
      items: {
        reference1: {
          text:
            'Lukas hat sich als zuverlässiger Gruppenpartner erwiesen. Seine technischen Fähigkeiten und seine ' +
            'proaktive Herangehensweise waren entscheidend für den Erfolg unseres Projekts.',
          role: 'Teampartner',
        },
        reference2: {
          text:
            'Ich hatte das Glück, mit Lukas an einem aufwendigen Gruppenprojekt der Developer Akademie zu ' +
            'arbeiten. Er blieb immer ruhig, gelassen und konzentriert und hat dafür gesorgt, dass unser Team ' +
            'optimal aufgestellt war. Er hat enorm viel Wissen, die Zusammenarbeit ist unkompliziert, und ich ' +
            'würde jederzeit gern wieder mit ihm arbeiten.',
          role: 'Teampartner',
        },
        reference3: {
          text: 'Unser Projekt hat enorm von Simons effizienter Arbeitsweise profitiert.',
          role: 'Frontend-Entwickler',
        },
      },
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Lass uns zusammenarbeiten',
      subtitle: 'Du hast eine Aufgabe für mich?',
      text: 'Ich suche neue Herausforderungen als Frontend-Entwickler – ob in einer Festanstellung, bei einem Projekt oder in einem Team, das Unterstützung braucht. Erzähl mir von deiner Idee oder deiner offenen Stelle, und wir finden gemeinsam heraus, wie ich mit sauberen, benutzerfreundlichen Webanwendungen beitragen kann.',
      ctaQuestion: 'Du suchst einen Frontend-Entwickler?',
      ctaLink: 'Lass uns sprechen!',
      form: {
        nameLabel: 'Wie heißt du?',
        namePlaceholder: 'Dein Name',
        emailLabel: 'Wie lautet deine E-Mail-Adresse?',
        emailPlaceholder: 'deine@email.de',
        messageLabel: 'Wie kann ich dir helfen?',
        messagePlaceholder: 'Hallo Sebastian, ich interessiere mich für ...',
        privacyBefore: 'Ich habe die',
        privacyLink: 'Datenschutzerklärung',
        privacyAfter: 'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
        submit: 'Nachricht senden',
      },
      errors: {
        nameRequired: 'Hoppla! Dein Name fehlt noch',
        emailRequired: 'Hoppla! Deine E-Mail-Adresse fehlt noch',
        emailInvalid: 'Bitte gib eine gültige E-Mail-Adresse ein',
        messageRequired: 'Was soll ich für dich entwickeln?',
        privacyRequired: 'Bitte akzeptiere die Datenschutzerklärung.',
      },
      feedback: {
        success: 'Danke! Deine Nachricht wurde gesendet. Ich melde mich so schnell wie möglich bei dir.',
        error: 'Da ist etwas schiefgelaufen. Bitte versuche es später erneut oder schreib mir direkt eine E-Mail.',
      },
    },
    footer: {
      logoAlt: 'Sebastian Mucha',
      role: 'Web Developer',
      location: 'München Deutschland',
      email: 'E-Mail',
      legalNotice: 'Impressum',
      privacyPolicy: 'Datenschutz',
    },
  },
};
