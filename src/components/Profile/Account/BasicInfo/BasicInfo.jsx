import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import { useContext, useState } from 'react';

// firebase
import { doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { firestore } from '@/firebase';

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
	const { theme, authUser } = useOutletContext();
	const [file, setFile] = useState();
	const [button2State, setButton2State] = useState({
		styles: {},
		disabled: true,
	});
	const [docRef, loading, error] = useDocument(doc(firestore, 'users', authUser.uid));

	function button2StateHandler(stateFunction) {
		setButton2State(stateFunction);
	}

	return (
		<BasicInfoComponent theme={theme} {...accountAnimations}>
			{docRef && (
				<>
					<AccountImage setFile={setFile} disabled={button2State.disabled} docUser={docRef.data()} theme={theme} />
					<AccountBasicInfo
						file={file}
						button2State={button2State}
						button2StateHandler={button2StateHandler}
						docUser={docRef.data()}
						theme={theme}
					/>
				</>
			)}
		</BasicInfoComponent>
	);
}
