// Create handlebars partial for each quiz question
// Create handlebars template that iterates through each quiz question

// Quiz object
  /*
  Properties
    - Quiz questions
      - quiz question object
      - user answer
      - answered correctly

  Event Handlers
    - Submit
      - compare user answer against correct answer to get 'answered correctly' property
      - Retrieve DOM element pertaining to question
        - Add message underneath question based on 'answered correctly'
        - Wrong/unanswered questions should also have the correct answer displayed
      - Submit button disabled

    - Reset
      - Enable submit button if it's been disabled
  */
// Quiz question object
  /*
    Properties
      - question
      - options
      - correct answer
  */

function createTemplateWithId(id) {
  let templateSrc = document.querySelector(id);
  let templateMaker = Handlebars.compile(templateSrc.innerHTML);
  return templateMaker;
}

class Quiz {
  initializeTemplates() {
  const TEMPLATE_TYPES = [
    'quiz', 'quizQuestion', 'correctAnswer',
    'incorrectAnswer', 'unansweredAnswer'
  ];

    const templates = {};

    TEMPLATE_TYPES.forEach(id => {
      const template = createTemplateWithId(`#${id}`);
      templates[id] = template;
    });

    return templates;
  }

  renderQuizQuestions() {
    const questionTemplateSrc = document.querySelector('#quizQuestion');
    Handlebars.registerPartial('quizQuestion', questionTemplateSrc.innerHTML);

    const questionFieldset = document.querySelector('#questionContainer');
    const quizHTML = this.templates.quiz({ questions: this.quizData });
    questionFieldset.insertAdjacentHTML('afterbegin', quizHTML);
  }

  getUserAnswer(question) {
    const answer = [...question.querySelectorAll('input')].find(answer => {
      return answer.checked
    });

    if (answer) return answer.nextElementSibling.textContent;
  }

  isCorrect(questionId, answer) {
    return this.answerKey[questionId] === answer;
  }

  isIncorrect(questionId, answer) {
    return answer && !this.isCorrect(questionId, answer);
  }

  markCorrect(questionFieldset) {
    const correctTemplate = this.templates.correctAnswer;
    questionFieldset.insertAdjacentHTML('beforeend', correctTemplate());
  }

  markIncorrect(questionFieldset, id) {
    const answer = this.answerKey[id];
    const incorrectTemplate = this.templates.incorrectAnswer;
    questionFieldset.insertAdjacentHTML('beforeend', incorrectTemplate({answer}));
  }

  markUnanswered(questionFieldset) {
    const unansweredTemplate = this.templates.unansweredAnswer;
    questionFieldset.insertAdjacentHTML('beforeend', unansweredTemplate());
  }

  markAnswers() {
    const questions = document.querySelectorAll('.question');
    [...questions].forEach(question => {
      const questionId = question.id;
      const answer = this.getUserAnswer(question);
      
      if (this.isCorrect(questionId, answer)) {
        this.markCorrect(question);
      } else if (this.isIncorrect(questionId, answer)) {
        this.markIncorrect(question, questionId);
      } else {
        this.markUnanswered(question);
      }
    });
  }

  registerFormSubmission(event) {
    event.preventDefault();
    this.markAnswers();
    this.submitButton.disabled = true;
  }

  registerReset() {
    this.submitButton.disabled = false;
    this.clearMarks();
  }

  clearMarks() {
    const questions = document.querySelectorAll('.question');
    [...questions].forEach(question => {
      const mark = question.querySelector('.correct, .incorrect, .unanswered');
      mark.remove();
    });
  }

  bindEvents() {
    const form = document.querySelector('form');
    form.onsubmit = this.registerFormSubmission.bind(this);
    form.onreset  = this.registerReset.bind(this); 
  }

  constructor(quizData, answerKey) {
    this.quizData = quizData;
    this.answerKey = answerKey;
    this.questions = [];
    this.templates = this.initializeTemplates();
    this.submitButton = document.querySelector('[type="submit"]');

    this.renderQuizQuestions();
    this.bindEvents();
  }
}

const questions = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
    options: ['66', '13', '111', '42'],
  },
  {
    id: 3,
    description: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above'],
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
  },
];

const answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

new Quiz(questions, answerKey);