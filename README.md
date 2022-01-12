[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6684811&assignment_repo_type=AssignmentRepo)
# Build a personality quiz with useReducer

It's time to unleash your inner teenager and create a personality quiz, using the `useReducer` hook to keep track of the responses to each question so you can calculate the results at the end.

To see a visual about how the reducer for your quiz will work, see the [diagram here](https://www.canva.com/design/DAENwJNdEC0/GIou8tOfGdXoUHyxn-PTYQ/view?utm_content=DAENwJNdEC0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink).

1.  In [index.js](src/components/App/index.js), outside of the `App` component, create a constant called `initialState` containing `{ quizResults: [] }` (which will later be used with `useReducer`).

2.  In [index.js](src/components/App/index.js), outside of the `App` component, create a reducer function (which will later be used with `useReducer`):

    - Remember that this reducer function should take in `state` and `action` and return the new, immutably updated state.

    - Implement the following action types within the reducer function:

      - `ADD_ANSWER`

        - The new state should immutably update the `quizResults` array and add the user's choice (e.g. either: `a`, `b`, `c`, `d`) to the end.
        - You'll need to make the user's choice available under the action's payload. (Remember that `action` will be whatever you `dispatch` in your app).

      - `RESET_ANSWERS`
        - The new state should immutably update the `quizResults` array to be an empty array.

    - Don't forget to add a default case that just returns the state as-is!

3.  In [index.js](src/components/App/index.js), import the `useReducer` hook and use it within your `App` component.

4.  When calling `useReducer`:

    - set your initial state to be `initialState` that you created above.
    - pass in the reducer function you've created above

5.  Complete the `handleAnswerClick` function in `App` so that it dispatches an `ADD_ANSWER` action type as well as the `choiceId` (either `a`, `b`, `c` or `d`). This should mean that when the user clicks a choice, their choice should get added to the `quizResults` array. Although this logic/setup isn't ideal (because a user might not answer the questions in order, or might answer a question more than once), just get it working and we can improve things later (see bonus tasks).

6.  Complete the `handleResetButtonClick` function in `App` so that it dispatches a `RESET_ANSWERS` action type. This should mean that when the user clicks the reset button, the `quizResults` array should become an empty array.

7.  The last step, of course, is to calculate the results! In the `calculateResults` function, use the state from your `useReducer` with all the answers collected. Your function should figure out which choice (`a`, `b`, `c`, or `d`) was clicked the most often and set the `result` state accordingly.

### Bonus:

🌟 I know it's tempting, but only **after** you have your functionality working, **then** go into [`/libs/questionData.js`](src/libs/questionData.js), where you can replace the sample text for the questions and answers with your own text.

🌟 Jazz up your page with CSS styling and animations. Get creative!

🌟 Write some tests for your reducer function in [`app.test.js`](src/components/App/app.test.js) to make sure each case is functioning in the way that you expect.

🌟 Experiment with conditional rendering. Can you make it so that the `ResultsDisplay` component only shows up after the button is pressed? Can you get each question to render one at a time? Can you get the questions to be hidden at the end of the quiz when the results show?

🌟 If you still have time, keep customizing your app!

- Do you want to add more questions?
- Is there a way that you can shuffle the answer choices in different orders to make it less predictable, for example?
- Is there a way you can make sure a user can only click on one answer per question?
- ...and more! The sky's the limit.
