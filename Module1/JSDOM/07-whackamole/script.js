const gameButtons = document.querySelectorAll(".game-button");
const pointsTitle = document.getElementById("points");

let points = 0;
let previousButton;

const handleToggleButtons = () => {
  if (previousButton) {
    previousButton.classList.remove("show");
  }
  const randomNumber = Math.floor(Math.random() * gameButtons.length);

  const randomButton = gameButtons[randomNumber];
  randomButton.classList.add("show");
  randomButton.classList.remove("not-clickable");
  previousButton = randomButton;
};

const handleClickGameButton = (event) => {
  const isCorrect = event.target.className.includes("show");
  if (isCorrect) {
    points += 1;
    pointsTitle.textContent = points;
    event.target.classList.add("not-clickable");
  }
};

for (let i = 0; i < gameButtons.length; i++) {
  const gameButton = gameButtons[i];
  gameButton.addEventListener("click", handleClickGameButton);
}
setInterval(handleToggleButtons, 2000);
