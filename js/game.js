let gold = load("gold", 500);
let collection = load("collection", []);

function initGame() {
  updateUI();
}

function updateUI() {
  document.getElementById("gold").innerText = "Золото: " + gold;

  let div = document.getElementById("collection");
  div.innerHTML = "";

  collection.forEach(card => {
    let el = document.createElement("div");
    el.className = "card";
    el.innerText = `${card.name} (${card.atk}/${card.hp})`;

    el.onclick = () => summon(card);

    div.appendChild(el);
  });

  save("gold", gold);
  save("collection", collection);
}

function buyChest(type) {
  let price = type === "common" ? 100 : 300;
  let rarity = type === "common" ? "common" : "rare";

  if (gold < price) return;

  gold -= price;

  let card = getRandomCard(rarity);
  collection.push(card);

  updateUI();
}

function gameLoop() {
  updateBattle();
  draw();
  requestAnimationFrame(gameLoop);
}
