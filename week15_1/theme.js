let body = document.querySelector("body");
function changeMe () {
    const option = document.querySelector("option:checked");
    const color = option.value;
    body.style.backgroundColor = color;
}