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

createPad("div", 16);