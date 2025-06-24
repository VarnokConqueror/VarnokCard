// script.js
function flipCard(container) {
  const card = container.querySelector('.card');
  const isFlipped = card.classList.toggle('flipped');
  const audioFile = isFlipped ? 'assets/flip-forward.wav' : 'assets/flip-back.wav';
  new Audio(audioFile).play();
}

