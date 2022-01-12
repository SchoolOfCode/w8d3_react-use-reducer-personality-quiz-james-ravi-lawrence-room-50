import React from "react";
import AnswerChoice from "../AnswerChoice";

function QuestionDisplay({ question, choices, handleAnswerClick }) {
  return (
    <li>
      <h3>{question}</h3>
      <ol type="a">
        {choices.map((choice) => (
          <AnswerChoice
            key={choice.choiceId}
            answer={choice.choiceText}
            handleAnswerClick={() => handleAnswerClick(choice.choiceId)}
          />
        ))}
      </ol>
    </li>
  );
}

export default QuestionDisplay;
