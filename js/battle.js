let playerUnits = [];
let enemyUnits = [];

let energy = 0;

function startBattle() {
  playerUnits = [];
  enemyUnits = generateEnemy();
  energy = 0;
}

function updateBattle() {
  energy += 0.02;
  if (energy > 10) energy = 10;

  // авто атака
  playerUnits.forEach(p => {
    if (enemyUnits[0]) {
      enemyUnits[0].hp -= p.atk * 0.05;
      if (enemyUnits[0].hp <= 0) enemyUnits.shift();
    }
  });

  enemyUnits.forEach(e => {
    if (playerUnits[0]) {
      playerUnits[0].hp -= e.atk * 0.05;
      if (playerUnits[0].hp <= 0) playerUnits.shift();
    }
  });
}

function summon(card) {
  if (energy >= card.cost && playerUnits.length < 6) {
    energy -= card.cost;
    playerUnits.push(JSON.parse(JSON.stringify(card)));
  }
}
