import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ title, image, description, route, link, author }) => {
	const navigate = useNavigate();

	return (
		<div
			className={`card${link ? ' link' : ''}`}
			onClick={() => (route ? navigate(route) : window.open(link, '_blank'))}
		>
			<img className='card-image' src={image} alt='card-image' loading='lazy' />
			<h2 className='title'>{title}</h2>
			<p className='description'>{description}</p>
			{author && <p className='author'>By {author}</p>}
		</div>
	);
};

export default Card;
