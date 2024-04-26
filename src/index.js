import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button>New Game</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById("root")
);

