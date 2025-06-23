function flipCard(card) {
  const isFlipped = card.classList.contains('flipped');
  if (isFlipped) {
    new Audio('assets/flip-back.wav').play();
  } else {
    new Audio('assets/flip-forward.wav').play();
  }
  card.classList.toggle('flipped');
}
