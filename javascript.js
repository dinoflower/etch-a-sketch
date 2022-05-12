const once = {
    once : true
};

// create sketchpad

function createPad(type, input) {
    container = document.querySelector(".container");
    container.replaceChildren();
    for (let i = 0; i < (input ** 2); i++) {
        box = document.createElement(type);
        box.style.background = "#C9D7F8";
        container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
        container.appendChild(box);
        container.onmouseover = function(event) {
            let target = event.target;
            target.style.background = "#4C6663";
        };
    }
};

// transition from opening text to sketchpad screen

window.addEventListener("load", () => {
    greeting = document.querySelector(".greeting");
    body = document.querySelector("body");
    body.addEventListener("mousemove", () => { greeting.classList.add("fadeout"); }, once);
    greeting.addEventListener("transitionend", () => {
        padding = document.createElement("div");
        padding.setAttribute("class", "padding");
        greeting.replaceWith(padding);
        container = document.createElement("div");
        container.setAttribute("class", "container");
        padding.appendChild(container);
        reset = document.createElement("button");
        reset.textContent = "New Canvas";
        footer = document.querySelector(".footer");
        body.insertBefore(reset, footer);
        reset.addEventListener("click", promptUser);
        createPad("div", 16);
    });
});

// prompt user to create new sketchpad

function promptUser() {
    let input = Number(window.prompt("How many squares across would you like your canvas?", "16"));
    if (input > 100) {
        if (window.confirm("Please enter a number under 100.")) {
            promptUser();
        }          
    }
    else if (isNaN(input)) {
        if (window.confirm("Please enter a number.")) {
            promptUser();
        }
    }
    else {
        createPad("div", input);
    }
};