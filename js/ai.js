function generateEnemy() {
  let deck = [];
  for (let i = 0; i < 3; i++) {
    deck.push(getRandomCard("common"));
  }
  return deck;
}
