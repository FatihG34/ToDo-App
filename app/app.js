//* variables assigned  here
const todoText = document.querySelector(".todo_input");
const addBtn = document.querySelector(".add-btn");
const listField = document.querySelector(".list_filetodo");
const todoItems = document.querySelector(".todo_items");
//* in here focus on input area
window.onload = () => {
    todoText.focus();
};

addBtn.addEventListener(`click`, () => {
    if (!todoText.value) {
        alert(`Enter an Aim ToDo !!!`);
    } else {
        todoItems.style.backgroundColor = "white";
        todoItems.innerHTML += `
        <div class="listDiv">
        <input type="checkbox" name="checkbox" id="todocheck" class="todocheck">
        <li>${todoText.value}</li>
        <button class="delete">Delete</button>
        </div>`;
        todoText.value = ``;
    }
});

todoText.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        addBtn.click();
    }
});

todoItems.addEventListener(`click`, (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
    else if (e.target.classList.contains("todocheck")) {
        if (e.target.checked == true) {
            e.target.nextElementSibling.style.textDecoration = "line-through";
            e.target.nextElementSibling.style.opacity = "0.4";
            e.target.style.opacity = "0.4";
        } else {
            e.target.nextElementSibling.style.textDecoration = "none";
            e.target.nextElementSibling.style.opacity = "1";
            e.target.style.opacity = "1";
        }
    }
});

