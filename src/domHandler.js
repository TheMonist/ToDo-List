import { ToDoFactory } from "./todo.js";
import {
  ProjectFactory,
  doesProjectNameExist,
  addProject,
  getProjects,
  getProjectByName,
} from "./project.js";
import { format, isToday, isWithinInterval, subDays } from "date-fns";

let todoList = [];
const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");
const modalOpen = document.querySelector("#modalOpen");
const modalClose = document.querySelector("#modalClose");
const addToDo = document.querySelector("#addToDo");
const taskList = document.querySelector("#taskList");

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
  let priorityData = document.querySelector(
    "input[name=priority]:checked"
  ).value;

  let newToDo = new ToDoFactory(
    titleData,
    descriptionData,
    dateData,
    priorityData
  );
  let project = "";
  if (!doesProjectNameExist(titleData.value)) {
    project = ProjectFactory(titleData.value);
    project.addTodo(newToDo);
    addProject(project);
  } else {
    project = getProjectByName(titleData.value);
    project.addToDo(newToDo);
  }
  renderProjects(getProjects());
  displayProjectTodos(project);
}

//read
function displayProjectTodos(project, checkToday, checkWeek) {
  todoList.forEach((todo) => {
    if (checkToday) {
      if (isToday(today.dueDate)) {
        displayTodo(todo, project);
      }
    } else if (checkWeek) {
      const startDate = subDays(new Date(), 8);
      if (isWithinInterval(todo.dueDate, { start: startDate, end: new Date() }))
        displayTodo(todo);
    }
  });
}

//function displayTodo(todo, project) {
//const todoContainer = createToDo();
//taskList.appendChild(todoContainer);
//}

//update
function createToDo() {
  todoList.forEach((newToDo) => {
    let toDoRow = document.createElement("tr");
    taskList.appendChild(toDoRow);

    let rowTitle = document.createAttribute("td");
    rowTitle.classList.add(
      "px-5",
      "py-5",
      "border-b",
      "border-gray-200",
      "bg-white text-sm"
    );
    rowTitle.textContent = newToDo.title;
    toDoRow.appendChild(rowTitle);

    let rowDescription = document.createAttribute("td");
    rowDescription.classList.add(
      "px-5",
      "py-5",
      "border-b",
      "border-gray-200",
      "bg-white text-sm"
    );
    rowDescription.textContent = newToDo.description;
    toDoRow.appendChild(rowDescription);

    let rowDate = document.createAttribute("td");
    rowDate.classList.add(
      "px-5",
      "py-5",
      "border-b",
      "border-gray-200",
      "bg-white text-sm"
    );
    rowDate.textContent = format(newToDo.dueDate, "MM-dd-yyyy");
    toDoRow.appendChild(rowDate);

    let rowPriority = document.createAttribute("td");
    rowPriority.classList.add(
      "px-5",
      "py-5",
      "border-b",
      "border-gray-200",
      "bg-white text-sm"
    );
    rowPriority.textContent = newToDo.priority;
    toDoRow.appendChild(rowPriority);

    let buttonDiv = document.createElement("div");
    toDoRow.appendChild(buttonDiv);

    let buttonDelete = document.createElement("button");
    buttonDelete.textContent = "Delete?";
    buttonDiv.appendChild(buttonDelete);

    let buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit?";
    buttonDiv.appendChild(buttonEdit);
  });
}

function renderProjects(projects) {
  projects.forEach((project) => {
    createToDo(project);
  });
}

//delete
function clearContent(container) {
  while (container.hasChildNodes()) {
    container.remove(container.firstChild);
  }
}
//eventlisteners
modalOpen.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
addToDo.addEventListener("click", (e) => {
  e.preventDefault();
  handleInput();
  console.log("This button works!");
});

export { renderProjects };
