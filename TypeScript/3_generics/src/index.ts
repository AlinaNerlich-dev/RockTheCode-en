// const identity = (input: any): any => {
//   return input;
// };
// const result = identity(32);

const genericIdentity = <TypePlaceholder>(
  input: TypePlaceholder
): TypePlaceholder => {
  return input;
};

const stringRes = genericIdentity<string>("Hello");
const numberRes = genericIdentity<number>(432);
const InferredRes = genericIdentity(true);

// Adding Constraints
interface Length {
  length: number;
}

function printLength<TypePlaceholder extends Length>(input: TypePlaceholder) {
  console.log(input.length);
}

// printLength("hello"); //strings .length
// printLength([1, 2, 3]); // arrays .length
// printLength({ length: 16 });
// printLength({ width: 16 });
// printLength(32);

// Generics and arrays
// function reverse<T>(array: T[]): T[] {
//   return array.reverse();
// }

// let reverseNumbers = reverse<string>([1, 2, 3, 4, 5]);
// console.log(reverseNumbers);

type Student = {
  id: number;
  name: string;
  grade: number;
};

type StudentsWithAssignments = Student & {
  assignmentsCompleted: number;
};

type Teacher = {
  id: number;
  name: string;
  subject: string;
};

type TeachersWithAssignments = Teacher & {
  assignmentsGiven: number;
};

const assignmentsById: Record<number, number> = {
  1: 10,
  2: 8,
  3: 15,
  4: 12,
};

const students: Student[] = [
  {
    id: 1,
    name: "Alice",
    grade: 11,
  },
  {
    id: 2,
    name: "Bob",
    grade: 10,
  },
];

const teachers: Teacher[] = [
  {
    id: 3,
    name: "Mr. Smith",
    subject: "Math",
  },
  {
    id: 4,
    name: "Ms. Frank",
    subject: "Science",
  },
];

const addAssignments = <T extends Student | Teacher>(
  peopleArr: T[]
): (T & { assignments: number })[] => {
  return peopleArr.map((person) => {
    const assignments = assignmentsById[person.id] || 0;
    return {
      ...person,
      assignments,
    };
  });
};

const StudentsWithHW = addAssignments<Student>(students);
console.log(StudentsWithHW);

const TeachersWithHW = addAssignments<Teacher>(teachers);
console.log(TeachersWithHW);
