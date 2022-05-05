function makeBold(element, functionality) {
  element.style.fontWeight = 'bold';
  setTimeout(functionality(element), 0);
}