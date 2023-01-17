import React from "react";
import ReactDOM from "react-dom";
import Profile from "./profile";
import TicTacToe from "./ticTacToe";
import DarkMode from "./darkMode";
import Todo from "./todo";

const App = (props) => {
  return (
    <div className="app">
      <Profile />
      <DarkMode />
      <TicTacToe />
      <Todo />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
