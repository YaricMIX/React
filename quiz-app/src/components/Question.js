import React, { useState } from 'react';

const Question = ({ question, choices, onSelect }) => {
	const [selectedChoice, setSelectedChoice] = useState(null);

	const handleChoiceSelect = (choiceId) => {
		setSelectedChoice(choiceId);
		onSelect(question.id, choiceId);
	};

	return (
		<div>
		<h4>{question.text}</h4>
		{choices.map((choice) => (
			<button
			key={choice.id}
			onClick={() => handleChoiceSelect(choice.id)}
			disabled={selectedChoice !== null}
			>
			{choice.text}
			</button>
		))}
		</div>
	);
};

export default Question;
