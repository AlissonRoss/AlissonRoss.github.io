//import './index.css';
export default function populateStars(){
    populateStar();
    function populateStar(){
    
        var star:HTMLElement = document.getElementsByClassName("App-logo")[0] as HTMLElement;
        //star.setAttribute("style", "opacity = 0");
        star.style.cssText= "opacity = 0";
    
        var desktop = document.getElementsByClassName("App-header")[0];
    
        //amount of random of stars
        var random = Math.floor(Math.random() * 100) + 10;
    
        for (var loop = 0; loop < random; loop++) {
            //populate within the background absolute of class desktop
            var newStar:HTMLElement = star.cloneNode(false) as HTMLElement;
    
            newStar.style.left = Math.random() * window.innerWidth + "px";
            newStar.style.top = Math.random() * window.innerHeight + "px";
            newStar.style.cssText= "opacity = 0";
            desktop.append(newStar);
    
            blinkStarOn(newStar);
        }
    
        blinkStarOn(star);
    }
    
    //choose a location, choose a duration, and queue evenets
    function blinkStarOn(star: HTMLElement) {
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.cssText= "opacity = 1";
    
        //choose a duration between 2 and 3 seconds for a star to twinkle
        var duration = Math.random() * 1000 + 1000;
    
        //1 second before the duration ends, start dimming
        setTimeout(blinkStarOff, duration, star);
    }
    
    //dim the star
    function blinkStarOff(star: HTMLElement) {
        star.style.cssText= "opacity = 0";
    
        //after the full duraction, move the star's position and light it up
        setTimeout(blinkStarOn, 1000, star);
    }
};
