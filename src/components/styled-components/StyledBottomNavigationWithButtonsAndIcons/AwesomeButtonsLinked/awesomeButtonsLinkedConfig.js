// General
import { nanoid } from 'nanoid';
import { auth } from '@/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

// icons imports
import { faHandshakeAngle, faSquarePollVertical, faUserLarge } from '@fortawesome/free-solid-svg-icons';

// styles
import { Button1Styles, Button2Styles, Button3Styles } from './styles.js';

export const awesomeButtonsLinkedConfig = [
	{
		link: {
			to: '/help',
			id: nanoid(),
		},
		button: {
			action: 'Help',
			style: Button1Styles,
			icon: faHandshakeAngle,
			id: nanoid(),
		},
		icon: {
			id: nanoid(),
		},
	},
	{
		link: {
			to: '/poll',
			id: nanoid(),
		},
		button: {
			action: 'Poll',
			style: Button2Styles,
			icon: faSquarePollVertical,
			id: nanoid(),
		},
		icon: {
			id: nanoid(),
		},
	},
	{
		link: {
			to: 'profile/account',
			id: nanoid(),
		},
		button: {
			action: 'Profile',
			style: Button3Styles,
			icon: faUserLarge,
			id: nanoid(),
		},
		icon: {
			id: nanoid(),
		},
	},
];
