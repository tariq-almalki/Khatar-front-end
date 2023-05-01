import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';

// animations
import { allNotificationsAnimations } from './allNotificationsAnimations';

const StyledAllNotifications = styled(motion.div)`
	display: flex;
	height: 100%;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].notificationOutletColor};
	justify-content: center;
	align-items: center;
`;

export function AllNotifications() {
	const outletContext = useOutletContext();
	return (
		<StyledAllNotifications theme={outletContext.theme} {...allNotificationsAnimations}>
			All
		</StyledAllNotifications>
	);
}
