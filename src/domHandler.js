import {todoList} from "./todo.js";
import {projectFactory, addProject, getProjects, getProjectByName, projectExistence} from "./project.js"
import {format, isToday, isWithinInterval, subDays} from "date-fns";

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

function handleInput() {
  let titleData = document.querySelector("#title").value;
  let descriptionData = document.querySelector("#description").value;
  let dateData = document.querySelector("#date").value;
  let priorityData = document.querySelector("#priority").value;

  let newToDo = new ToDoList(titleData, descriptionData, dateData, priorityData);
};
//create

//read

//update
function createToDo() {
  const taskList = document.querySelector("#taskList");
  taskList.innerHTML = "";

  const toDoRow = document.createElement("tr");
  taskList.appendChild(toDoRow);

  const rowTitle = document.createAttribute("td");
  rowTitle.classList.add = ("px-5", "py-5", "border-b", "border-gray-200", "bg-white text-sm");
  rowTitle.textContent = newToDo.title;
  toDoRow.appendChild(rowTitle);

  const rowDescription = document.createAttribute("td");
  rowDescription.classList.add = ("px-5", "py-5", "border-b", "border-gray-200", "bg-white text-sm");
  rowDescription.textContent = newToDo.description;
  toDoRow.appendChild(rowDescription);

  const rowDate = document.createAttribute("td");
  rowDate.classList.add = ("px-5", "py-5", "border-b", "border-gray-200", "bg-white text-sm");
  rowDate.textContent = format(newToDo.dueDate, "MM-dd-yyyy"); 
  toDoRow.appendChild(rowDate);

  const rowPriority = document.createAttribute("td");
  rowPriority.classList.add = ("px-5", "py-5", "border-b", "border-gray-200", "bg-white text-sm");
  rowPriority.textContent = newToDo.priority;
  toDoRow.appendChild(rowPriority)

  const buttonDiv = document.createElement("div");
  toDoRow.appendChild(buttonDiv);

  const buttonDelete = document.createElement("button");
  buttonDelete.textContent = "Delete?"
  buttonDiv.appendChild(buttonDelete)

  const buttonEdit = document.createElement("button");
  buttonEdit.textContent = "Edit?"
  buttonDiv.appendChild(buttonEdit)
};

//delete

//eventlisteners
modalOpen.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);