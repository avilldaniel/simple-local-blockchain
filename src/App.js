import React, { useState } from "react";
import "./App.css";
import Forms from "./components/Forms";
import Blockchain from "./link/blockchain";

function App() {
  // how can i implement state management with a linked list?
  const [blockchain] = useState(new Blockchain());

  // counter for number of nodes (footprints)
  const [counter, setCounter] = useState(0);

  // boolean that checks if footprint is valid
  const [validity, setValidity] = useState();

  return (
    <div>
      <h2>Blockchain of footprints</h2>
      <Forms
        blockchain={blockchain}
        counter={counter}
        setCounter={setCounter}
        validity={validity}
        setValidity={setValidity}
      />
      <p>Number of nodes: {counter}</p>
      <p>Valid footprint? {validity ? `Yes` : `No`}</p>
    </div>
  );
}

export default App;
