import styled from 'styled-components';
import { motion } from 'framer-motion';

// animations
import { chatAnimations } from '../chatAnimations';

const GeneralChatComponent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	align-items: center;
	justify-content: center;
	font-family: 'Rajdhani';
	font-size: 3.5em;
`;

export function GeneralChat() {
	return <GeneralChatComponent {...chatAnimations}>General Chat</GeneralChatComponent>;
}
