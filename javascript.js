
let box;

createPad("div", 16);

function createPad(type, number) {
    for (let i = 0; i < number; i++) {
        box = document.createElement(type);
        box.setAttribute("class", "blank");
        document.querySelector(".container").appendChild(box);
    }
}

//node is for boxes - type will be "div"