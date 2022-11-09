const categoriesEl = document.querySelector("#categories");
const allCategories = categoriesEl.children;
console.log("Number of categories: ", allCategories.length);

Array.from(allCategories).forEach((elem) => {
  console.log("Category: ", elem.firstElementChild.textContent);
  console.log("Elements: ", elem.lastElementChild.children.length);
});

const animalsTitle = document.querySelector;
