function populateStar() {
    let star = document.getElementsByClassName("star")[0];
    star.style.opacity = 0;

    let desktop = document.getElementsByClassName("desktop")[0];

    //amount of random of stars
    let random = Math.floor(Math.random() * 100) + 10;

    for (let loop = 0; loop < random; loop++) {
        //populate within the background absolute of class desktop
        let newStar = star.cloneNode(false);

        newStar.style.left = (Math.random() * window.innerWidth) + "px";
        newStar.style.top = (Math.random() * window.innerHeight) + "px";
        newStar.style.opacity = 0;
        desktop.append(newStar);

        blinkStarOn(newStar);
    }

    blinkStarOn(star);
}
populateStar();

//choose a location, choose a duration, and queue evenets
function blinkStarOn(star) {
    star.style.left = (Math.random() * window.innerWidth) + "px";
    star.style.top = (Math.random() * window.innerHeight) + "px";
    star.style.opacity = 1;

    //choose a duration between 2 and 3 seconds for a star to twinkle
    const duration = Math.random() * 2000 + 1000;

    //1 second before the duration ends, start dimming
    setTimeout(blinkStarOff, duration - 1000, star);

    //after the full duraction, move the star's position and light it up
    setTimeout(blinkStarOn, duration, star);
}

//dim the star
function blinkStarOff(star) {
    star.style.opacity = 0;
}