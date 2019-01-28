function toggleInfo(event) {
  event.preventDefault();
  if (!event.target.classList.contains('toggle')) return;

  var box = event.target.parentNode.nextElementSibling;
  if (!box || !box.classList.contains('info')) return;

  box.classList.toggle('info-open')
}

function satisfyNerds(event) {
  event.preventDefault();
  if (!event.target.classList.contains('nerds')) return;

  var aside = event.target.parentNode.parentNode;
  var scrambles = aside.querySelectorAll('.scramble');
  for(var i=0; i<scrambles.length; i++) {
    var title = scrambles[i].innerHTML
    scrambles[i].innerHTML = scrambles[i].getAttribute('title')
    scrambles[i].setAttribute('title', title)
  }

  Scrambler({
    target: '.scramble',
    random: [600, 1500],
    speed: 100
  });
}

document.addEventListener('click', toggleInfo);
document.addEventListener('click', satisfyNerds)
