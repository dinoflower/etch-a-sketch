const once = {
    once : true
};

function createPad(type, input) {
    for (let i = 0; i < (input ** 2); i++) {
        container = document.querySelector(".container");
        box = document.createElement(type);
        box.setAttribute("class", "blank");
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
        let div = document.createElement("div");
        div.setAttribute("class", "padding");
        greeting.replaceWith(div);
        let container = document.createElement("div");
        container.setAttribute("class", "container");
        div.appendChild(container);
        createPad("div", 16);
    });
});