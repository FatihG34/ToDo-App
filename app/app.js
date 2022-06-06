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
        listField.style.backgroundColor = "white";
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

//* burası çalışmadı
// const delet = listField.querySelector(".listDiv").querySelector(".delete");
// delet.addEventListener(`click`, () => {
//     if (todoItems.childElementCount > 0) {
//         todoItems.removeChild(todoItems.firstElementChild)
//     };
//     console.log(delet);
// });

window.onload = () => {
    todoText.focus();
} 
