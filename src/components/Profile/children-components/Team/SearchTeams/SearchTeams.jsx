import styled from 'styled-components';
import { motion } from 'framer-motion';

import { teamAnimations } from '../teamAnimations';

const SearchTeamsComponent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	align-items: center;
	justify-content: center;
	font-family: 'Rajdhani';
	font-size: 3.5em;
`;

export function SearchTeams() {
	return <SearchTeamsComponent {...teamAnimations}>Search Teams</SearchTeamsComponent>;
}
