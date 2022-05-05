document.querySelector('main').addEventListener('contextmenu', (event) => {
  event.preventDefault(); // prevents default context menu from popping up
  alert('main context menu');
})

document.querySelector('section').addEventListener('contextmenu', (event) => {
  event.preventDefault(); // prevents default context menu from popping up
  event.stopPropagation();
  alert('sub context menu');
});