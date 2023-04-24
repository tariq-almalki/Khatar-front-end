import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

// animations
import { chatAnimations } from './chatAnimations';

const StyledChat = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	flex-grow: 1;
	padding: 1em;
	max-width: 1920px;

	@media only all and (max-width: 1023px) {
		flex-direction: column;
	}
`;

const StyledButtonLink = styled(Link)`
	display: flex;
	flex-direction: column;
	flex: 1 1 0;
	flex-grow: 1;
`;

const StyledButton = styled.div`
	font-family: 'Rajdhani' !important;
	font-size: 2.5em !important;
	color: white !important;
	flex-grow: 1;

	@media only all and (min-width: 1023px) {
		font-size: 3.5em !important;
	}

	&:hover {
		background-color: #661ae6 !important;
		color: white !important;
	}
`;

export function Chat() {
	const location = useLocation();

	const regexExpr = /(?<=\/profile\/chat\/)(general\-chat|friends\-chat|team\-chat)(?=\/?)/;

	const result = regexExpr.test(location.pathname);

	return (
		<>
			{result ? (
				<Outlet />
			) : (
				<StyledChat {...chatAnimations}>
					<StyledButtonLink to="general-chat">
						<StyledButton className="btn-outline glass btn">General Chat</StyledButton>
					</StyledButtonLink>
					<div className="divider lg:divider-horizontal">OR</div>
					<StyledButtonLink to="friends-chat">
						<StyledButton className="btn-outline glass btn">Friends Chat</StyledButton>
					</StyledButtonLink>
					<div className="divider lg:divider-horizontal">OR</div>
					<StyledButtonLink to="team-chat">
						<StyledButton className="btn-outline glass btn">Team Chat</StyledButton>
					</StyledButtonLink>
				</StyledChat>
			)}
		</>
	);
}
