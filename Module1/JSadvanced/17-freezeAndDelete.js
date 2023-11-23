const book = {
  title: "Front-end and Back-end Again",
  author: "Bilbo Baggins",
  editor: "Frodo Baggins",
};

// console.log(Object.values(book));
// book.editor = null;
// console.log(book);

// delete book.editor;
// console.log(book);

// FREEZE
const frozenBook = Object.freeze(book);

frozenBook.editor = "Gandalf";

// console.log(frozenBook);
book.editor = "Gandalf";
console.log(book);
