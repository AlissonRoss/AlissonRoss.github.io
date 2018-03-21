function catClicker() {
    var cat = document.getElementById("container").style.display='none';
    do  {
        cat.style.display = "block";


    } while(cat.style.display === "none")

    else {
        cat.style.display = "none";
    }
}
