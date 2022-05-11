const once = {
    once : true
};

function createPad(type, input) {
    let box = document.querySelector(".box");
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.style.backgroundColor = "#C9D7F8");
    for (let i = 0; i < (input ** 2); i++) {
        container = document.querySelector(".container");
        box = document.createElement(type);
        box.setAttribute("class", "box");
        container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
        container.appendChild(box);
        container.onmouseover = function(event) {
            let target = event.target;
            target.style.background = "#4C6663";
        };
    }
};

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
        reset.setAttribute("class", "button");
        reset.innerHTML = "New Canvas";
        footer = document.querySelector(".footer");
        body.insertBefore(reset, footer);
        reset.addEventListener("click", promptUser);
        createPad("div", 16);
    });
});

function promptUser() {
    let input = Number(window.prompt("How many squares across would you like your canvas?", "16"));
    if (input > 100) {
        input = Number(window.prompt("Please choose a number under 100.", "16"));
    }
    else if (isNaN(input)) {
        input = Number(window.prompt("Please enter a number.", "16"));
    }
    else {
        createPad("div", input);
    }
}