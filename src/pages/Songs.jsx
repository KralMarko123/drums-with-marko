import React from 'react';
import BackButton from '../components/BackButton';
import { SONGS } from '../constants/SONGS';
import Card from '../components/Card';
import { getThumbnailUrlFromLink } from '../util/helperFunctions';
import './Songs.css';

const Songs = () => {
	return (
		<div className='page songs'>
			<BackButton />

			<h1 className='title'>Songs</h1>

			<h2 className='subtitle'>Clicking on a card opens up a new tab</h2>

			<div className='container'>
				{SONGS.map((s) => (
					<Card
						key={s.link}
						link={s.link}
						title={s.title}
						image={getThumbnailUrlFromLink(s.link)}
						author={s.author}
					/>
				))}
			</div>
		</div>
	);
};

export default Songs;
