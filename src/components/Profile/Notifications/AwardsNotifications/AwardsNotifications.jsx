import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';

// animations
import { awardsNotificationsAnimations } from './awardsNotificationsAnimations';

const StyledAwardsNotifications = styled(motion.div)`
	display: flex;
	height: 100%;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].notificationOutletColor};
	justify-content: center;
	align-items: center;
`;

export function AwardsNotifications() {
	const outletContext = useOutletContext();
	return (
		<StyledAwardsNotifications theme={outletContext.theme} {...awardsNotificationsAnimations}>
			Awards
		</StyledAwardsNotifications>
	);
}
