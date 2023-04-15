import styled from 'styled-components';
import { motion } from 'framer-motion';

// components
import { Profile } from './account-sections/Profile/Profile.jsx';

// animations
import { accountAnimations } from './accountAnimations.js';

const AccountComponent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	flex-grow: 1;
	justify-content: center;
	align-items: center;
	height: max-content;
	/* max-width: 95%; */
`;

export function Account() {
	// for stopping animation upon routing
	const body = document.querySelector('body');
	body.classList.add('no-animation');
	setTimeout(() => body.classList.remove('no-animation'), 300);
	//

	return (
		<AccountComponent {...accountAnimations}>
			<Profile />
		</AccountComponent>
	);
}
