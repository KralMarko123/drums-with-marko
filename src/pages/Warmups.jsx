import React from 'react';
import Card from '../components/Card';
import { WARMUPS } from '../constants/WARMUPS';
import { getThumbnailUrlFromLink } from '../util/helperFunctions';
import BackButton from '../components/BackButton';
import './Warmups.css';

const Warmups = () => {
	return (
		<div className='page warmups'>
			<BackButton />

			<h1 className='title'>Warmups</h1>

			<h2 className='subtitle'>Clicking on a card opens up a new tab</h2>

			<div className='container'>
				{WARMUPS.map((w) => (
					<Card
						key={w.link}
						link={w.link}
						title={w.title}
						image={getThumbnailUrlFromLink(w.link)}
					/>
				))}
			</div>
		</div>
	);
};

export default Warmups;
