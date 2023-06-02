import {todoList} from "./todo.js";

const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay")
const modalOpen = document.querySelector("#modalOpen");
const modalClose = document.querySelector("#modalClose");
const addToDo = document.querySelector("#addToDo");

//functions
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

//create
//read
//update
//delete

//eventlisteners
modalOpen.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);