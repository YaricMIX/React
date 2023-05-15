import { useState } from 'react';
import Question from './Question';
import Result from './Result';

const Quiz = ({ quizData }) => {
	const [score, setScore] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showResult, setShowResult] = useState(false);

	const handleAnswerSelected = (selectedOption) => {
		if (selectedOption === quizData[currentQuestion].correctAnswer) {
		setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quizData.length) {
		setCurrentQuestion(nextQuestion);
		} else {
		setShowResult(true);
		}
	};

	const restartQuiz = () => {
		setScore(0);
		setCurrentQuestion(0);
		setShowResult(false);
	};

	const remainingQuestions = quizData.length - currentQuestion - 0;

	return (
		<div>
		{showResult ? (
			<Result
			score={score}
			totalQuestions={quizData.length}
			restartQuiz={restartQuiz}
			/>
		) : (
			<div>
			<p>Remaining Questions: {remainingQuestions}</p>
			<Question
				question={quizData[currentQuestion].question}
				options={quizData[currentQuestion].options}
				selected={handleAnswerSelected}
			/>
			</div>
		)}
		</div>
	);
};

export default Quiz;
