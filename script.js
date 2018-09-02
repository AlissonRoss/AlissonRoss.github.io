for (const button of document.querySelectorAll(".dropdown-button")) {
    button.ontouchstart = function(event) {
        //focuses an element (tab on page within browser to navigate webpage without mice) 
        //Needed only for Safari focus behavior
        this.focus();
        //default action should not be taken as it normally would be
        event.preventDefault();
        //Only the button recieves the event, not the parents (divs),and TouchListeners. Stops Bubbling Phase
        event.stopPropagation();
    }
}

document.body.ontouchstart = function(event) {
    //method that removes keyboard focus from the current element
    document.activeElement.blur();
}