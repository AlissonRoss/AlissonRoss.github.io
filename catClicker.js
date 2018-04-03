let main = document.getElementById("main");
let counter = document.getElementById("counter");
let cat = document.getElementById("mama");
let shop = document.getElementById("shop");

let kittenSpawnedCount = 0;
let kittenCount = 0;
let kittensPerSecond = 0;
let catUpgradeLevel = 0;

let lastUpdate = -1;

let catPool = [];

function catClick() {
    /*spawnCat();*/
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

//only enable the items the user can currently purchase
function updateShop() {
  let children = shop.childNodes;
  for (let i = 0; i < children.length; ++i) {
    if (children[i].tagName === "BUTTON") {
      let shopItem = children[i];
      
      //hard coded, don't allow the shop to buy items if you haven't purchased the first one
      if (catUpgradeLevel === 0 && shopItem.multiplier > 0) {
        children[i].disabled = true;
      } else {
        children[i].disabled = (kittenCount < children[i].cost);
      }
    }
  }
}

function attemptPurchase(event) {
    let button = event.currentTarget;
  
    let cost = button.cost;
    let multiplier = button.multiplier;

    //just in case someone modified the CSS to re-enable a button
    if (kittenCount < cost && (catUpgradeLevel > 0 || (catUpgradeLevel === 0 && multiplier === 0)))
      return;

    subKittens(cost);

    //first upgrade starts off the auto kittens
    if (multiplier === 0) {
      kittensPerSecond = Math.max(1, kittensPerSecond);
    } else {
      kittensPerSecond *= multiplier;
    }

    ++catUpgradeLevel;
    shop.removeChild(button);
    
    cat.style.backgroundImage = `url("cat${catUpgradeLevel}.gif")`;
}

function subKittens(count) {
  kittenCount -= count;
  kittenSpawnedCount -= count;
}

function addKittens(count) {
  kittenCount += count;
  counter.textContent = Math.floor(kittenCount);
}

//timestamp is the current time in milliseconds
function update(timestamp) {
  //time between last update and this one
  let delta = timestamp - lastUpdate;
  
  //ignore deltas larger than 1 second, it usually means an error happened or the user clicked away
  if (delta < 1000) {
      addKittens(kittensPerSecond * delta / 1000);
      
      //put any other update logic here that involves lapses in time between frames
  }
  counter.textContent = Math.floor(kittenCount);
  updateShop();
  
  lastUpdate = timestamp;

  while (kittenSpawnedCount < kittenCount - 1) {
    spawnCat();
    ++kittenSpawnedCount;
  }
  
  //request to be rendered again, yes it is an infinite loop, but with a delay!
  window.requestAnimationFrame(update);
}

//called only once during initialization
function populateShop() {
  let upgrades = [
    {name: "Auto Feeder", cost: 20, multiplier: 0},
    {name: "Wet food", cost: 40, multiplier: 2},
    {name: "Abstinence-only education", cost: 80, multiplier: 16}
    ];
  
  for (let i = 0; i < upgrades.length; ++i) {
    let upgrade = upgrades[i];
    let button = document.createElement("button");
    button.innerHTML = `${upgrade.name}<br>${upgrade.cost}`;
    
    button.name = upgrade.name;
    button.cost = upgrade.cost;
    button.multiplier = upgrade.multiplier = upgrade.multiplier;
    button.addEventListener('click', attemptPurchase, true);
    
    shop.appendChild(button);
    shop.appendChild(document.createElement("br"));
  }
}
populateShop();

//kick off the rendering loop
window.requestAnimationFrame(update);