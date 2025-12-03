import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Button";
import Greeting from "./Greeting";

function App() {
  return (
    <>
      <Button text="Submit" color="red" />
      <br />
      <br />
      <Button />
      <Greeting />
      <Greeting name="Preshu" />
      <Greeting name="Jay" />
    </>
  );
}
export default App;
