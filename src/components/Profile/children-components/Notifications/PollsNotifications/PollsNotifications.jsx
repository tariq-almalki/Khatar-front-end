import styled from 'styled-components';
import { motion } from 'framer-motion';

// animations
import { pollsNotificationsAnimations } from './pollsNotificationsAnimations';

const StyledPollsNotifications = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export function PollsNotifications() {
	return <StyledPollsNotifications {...pollsNotificationsAnimations}>Polls</StyledPollsNotifications>;
}
