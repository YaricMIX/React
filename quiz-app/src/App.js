import { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import quizData from './data/quizData';

const App = () => {
  const [showQuiz, setShowQuiz] = useState(true);
  const [score, setScore] = useState(0);

  const handleQuizSubmit = (newScore) => {
    setScore(newScore);
    setShowQuiz(false);
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {showQuiz ? (
        <Quiz quizData={quizData} onSubmit={handleQuizSubmit} />
      ) : (
        <Result score={score} totalQuestions={quizData.length} />
      )}
    </div>
  );
};

export default App;
