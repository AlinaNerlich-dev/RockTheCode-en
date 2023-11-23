type Position = "P" | "C" | "1B" | "2B" | "3B" | "SS" | "RF" | "LF" | "CF";

type Player = { name: string; position: Position; number: number };
type PlayerExtended = Player & {
  lastName: string;
};

type Coach = {
  name: string;
  type: string;
  age?: number;
};

type Team = {
  id: number | string;
  name: string;
  coach: Coach;
  players: PlayerExtended[];
  games: number;
  wins: number;
  losses: number;
};

const team: Team = {
  id: 1,
  name: "Yankees",
  coach: {
    name: "Don",
    type: "Batting",
  },
  players: [
    {
      name: "Tino",
      position: "1B",
      number: 10,
      lastName: "Martinez",
    },
  ],
  games: 12,
  wins: 7,
  losses: 5,
};

const teamMembers: (Coach | Player)[] = [
  {
    name: "Don",
    type: "Batting",
  },
  {
    name: "Tino",
    position: "1B",
    number: 10,
  },
];

type SumFn = (a: number, b: number) => number;
// const sum = (a: number, b: number): number => a * b;
const sum: SumFn = (a, b) => a * b;

function operation(multiply: SumFn) {
  const result = multiply(1, 2);
}

// interface Animal {
//   makeSound(): void;
// }

// class Dog implements Animal {
//   makeSound() {
//     console.log("Woof");
//   }
// }
// class Cat implements Animal {
//   makeSound() {
//     console.log("Meow");
//   }
// }

interface IPlayer {
  name: string;
  position: Position;
  number: number;
}
interface IPlayerExtended extends IPlayer {
  lastName: string;
}

const teamPlayer: IPlayerExtended = {
  name: "Aaron",
  position: "RF",
  number: 99,
  lastName: "Judge",
};

type GameConsole = "playstation" | "xbox" | "switch";
const gameConsole: GameConsole = "switch";

interface videoGameConsole {
  type: "playstation" | "xbox" | "switch";
}
const videoGameConsole: videoGameConsole["type"] = "xbox";
