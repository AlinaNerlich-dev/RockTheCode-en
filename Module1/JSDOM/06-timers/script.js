// setTimeout == countdown
// setTimeout( function(){}   , 3000)
// setTimeout( ()=>{}   , 3000)

// const COUNTDOWN = setTimeout(() => {
//   console.log("Hello");
// }, 8000);

// const TIMER = setInterval(() => {
//   console.log("hello every 2 seconds");
// }, 2000);

// setTimeout(() => {
//   clearTimeout(COUNTDOWN);
//   clearInterval(TIMER);
// }, 5000);

const light = document.getElementById("light");
const button = document.getElementById("switch");

const flipSwitch = () => {
  if (light.classList.contains("off")) {
    light.classList.toggle("off");
    light.classList.add("on");
  } else {
    light.classList.toggle("on");
    light.classList.add("off");
  }
};

const handleLightToggle = () => {
  setTimeout(flipSwitch, 1500);
};

button.addEventListener("click", handleLightToggle);
