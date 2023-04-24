import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

// animations
import { awardsAnimations } from './awardsAnimations';

const StyledAwards = styled(motion.div)`
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

export function Awards() {
	const location = useLocation();

	const regexExpr = /(?<=\/profile\/awards\/)(my\-awards|team\-awards)(?=\/?)/;

	const result = regexExpr.test(location.pathname);

	return (
		<>
			{result ? (
				<Outlet />
			) : (
				<StyledAwards {...awardsAnimations}>
					<StyledButtonLink to="my-awards">
						<StyledButton className="btn-outline glass btn">Awards</StyledButton>
					</StyledButtonLink>
					<div className="divider lg:divider-horizontal">OR</div>
					<StyledButtonLink to="team-awards">
						<StyledButton className="btn-outline glass btn">Team Awards</StyledButton>
					</StyledButtonLink>
				</StyledAwards>
			)}
		</>
	);
}
