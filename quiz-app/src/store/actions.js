// actions.js

export const answerQuestion = (questionId, choiceId) => {
	return {
		type: 'ANSWER_QUESTION',
		payload: {
			questionId,
			choiceId,
		},
	};
};