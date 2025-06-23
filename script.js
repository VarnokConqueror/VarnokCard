function flipCard(container) {
  const card = container.querySelector('.card');
  const isFlipped = card.classList.contains('flipped');

  if (isFlipped) {
    const audioBack = new Audio('assets/flip-back.wav');
    audioBack.play();
  } else {
    const audioForward = new Audio('assets/flip-forward.wav');
    audioForward.play();
  }

  card.classList.toggle('flipped');
}

// Prevent QR area from triggering flip
document.addEventListener('DOMContentLoaded', () => {
  const qr = document.querySelector('.qr-area');
  qr.addEventListener('click', e => {
    e.stopPropagation();
    window.open('https://callup.luffa.im/p/9tx4rMVUJKb', '_blank');
  });
});
