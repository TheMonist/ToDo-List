const projects = [];
const projectNames = new Set();

function projectFactory(projectName) {
    let numTodos = 0;
    let todoList = [];

    function pushTodo(todo) {
        todoList.push(todo);
    };

    function deleteTodo(todoTitle) {
        todoList.forEach((todo) => {
            if (todo.title === todoTitle) {
                let idx = todoList.indexOf(todo);
                this.todoList.splice(idx, 1);
            }
        });
    }

    projectNames.add(projectName);

    return {
        projectName,
        numTodos,
        pushTodo,
        deleteTodo,
    }
};

function addProject(project) {
    projects.push(project);
}

function getProjects() {
    return projects;
}

function getProjectByName(name) {
    let projectReturn;
    projects.forEach((project) => {
        if (project.projectName === name) {
            projectReturn = project;
        }
    })
    return projectReturn
}

function projectExistence(projectName) {
    return projectNames.has(projectName);
}

export {projectFactory,
    addProject,
    getProjects,
    getProjectByName,
    projectExistence};