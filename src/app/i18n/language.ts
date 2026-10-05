export type Language = 'EN' | 'DE';

export const languages: Language[] = ['EN', 'DE'];

// One piece of a legal notice paragraph. Highlighted pieces are shown in white.
type LegalPart = {
  text: string;
  highlight: boolean;
};

function plain(text: string): LegalPart {
  return { text: text, highlight: false };
}

function mark(text: string): LegalPart {
  return { text: text, highlight: true };
}

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
        "Hello, I'm Sebastian and I'm currently on my way to becoming an IT specialist for application " +
        'development. I am especially passionate about developing modern and user-friendly web applications. ' +
        'I enjoy working with TypeScript, Angular, HTML and SCSS, and I want to continuously improve my ' +
        'skills every day.',
      highlights: [
        'I enjoy learning new technologies and trying them out directly in my own projects. It is important ' +
          'to me not only to use existing code, but to understand how it works.',
        'When I face new challenges, I work through a problem step by step. I test different approaches, ' +
          'learn from mistakes and look for a clean and understandable solution.',
        'Good teamwork is just as important to me as good code. I enjoy exchanging ideas with others, ' +
          'accepting feedback and supporting my team in achieving a good result together.',
      ],
    },
    skills: {
      eyebrow: 'Technologies',
      title: 'Skill Set',
      text:
        'I build modern web interfaces with Angular, TypeScript, HTML and SCSS. I work with Reactive Forms, ' +
        'services, signals and translations, and continuously expand my skills through practical projects.',
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
            'Sebastian has proven to be a reliable group partner. His technical skills and proactive approach ' +
            'were crucial to the success of our project.',
          role: 'Team Partner',
        },
        reference2: {
          text:
            'I had the good fortune of working with Sebastian in a group project at the Developer Akademie that ' +
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
      text: "I'm looking for new challenges as a frontend developer whether it's a permanent position, a project or a team that needs support. Tell me about your idea or your open position, and let's find out together how I can contribute with clean, user-friendly web applications.",
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
    legalNotice: {
      title: 'Legal Notice',
      imprintTitle: 'Imprint',
      imprintItems: [
        '[Student Names List]',
        '[Address of the JOIN operator - e.g. one of the students]',
        '[Postcode and city]',
      ],
      contactTitle: 'Exploring the Board',
      contactText: 'Email: [Email]',
      sections: [
        {
          title: 'Acceptance of terms',
          paragraphs: [
            [
              plain('By accessing and using '),
              mark('Portfolio'),
              plain(
                ' (Product), you acknowledge and agree to the following terms and conditions, and any policies, ' +
                  'guidelines, or amendments thereto that may be presented to you from time to time. We, the listed ' +
                  'students, may update or change the terms and conditions from time to time without notice.',
              ),
            ],
          ],
        },
        {
          title: 'Scope and ownership of the product',
          paragraphs: [
            [
              mark('Portfolio'),
              plain(' has been developed as part of a student group project in a web development bootcamp at the '),
              mark('Developer Akademie GmbH.'),
              plain(
                ' It has an educational purpose and is not intended for extensive personal & business usage. As ' +
                  'such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of ' +
                  'quality regarding this Product.',
              ),
            ],
            [
              plain('The design of '),
              mark('Portfolio'),
              plain(' is owned by the '),
              mark('Developer Akademie GmbH.'),
              plain(
                ' Unauthorized use, reproduction, modification, distribution, or replication of the design is ' +
                  'strictly prohibited.',
              ),
            ],
          ],
        },
        {
          title: 'Proprietary rights',
          paragraphs: [
            [
              plain('Aside from the design owned by '),
              mark('Developer Akademie GmbH'),
              plain(', we, the listed students, retain all proprietary rights in '),
              mark('Portfolio,'),
              plain(
                ' including any associated copyrighted material, trademarks, and other proprietary information.',
              ),
            ],
          ],
        },
        {
          title: 'Use of the product',
          paragraphs: [
            [
              mark('Portfolio'),
              plain(
                ' is intended to be used for lawful purposes only, in accordance with all applicable laws and ' +
                  'regulations. Any use of ',
              ),
              mark('Portfolio'),
              plain(
                ' for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly ' +
                  'prohibited. You are solely responsible for your interactions with other users of ',
              ),
              mark('Portfolio.'),
            ],
          ],
        },
        {
          title: 'Disclaimer of warranties and limitation of liability',
          paragraphs: [
            [
              mark('Portfolio'),
              plain(
                ' is provided "as is" without warranty of any kind, whether express or implied, including but not ' +
                  'limited to the implied warranties of merchantability, fitness for a particular purpose, and ' +
                  'non-infringement. In no event will we, the listed students, or the ',
              ),
              mark('Developer Akademie,'),
              plain(
                ' be liable for any direct, indirect, incidental, special, consequential or exemplary damages, ' +
                  'including but not limited to, damages for loss of profits, goodwill, use, data, or other ' +
                  'intangible losses, even if we have been advised of the possibility of such damages, arising out ' +
                  'of or in connection with the use or performance of ',
              ),
              mark('Portfolio.'),
            ],
          ],
        },
        {
          title: 'Indemnity',
          paragraphs: [
            [
              plain('You agree to indemnify, defend and hold harmless us, the listed students, the '),
              mark('Developer Akademie,'),
              plain(
                ' and our affiliates, partners, officers, directors, agents, and employees, from and against any ' +
                  'claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out ' +
                  'of or relating to your use of ',
              ),
              mark('Portfolio'),
              plain(' and/or your breach of this Legal Notice.'),
            ],
            [plain('For any questions or notices, please contact us at [Contact Email].')],
            [plain('Date: July 26, 2025')],
          ],
        },
      ],
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
        'Hallo, ich bin Sebastian und aktuell auf dem Weg zum Fachinformatiker für Anwendungsentwicklung. ' +
        'Besonders begeistert mich die Entwicklung moderner und benutzerfreundlicher Webanwendungen. Ich ' +
        'arbeite gerne mit TypeScript, Angular, HTML und SCSS und möchte meine Kenntnisse jeden Tag weiter ' +
        'ausbauen.',
      highlights: [
        'Ich lerne gerne neue Technologien und probiere sie direkt in eigenen Projekten aus. Dabei ist mir ' +
          'wichtig, nicht nur fertigen Code zu verwenden, sondern zu verstehen, wie er funktioniert.',
        'Bei neuen Herausforderungen arbeite ich mich Schritt für Schritt in ein Problem ein. Ich teste ' +
          'verschiedene Lösungswege, lerne aus Fehlern und suche nach einer sauberen und verständlichen Lösung.',
        'Gute Zusammenarbeit ist für mich genauso wichtig wie guter Code. Ich tausche mich gerne mit anderen ' +
          'aus, nehme Feedback an und unterstütze mein Team dabei, gemeinsam ein gutes Ergebnis zu erreichen.',
      ],
    },
    skills: {
      eyebrow: 'Technologien',
      title: 'Skill Set',
      text:
        'Ich entwickle moderne Weboberflächen mit Angular, TypeScript, HTML und SCSS. Dabei arbeite ich mit ' +
        'Reactive Forms, Services, Signals und Übersetzungen und erweitere meine Kenntnisse Schritt für ' +
        'Schritt durch eigene Projekte.',
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
            'Sebastian hat sich als zuverlässiger Gruppenpartner erwiesen. Seine technischen Fähigkeiten und seine ' +
            'proaktive Herangehensweise waren entscheidend für den Erfolg unseres Projekts.',
          role: 'Teampartner',
        },
        reference2: {
          text:
            'Ich hatte das Glück, mit Sebastian an einem aufwendigen Gruppenprojekt der Developer Akademie zu ' +
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
      text: 'Ich suche neue Herausforderungen als Frontend-Entwickler ob in einer Festanstellung, bei einem Projekt oder in einem Team, das Unterstützung braucht. Erzähl mir von deiner Idee oder deiner offenen Stelle, und wir finden gemeinsam heraus, wie ich mit sauberen, benutzerfreundlichen Webanwendungen beitragen kann.',
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
    legalNotice: {
      title: 'Rechtliche Hinweise',
      imprintTitle: 'Impressum',
      imprintItems: [
        '[Student Names List]',
        '[Address of the JOIN operator - e.g. one of the students]',
        '[Postcode and city]',
      ],
      contactTitle: 'Das Board erkunden',
      contactText: 'E-Mail: [Email]',
      sections: [
        {
          title: 'Annahme der Bedingungen',
          paragraphs: [
            [
              plain('Durch den Zugriff auf und die Nutzung von '),
              mark('Portfolio'),
              plain(
                ' (Produkt) erkennst du die folgenden Bedingungen sowie alle Richtlinien, Leitlinien oder ' +
                  'Änderungen daran an, die dir von Zeit zu Zeit vorgelegt werden können, und stimmst ihnen zu. Wir, ' +
                  'die aufgeführten Studierenden, können die Bedingungen von Zeit zu Zeit ohne Ankündigung ' +
                  'aktualisieren oder ändern.',
              ),
            ],
          ],
        },
        {
          title: 'Umfang und Eigentum des Produkts',
          paragraphs: [
            [
              mark('Portfolio'),
              plain(
                ' wurde im Rahmen eines studentischen Gruppenprojekts in einem Webentwicklungs-Bootcamp an der ',
              ),
              mark('Developer Akademie GmbH'),
              plain(
                ' entwickelt. Es dient Bildungszwecken und ist nicht für eine umfangreiche private und ' +
                  'geschäftliche Nutzung vorgesehen. Daher können wir keine durchgängige Verfügbarkeit, ' +
                  'Zuverlässigkeit, Genauigkeit oder andere Qualitätsmerkmale dieses Produkts garantieren.',
              ),
            ],
            [
              plain('Das Design von '),
              mark('Portfolio'),
              plain(' ist Eigentum der '),
              mark('Developer Akademie GmbH.'),
              plain(
                ' Unbefugte Nutzung, Vervielfältigung, Veränderung, Verbreitung oder Nachbildung des Designs ist ' +
                  'streng untersagt.',
              ),
            ],
          ],
        },
        {
          title: 'Eigentumsrechte',
          paragraphs: [
            [
              plain('Abgesehen von dem Design, das der '),
              mark('Developer Akademie GmbH'),
              plain(' gehört, behalten wir, die aufgeführten Studierenden, alle Eigentumsrechte an '),
              mark('Portfolio,'),
              plain(
                ' einschließlich aller zugehörigen urheberrechtlich geschützten Materialien, Marken und sonstigen ' +
                  'geschützten Informationen.',
              ),
            ],
          ],
        },
        {
          title: 'Nutzung des Produkts',
          paragraphs: [
            [
              mark('Portfolio'),
              plain(
                ' ist ausschließlich für rechtmäßige Zwecke im Einklang mit allen geltenden Gesetzen und ' +
                  'Vorschriften bestimmt. Jede Nutzung von ',
              ),
              mark('Portfolio'),
              plain(
                ' für illegale Aktivitäten oder um eine andere Person zu belästigen, zu schädigen, zu bedrohen ' +
                  'oder einzuschüchtern, ist streng untersagt. Du bist allein verantwortlich für deine ' +
                  'Interaktionen mit anderen Nutzern von ',
              ),
              mark('Portfolio.'),
            ],
          ],
        },
        {
          title: 'Gewährleistungsausschluss und Haftungsbeschränkung',
          paragraphs: [
            [
              mark('Portfolio'),
              plain(
                ' wird „wie besehen“ ohne jegliche ausdrückliche oder stillschweigende Gewährleistung ' +
                  'bereitgestellt, einschließlich, aber nicht beschränkt auf die stillschweigenden ' +
                  'Gewährleistungen der Marktgängigkeit, der Eignung für einen bestimmten Zweck und der ' +
                  'Nichtverletzung von Rechten. In keinem Fall haften wir, die aufgeführten Studierenden, oder die ',
              ),
              mark('Developer Akademie'),
              plain(
                ' für direkte, indirekte, zufällige, besondere, Folge- oder exemplarische Schäden, ' +
                  'einschließlich, aber nicht beschränkt auf Schäden durch entgangenen Gewinn, Verlust von ' +
                  'Firmenwert, Nutzung, Daten oder andere immaterielle Verluste, selbst wenn wir auf die ' +
                  'Möglichkeit solcher Schäden hingewiesen wurden, die sich aus oder im Zusammenhang mit der ' +
                  'Nutzung oder Leistung von ',
              ),
              mark('Portfolio'),
              plain(' ergeben.'),
            ],
          ],
        },
        {
          title: 'Freistellung',
          paragraphs: [
            [
              plain(
                'Du erklärst dich bereit, uns, die aufgeführten Studierenden, die ',
              ),
              mark('Developer Akademie'),
              plain(
                ' sowie unsere verbundenen Unternehmen, Partner, leitenden Angestellten, Direktoren, Vertreter ' +
                  'und Mitarbeiter von allen Ansprüchen, Forderungen, Verlusten, Schäden, Kosten oder ' +
                  'Verbindlichkeiten (einschließlich angemessener Anwaltskosten) freizustellen, zu verteidigen und ' +
                  'schadlos zu halten, die sich aus oder im Zusammenhang mit deiner Nutzung von ',
              ),
              mark('Portfolio'),
              plain(' und/oder deinem Verstoß gegen diese rechtlichen Hinweise ergeben.'),
            ],
            [plain('Bei Fragen oder Mitteilungen kontaktiere uns bitte unter [Contact Email].')],
            [plain('Datum: 26. Juli 2025')],
          ],
        },
      ],
    },
  },
};
