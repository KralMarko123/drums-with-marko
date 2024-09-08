import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ROUTES } from './constants/ROUTES';
import Rudiments from './pages/Rudiments';
import Exercises from './pages/Exercises';
import Grooves from './pages/Grooves';
import Songs from './pages/Songs';
import Warmups from './pages/Warmups';
import Practice from './pages/Practice';

const App = () => {
	return (
		<BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route path={ROUTES.WARMUPS} element={<Warmups />} />
				<Route path={ROUTES.RUDIMENTS} element={<Rudiments />} />
				<Route path={ROUTES.EXERCISES} element={<Exercises />} />
				<Route path={ROUTES.GROOVES} element={<Grooves />} />
				<Route path={ROUTES.SONGS} element={<Songs />} />
				<Route path={ROUTES.GENERATOR} element={<Practice />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
