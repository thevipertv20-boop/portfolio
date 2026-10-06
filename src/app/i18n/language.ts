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
      marquee: ['Available for remote work', 'Frontend Developer', 'Based in Gelsenkirchen', 'Open to work'],
    },
    aboutMe: {
      portraitAlt: 'Portrait of Sebastian Mucha',
      eyebrow: 'Who I Am',
      title: 'About me',
      text:
        "Hello, I'm Sebastian. I'm currently on my way to becoming an IT specialist for application " +
        "development. I'm especially interested in developing modern and user-friendly web applications.",
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
        'Want to know more about my skills? I build modern web interfaces with Angular, TypeScript, HTML ' +
        'and SCSS. I work with Reactive Forms, services, signals and translations, and expand my skills ' +
        'step by step through practical projects.',
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
        pokemonDex:
          'A Pokédex to browse the world of Pokémon. Search for a Pokémon, load more entries and open a ' +
          'detail view for each one.',
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
        messageMinLength: 'Please enter at least 3 characters',
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
      location: 'Gelsenkirchen Germany',
      email: 'Email',
      legalNotice: 'Legal Notice',
      privacyPolicy: 'Privacy Policy',
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      sections: [
        {
          title: '1. Controller',
          paragraphs: [
            [plain('The controller responsible for data processing on this website is:')],
            [plain('Sebastian Mucha, Horstmarer Weg 4, 45892 Gelsenkirchen, Germany')],
            [plain('Email: thevipertv20@gmail.com')],
          ],
        },
        {
          title: '2. General information on data processing',
          paragraphs: [
            [
              plain(
                'Personal data is only processed to the extent necessary to provide this website and its content ' +
                  'and to respond to enquiries. The legal bases are the General Data Protection Regulation (GDPR) ' +
                  'and the German Federal Data Protection Act (BDSG).',
              ),
            ],
          ],
        },
        {
          title: '3. Hosting',
          paragraphs: [
            [
              plain('This website is hosted by '),
              mark('[Hosting provider, address/country]'),
              plain(
                '. The provider processes data that arises when the website is accessed on behalf of the ' +
                  'controller. The legal basis is Art. 6(1)(f) GDPR (legitimate interest in providing the website ' +
                  'securely and efficiently). ',
              ),
              mark('[Check the data processing agreement with the provider]'),
            ],
          ],
        },
        {
          title: '4. Server log files',
          paragraphs: [
            [
              plain(
                'When the website is accessed, information transmitted by the browser is recorded automatically: ' +
                  'IP address, date and time of the request, page accessed, browser type and version, operating ' +
                  'system and referrer URL. This data serves the secure operation of the website and is not ' +
                  'combined with other data sources. The legal basis is Art. 6(1)(f) GDPR.',
              ),
            ],
            [plain('Storage period: '), mark('[Period according to the hosting provider]'), plain('.')],
          ],
        },
        {
          title: '5. Contact by email',
          paragraphs: [
            [
              plain(
                'If you get in touch by email, your details (email address, content of the message) are stored ' +
                  'in order to process the enquiry and for follow-up questions. The legal basis is Art. 6(1)(b) ' +
                  'GDPR (pre-contractual measures) or Art. 6(1)(f) GDPR (legitimate interest in responding). The ' +
                  'data is deleted as soon as it is no longer required for this purpose and no statutory ' +
                  'retention obligations prevent deletion.',
              ),
            ],
          ],
        },
        {
          title: '6. Contact form',
          paragraphs: [
            [
              plain(
                'Enquiries can be sent via the contact form on this website. The following details are ' +
                  'processed: name, email address and message. Before sending, agreement to this privacy policy ' +
                  'has to be confirmed with a checkbox.',
              ),
            ],
            [
              plain(
                'When the form is submitted, these details are transmitted to a server-side script ' +
                  '(sendMail.php) on the web space of this website. The script checks the details and forwards ' +
                  'them by email to the controller’s email address stated above. The details are not stored in a ' +
                  'database.',
              ),
            ],
            [
              plain(
                'The message is used solely to process the enquiry and for follow-up questions. The data is ' +
                  'deleted as soon as it is no longer required for this purpose and no statutory retention ' +
                  'obligations prevent deletion.',
              ),
            ],
            [plain('Legal basis: '), mark('[Legal basis for the contact form]'), plain('.')],
            [mark('[Details on the email provider of the recipient mailbox and any third-country transfer]')],
          ],
        },
        {
          title: '7. External services, cookies and tracking',
          paragraphs: [
            [plain('This website does not use cookies, analytics services or tracking services.')],
            [
              plain(
                'Fonts are loaded locally from the website’s own server. No connection to third-party servers ' +
                  'is established for this purpose.',
              ),
            ],
            [
              plain(
                'When the language is switched, the selected language (German or English) is saved in the ' +
                  'browser’s local storage (localStorage) under the entry “portfolio-language”, so that the ' +
                  'selection is kept for the next visit. This entry only contains the language code, is not ' +
                  'transmitted to the server and can be deleted in the browser settings.',
              ),
            ],
            [
              plain(
                'The website contains links to GitHub, LinkedIn and the projects presented. No content from ' +
                  'these providers is embedded. Data is only transmitted to the respective provider once a link ' +
                  'is clicked; the privacy policies of those providers apply there.',
              ),
            ],
          ],
        },
        {
          title: '8. Your rights',
          paragraphs: [
            [
              plain(
                'You have the following rights towards the controller with regard to your personal data: access ' +
                  '(Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. ' +
                  '18), data portability (Art. 20) and objection to processing (Art. 21). Consent that has been ' +
                  'given can be withdrawn at any time with effect for the future. To exercise your rights, an ' +
                  'informal message to the email address stated above is sufficient.',
              ),
            ],
          ],
        },
        {
          title: '9. Right to lodge a complaint with a supervisory authority',
          paragraphs: [
            [
              plain('You have the right to lodge a complaint with a data protection supervisory authority. ' +
                'The competent authority is: '),
              mark('[State data protection authority, name and address]'),
            ],
          ],
        },
        {
          title: '10. SSL/TLS encryption',
          paragraphs: [
            [
              plain(
                'For security reasons, this website uses SSL/TLS encryption. An encrypted connection can be ' +
                  'recognised by “https://” in the address bar of the browser.',
              ),
            ],
          ],
        },
        {
          title: '11. Currency and changes',
          paragraphs: [
            [
              plain(
                'Last updated: 6 October 2026. This policy will be adapted if the website or the legal ' +
                  'requirements change.',
              ),
            ],
          ],
        },
      ],
    },
    legalNotice: {
      title: 'Legal Notice',
      imprintTitle: 'Imprint',
      imprintItems: [
        'Sebastian Mucha',
        'Horstmarer Weg 4',
        '45892 Gelsenkirchen',
        'Germany',
      ],
      contactTitle: 'Contact',
      contactText: 'Email: thevipertv20@gmail.com',
      sections: [
        {
          title: 'Acceptance of terms',
          paragraphs: [
            [
              plain('By accessing and using '),
              mark('Portfolio'),
              plain(
                ' (Product), you acknowledge and agree to the following terms and conditions, and any policies, ' +
                  'guidelines, or amendments thereto that may be presented to you from time to time. I, Sebastian ' +
                  'Mucha, may update or change the terms and conditions from time to time without notice.',
              ),
            ],
          ],
        },
        {
          title: 'Scope and ownership of the product',
          paragraphs: [
            [
              mark('Portfolio'),
              plain(' has been developed as a student project in a web development bootcamp at the '),
              mark('Developer Akademie GmbH.'),
              plain(
                ' It has an educational purpose and is not intended for extensive personal & business usage. As ' +
                  'such, I cannot guarantee consistent availability, reliability, accuracy, or any other aspect of ' +
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
              plain(', I, Sebastian Mucha, retain all proprietary rights in '),
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
                  'non-infringement. In no event will I, Sebastian Mucha, or the ',
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
              plain('You agree to indemnify, defend and hold harmless me, Sebastian Mucha, the '),
              mark('Developer Akademie,'),
              plain(
                ' and our affiliates, partners, officers, directors, agents, and employees, from and against any ' +
                  'claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out ' +
                  'of or relating to your use of ',
              ),
              mark('Portfolio'),
              plain(' and/or your breach of this Legal Notice.'),
            ],
            [plain('For any questions or notices, please contact me at thevipertv20@gmail.com.')],
            [plain('Date: October 6, 2026')],
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
      marquee: ['Verfügbar für Remote-Arbeit', 'Frontend Developer', 'Wohnhaft in Gelsenkirchen', 'Offen für neue Jobs'],
    },
    aboutMe: {
      portraitAlt: 'Portrait von Sebastian Mucha',
      eyebrow: 'Wer ich bin',
      title: 'Über mich',
      text:
        'Hallo, ich bin Sebastian. Ich bin aktuell auf dem Weg zum Fachinformatiker für ' +
        'Anwendungsentwicklung. Besonders interessiert mich die Entwicklung moderner und ' +
        'benutzerfreundlicher Webanwendungen.',
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
        'Du möchtest mehr über meine Skills erfahren? Ich entwickle moderne Weboberflächen mit Angular, ' +
        'TypeScript, HTML und SCSS. Dabei arbeite ich mit Reactive Forms, Services, Signals und ' +
        'Übersetzungen und erweitere meine Kenntnisse Schritt für Schritt durch praktische Projekte.',
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
        pokemonDex:
          'Ein Pokédex zum Entdecken der Pokémon-Welt. Suche nach einem Pokémon, lade weitere Einträge nach ' +
          'und öffne zu jedem eine Detailansicht.',
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
        messageMinLength: 'Bitte gib mindestens 3 Zeichen ein',
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
      location: 'Gelsenkirchen Deutschland',
      email: 'E-Mail',
      legalNotice: 'Impressum',
      privacyPolicy: 'Datenschutz',
    },
    privacyPolicy: {
      title: 'Datenschutz',
      sections: [
        {
          title: '1. Verantwortlicher',
          paragraphs: [
            [plain('Verantwortlich für die Datenverarbeitung auf dieser Website ist:')],
            [plain('Sebastian Mucha, Horstmarer Weg 4, 45892 Gelsenkirchen, Deutschland')],
            [plain('E-Mail: thevipertv20@gmail.com')],
          ],
        },
        {
          title: '2. Allgemeines zur Datenverarbeitung',
          paragraphs: [
            [
              plain(
                'Personenbezogene Daten werden nur verarbeitet, soweit dies zur Bereitstellung dieser Website, ' +
                  'ihrer Inhalte und zur Beantwortung von Anfragen erforderlich ist. Rechtsgrundlagen sind die ' +
                  'Datenschutz-Grundverordnung (DSGVO) und das Bundesdatenschutzgesetz (BDSG).',
              ),
            ],
          ],
        },
        {
          title: '3. Hosting',
          paragraphs: [
            [
              plain('Diese Website wird bei '),
              mark('[Hosting-Anbieter, Anschrift/Land]'),
              plain(
                ' gehostet. Der Anbieter verarbeitet dabei Daten, die beim Aufruf der Website anfallen, im ' +
                  'Auftrag des Verantwortlichen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes ' +
                  'Interesse an einer sicheren und effizienten Bereitstellung der Website). ',
              ),
              mark('[Auftragsverarbeitungsvertrag mit dem Anbieter prüfen]'),
            ],
          ],
        },
        {
          title: '4. Server-Logfiles',
          paragraphs: [
            [
              plain(
                'Beim Aufruf der Website werden automatisch Informationen erfasst, die der Browser übermittelt: ' +
                  'IP-Adresse, Datum und Uhrzeit der Anfrage, aufgerufene Seite, Browsertyp und -version, ' +
                  'Betriebssystem und Referrer-URL. Diese Daten dienen dem sicheren Betrieb der Website und ' +
                  'werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f ' +
                  'DSGVO.',
              ),
            ],
            [plain('Speicherdauer: '), mark('[Dauer laut Hosting-Anbieter]'), plain('.')],
          ],
        },
        {
          title: '5. Kontaktaufnahme per E-Mail',
          paragraphs: [
            [
              plain(
                'Bei einer Kontaktaufnahme per E-Mail werden Ihre Angaben (E-Mail-Adresse, Inhalt der Nachricht) ' +
                  'zur Bearbeitung der Anfrage und für Anschlussfragen gespeichert. Rechtsgrundlage ist Art. 6 ' +
                  'Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes ' +
                  'Interesse an der Beantwortung). Die Daten werden gelöscht, sobald sie für den Zweck nicht mehr ' +
                  'erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
              ),
            ],
          ],
        },
        {
          title: '6. Kontaktformular',
          paragraphs: [
            [
              plain(
                'Über das Kontaktformular dieser Website können Anfragen gesendet werden. Dabei werden folgende ' +
                  'Angaben verarbeitet: Name, E-Mail-Adresse und Nachricht. Vor dem Absenden ist die Zustimmung ' +
                  'zu dieser Datenschutzerklärung per Checkbox zu bestätigen.',
              ),
            ],
            [
              plain(
                'Beim Absenden werden diese Angaben an ein serverseitiges Skript (sendMail.php) auf dem Webspace ' +
                  'dieser Website übertragen. Das Skript prüft die Angaben und leitet sie per E-Mail an die oben ' +
                  'genannte E-Mail-Adresse des Verantwortlichen weiter. Eine Speicherung in einer Datenbank ' +
                  'findet nicht statt.',
              ),
            ],
            [
              plain(
                'Die Nachricht wird ausschließlich zur Bearbeitung der Anfrage und für Anschlussfragen ' +
                  'verwendet. Die Daten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind ' +
                  'und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
              ),
            ],
            [plain('Rechtsgrundlage: '), mark('[Rechtsgrundlage für das Kontaktformular]'), plain('.')],
            [mark('[Angaben zum E-Mail-Anbieter des Empfängerpostfachs und ggf. zur Drittlandübermittlung]')],
          ],
        },
        {
          title: '7. Externe Dienste, Cookies und Tracking',
          paragraphs: [
            [plain('Diese Website verwendet keine Cookies, keine Analyse- und keine Tracking-Dienste.')],
            [
              plain(
                'Schriftarten werden lokal vom eigenen Server geladen. Dabei findet keine Verbindung zu Servern ' +
                  'Dritter statt.',
              ),
            ],
            [
              plain(
                'Bei einem Wechsel der Sprache wird die gewählte Sprache (Deutsch oder Englisch) im lokalen ' +
                  'Speicher des Browsers (localStorage) unter dem Eintrag „portfolio-language“ abgelegt, damit ' +
                  'die Auswahl beim nächsten Besuch erhalten bleibt. Dieser Eintrag enthält nur das ' +
                  'Sprachkürzel, wird nicht an den Server übertragen und kann über die Browsereinstellungen ' +
                  'gelöscht werden.',
              ),
            ],
            [
              plain(
                'Die Website enthält Links zu GitHub, LinkedIn und den vorgestellten Projekten. Inhalte dieser ' +
                  'Anbieter sind nicht eingebunden. Daten werden erst beim Anklicken eines Links an den ' +
                  'jeweiligen Anbieter übertragen; dort gelten dessen Datenschutzbestimmungen.',
              ),
            ],
          ],
        },
        {
          title: '8. Ihre Rechte',
          paragraphs: [
            [
              plain(
                'Sie haben gegenüber dem Verantwortlichen folgende Rechte hinsichtlich Ihrer personenbezogenen ' +
                  'Daten: Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der ' +
                  'Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen die Verarbeitung ' +
                  '(Art. 21). Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft ' +
                  'widerrufen. Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an die oben genannte ' +
                  'E-Mail-Adresse.',
              ),
            ],
          ],
        },
        {
          title: '9. Beschwerderecht bei einer Aufsichtsbehörde',
          paragraphs: [
            [
              plain('Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ' +
                'ist: '),
              mark('[Landesdatenschutzbehörde des eigenen Bundeslandes, Name und Anschrift]'),
            ],
          ],
        },
        {
          title: '10. SSL-/TLS-Verschlüsselung',
          paragraphs: [
            [
              plain(
                'Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine ' +
                  'verschlüsselte Verbindung ist an „https://“ in der Adresszeile des Browsers zu erkennen.',
              ),
            ],
          ],
        },
        {
          title: '11. Aktualität und Änderung',
          paragraphs: [
            [
              plain(
                'Stand: 6. Oktober 2026. Diese Erklärung wird angepasst, wenn sich die Website oder die ' +
                  'rechtlichen Anforderungen ändern.',
              ),
            ],
          ],
        },
      ],
    },
    legalNotice: {
      title: 'Rechtliche Hinweise',
      imprintTitle: 'Impressum',
      imprintItems: [
        'Sebastian Mucha',
        'Horstmarer Weg 4',
        '45892 Gelsenkirchen',
        'Deutschland',
      ],
      contactTitle: 'Kontakt',
      contactText: 'E-Mail: thevipertv20@gmail.com',
      sections: [
        {
          title: 'Annahme der Bedingungen',
          paragraphs: [
            [
              plain('Durch den Zugriff auf und die Nutzung von '),
              mark('Portfolio'),
              plain(
                ' (Produkt) erkennen Sie die folgenden Bedingungen sowie alle Richtlinien, Leitlinien oder ' +
                  'Änderungen daran an, die Ihnen von Zeit zu Zeit vorgelegt werden können, und stimmen ihnen zu. Ich, ' +
                  'Sebastian Mucha, kann die Bedingungen von Zeit zu Zeit ohne Ankündigung ' +
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
                ' wurde als studentisches Projekt in einem Webentwicklungs-Bootcamp an der ',
              ),
              mark('Developer Akademie GmbH'),
              plain(
                ' entwickelt. Es dient Bildungszwecken und ist nicht für eine umfangreiche private und ' +
                  'geschäftliche Nutzung vorgesehen. Daher kann ich keine durchgängige Verfügbarkeit, ' +
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
              plain(' gehört, behalte ich, Sebastian Mucha, alle Eigentumsrechte an '),
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
                  'oder einzuschüchtern, ist streng untersagt. Sie sind allein verantwortlich für Ihre ' +
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
                  'Nichtverletzung von Rechten. In keinem Fall hafte ich, Sebastian Mucha, oder die ',
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
                'Sie erklären sich bereit, mich, Sebastian Mucha, die ',
              ),
              mark('Developer Akademie'),
              plain(
                ' sowie unsere verbundenen Unternehmen, Partner, leitenden Angestellten, Direktoren, Vertreter ' +
                  'und Mitarbeiter von allen Ansprüchen, Forderungen, Verlusten, Schäden, Kosten oder ' +
                  'Verbindlichkeiten (einschließlich angemessener Anwaltskosten) freizustellen, zu verteidigen und ' +
                  'schadlos zu halten, die sich aus oder im Zusammenhang mit Ihrer Nutzung von ',
              ),
              mark('Portfolio'),
              plain(' und/oder Ihrem Verstoß gegen diese rechtlichen Hinweise ergeben.'),
            ],
            [plain('Bei Fragen oder Mitteilungen kontaktieren Sie mich bitte unter thevipertv20@gmail.com.')],
            [plain('Datum: 6. Oktober 2026')],
          ],
        },
      ],
    },
  },
};
