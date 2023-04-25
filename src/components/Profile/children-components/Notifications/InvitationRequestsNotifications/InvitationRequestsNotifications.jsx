import styled from 'styled-components';
import { motion } from 'framer-motion';

// animations
import { invitationRequestsNotificationsAnimations } from './invitationRequestsNotificationsAnimation';

const StyledInvitationRequestsNotifications = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export function InvitationRequestsNotifications() {
	return (
		<StyledInvitationRequestsNotifications {...invitationRequestsNotificationsAnimations}>
			Invitation Requests
		</StyledInvitationRequestsNotifications>
	);
}
