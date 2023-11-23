// import HelloWorld from "./components/myComponent"
// import ParentComponent from "./components/ParentComponent"
import ToDo from "./components/ToDo";

function App() {
  return (
    <ul>
      <ToDo dueDate="Tuesday">Clean the garage</ToDo>
      <ToDo dueDate="Wednesday">See the dentist</ToDo>
      <ToDo dueDate="Tuesday">Band rehearsal</ToDo>
      <ToDo dueDate="Tuesday">Date night</ToDo>
    </ul>
  );
}

export default App;
