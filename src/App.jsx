import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 0;

  const addValue = () => {
    if (counter < 20) setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <>
      <h1>My Counter App</h1>
      <p>The value ranges from 0 to 20!</p>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Add Value </button>
      <br></br>
      <br></br>
      <button onClick={removeValue}>Remove Value </button>
    </>
  );
}

export default App;
