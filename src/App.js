import logo from './logo.svg';
import './App.css';
import React from "react";
import blobRight from "./assets/right.jpg";
import blobLeft from "./assets/left.jpg";
import Question from "./components/Question";

export default function App() {
  const [gameStarted, setGameStarted] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [answerChecked, setAnswerChecked] = React.useState(false);
  const [score, setScore] = React.useState(0);

  function increaseScore(){
    setScore((prevScore) => prevScore + 1);
  }

  function decreaseScore(){
    setScore((prevScore) => prevScore -1 );
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}