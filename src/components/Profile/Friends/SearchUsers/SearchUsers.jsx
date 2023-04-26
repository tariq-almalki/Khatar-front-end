import styled from 'styled-components';
import { motion } from 'framer-motion';

import { friendsAnimations } from '../friendsAnimations';

const SearchUsersComponent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	align-items: center;
	justify-content: center;
	font-family: 'Rajdhani';
	font-size: 3.5em;
`;

export function SearchUsers() {
	return <SearchUsersComponent {...friendsAnimations}>Search Users</SearchUsersComponent>;
}
