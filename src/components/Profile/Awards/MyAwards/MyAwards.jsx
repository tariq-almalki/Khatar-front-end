import styled from 'styled-components';
import { motion } from 'framer-motion';

// animations
import { awardsAnimations } from '../awardsAnimations';

const MyAwardsComponent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	align-items: center;
	justify-content: center;
	font-family: 'Rajdhani';
	font-size: 3.5em;
`;

export function MyAwards() {
	return <MyAwardsComponent {...awardsAnimations}>My Awards</MyAwardsComponent>;
}
