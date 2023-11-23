const flights = [
  {
    airline: "southwest",
    legs: 2,
    price: 267,
    totalTime: 8,
    flight: 120,
  },
  {
    airline: "delta",
    legs: 1,
    price: 340,
    totalTime: 4,
    flight: 227,
  },
  {
    airline: "spirit",
    legs: 3,
    price: 220,
    totalTime: 13,
    flight: 108,
  },
  {
    airline: "united",
    legs: 2,
    price: 320,
    totalTime: 6,
    flight: 1190,
  },
];

let ticket = {
  firstName: "Ashley",
  lastName: "O'Neill",
  purchasedFlight: undefined,
};

function buyFlight(flightsArray, maxPrice, maxLegs) {
  let acceptableFlights = [];

  for (let i = 0; i < flightsArray.length; i++) {
    if (flightsArray[i].price > maxPrice || flightsArray[i].legs > maxLegs) {
      console.log(
        `${flightsArray[i].airline} ${flightsArray[i].flight} do not meet your criteria. Continuing search...`
      );
    } else if (
      flightsArray[i].price <= maxPrice &&
      flightsArray[i].legs <= maxLegs
    ) {
      console.log(
        `We have found a flight under ${maxPrice}: ${flightsArray[i].airline} ${flightsArray[i].flight}`
      );
      let goodFlight = { ...flightsArray[i] };
      acceptableFlights.push(goodFlight);
    }
    if (i === flightsArray.length - 1 && !acceptableFlights[0]) {
      console.log("We could not find a flight matching your criteria.");
    }
  }
  comparePrices(acceptableFlights);
}

// *********************
// *********************
function comparePrices(array) {
  let cheapestFlight = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i].price < cheapestFlight.price || !cheapestFlight.price) {
      cheapestFlight = { ...array[i] };
    }
  }
  console.log(
    `The cheapest flight matching your criteria is ${cheapestFlight.airline} ${cheapestFlight.flight}. Purchasing now...`
  );
  ticket.purchasedFlight = cheapestFlight;
  console.log(ticket);
}
// *********************

buyFlight(flights, 330, 2);
