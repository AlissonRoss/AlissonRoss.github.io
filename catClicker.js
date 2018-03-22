let main = document.getElementById("main");
let cat = document.getElementById("catGIF");
let counter = document.getElementById("counter");

let count = 0;

let catPool = [];

function catClick() {
    /*
    cat.style.animation = 'none';
    cat.offsetHeight;
    cat.style.animation = null;
    */
    
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