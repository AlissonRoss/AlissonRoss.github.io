for (const button of document.querySelectorAll(".dropdown-button")) {
    button.ontouchstart = function(event) {
        this.focus();
        event.preventDefault();
        event.stopPropagation();
    }
}

document.body.ontouchstart = function(event) {
    document.activeElement.blur();
}