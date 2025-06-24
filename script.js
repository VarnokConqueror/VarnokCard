function flipCard(container) {
  const card = container.querySelector('.card');
  card.classList.toggle('flipped');
  const audio = new Audio('assets/flip.mp3');
  audio.play();
}
