// ***************
//
// ***************
export const getModalTemplate = () => /*html*/ `
<div id="thepower-modal" class="thepower-modal">
  <div class="modal-header">
    <h2 class="modal-title"></h2>
    <button id="modal-close">✖</button>
  </div>
  <div class="modal-body"></div>
</div>
`;
// ***************
//
// ***************
export const getContainerTemplate = () => /*html*/ `
  <div id="thepower-gallery" class="thepower-gallery">
    <h1>Loading... ⏱</h1>
  </div>
`;
// ***************
//
// ***************
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

// ***************
//
// ***************
export const getCardTemplate = (card) => /*html*/ `
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

// ***************
//
// ***************
export const getModalBodyTemplate = (cardData) => /*html*/ `
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
