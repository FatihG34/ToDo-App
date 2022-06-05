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
        todoItems.innerHTML += `
        <div class="listDiv">
        <input type="checkbox" name="" id="todocheck">
        <li>${todoText.value}</li>
        <button class="delete">Delete</button>
        </div>`;
        todoItems.value = ``;
    }
})

//* burası çalışmadı
if (todoItems.childElementCount > 0) {
    const delet = document.lastElementChild;
    delet.addEventListener(`click`, () => {
        document.querySelector("body").style.backgroundColor = "black";
    });
};
