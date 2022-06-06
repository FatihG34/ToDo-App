//* variables assigned  here
const todoText = document.querySelector(".todo_input");
const addBtn = document.querySelector(".add-btn");
console.log(todoText);
console.log(addBtn);

const listField = document.querySelector(".list_filetodo");
const todoItems = document.querySelector(".todo_items");
console.log(listField);
console.log(todoItems);

addBtn.addEventListener(`click`, () => {
    if (!todoText.value) {
        alert(`Enter an Aim ToDo !!!`);
    } else {
        todoItems.style.backgroundColor = "white";
        todoItems.innerHTML += `
        <div class="listDiv">
        <input type="checkbox" name="checkbox" id="todocheck">
        <li>${todoText.value}</li>
        <button class="delete">Delete</button>
        </div>`;
        todoText.value = ``;
    }
})

todoText.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        addBtn.click();
    }
});


todoItems.addEventListener(`click`, (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
    console.log("oldu mu");
});


window.onload = () => {
    todoText.focus();
} 
