import React, { useState, useEffect, useRef } from "react";
import "./quiz.css";
const questionsData = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
    explanation: "Paris is the capital city of France.",
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false },
    ],
    explanation: "Elon Musk is the CEO of Tesla.",
  },
  {
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
    explanation: "Apple created the iPhone.",
  },
  {
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "4", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "7", isCorrect: true },
    ],
    explanation: "There are 7 Harry Potter books.",
  },

  // Adding 16 more dummy questions for the total of 20
  {
    questionText: "What is the largest planet in our solar system?",
    answerOptions: [
      { answerText: "Earth", isCorrect: false },
      { answerText: "Jupiter", isCorrect: true },
      { answerText: "Saturn", isCorrect: false },
      { answerText: "Mars", isCorrect: false },
    ],
    explanation: "Jupiter is the largest planet in the solar system.",
  },
  {
    questionText: "What is the boiling point of water?",
    answerOptions: [
      { answerText: "90°C", isCorrect: false },
      { answerText: "100°C", isCorrect: true },
      { answerText: "110°C", isCorrect: false },
      { answerText: "120°C", isCorrect: false },
    ],
    explanation: "Water boils at 100°C at standard atmospheric pressure.",
  },
  {
    questionText: "Who wrote 'Romeo and Juliet'?",
    answerOptions: [
      { answerText: "Charles Dickens", isCorrect: false },
      { answerText: "William Shakespeare", isCorrect: true },
      { answerText: "Mark Twain", isCorrect: false },
      { answerText: "Jane Austen", isCorrect: false },
    ],
    explanation: "'Romeo and Juliet' was written by William Shakespeare.",
  },
  {
    questionText: "What is the smallest prime number?",
    answerOptions: [
      { answerText: "0", isCorrect: false },
      { answerText: "1", isCorrect: false },
      { answerText: "2", isCorrect: true },
      { answerText: "3", isCorrect: false },
    ],
    explanation: "2 is the smallest and only even prime number.",
  },
  {
    questionText: "Which element has the chemical symbol 'O'?",
    answerOptions: [
      { answerText: "Gold", isCorrect: false },
      { answerText: "Oxygen", isCorrect: true },
      { answerText: "Osmium", isCorrect: false },
      { answerText: "Iron", isCorrect: false },
    ],
    explanation: "Oxygen's chemical symbol is 'O'.",
  },
  {
    questionText: "In which year did the Titanic sink?",
    answerOptions: [
      { answerText: "1910", isCorrect: false },
      { answerText: "1912", isCorrect: true },
      { answerText: "1914", isCorrect: false },
      { answerText: "1905", isCorrect: false },
    ],
    explanation: "The Titanic sank in 1912.",
  },
  {
    questionText: "What is the currency of Japan?",
    answerOptions: [
      { answerText: "Yen", isCorrect: true },
      { answerText: "Won", isCorrect: false },
      { answerText: "Dollar", isCorrect: false },
      { answerText: "Peso", isCorrect: false },
    ],
    explanation: "Yen is the currency of Japan.",
  },
  {
    questionText: "Which organ is responsible for pumping blood?",
    answerOptions: [
      { answerText: "Liver", isCorrect: false },
      { answerText: "Heart", isCorrect: true },
      { answerText: "Kidney", isCorrect: false },
      { answerText: "Lungs", isCorrect: false },
    ],
    explanation: "The heart pumps blood throughout the body.",
  },
  {
    questionText: "What is the chemical formula of water?",
    answerOptions: [
      { answerText: "H2O", isCorrect: true },
      { answerText: "CO2", isCorrect: false },
      { answerText: "NaCl", isCorrect: false },
      { answerText: "O2", isCorrect: false },
    ],
    explanation: "Water's chemical formula is H2O.",
  },
  {
    questionText: "Who painted the Mona Lisa?",
    answerOptions: [
      { answerText: "Vincent Van Gogh", isCorrect: false },
      { answerText: "Leonardo da Vinci", isCorrect: true },
      { answerText: "Pablo Picasso", isCorrect: false },
      { answerText: "Claude Monet", isCorrect: false },
    ],
    explanation: "Leonardo da Vinci painted the Mona Lisa.",
  },
  {
    questionText: "What is the hardest natural substance?",
    answerOptions: [
      { answerText: "Gold", isCorrect: false },
      { answerText: "Iron", isCorrect: false },
      { answerText: "Diamond", isCorrect: true },
      { answerText: "Silver", isCorrect: false },
    ],
    explanation: "Diamond is the hardest natural substance.",
  },
  {
    questionText: "Which planet is known as the Red Planet?",
    answerOptions: [
      { answerText: "Mars", isCorrect: true },
      { answerText: "Venus", isCorrect: false },
      { answerText: "Saturn", isCorrect: false },
      { answerText: "Mercury", isCorrect: false },
    ],
    explanation: "Mars is called the Red Planet.",
  },
  {
    questionText: "How many continents are there on Earth?",
    answerOptions: [
      { answerText: "5", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "7", isCorrect: true },
      { answerText: "8", isCorrect: false },
    ],
    explanation: "There are 7 continents on Earth.",
  },
  {
    questionText: "What gas do plants absorb from the atmosphere?",
    answerOptions: [
      { answerText: "Oxygen", isCorrect: false },
      { answerText: "Carbon Dioxide", isCorrect: true },
      { answerText: "Nitrogen", isCorrect: false },
      { answerText: "Hydrogen", isCorrect: false },
    ],
    explanation: "Plants absorb Carbon Dioxide during photosynthesis.",
  },
  {
    questionText: "What is the tallest mountain in the world?",
    answerOptions: [
      { answerText: "K2", isCorrect: false },
      { answerText: "Mount Everest", isCorrect: true },
      { answerText: "Kangchenjunga", isCorrect: false },
      { answerText: "Lhotse", isCorrect: false },
    ],
    explanation: "Mount Everest is the tallest mountain.",
  },
];
// shuffleArray function unchanged
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const STORAGE_KEY = "quizAppState";

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [answerClicked, setAnswerClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const answerButtonsRef = useRef([]);

  // Load quiz state from localStorage or initialize
  useEffect(() => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      const parsed = JSON.parse(savedState);
      setQuestions(parsed.questions);
      setCurrentQuestion(parsed.currentQuestion);
      setScore(parsed.score);
      setShowScore(parsed.showScore);
      setSelectedAnswerIndex(parsed.selectedAnswerIndex);
      setAnswerClicked(parsed.answerClicked);
      setLoading(false);
    } else {
      const shuffled = shuffleArray(questionsData);
      setQuestions(shuffled);
      setLoading(false);
    }
  }, []);

  // Persist state on relevant changes
  useEffect(() => {
    if (questions.length > 0) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          questions,
          currentQuestion,
          score,
          showScore,
          selectedAnswerIndex,
          answerClicked,
        })
      );
    }
  }, [
    questions,
    currentQuestion,
    score,
    showScore,
    selectedAnswerIndex,
    answerClicked,
  ]);

  // Keyboard navigation for answers
  const handleKeyDown = (e) => {
    if (answerClicked) return; // no navigation after answer clicked
    const buttonsCount = questions[currentQuestion].answerOptions.length;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      if (selectedAnswerIndex === null) {
        setSelectedAnswerIndex(0);
        answerButtonsRef.current[0]?.focus();
      } else {
        const nextIndex = (selectedAnswerIndex + 1) % buttonsCount;
        setSelectedAnswerIndex(nextIndex);
        answerButtonsRef.current[nextIndex]?.focus();
      }
    }
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      if (selectedAnswerIndex === null) {
        const lastIndex = buttonsCount - 1;
        setSelectedAnswerIndex(lastIndex);
        answerButtonsRef.current[lastIndex]?.focus();
      } else {
        const prevIndex =
          (selectedAnswerIndex - 1 + buttonsCount) % buttonsCount;
        setSelectedAnswerIndex(prevIndex);
        answerButtonsRef.current[prevIndex]?.focus();
      }
    }
    if ((e.key === "Enter" || e.key === " ") && selectedAnswerIndex !== null) {
      e.preventDefault();
      const chosen =
        questions[currentQuestion].answerOptions[selectedAnswerIndex];
      handleAnswerOptionClick(chosen.isCorrect, selectedAnswerIndex);
    }
  };

  const handleAnswerOptionClick = (isCorrect, index) => {
    if (answerClicked) return; // prevent multiple clicks
    setSelectedAnswerIndex(index);
    setAnswerClicked(true);

    if (isCorrect) setScore((prev) => prev + 1);

    // Delay enabling the Next button for 1.5s to let user see feedback
    setTimeout(() => {
      // nothing special here, just allow next button to be enabled by answerClicked state
    }, 1500);
  };

  const handleNextQuestion = () => {
    setSelectedAnswerIndex(null);
    setAnswerClicked(false);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handlePlayAgain = () => {
    const shuffled = shuffleArray(questionsData);
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setSelectedAnswerIndex(null);
    setAnswerClicked(false);
    setQuestions(shuffled);
    localStorage.removeItem(STORAGE_KEY);
  };

  if (loading) {
    return (
      <div className="quiz-container loading" aria-live="polite">
        <div className="spinner" aria-label="Loading questions"></div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="quiz-container loading" aria-live="polite">
        <p>Loading questions...</p>
      </div>
    );
  }

  return (
    <div
      className={`quiz-container fade-in`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-live="polite"
      aria-atomic="true"
    >
      {showScore ? (
        <div
          className="score-section"
          role="region"
          aria-label="Quiz score summary"
        >
          <p className="score-text">
            You scored {score} out of {questions.length}
          </p>
          <button type="button" className="btn" onClick={handlePlayAgain}>
            Play Again
          </button>
        </div>
      ) : (
        <>
          <div
            className="question-count"
            aria-label={`Question ${currentQuestion + 1} of ${
              questions.length
            }`}
          >
            Question {currentQuestion + 1} / {questions.length}
          </div>

          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>

          <div
            className="answer-section"
            role="list"
            aria-label="Answer options"
          >
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => {
                const isSelected = selectedAnswerIndex === index;
                const isCorrect = answerOption.isCorrect;

                let btnClass = "answer-btn";

                if (answerClicked) {
                  if (isCorrect) btnClass += " correct";
                  else if (isSelected && !isCorrect) btnClass += " incorrect";
                  else btnClass += " disabled";
                }

                return (
                  <button
                    key={index}
                    type="button"
                    role="listitem"
                    ref={(el) => (answerButtonsRef.current[index] = el)}
                    aria-pressed={isSelected}
                    aria-disabled={answerClicked}
                    disabled={answerClicked}
                    className={btnClass}
                    onClick={() => handleAnswerOptionClick(isCorrect, index)}
                    tabIndex={
                      isSelected || selectedAnswerIndex === null ? 0 : -1
                    }
                  >
                    {answerOption.answerText}
                  </button>
                );
              }
            )}
          </div>

          {answerClicked && (
            <div className="explanation" role="region" aria-live="polite">
              <strong>Explanation:</strong>{" "}
              {questions[currentQuestion].explanation ||
                "No explanation available."}
            </div>
          )}

          <div className="next-btn-container">
            <button
              type="button"
              className={`btn next-btn ${answerClicked ? "" : "disabled"}`}
              onClick={handleNextQuestion}
              disabled={!answerClicked}
            >
              {currentQuestion + 1 === questions.length
                ? "Finish"
                : "Next Question"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizApp;
