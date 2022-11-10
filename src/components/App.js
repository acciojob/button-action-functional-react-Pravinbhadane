import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  const [state,setState]= useState(false);

  return (
    <div id="main">
      {state === false? null : <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      <button id="click" onClick={() => setState(!state)}>Click here</button>
    </div>
  );
}


export default App;
