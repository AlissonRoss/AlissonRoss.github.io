let main = document.getElementById("main");
let counter = document.getElementById("counter");
let cat = document.getElementById("increment");
let shop = document.getElementById("shop");

let kittenSpawnedCount = 0;
let kittenCount = 0;
let kittensPerSecond = 1;

let catSize = 1;
let baseCatWidth = 149;//Number(cat.style.width);
let baseCatHeight = 153;//Number(cat.style.height);

let catPool = [];

function catClick() {
    spawnCat();
    addKittens(1);
}

function spawnCat() {
  let newCat;
  if (catPool.length !== 0) {
    newCat = catPool.pop();
  } else {
    newCat = document.createElement("img");
    newCat.src = "cat.gif";
    newCat.classList.add("catGIF");
  }

  newCat.style.left = (Math.random() * window.innerWidth) + "px";
  main.append(newCat);

  setTimeout(recycleCat, 1200, newCat);
}

function recycleCat(cat) {
  main.removeChild(cat);
  catPool.push(cat);
}

function updateCount() {
  counter.textContent = Math.floor(kittenCount);

  /*
  for (let i = 0; i < shop.childNodes.length; ++i) {
    let button = shop.childNodes[i];
    console.log(button);

    let cost = button.getAttribute("data-cost");

    console.log(button);

    if (kittenCount >= cost) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }

  */
}

function buyUpgrade(button) {
    let cost = button.getAttribute("data-cost");

    if (kittenCount < cost)
      return;

    subtractCats(cost);
    updateCount();

    catSize *= button.getAttribute("data-multiplier");
    cat.style.width = baseCatWidth * catSize + "px";
    cat.style.height = baseCatHeight * catSize + "px";

    kittensPerSecond++;

    button.style.display = "none";
}

function loadListener() {
  let buttonIds = ["big_cat", "huge_cat"];

  for (let i = 0; i < buttonIds.length; ++i) {
    let id = buttonIds[i];
    let button = document.getElementById(id);
    button.innerHTML += button.getAttribute("data-cost");
  }
}

function subtractCats(count) {
  kittenCount -= count;
  kittenSpawnedCount -= count;
}

function addKittens(count) {
  kittenCount += count;
  counter.textContent = Math.floor(kittenCount);
}

function update() {
  addKittens(kittensPerSecond * (30 / 1000));

  for (kittenSpawnedCount; kittenSpawnedCount < kittenCount - 1; ++kittenSpawnedCount) {
    spawnCat();
  }
}

setInterval(update, 30);
