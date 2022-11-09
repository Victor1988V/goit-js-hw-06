function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeBg = document.querySelector(".change-color");
const colorBg = document.querySelector(".color");
const bodyBg = document.querySelector("body");

buttonChangeBg.addEventListener("click", () => {
  bodyBg.style.backgroundColor = getRandomHexColor();
  colorBg.textContent = getRandomHexColor();
});

// buttonChangeBg.addEventListener("click", onButtonChange);
// function onButtonChange() {
//   bodyBg.style.backgroundColor = getRandomHexColor();
//   colorBg.textContent = getRandomHexColor();
// }
