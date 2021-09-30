let name = document.querySelector("input[name=name]");
let surname = document.querySelector("input[name=surname]");
let phone = document.querySelector("input[name=phone]");
let email = document.querySelector("input[name=email]");
let nameOut = document.querySelector(".name");
let surnameOut = document.querySelector(".surname");
let phoneOut = document.querySelector(".phone");
let emailOut = document.querySelector(".email");

surname.oninput = function () {
  surnameOut.textContent = surname.value;
}

name.oninput = function () {
  nameOut.textContent = name.value;
}

phone.oninput = function () {
  phoneOut.textContent = phone.value;
}

email.oninput = function () {
  emailOut.textContent = email.value;
}
