import warmup from '../assets/images/warmup thumbnail.jpg';
import rudiments from '../assets/images/rudiments thumbnail.jpg';
import exercises from '../assets/images/exercises thumbnail.jpg';
import grooves from '../assets/images/grooves thumbnail.jpg';
import songs from '../assets/images/songs thumbnail.jpg';
import dice from '../assets/images/dice thumbnail.jpg';
import { ROUTES } from './ROUTES';

export const SECTIONS = [
	{
		title: 'Warmups',
		description:
			"Get ready to enhance your drumming with targeted warmup exercises that focus on stick control, coordination, and flexibility. These routines will help improve your technique and prevent injury, ensuring you're prepared for a productive session.",
		image: warmup,
		route: ROUTES.WARMUPS
	},

	{
		title: 'Rudiments',
		description:
			'Explore essential drumming techniques with comprehensive rudiments exercises. Perfect your rolls, paradiddles, and flams to build a solid foundation and elevate your drumming skills.',
		image: rudiments,
		route: ROUTES.RUDIMENTS
	},

	{
		title: 'Exercises',
		description:
			'Challenge yourself with a variety of exercises designed to enhance your rhythm, coordination, and speed. Perfect for developing versatility and strength in your playing.',
		image: exercises,
		route: ROUTES.EXERCISES
	},

	{
		title: 'Grooves',
		description:
			'Dive into a range of rhythmic patterns and styles to add depth and flair to your drumming. From funky beats to intricate rhythms, these grooves will help you develop a versatile and engaging playing style.',
		image: grooves,
		route: ROUTES.GROOVES
	},

	{
		title: 'Songs',
		description:
			'Master popular tracks with various song tutorials. Perfect for applying your skills and playing along with music you love. Start learning and bring your drumming to life with your favorite songs!',
		image: songs,
		route: ROUTES.SONGS
	},

	{
		title: 'Practice Generator',
		description:
			'Create an ideal practice session using a different exercise from each section, completely randomized each time so that you can always work on something new!',
		image: dice,
		route: ROUTES.GENERATOR
	}
];
