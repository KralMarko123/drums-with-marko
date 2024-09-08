import React from 'react';
import './Card.css';

const Card = ({ title, image, description }) => {
	return (
		<div className='card'>
			<img className='card-image' src={image} alt='card-image' />
			<h2 className='title'>{title}</h2>

			<p className='description'>{description}</p>
		</div>
	);
};

export default Card;
