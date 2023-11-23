import { TECHNOLOGIES_URL } from "./constants";
import "./style.css";

const appElement = document.getElementById("app");

const getModalTemplate = () => /*html*/ `

<div id="thepower-modal" class="thepower-modal">
  <div class="modal-header">
    <h2 class="modal-title"></h2>
    <button id="modal-close">✖</button>
  </div>
  <div class="modal-body"></div>
</div>
`;

const getContainerTemplate = () => /*html*/ `
  <div id="thepower-gallery" class="thepower-gallery">
    <h1>Loading... ⏱</h1>
  </div>
`;

appElement.innerHTML += getContainerTemplate();
appElement.innerHTML += getModalTemplate();
const modalTitle = document.querySelector(".modal-title");
const modalBody = document.querySelector(".modal-body");
const modalElement = document.getElementById("thepower-modal");
const galleryElement = document.getElementById("thepower-gallery");
const loadingElement = document.querySelector(".thepower-gallery > h1");
let cards;
let currentCard;
let isFetching = false;

const setupStars = (score) => {
  if (!score) {
    return `<span class="no-rating">No Rating</span>`;
  }
  let starContainer = [];

  for (let i = 0; i < score; i++) {
    starContainer.push(`<span class="star">🌟</span>`);
  }

  return starContainer.join(" ");
};

const getCardTemplate = (card) => /*html*/ `
  <div class="card" role="button" id="${card._id}">
    <h3>${card.name}</h3>
    <div class="image-container">
      <svg class="svg">
        <image href="${card.logo}" alt="${card.name}"/>
      </svg>
  </div>
  <div class="star-container">${setupStars(
    card.score
  )}<span class="score">(${card.score.toFixed(2)})</span></div>
</div>
`;

const setupCards = () => {
  loadingElement.remove();
  galleryElement.innerHTML = "";

  cards.forEach((card) => {
    const template = getCardTemplate(card);
    galleryElement.innerHTML += template;
  });
};

const getModalBodyTemplate = (cardData) => /*html*/ `
<svg class="svg">
  <image href="${cardData.logo}" alt="${cardData.name}"/>
</svg>
<h3>Rating of ${cardData.score.toFixed(2)} with ${cardData.reviews} reviews</h3>
<div class="review-container">
  <button data-score="1">⭐</button>
  <button data-score="2">⭐</button>
  <button data-score="3">⭐</button>
  <button data-score="4">⭐</button>
  <button data-score="5">⭐</button>
</div>
<p>Click on a star to vote</p>
`;

const postReview = async (currentCard, vote) => {
  if (isFetching) {
    return;
  }

  isFetching = true;
  const updatedData = { ...currentCard };
  updatedData.reviews++;
  updatedData.score =
    (currentCard.score * currentCard.reviews + vote) / updatedData.reviews;
  // console.log(currentCard);
  // console.log(updatedData);
  try {
    const res = await fetch(`${TECHNOLOGIES_URL}/${currentCard._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...updatedData }),
    });
    const updatedCard = await res.json();
    cards = cards.map((card) =>
      card._id === updatedCard._id ? updatedCard : card
    );
    setupCards();
    addCardsListeners();
    setupModalData(updatedCard);
    closeModal();
    isFetching = false;
  } catch (err) {
    isFetching = false;
    // error handling
    console.log(`Error: ${err}`);
  }
};

const handleReview = (event) => {
  const vote = Number(event.target.getAttribute("data-score"));
  // console.log(vote);
  postReview(currentCard, vote);
};

const addScoreButtonListeners = () => {
  const scoreButtons = document.querySelectorAll(".review-container > button");
  scoreButtons.forEach((button) => {
    button.addEventListener("click", handleReview);
  });
};

const setupModalData = (cardData) => {
  currentCard = cardData;
  modalTitle.textContent = cardData.name;
  modalBody.innerHTML = getModalBodyTemplate(cardData);
  addScoreButtonListeners();
};

const handleOpenModal = (event) => {
  const cardId = event.target.id;
  // console.log(cardId);
  // console.log(cards);
  const cardData = cards.find((card) => card._id == cardId);
  setupModalData(cardData);
  // console.log(cardData);
  modalElement.style.display = "block";
};

const addCardsListeners = () => {
  const cards = document.querySelectorAll(".thepower-gallery .card");
  cards.forEach((card) => card.addEventListener("click", handleOpenModal));
};

const closeModal = () => {
  modalElement.style.display = "none";
};
const addModalListeners = () => {
  const closeButton = document.getElementById("modal-close");
  closeButton.addEventListener("click", closeModal);
};
// const apiRequest = fetch(TECHNOLOGIES_URL)
//   .then((res) => res.json())
//   .then((cardsData) => {
//     cards = cardsData;
//     setupCards();
//   });

const getTechnologies = async () => {
  try {
    // throw new Error("Could not grab data");
    const res = await fetch(TECHNOLOGIES_URL);
    const cardsData = await res.json();
    cards = cardsData;
    setupCards();
    addCardsListeners();
  } catch (err) {
    loadingElement.textContent = `Error: ${err}`;
  }
};

getTechnologies();
addModalListeners();
