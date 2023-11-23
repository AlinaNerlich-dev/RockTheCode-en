// void - return nothing
// never

// const add = (a: number, b: number): number => {
//   return a + b;
// };

// const addListeners = (nodes: []) => {
//   //add listeners
// };

// const brokenFunction = () => {
//   //   while (true) {
//   //     console.log("hello");
//   //   }
//   throw new Error("error");
// };

// const fetchThing = async () => {
//   return 'thing"';
// };

// UTILITY TYPES
type User = {
  id: number;
  username: string;
  role?: string;
  avatar?: string;
  email: string;
  password: string;
};

// PARTIAL TYPE - make all entries of a type optional
type PartialUser = Partial<User>;
const newUser: PartialUser = {
  id: 44,
  username: "Mark",
};

// REQUIRED TYPE - make entries required
type RequiredUser = Required<User>;
const requiredUser: RequiredUser = {
  id: 44,
  username: "Mark",
  role: "admin",
  avatar: "http://",
  email: "vdsvdfvdf@vfdvdf.com",
  password: "vfdvfdvfdv",
};

// READ-ONLY
type ReadOnlyUser = Readonly<RequiredUser>;
const readonlyUser: ReadOnlyUser = {
  id: 44,
  username: "Mark",
  role: "admin",
  avatar: "http://",
  email: "vdsvdfvdf@vfdvdf.com",
  password: "vfdvfdvfdv",
};

// readonlyUser.username = "fdvfdfdv"

// PICK TYPE - select properties that you want in your new type
type ClientUser = Pick<User, "id" | "email" | "username">;
const clientUser: ClientUser = {
  id: 2,
  email: "vfdvfdvfd",
  username: "vfdvfdvfd",
};

// OMIT TYPE - select properties that you don't want
type ClientUserWithOmit = Omit<User, "avatar" | "role" | "email">;
const clientUserWithOmit: ClientUserWithOmit = {
  id: 44,
  username: "Mark",
  password: "vfdvfdvfdv",
};

//  ReturnType
type Student = {
  name: string;
  grade: number;
};

type addAssignments = (students: Student) => Student & { assignments: number };

type StudentWithAssignments = ReturnType<addAssignments>;

const newStudent: StudentWithAssignments = {
  name: "Mark",
  grade: 12,
  assignments: 0,
};
