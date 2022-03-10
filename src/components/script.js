for (const button of document.querySelectorAll(".dropdown-button")) {
    button.addEventListener("click", function (event) {
        closeMenu();
        this.nextElementSibling.classList.add("menu-open");
        //Only the button recieves the event, not the parents (divs),and TouchListeners. Stops Bubbling Phase
        event.stopPropagation();
    });
}

document.body.addEventListener("click", closeMenu);

function closeMenu() {
    for (const menu of document.getElementsByClassName("menu-open")) {
        menu.classList.remove("menu-open");
    }
}