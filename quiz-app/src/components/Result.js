import React from 'react';

const Result = ({ score, totalQuestions, restartQuiz }) => {
	return (
		<div>
		<h2>Quiz Results</h2>
		<p>Your score: {score}/{totalQuestions}</p>
		<button onClick={restartQuiz} className="restart-button">Restart Quiz</button>
		</div>
	);
};

export default Result;
