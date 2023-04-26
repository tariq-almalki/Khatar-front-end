import styled from 'styled-components';
import { motion } from 'framer-motion';

// animations
import { allNotificationsAnimations } from './allNotificationsAnimations';

const StyledAllNotifications = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export function AllNotifications() {
	return <StyledAllNotifications {...allNotificationsAnimations}>All</StyledAllNotifications>;
}
