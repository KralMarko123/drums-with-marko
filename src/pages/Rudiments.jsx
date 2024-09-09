import React from 'react';
import { RUDIMENTS } from '../constants/RUDIMENTS';
import Card from '../components/Card';
import { getThumbnailUrlFromLink } from '../util/helperFunctions';
import BackButton from '../components/BackButton';
import './Rudiments.css';

const Rudiments = () => {
	return (
		<div className='page rudiments'>
			<BackButton />

			<h1 className='title'>Rudiments</h1>

			<h2 className='subtitle'>Clicking on a card opens up a new tab</h2>

			<div className='container'>
				{RUDIMENTS.map((r) => (
					<Card
						key={r.link}
						link={r.link}
						title={r.title}
						image={getThumbnailUrlFromLink(r.link)}
						author={r.author}
					/>
				))}
			</div>
		</div>
	);
};

export default Rudiments;
