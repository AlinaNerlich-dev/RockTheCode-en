const chgColorBtn = document.getElementById("chgColor");
const bodyEl = document.querySelector("body");
const inputEl = document.getElementById("inputField");
const userText = document.getElementById("userText");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

const changeColors = () => {
  const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  bodyEl.style.backgroundColor = randomColor;
};

const onInputChanged = (event) => {
  userText.textContent = event.target.value;
};

const onScroll = () => {
  if (window.scrollY > 50) {
    changeColors();
  }
};

chgColorBtn.addEventListener("click", changeColors);
inputEl.addEventListener("input", onInputChanged);
window.addEventListener("scroll", onScroll);
