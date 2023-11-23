const { Student } = require("../models/students");
const {
  getAllStudentsDB,
  getStudentByIdDB,
  getStudentByNameDB,
  createStudentDB,
  updateStudentDB,
  deleteStudentDB,
} = require("../repositories/studentFunctions");

// GET http://localhost:3001/students
const getAllStudents = async (req, res) => {
  const students = await getAllStudentsDB();
  res.status(200).json({ data: students });
};

// GET http://localhost:3001/students/1
const getStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await getStudentByIdDB(id);
  res.status(200).json({ data: student });
};

// GET http://localhost:3001/filter?name=Mark
const getStudentByName = async (req, res) => {
  const { name } = req.query;
  const student = await getStudentByNameDB(name);
  res.status(200).json({ data: student });
};

// POST http://localhost:3001/students
const createStudent = async (req, res) => {
  const newStudent = await createStudentDB({
    name: req.body.name,
  });
  res.status(201).json({
    data: newStudent,
  });
};

// PUT
const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const updatedStudent = await updateStudentDB(id, { name });
  res.status(200).json({ data: updatedStudent });
};

// DELETE http://localhost:3001/students/:id
const deleteStudent = async (req, res) => {
  const { id } = req.params;
  deleteStudentDB(id);
  res.status(200).json({
    data: "Student Deleted",
  });
};

module.exports = {
  getAllStudents,
  getStudentById,
  getStudentByName,
  createStudent,
  updateStudent,
  deleteStudent,
};
