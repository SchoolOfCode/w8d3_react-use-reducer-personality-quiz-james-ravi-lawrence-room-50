import React from "react";

function AnswerChoice({ answer, handleAnswerClick }) {
  return <li onClick={handleAnswerClick}>{answer}</li>;
}

export default AnswerChoice;
