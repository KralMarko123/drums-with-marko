import React from 'react';
import BackButton from '../components/BackButton';
import { GROOVES } from '../constants/GROOVES';
import Card from '../components/Card';
import { getThumbnailUrlFromLink } from '../util/helperFunctions';
import './Grooves.css';

const Grooves = () => {
	return (
		<div className='page grooves'>
			<BackButton />

			<h1 className='title'>Grooves</h1>

			<h2 className='subtitle'>Clicking on a card opens up a new tab</h2>

			<div className='container'>
				{GROOVES.map((g) => (
					<Card
						key={g.link}
						link={g.link}
						title={g.title}
						image={getThumbnailUrlFromLink(g.link)}
					/>
				))}
			</div>
		</div>
	);
};

export default Grooves;
