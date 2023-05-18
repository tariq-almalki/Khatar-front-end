import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import { useContext, useState } from 'react';

// components
import { AccountImage } from './AccountImage/AccountImage';
import { AccountBasicInfo } from './AccountBasicInfo/AccountBasicInfo';

// animations
import { accountAnimations } from '../accountAnimations';

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
	const [file, setFile] = useState('');
	const [button2State, setButton2State] = useState({
		styles: {},
		disabled: true,
	});

	function button2StateHandler(stateFunction) {
		setButton2State(stateFunction);
	}

	return (
		<BasicInfoComponent theme={theme} {...accountAnimations}>
			<AccountImage setFile={setFile} disabled={button2State.disabled} user={user} theme={theme} />
			<AccountBasicInfo
				file={file}
				button2State={button2State}
				button2StateHandler={button2StateHandler}
				user={user}
				theme={theme}
			/>
		</BasicInfoComponent>
	);
}
