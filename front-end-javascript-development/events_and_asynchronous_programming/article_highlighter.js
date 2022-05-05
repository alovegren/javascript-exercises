let navLinks = document.querySelectorAll('a[href^="#article"]');
let articles = document.querySelectorAll('article');

function clearHighlight() {
  let highlighted = document.querySelector('.highlight');
  console.log(highlighted);
  if (highlighted) highlighted.classList.remove('highlight');
}

Array.from(navLinks).forEach(navLink => {
  navLink.addEventListener('click', event => {
    event.stopPropagation();
    clearHighlight();
    let articleID = event.target.getAttribute('href');
    let article = document.querySelector(`article${articleID}`);
    article.classList.add('highlight');
  });
});

Array.from(articles).forEach(article => {
  article.addEventListener('click', event => {
    event.stopPropagation();
    clearHighlight();
    article.classList.add('highlight');
  });
});

document.addEventListener('click', event => {
  clearHighlight();
  document.querySelector('main').classList.add('highlight');
})