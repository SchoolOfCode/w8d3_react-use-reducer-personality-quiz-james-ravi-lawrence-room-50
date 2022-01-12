//ONLY once you get your functionality sorted, change the sample text below to make your own questions and answers.

export const questionData = [
  {
    questionText: "Sample question 1",
    choices: [
      "sample answer choice a",
      "sample answer choice b",
      "sample answer choice c",
      "sample answer choice d",
    ],
  },
  {
    questionText: "Sample question 2",
    choices: [
      "sample answer choice a",
      "sample answer choice b",
      "sample answer choice c",
      "sample answer choice d",
    ],
  },
  {
    questionText: "Sample question 3",
    choices: [
      "sample answer choice a",
      "sample answer choice b",
      "sample answer choice c",
      "sample answer choice d",
    ],
  },
  {
    questionText: "Sample question 4",
    choices: [
      "sample answer choice a",
      "sample answer choice b",
      "sample answer choice c",
      "sample answer choice d",
    ],
  },
  {
    questionText: "Sample question 5",
    choices: [
      "sample answer choice a",
      "sample answer choice b",
      "sample answer choice c",
      "sample answer choice d",
    ],
  },
].map(({ questionText, choices }, questionId) => {
  // Safe to use array index as ID here (and for React key later) as it's stable and unique.
  // Even if the array gets shuffled, each question object will still contain the ID it started off with.
  return {
    questionId,
    questionText,
    choices: choices.map((choiceText, i) => {
      const choiceId = "abcd"[i];
      return {
        choiceText,
        choiceId,
      };
    }),
  };
});
