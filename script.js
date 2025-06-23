function flipCard(element) {
  element.querySelector('.card').classList.toggle('flipped');
  new Audio('assets/flip.mp3').play();
}
