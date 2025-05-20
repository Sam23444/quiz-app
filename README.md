 React Quiz App

A simple, accessible React quiz application with 20 shuffled multiple-choice questions, score tracking, keyboard navigation, and localStorage state persistence.

 Features

- 20 general knowledge questions with explanations
- Shuffles questions on load or replay
- Shows current score and final result
- Keyboard navigation with arrow keys and Enter/Space to select answers
- Prevents multiple answer selections per question
- Saves quiz state in localStorage to resume progress after page reload
- Accessible with ARIA attributes and focus management
- Responsive design with loading spinner while initializing

Installation

1. Clone the repo
2. Run `npm install`
3. Run `npm start` to launch the app

 Usage

- Use arrow keys or mouse to select an answer
- Press Enter or Space to submit an answer
- Click "Next" to move to the next question after answering
- After last question, view score and click "Play Again" to restart

 Technologies

- React (functional components with hooks)
- CSS for styling (quiz.css)
- LocalStorage for state persistence

Notes

- Questions and answers are stored in the `questionsData` array
- State includes current question index, score, answer selection, and quiz completion
- Keyboard handlers manage answer navigation and selection
- Timer delay after answer selection before enabling the Next 
