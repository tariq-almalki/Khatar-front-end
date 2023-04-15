import styled from 'styled-components';
import { motion } from 'framer-motion';

// animations
import { teamAnimations } from './teamAnimations.js';

const StyledTeam = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
    flex-grow: 1;
`;

export function Team() {
	return <StyledTeam {...teamAnimations}>Team</StyledTeam>;
}
