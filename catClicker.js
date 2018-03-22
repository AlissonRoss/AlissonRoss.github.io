let main = document.getElementById("main");
let cat = document.getElementById("catGIF");
let counter = document.getElementById("counter");
let increment = document.getElementById("increment");

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
    counter.innerHTML = count;
}

function recycleCat(cat) {
  main.removeChild(cat);
  catPool.push(cat);
}

function buyUpgrade(button) {
  console.log("buyUpgrade called with " + button);
  
  switch(button.id) {
    case "big_cat":
        count -= 50;
        catSize *= 1.25;
        console.log(baseWidth + "x" + baseHeight);
        increment.style.width = baseWidth * catSize + "px";
        increment.style.height = baseHeight * catSize + "px";
        break;
  }
}