import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';

// animations
import { pollsNotificationsAnimations } from './pollsNotificationsAnimations';

const StyledPollsNotifications = styled(motion.div)`
	display: flex;
	height: 100%;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].notificationOutletColor};
	justify-content: center;
	align-items: center;
`;

export function PollsNotifications() {
	const outletContext = useOutletContext();
	return (
		<StyledPollsNotifications theme={outletContext.theme} {...pollsNotificationsAnimations}>
			Polls
		</StyledPollsNotifications>
	);
}
