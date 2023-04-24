import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

// animations
import { teamAnimations } from './teamAnimations.js';

const StyledTeam = styled(motion.div)`
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

export function Team() {
	const location = useLocation();

	const regexExpr = /(?<=\/profile\/team\/)(my\-team|search\-teams)(?=\/?)/;

	const result = regexExpr.test(location.pathname);

	return (
		<>
			{result ? (
				<Outlet />
			) : (
				<StyledTeam {...teamAnimations}>
					<StyledButtonLink to="my-team">
						<StyledButton className="btn-outline glass btn">Team</StyledButton>
					</StyledButtonLink>
					<div className="divider lg:divider-horizontal">OR</div>
					<StyledButtonLink to="search-teams">
						<StyledButton className="btn-outline glass btn">Search Teams</StyledButton>
					</StyledButtonLink>
				</StyledTeam>
			)}
		</>
	);
}
