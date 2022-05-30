import { showAlert } from "./modules/alertBox/alert.js";

// declare a variables
const app = document.querySelector("[data-app]");
const input = document.querySelector("[data-input]");
const buttonAdd = document.querySelector("[data-button-add]");
const buttonDel = document.querySelector("[data-button-delete]");

// add onclick event to the button, which add an element to the list
buttonAdd.addEventListener("click", addListItem);

// add onkeydown event to the input field, which add an element to the list
input.onkeydown = function (ev) {
  if (ev.key === "Enter") addListItem();
};

// function declaration
function addListItem() {
  // if the input field has many spaces remove them
  input.value = input.value.trim();

  // exit the function if the input value is an empty string
  if (input.value === "") {
    showAlert();
    return;
  }

  const list = document.querySelector(".app__list");
  list === null ? createList() : appendItem(list);
}

// function declaration
function createList() {
  const list = document.createElement("ul");
  list.classList.add("app__list");

  app.appendChild(list);
  appendItem(list);
}

function appendItem(list) {
  // create and store the elements in the variables
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  const i = document.createElement("i");
  const inputValue = document.createTextNode(input.value);

  // add class lists to the elements
  li.classList.add("app__row");
  span.classList.add("app__text");
  button.classList.add("button", "button_red", "app__button");
  i.classList.add("button__icon", "fas", "fa-minus");

  button.setAttribute("data-button-delete", "");

  // append the elements
  list.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
  button.appendChild(i);

  // append a value of the input element inside span
  span.appendChild(inputValue);

  button.addEventListener("click", removeItem);

  /* clear an input value after added an element */
  input.value = "";
}

function removeItem() {
  const list = document.querySelector(".app__list");

  // if the list has more than one element remove only one el
  // else remove whole list
  list.childNodes.length === 1 ? list.remove() : this.parentNode.remove();
}
