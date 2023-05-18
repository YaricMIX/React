const questionsData = [
	{
	id: 1,
	text: 'What is the capital of France?',
	choices: [
		{ id: 1, text: 'Paris', isCorrect: true },
		{ id: 2, text: 'London', isCorrect: false },
		{ id: 3, text: 'Berlin', isCorrect: false },
		],
		correctChoice: 1,
	},
	{
		id: 2,
		text: 'Who painted the Mona Lisa?',
		choices: [
			{ id: 1, text: 'Leonardo da Vinci', isCorrect: true },
			{ id: 2, text: 'Pablo Picasso', isCorrect: false },
			{ id: 3, text: 'Vincent van Gogh', isCorrect: false },
			{ id: 4, text: 'Michelangelo', isCorrect: false },
			],
		correctChoice: 1,
	},
	{
		id: 3,
		text: 'What is the capital city of Australia?',
		choices: [
			{ id: 1, text: 'Sydney', isCorrect: false },
			{ id: 2, text: 'Melbourne', isCorrect: false },
			{ id: 3, text: 'Canberra', isCorrect: true },
			{ id: 4, text: 'Perth', isCorrect: false },
			],
			correctChoice: 3,
	},
	{
		id: 4,
		text: 'What is the largest planet in our solar system?',
		choices: [
			{ id: 1, text: 'Mercury', isCorrect: false },
			{ id: 2, text: 'Venus', isCorrect: false },
			{ id: 3, text: 'Earth', isCorrect: false },
			{ id: 4, text: 'Jupiter', isCorrect: true },
			],
			correctChoice: 4,
	},
	{
		id: 5,
		text: 'Who wrote the play "Romeo and Juliet"?',
		choices: [
			{ id: 1, text: 'William Shakespeare', isCorrect: true },
			{ id: 2, text: 'Oscar Wilde', isCorrect: false },
			{ id: 3, text: 'Jane Austen', isCorrect: false },
			{ id: 4, text: 'George Orwell', isCorrect: false },
			],
			correctChoice: 1,
	},
	{
		id: 6,
		text: 'What is the chemical symbol for gold?',
		choices: [
			{ id: 1, text: 'Au', isCorrect: true },
			{ id: 2, text: 'Ag', isCorrect: false },
			{ id: 3, text: 'Fe', isCorrect: false },
			{ id: 4, text: 'Hg', isCorrect: false },
			],
			correctChoice: 1,
	},
];

export default questionsData;