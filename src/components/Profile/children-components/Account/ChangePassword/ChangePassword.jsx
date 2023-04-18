import styled from 'styled-components';
import { motion } from 'framer-motion';

import { accountAnimations } from '../accountAnimations';

const ChangePasswordComponent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	align-items: center;
	justify-content: center;
	font-family: 'Rajdhani';
	font-size: 3.5em;
`;

export function ChangePassword() {
	return <ChangePasswordComponent {...accountAnimations}>Change Password</ChangePasswordComponent>;
}
