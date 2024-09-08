import React from 'react';
import Card from '../components/Card';
import { SECTIONS } from '../constants/SECTIONS';
import './Home.css';

const Home = () => {
	return (
		<div className='page home'>
			<div className='container'>
				{SECTIONS.map((s) => (
					<Card
						key={s.title}
						title={s.title}
						description={s.description}
						image={s.image}
						route={s.route}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
