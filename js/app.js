function toggleInfo(event) {
  event.preventDefault();
  if (!event.target.classList.contains('toggle')) return;

  var infos = document.querySelectorAll('.info-open')
  if (infos) {
    for(var i=0; i<infos.length; i++) {
      infos[i].classList.remove('info-open')
    }
  }

  var pres = document.querySelectorAll('body > pre')
  if(pres) {
    for(var i=0; i<pres.length; i++) {
      pres[i].classList.remove('pre-open')
    }
  }

  var pre = event.target.parentNode;
  if (pre && pre.tagName === 'PRE') {
    pre.classList.add('pre-open')
  }

  var box = event.target.parentNode.nextElementSibling;
  if (box && box.classList.contains('info')) {
    box.classList.add('info-open')
  }

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
