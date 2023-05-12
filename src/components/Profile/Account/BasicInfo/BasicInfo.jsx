import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';

// components
import { AccountImage } from './AccountImage/AccountImage';
import { AccountBasicInfo } from './AccountBasicInfo/AccountBasicInfo';

// animations
import { accountAnimations } from '../accountAnimations';
import { useContext } from 'react';

const BasicInfoComponent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].accountBackgroundColor};
	border-radius: 4px;
	border: 1px solid black;
	margin: 1em;
	flex-grow: 1;
	height: fit-content;
	max-width: fit-content;
	align-items: start;
	font-family: 'Rajdhani';
	/* padding: 1em; */
`;

export function BasicInfo() {
	const { theme, user } = useOutletContext();

	return (
		<BasicInfoComponent theme={theme} {...accountAnimations}>
			<AccountImage user={user} theme={theme} />
			<AccountBasicInfo user={user} theme={theme} />
		</BasicInfoComponent>
	);
}
