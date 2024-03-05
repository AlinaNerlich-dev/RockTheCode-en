import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

// SYNTAX
// const [currentState, dispatchFn] = useReducer(reducerFn, initialState, initializingFn)

// RETURNS
// currentState - self-explanatory
// dispatchFn - triggers a state update (calls the reducerFn, and pass it the criteria (the action))

// PARAMETERS
// reducerFn - self-defined function on how state is updated based on different criteria.
// initialState - self-explanatory
// initializingFn - returns initialState. if not used, defaults to initialState

const initialState = [
  {
    id: uuidv4(),
    name: "Task 1",
    isComplete: false,
  },
];

// reducerFn outside of the component
function reducerFn(state, action) {
  switch (action.type) {
    case "Add": {
      const { name } = action.payload;
      return [
        ...state,
        {
          id: uuidv4(),
          name: name,
          isComplete: false,
        },
      ];
    }
    case "ToggleDelete": {
      const { id } = action.payload;
      const updatedState = state.map((task) =>{
        if (task.id === id){
          return{ 
            ...task, 
            isComplete: !task.isComplete
          }
        }
        return task;
      });
      return updatedState;
    }
  }
}

const Todo = () => {
  function handleClick() {
    dispatchFn({
      type: "Add",
      payload: {
        name: name,
      },
    });
  }

  function handleToggle(id) {
    dispatchFn({
      type: "ToggleDelete",
      payload:{
        id: id, // another syntax just id is also possible if its name and value are the same
      }

    });
  }

  const [state, dispatchFn] = useReducer(reducerFn, initialState);
  // const [name, setName] = useState(" ");

  let name = ""

  function handleChange(event) {
    name = event.target.value;
  }

  return (
    <div>
      <h3>Add new Task:</h3>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Add Task</button>
        <br />
        <h3>Task list</h3>
        <ul>
          {state.map((task) => {
            const style ={
              textDecoration: task.isComplete ? "line-through" : "inherit"
            }
            return (
              <li key={task.id} onClick={()=>{handleToggle(task.id)}} style={style}>
                {task.name}
              </li>
            );
          })}
        </ul>

      </div>
    </div>
  );
};

export default Todo;
