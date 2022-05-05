/*
Create partial for each description
  Heading
  One paragraph
  Hide all but 120 characters
  'Show More' button
Create template for all descriptions

Query and cache all descriptions template
  Render data

Event Listeners
  Show More
    Show all characters of description
    Button should then say 'Show Less'
  Show Less
    Hide all but 120 chars
    Button should then say 'Show More'

Options for button functionality
  - Two buttons, one over top the other, alternate hide/show
  - One button whose text and class changes each time it is clicked
    - Conditional logic for determining button type
*/

document.addEventListener('DOMContentLoaded', () => {
  function registerPartialById(name, id) {
    let partialSrc = document.querySelector(`#${id}`).innerHTML;
    Handlebars.registerPartial(name, partialSrc);
  }
  
  function cacheTemplateById(id) {
    let templateSrc = document.querySelector(`#${id}`);
    let templateMaker = Handlebars.compile(templateSrc.innerHTML);
    templateSrc.remove();
    return templateMaker;
  }

  function kebabToSentenceCase(str) {
    return str.split('-').map(word => {
      return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
  }

  class App {
    getLanguageDataById(id) {
      return this.languages.find(language => language.id === id);
    }

    initializeTemplates() {
      this.descTemplate = cacheTemplateById('description');
      this.pageTemplate = cacheTemplateById('descriptions');
    }

    renderContent() {
      registerPartialById('shortDesc', 'description');
      this.initializeTemplates();

      let content = this.pageTemplate({ languages });
      let main = document.querySelector('main');

      main.insertAdjacentHTML('afterbegin', content);
    }

    renderDescriptionOfType(articleId, type) {
      let oldType = 'short';
      let descriptionKey = 'description';
      
      if (type === 'short') {
        oldType = 'full';
        descriptionKey = 'shortDescription';
      }
      
      const description = this.getLanguageDataById(articleId)[descriptionKey];
      const paragraph = document.querySelector(`#${articleId} .${oldType}-desc`);

      paragraph.textContent = description;
      paragraph.classList = type + '-desc';
    }

    enableShowOfType(articleId, type) {
      const button = document.querySelector(`#${articleId} button`);
      button.className = type;
      button.textContent = kebabToSentenceCase(type);
    }

    registerButtonPress(event) {
      let clicked = event.target;
      if (clicked.tagName !== "BUTTON") return;
      const articleId = clicked.parentElement.id;

      if (clicked.className === 'show-more') {
        this.renderDescriptionOfType(articleId, 'full');
        this.enableShowOfType(articleId, 'show-less');
      } else {
        this.renderDescriptionOfType(articleId, 'short');
        this.enableShowOfType(articleId, 'show-more');
      }
    }

    bindEvents() {
      const main = document.querySelector('main');
      main.addEventListener('click', this.registerButtonPress.bind(this));
    }

    constructor(languages) {
      const SHORT_DESC_LENGTH = 120;

      this.languages = languages;
      this.languages.forEach((language, idx) => {
        language.id = `lang-${String(idx + 1)}`;

        const shortened = language.description.slice(0, SHORT_DESC_LENGTH) + '...';
        language.shortDescription = shortened;
      });

      this.descTemplate = null;
      this.pageTemplate = null;
      this.renderContent();

      this.bindEvents();
    }
  }

  const languages = [
    {
      name: 'Ruby',
      description: 'Ruby is a dynamic, reflective, object-oriented, ' +
      'general-purpose programming language. It was designed and developed in the mid-1990s ' +
      'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
      'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
      'including functional, object-oriented, and imperative. It also has a dynamic type ' +
      'system and automatic memory management.'
    },
  
    {
      name: 'JavaScript',
      description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
      'programming language. It has been standardized in the ECMAScript language ' +
      'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
      'technologies of World Wide Web content production; the majority of websites employ ' +
      'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
      'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
      'supporting object-oriented, imperative, and functional programming styles.'
    },
  
    {
      name: 'Lisp',
      description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
      'with a long history and a distinctive, fully parenthesized prefix notation. ' +
      'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
      'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
      'since its early days, and many dialects have existed over its history. Today, the best '+
      'known general-purpose Lisp dialects are Common Lisp and Scheme.'
    }
  ];

  new App(languages);
});