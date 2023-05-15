import React from 'react';

export const Question = ({ question, options, selected }) => {
	const handleChange = (event) => {
		selected(event.target.value);
	};

	return (
		<div>
		<h2>{question}</h2>
		<form>
			{options.map((option) => (
			<label className="radio-button" key={option}>
				<input
				type="radio"
				name="option"
				value={option}
				onChange={handleChange}
				/>
				{option}
			</label>
			))}
		</form>
		</div>
	);
};

export default Question;
