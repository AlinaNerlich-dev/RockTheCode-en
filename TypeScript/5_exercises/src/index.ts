//TODO
// given a long number (eg: 123456), square each digit
// and concatenate all the numbers again as a new number.

// const concatPowers = (num: number) => {
//   const numAsStringArr = num.toString().split("");

//   const powerArr = numAsStringArr.map((item) => {
//     return Math.pow(Number(item), 2);
//   });

//   return Number(powerArr.join(""));
// };

// const concatResult = concatPowers(123456);
// console.log("Result: ", concatResult);
//
//
//
//
//
// TODO
// given the information of athletes that you will receive from an API, you will have to return for
// each of these an object with the correct format for each sport.

// If it's 'track', we want the scores field to return an object of the form:
// scores: {qualifiers: XX, finals: XX}

// If it is "golf", we want the scores field to return a total number of points scored:
// scores: XX

type Sport = "track" | "golf";

type APIAthlete = {
  id: number;
  name: string;
  sport: Sport;
  scores: { type: string; value: number }[];
};

type APIResponse = (APIAthlete | null | undefined)[];

const apiInput: APIResponse = [
  {
    id: 1,
    name: "Michael",
    sport: "track",
    scores: [
      {
        type: "qualifiers",
        value: 10,
      },
      { type: "finals", value: 8.5 },
    ],
    // scores: {qualifiers: XX, finals: XX}
  },
  {
    id: 2,
    name: "George",
    sport: "golf",
    scores: [
      {
        type: "1",
        value: 3,
      },
      {
        type: "2",
        value: 3,
      },
      {
        type: "3",
        value: 5,
      },
      {
        type: "4",
        value: 4,
      },
    ],
    // scores: XX
  },
  null,
  undefined,
];

type ParsedScore = number | Record<string, number>;

type ParsedAthlete = Omit<APIAthlete, "scores"> & {
  scores: ParsedScore | APIAthlete["scores"];
};

const parseAthletesScores = (input: APIResponse): ParsedAthlete[] => {
  const filteredInput = input.filter((value) => !!value) as APIAthlete[];

  const mappedAthletes = filteredInput.map((athlete) => {
    if (athlete.sport === "track") {
      const newScore: Record<string, number> = {};
      athlete.scores.forEach((score) => {
        newScore[score.type] = score.value;
      });
      return {
        ...athlete,
        scores: newScore,
      };
    }

    if (athlete.sport === "golf") {
      const totalScore = athlete.scores.reduce(
        (total, score) => total + score.value,
        0
      );
      return {
        ...athlete,
        scores: totalScore,
      };
    }
    return athlete;
  });
  return mappedAthletes;
};

const athletesScores = parseAthletesScores(apiInput);
console.log("Result: ", athletesScores);
