import React from 'react';
import Card from '../components/Card';
import { SECTIONS } from '../constants/SECTIONS';
import './Home.css';

const Home = () => {
	return (
		<div className='page home'>
			<div className='page-container'>
				{SECTIONS.map((s) => (
					<Card key={s.title} title={s.title} description={s.description} image={s.image} />
				))}
			</div>
		</div>
	);
};

export default Home;
