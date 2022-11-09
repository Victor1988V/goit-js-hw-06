// const refs = {
//   input: document.querySelector("#validation-input"),
// };
const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const { value, classList } = event.target;
  if (value.length === 6) {
    classList.add("valid");
    classList.remove("invalid");
  } else {
    classList.add("invalid");
  }
}
