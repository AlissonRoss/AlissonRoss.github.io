"use strict";
const menu = document.getElementById("menu");

function dropdown(event) {
    event.stopPropagation();

    closeDropdownMenus(event);

    this.nextElementSibling.classList.toggle("visible");
}

for (const button of document.querySelectorAll(".dropdown-button")) {
    button.addEventListener("click", dropdown);
}

window.addEventListener("click", closeDropdownMenus);



function closeDropdownMenus(event) {
    for (const child of menu.childNodes) {
        if (child.nodeName === "DIV") {
            child.lastElementChild.classList.remove("visible");
        }
    }
}