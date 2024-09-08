import { RUDIMENTS } from '../constants/RUDIMENTS';
import { WARMUPS } from '../constants/WARMUPS';
import { EXERCISES } from '../constants/EXERCISES';
import { GROOVES } from '../constants/GROOVES';
import { SONGS } from '../constants/SONGS';

export const getThumbnailUrlFromLink = (link) => {
	return `https://img.youtube.com/vi/${link.substring(17)}/mqdefault.jpg`;
};

export const getRandomItemFromArray = (array) => {
	return array[Math.floor(Math.random() * array.length)];
};

export const getRandomizedExercises = () => {
	return [
		getRandomItemFromArray(WARMUPS),
		getRandomItemFromArray(RUDIMENTS),
		getRandomItemFromArray(EXERCISES),
		getRandomItemFromArray(GROOVES),
		getRandomItemFromArray(SONGS)
	];
};
