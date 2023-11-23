// entry point for the DOM is typically the document node

// getElementById - grabs an element by its ID attr.
// getElementsByClassName -  grabs an element by their class attr.
// getElementsByTagName - grabs by element type
// getElementsByName - by name
// querySelector - grabs the 1st item of a CSS selector
// querySelectorAll - but plural

const mainTitle = document.getElementById("mainTitle");
mainTitle.textContent = "Changed Using getElementById";
console.log(mainTitle);

const paragraphs = document.getElementsByClassName("para");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.backgroundColor = "green";
}

const paras = document.getElementsByTagName("p");
console.log(paras);

const listItem = document.querySelector("li");
listItem.className = "urgent";

const listItems = document.querySelectorAll("li");
for (let i = 0; i < listItems.length; i++) {
  if (listItems[i].className === "") {
    listItems[i].className = "relaxed";
  }
}
