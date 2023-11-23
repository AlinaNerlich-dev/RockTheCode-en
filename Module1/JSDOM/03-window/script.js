const squareEl = document.querySelector(".square");
const bodyEl = document.querySelector("body");

const message = () => {
  alert("hello");
};

const reportCoordinates = () => {
  console.log(`X: ${window.scrollX},
Y: ${window.scrollY}`);
};

const changeColor = () => {
  bodyEl.style.backgroundColor = "brown";
};

const closeWindow = () => {
  window.close();
};

const reportMouseCoords = (e) => {
  console.log(`X: ${e.screenX}, Y: ${e.screenY}`);
};

bodyEl.addEventListener("mousemove", reportMouseCoords);
window.addEventListener("scroll", changeColor);
window.addEventListener("click", closeWindow);
