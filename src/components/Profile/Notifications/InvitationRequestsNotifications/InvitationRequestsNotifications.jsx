import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';

// animations
import { invitationRequestsNotificationsAnimations } from './invitationRequestsNotificationsAnimation';

const StyledInvitationRequestsNotifications = styled(motion.div)`
	display: flex;
	height: 100%;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].notificationOutletColor};
	justify-content: center;
	align-items: center;
`;

export function InvitationRequestsNotifications() {
	const outletContext = useOutletContext();
	return (
		<StyledInvitationRequestsNotifications theme={outletContext.theme} {...invitationRequestsNotificationsAnimations}>
			Invitation Requests
		</StyledInvitationRequestsNotifications>
	);
}
