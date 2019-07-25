function populateStar() {
    let star = document.getElementsByClassName("star")[0];
    let desktop = document.getElementsByClassName("desktop")[0];

    //amount of random of stars
    let random = Math.floor(Math.random() * 100) + 10;

    for (let loop = 0; loop < random; loop++) {

        //populate within the background absolute of class desktop
        let newStar = star.cloneNode(false);

        newStar.style.left = (Math.random() * window.innerWidth) + "px";
        newStar.style.top = (Math.random() * window.innerHeight) + "px";
        desktop.append(newStar);

        setInterval(blinkStar, 1000, newStar);
    }
    setInterval(blinkStar, 1000, star);
}
//resize function here
//blink
function blinkStar(star) {
    star.style.opacity = Math.random();
}

populateStar();