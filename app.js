const todoInput = document.querySelector(".textbox");
const todoButton = document.querySelector(".button");
const todoList = document.querySelector(".todolist");
const btn = document.querySelector(".button");
const chooseOption = document.querySelector('.choose-todo');

btn.addEventListener('mousedown', () => {
    btn.style.backgroundColor = '#123466';
});
btn.addEventListener('mouseup', () => {
    btn.style.backgroundColor = '#ffffff';
});

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deletetodo);
chooseOption.addEventListener('click', choose);

function addTodo(event) {
    event.preventDefault();

    let blank = todoInput.value.trim();
    if (blank !== '') {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        const completeButton = document.createElement('button');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.classList.add('complete-btn');
        todoDiv.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
        deleteButton.classList.add('delete-btn');
        todoDiv.appendChild(deleteButton);

        todoList.appendChild(todoDiv);

        todoInput.value = '';
    }
}

function deletetodo(e) {
    const item = e.target;

    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.classList.add('shrink');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })

    }
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');

    }

}

anime({
    targets: '#heading path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 150 },
    direction: 'alternate',
    loop: false,
});

function choose(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
            case "left":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
        }
    });
}