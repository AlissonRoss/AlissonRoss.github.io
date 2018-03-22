let cat = document.getElementById("catGIF");
let counter = document.getElementById("counter");

let count = 0;

function catClick() {
    cat.style.animation = 'none';
    cat.offsetHeight; /* trigger reflow */
    cat.style.animation = null;
    
    ++count;
    counter.innerHTML = count;
}