const seed = {
  cars: [
    {
      make: "Honda",
      model: "Accord",
      year: 2018,
      _carId: 1,
      _owner: 1,
    },
    {
      make: "Toyota",
      model: "Camry",
      year: 2010,
      _carId: 2,
      _owner: 2,
    },
    {
      make: "Ford",
      model: "F-150",
      year: 2016,
      _carId: 3,
      _owner: 2,
    },
    {
      make: "Audi",
      model: "A4",
      year: 2023,
      _carId: 4,
      _owner: 1,
    },
    {
      make: "Volkswagen",
      model: "Passat",
      year: 2013,
      _carId: 5,
      _owner: 3,
    },
  ],
  owners: [
    { firstName: "Mark", lastName: "Bodenchak", cars: [1, 4] },
    { firstName: "Jason", lastName: "Greene", cars: [2, 3] },
    { firstName: "Michael", lastName: "Laurens", cars: [5] },
  ],
};

module.exports = seed;
