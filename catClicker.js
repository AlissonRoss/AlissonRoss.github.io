let main = document.getElementById("main");
let cat = document.getElementById("catGIF");
let counter = document.getElementById("counter");
let increment = document.getElementById("increment");
let shop = document.getElementById("shop");

let count = 0;
let catSize = 1;
let baseWidth = 149;//Number(increment.style.width);
let baseHeight = 153;//Number(increment.style.height);

let catPool = [];

function catClick() {
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
    
    ++count;
    updateCount();
}

function recycleCat(cat) {
  main.removeChild(cat);
  catPool.push(cat);
}

function updateCount() {
  counter.textContent = count;
  
  /*
  for (let i = 0; i < shop.childNodes.length; ++i) {
    let button = shop.childNodes[i];
    console.log(button);
    
    let cost = button.getAttribute("data-cost");
    
    console.log(button);
    
    if (count >= cost) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }
  
  */
}

function buyUpgrade(button) {
    let cost = button.getAttribute("data-cost");
    if (count < cost)
      return;
    
    count -= cost;
    updateCount();
    
    catSize *= button.getAttribute("data-multiplier");
    increment.style.width = baseWidth * catSize + "px";
    increment.style.height = baseHeight * catSize + "px";
    
    button.style.display = "none";
}

updateCount();