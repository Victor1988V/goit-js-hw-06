const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  const formDate = {
    mail,
    password,
  };
  if (mail === "" || password === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    form.reset();
    console.log(formDate);
  }
}

// const formData = new FormData(event.currentTarget);
// formData.forEach((value, name) => {
//     console.log('name: ', name)
//     console.log('value: ', value)
// })
