import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';

// animations
import { helpRequestsNotificationsAnimations } from './helpRequestsNotificationsAnimations';

const StyledHelpRequestsNotifications = styled(motion.div)`
	display: flex;
	height: 100%;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].notificationOutletColor};
	justify-content: center;
	align-items: center;
`;

export function HelpRequestsNotifications() {
	const outletContext = useOutletContext();
	return (
		<StyledHelpRequestsNotifications theme={outletContext.theme} {...helpRequestsNotificationsAnimations}>
			Help Requests
		</StyledHelpRequestsNotifications>
	);
}
