"use strict";
function dropdown(event) {
    event.stopPropagation();

    for (const child of this.parentElement.childNodes) {
        if (child.nodeName === "DIV") {
            child.classList.remove("visible");
        }
    }

    this.previousElementSibling.classList.toggle("visible");
}

document.getElementById("finder").addEventListener("click", dropdown);
document.getElementById("file").addEventListener("click", dropdown);
document.getElementById("edit").addEventListener("click", dropdown);

const menu = document.getElementById("menu");
window.addEventListener("click", function(event) {
    for (const child of menu.childNodes) {
        if (child.nodeName === "DIV") {
            child.classList.remove("visible");
        }
    }
});

/* enable this code if you want to close the gaps between the menu items */
//remove blank nodes created from the whitespace in the HTML
// for (const child of menu.childNodes) {
//     if (child.nodeName === "#text") {
//         menu.removeChild(child);
//     }
// }