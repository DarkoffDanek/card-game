const CARDS = [
  { id: 1, name: "Воин", atk: 5, hp: 20, cost: 2, rarity: "common" },
  { id: 2, name: "Лучник", atk: 7, hp: 10, cost: 3, rarity: "common" },
  { id: 3, name: "Рыцарь", atk: 10, hp: 30, cost: 5, rarity: "rare" }
];

function getRandomCard(rarity) {
  let pool = CARDS.filter(c => c.rarity === rarity);
  return JSON.parse(JSON.stringify(pool[Math.floor(Math.random()*pool.length)]));
}
