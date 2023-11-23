import { TECHNOLOGIES_URL } from "../constants";

// const apiRequest = fetch(TECHNOLOGIES_URL)
//   .then((res) => res.json())
//   .then((cardsData) => {
//     cards = cardsData;
//     setupCards();
//   });

export const getTechnologies = async (successCb, errorCb) => {
  try {
    // throw new Error("Could not grab data");
    const res = await fetch(TECHNOLOGIES_URL);
    const cardsData = await res.json();
    successCb(cardsData);
  } catch (err) {
    errorCb(err);
  }
};

// ****************
//
//
// ****************
let isFetching = false;
export const postReview = async (currentCard, vote, successCb) => {
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
    successCb(updatedCard);
    isFetching = false;
  } catch (err) {
    isFetching = false;
    // error handling
    console.log(`Error: ${err}`);
  }
};
