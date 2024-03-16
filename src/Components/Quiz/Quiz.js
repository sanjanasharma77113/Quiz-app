import React from "react";
import "./Quiz.css";

const Quiz = () => {
  return (
    <div className="container">
      <h1> Quiz App</h1>
      <hr />
      <h2>Which device is required for the International</h2>
      <ul>
        <li className="quizOption"> Modem</li>
        <li className="quizOption">Router</li>
        <li className="quizOption">LAN Cable</li>
        <li className="quizOption">Pen Drive</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  );
};

export default Quiz;
