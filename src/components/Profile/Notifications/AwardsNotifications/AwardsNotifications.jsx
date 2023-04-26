import styled from 'styled-components';
import { motion } from 'framer-motion';

// animations
import { awardsNotificationsAnimations } from './awardsNotificationsAnimations';

const StyledAwardsNotifications = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export function AwardsNotifications() {
	return <StyledAwardsNotifications {...awardsNotificationsAnimations}>Awards</StyledAwardsNotifications>;
}
