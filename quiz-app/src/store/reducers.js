import questionsData from '../data/quizData';

const initialState = {
	questions: questionsData,
	answers: {},
};
  
const quizReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ANSWER_QUESTION':
			const { questionId, choiceId } = action.payload;
			return {
				...state,
				answers: {
					...state.answers,
					[questionId]: choiceId,
				},
			};
		case 'RESET_ANSWERS':
			return {
				...state,
				answers: {},
			};
	
		default:
			return state;
		}
};

export default quizReducer;
