const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
}
window.onresize = resize;
resize();

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  // игрок
  playerUnits.forEach((u, i) => {
    ctx.fillStyle = "green";
    ctx.fillRect(50, 50 + i*60, 100, 40);

    ctx.fillStyle = "white";
    ctx.fillText(u.hp, 60, 70 + i*60);
  });

  // враг
  enemyUnits.forEach((u, i) => {
    ctx.fillStyle = "red";
    ctx.fillRect(canvas.width-150, 50 + i*60, 100, 40);

    ctx.fillStyle = "white";
    ctx.fillText(u.hp, canvas.width-140, 70 + i*60);
  });

  document.getElementById("energy").innerText = "Энергия: " + energy.toFixed(1);
}
