import {todoList} from "./src/todo.js";

let modal = document.querySelector(".modal");
let modalOpen = document.querySelector("#modalOpen");
let modalClose = document.querySelector("#modalClose");
let addToDo = document.querySelector("#addToDo");

//create
//read
//update
//delete

//modals
function openModal () {
    modal.classList.delete("hidden");
}
function closeModal () {
    modal.classList.add("hidden");
}

function appendToDo () {
    addToDo.addEventListener("click", e => {
        //fuction to add todo
    });
}

modalOpen.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);