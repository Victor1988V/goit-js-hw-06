let counterValue = 0;
const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
let valueStatistic = document.querySelector("#value");

btnIncrement.addEventListener("click", addAmount);

function addAmount() {
  counterValue += 1;
  valueStatistic.textContent = counterValue;
}

btnDecrement.addEventListener("click", removeAmount);

function removeAmount() {
  counterValue -= 1;
  valueStatictic.textContent = counterValue;
}
