import styled from 'styled-components';
import { motion } from 'framer-motion';

// animations
import { helpRequestsNotificationsAnimations } from './helpRequestsNotificationsAnimations';

const StyledHelpRequestsNotifications = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export function HelpRequestsNotifications() {
	return (
		<StyledHelpRequestsNotifications {...helpRequestsNotificationsAnimations}>
			Help Requests
		</StyledHelpRequestsNotifications>
	);
}
