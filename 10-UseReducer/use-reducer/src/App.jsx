import "./App.css";
import React, { useReducer } from "react";
import Calculate from "./Calculate";

export const NumberContext = React.createContext();

const initalValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initalValue;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initalValue);

  return (
    <div>
      <NumberContext.Provider value={{ count: count, dispatch: dispatch }}>
        <Calculate />
      </NumberContext.Provider>
    </div>
  );
}

export default App;
