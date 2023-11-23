const TODO = [
  "Buy Groceries",
  "Wash the Car",
  "Pay the Rent",
  "Wash the Dishes",
];

const generateList = () => {
  const listElement = document.createElement("ul");

  //   loop generates list items
  for (let i = 0; i < TODO.length; i++) {
    const todoItem = TODO[i];
    const listItem = document.createElement("li");
    // assigns text to the list item
    listItem.textContent = todoItem;
    //buttons
    const buttonElement = document.createElement("button");
    buttonElement.textContent = "X";

    // append elements
    listElement.append(listItem);
    listItem.append(buttonElement);
  }

  document.body.append(listElement);
};

const deleteToDo = (event) => {
  const parent = event.target.parentElement;
  parent.remove();
};

const addDeleteButtonListeners = () => {
  const deleteButtons = document.querySelectorAll("button");
  for (let i = 0; i < deleteButtons.length; i++) {
    let deleteButton = deleteButtons[i];
    deleteButton.addEventListener("click", deleteToDo);
  }
};

generateList();
addDeleteButtonListeners();
