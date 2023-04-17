import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

// animations
import { accountAnimations } from './accountAnimations';

const StyledAccount = styled(motion.div)`
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
	font-size: 3.5em !important;
	color: white !important;
	flex-grow: 1;

	&:hover {
		background-color: #661ae6 !important;
		color: white !important;
	}
`;

export function Account() {
	const location = useLocation();

	const regexExpr = /(?<=\/profile\/friends\/)(basic\-info|contact\-info|change\-password)(?=\/?)/;

	const result = regexExpr.test(location.pathname);

	return (
		<>
			{result ? (
				<Outlet />
			) : (
				<StyledAccount {...accountAnimations}>
					<StyledButtonLink to="my-friends">
						<StyledButton className="btn-outline glass btn">My Friends</StyledButton>
					</StyledButtonLink>
					<div className="divider lg:divider-horizontal">OR</div>
					<StyledButtonLink to="friend-requests">
						<StyledButton className="btn-outline glass btn">Friend Requests</StyledButton>
					</StyledButtonLink>
					<div className="divider lg:divider-horizontal">OR</div>
					<StyledButtonLink to="search-users">
						<StyledButton className="btn-outline glass btn">Search Users</StyledButton>
					</StyledButtonLink>
				</StyledAccount>
			)}
		</>
	);
}
