import React from 'react';
import BackButton from '../components/BackButton';
import { getRandomizedExercises, getThumbnailUrlFromLink } from '../util/helperFunctions';
import Card from '../components/Card';
import './Practice.css';

const Practice = () => {
	return (
		<div className='page practice'>
			<BackButton />

			<h1 className='title'>Practice Generator</h1>

			<h2 className='subtitle'>Clicking on a card opens up a new tab</h2>

			<div className='container'>
				<p className='info'>
					This is a randomized selection of 5 different exercises covering each section in order to
					guarantee you a unique session. The order of the exercises is as follows: Warmup,
					Rudiment, Exercise, Groove, and finally a Song.
				</p>
			</div>

			<div className='container'>
				{getRandomizedExercises().map((se) => (
					<Card
						key={se.link}
						link={se.link}
						title={se.title}
						image={getThumbnailUrlFromLink(se.link)}
					/>
				))}
			</div>
		</div>
	);
};

export default Practice;
