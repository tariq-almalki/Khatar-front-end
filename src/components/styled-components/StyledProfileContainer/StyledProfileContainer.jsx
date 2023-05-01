import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { useContext } from 'react';

export const StyledProfileContainer = styled(motion.div)`
	display: flex;
	height: 100%;
	width: 100vw;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].profileContainerColor};
`;
