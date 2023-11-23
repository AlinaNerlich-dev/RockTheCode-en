let somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("it worked!");
    reject("Something went wrong");
  }, 3000);
});

somePromise.then(
  (message) => {
    console.log("Success:", message);
  },
  (errorMessage) => {
    console.log("Error: ", errorMessage);
  }
);
