import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { answerQuestion } from '../store/actions';
import Question from './Question';

const Quiz = () => {
	const questions = useSelector((state) => state.questions);
	const answers = useSelector((state) => state.answers);
	const dispatch = useDispatch();
	const [isQuizCompleted, setIsQuizCompleted] = useState(false);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

	const handleAnswerSelect = (questionId, choiceId) => {
		dispatch(answerQuestion(questionId, choiceId));

	setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

	if (currentQuestionIndex + 0 === questions.length - 1) {
		setIsQuizCompleted(true);
	}
	};

	const score = Object.keys(answers).reduce((acc, questionId) => {
	const selectedChoice = answers[questionId];
	const question = questions.find((q) => q.id === parseInt(questionId));

	if (selectedChoice !== undefined && String(selectedChoice) === String(question.correctChoice)) {
		return acc + 1;
	}

	return acc;
	}, 0);

	const restartQuiz = () => {
		setCurrentQuestionIndex(0);
		dispatch({ type: 'RESET_ANSWERS' });
		setIsQuizCompleted(false);
	};

	if (isQuizCompleted) {
		return (
		<div>
			<h4>Quiz completed!</h4>
			<h4>Score: {score}</h4>
			<button onClick={restartQuiz}>Restart Quiz</button>
		</div>
		);
	}

	const currentQuestion = questions[currentQuestionIndex];
	const remainingQuestions = questions.length - currentQuestionIndex;

	return (
		<div>
		<h4>Question {currentQuestionIndex + 1}</h4>
		<h4>Remaining questions: {remainingQuestions}</h4>
		<Question
			key={currentQuestion.id}
			question={currentQuestion}
			choices={currentQuestion.choices}
			onSelect={handleAnswerSelect}
		/>
		<h4>Score: {score}</h4>
		</div>
	);
};

export default Quiz;
