const span = document.querySelector("#text");
const input = document.querySelector("#font-size-control");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  span.style.fontSize = event.target.value + "px";
}
