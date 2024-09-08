import React from 'react';
import { EXERCISES } from '../constants/EXERCISES';
import Card from '../components/Card';
import { getThumbnailUrlFromLink } from '../util/helperFunctions';
import BackButton from '../components/BackButton';
import './Exercises.css';

const Exercises = () => {
	return (
		<div className='page exercises'>
			<BackButton />

			<h1 className='title'>Exercises</h1>

			<h2 className='subtitle'>Clicking on a card opens up a new tab</h2>

			<div className='container'>
				{EXERCISES.map((e) => (
					<Card
						key={e.link}
						link={e.link}
						title={e.title}
						image={getThumbnailUrlFromLink(e.link)}
					/>
				))}
			</div>
		</div>
	);
};

export default Exercises;
