const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

// refs.input.addEventListener("focus", onInputFocus);
// refs.input.addEventListener("blur", onInputBlur);
// refs.input.addEventListener("change", onInputBlur);
refs.input.addEventListener("input", onInputChange);

function onInputFocus() {
  console.log("focus");
}

function onInputBlur() {
  console.log("blur");
}

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.span.textContent = event.currentTarget.value;
  if (refs.span.textContent === "") {
    refs.span.textContent = "Anonymous";
  }
}
