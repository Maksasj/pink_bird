console.log("Poggers !\n");

var div = document.getElementById("tamagotchi_pet");
let offset_x, offset_y;

const move = (e) => {
    div.style.left = `${e.clientX - offset_x}px`;
    div.style.top = `${e.clientY - offset_y}px`;
}

div.addEventListener("mousedown", (e) => {
    offset_x = e.clientX - div.offsetLeft;
    offset_y = e.clientY - div.offsetTop;

    document.addEventListener("mousemove", move);
});

document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", move);
});
