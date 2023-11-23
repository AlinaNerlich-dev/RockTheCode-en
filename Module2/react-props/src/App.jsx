import "./App.css";
import ToDo from "./components/ToDo";

function App() {
  return (
    <ul>
      <ToDo date="Monday"> Clean the garage </ToDo>
      <ToDo date="Tuesday 11am">Dentist Appt</ToDo>
      <ToDo date="Wednesday 3pm">Doctor's Appt</ToDo>
    </ul>
  );
}

export default App;
