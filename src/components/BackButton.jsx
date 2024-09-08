import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/ROUTES';

const BackButton = () => {
	const navigate = useNavigate();

	return (
		<span className='back-button' onClick={() => navigate(ROUTES.HOME)}>
			Go Back
		</span>
	);
};

export default BackButton;
