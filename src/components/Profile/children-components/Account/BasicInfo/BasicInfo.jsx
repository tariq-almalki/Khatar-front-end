import styled from 'styled-components';
import { motion } from 'framer-motion';

// components
import { AccountImage } from './AccountImage/AccountImage';
import { AccountBasicInfo } from './AccountBasicInfo/AccountBasicInfo';

import { accountAnimations } from '../accountAnimations';

const BasicInfoComponent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	flex-wrap: wrap;
	align-items: start;
	font-family: 'Rajdhani';
	font-size: 3.5em;
	/* padding: 1em; */
`;

const BasicInfoLimitingContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	/* padding: 0.5em; */
	height: 100%;
	max-width: 45em;
	border: 1px solid red;
`;

export function BasicInfo() {
	return (
		<BasicInfoComponent {...accountAnimations}>
			<AccountImage />
			<AccountBasicInfo />
		</BasicInfoComponent>
	);
}
