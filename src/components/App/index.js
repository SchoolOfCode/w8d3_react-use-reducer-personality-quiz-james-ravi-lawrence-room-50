import "./App.css";
import QuestionDisplay from "../QuestionDisplay";
import ResultsDisplay from "../ResultsDisplay";
import { questionData } from "../../libs/questionData";
import { useState, useReducer } from "react";

const initialState = {quizResults: []};

function quizReducer(state, action){
  switch(action.type){
  case "ADD_ANSWER":
    return {quizResults: [...state.quizResults, action.answer]};
  case "RESET_ANSWERS":
    return {quizResults: []};
  default:
  return state;
  }
}

function App() {
  const [result, setResult] = useState("...pending");

  const [state, dispatch] = useReducer(quizReducer, initialState);

  function handleAnswerClick(choiceId) {
    console.log(`handleAnswerClick ran, user clicked choice "${choiceId}"`);
    dispatch({type: "ADD_ANSWER", answer: choiceId})
    // TODO: Write your code for step 5 here!
  }

  function handleResetButtonClick() {
    dispatch({type: "RESET_ANSWERS"})
    // TODO: Write your code for step 6 here!
  }

  function calculateResults() {
    const quizResults = state.quizResults;

    //Count items in array and find maximum occuring count.
    const counts = quizResults.reduce((prevValue, currentValue) => {
      prevValue[currentValue] = (prevValue[currentValue] || 0) + 1;
      return prevValue;
    }, {});
    //console.log(counts, "Counts")

    const maxCount = Math.max(...Object.values(counts));

    //Filter keys from the counts array that have the maxCount
    const mostFrequent = Object.keys(counts).filter(k => counts[k] === maxCount);
    //console.log(mostFrequent, "Most Frequent")
    setResult(mostFrequent[0]);
    //Return first element if its a tie.
  }

  return (
    <main className="app">
      <h1>Personality Quiz</h1>
      <ol>
        {questionData.map((question) => (
          <QuestionDisplay
            key={question.questionId}
            question={question.questionText}
            choices={question.choices}
            handleAnswerClick={handleAnswerClick}
          />
        ))}
      </ol>
      <button onClick={calculateResults}>Calculate results!</button>
      <ResultsDisplay result={result} />
      <button onClick={handleResetButtonClick}>Reset results!</button>
    </main>
  );
}

export default App;
