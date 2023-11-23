import { useReducer } from "react";

// SYNTAX
// const [currentState, dispatchFn] = useReducer(reducerFn, initialState, initializingFn)

// RETURNS
// currentState - self-explanatory
// dispatchFn - triggers a state update (calls the reducerFn, and pass it the criteria (the action))

// PARAMETERS
// reducerFn - self-defined function on how state is updated based on different criteria.
// initialState - self-explanatory
// initializingFn - returns initialState. if not used, defaults to initialState

const initialState = {
  name: "Mark",
  age: 34,
};

// reducerFn outside of the component
function reducerFn(state, action) {
  switch (action.type) {
    case "CHG_NAME": {
      return {
        ...state,
        name: "James",
      };
    }
  }
}

const Todo = () => {
  const [state, dispatchFn] = useReducer(reducerFn, initialState);

  const handleChgName = (name) => {
    dispatchFn({
      type: "CHG_NAME",
      name: name,
    });
  };

  return <div>Todo</div>;
};

export default Todo;
