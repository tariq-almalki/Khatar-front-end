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
	align-items: start;
	font-family: 'Rajdhani';
	padding: 1em;
`;

export function BasicInfo() {
	return (
		<BasicInfoComponent {...accountAnimations}>
			<AccountImage />
			<AccountBasicInfo />
		</BasicInfoComponent>
	);
}
