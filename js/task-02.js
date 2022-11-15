const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newArr = ingredients.forEach((elem) => {
  const addElemList = document.createElement("li");
  addElemList.textContent = elem;
  addElemList.classList.add("item");
  console.log(addElemList);
  const addIngridients = document.querySelector("#ingredients");
  addIngridients.appendChild(addElemList);
});
