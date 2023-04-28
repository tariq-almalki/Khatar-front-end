import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Outlet, useOutletContext } from 'react-router-dom';
import { useContext } from 'react';

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
	flex-grow: 1;
	border-radius: 4px !important;
	border: 1px solid ${props => useContext(ThemeContext).colors[props.theme].bigSquaresBorderColor} !important;

	color: ${props => useContext(ThemeContext).colors[props.theme].textColor} !important;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].bigSquaresBackgroundColor} !important;

	&:hover {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].bigSquaresHoverColor} !important;
		color: ${props => useContext(ThemeContext).colors[props.theme].textColor} !important;
	}

	@media only all and (min-width: 1023px) {
		font-size: 3.5em !important;
	}
`;

const StyledDivider = styled.div`
	font-weight: bold !important;
	font-style: italic !important;
	color: ${props => useContext(ThemeContext).colors[props.theme].bigSquaresOrDividerColor} !important;

	&::before {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].dividerColor} !important;
		--tw-bg-opacity: 1 !important;
	}

	&::after {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].dividerColor} !important;
		--tw-bg-opacity: 1 !important;
	}
`;

export function Team() {
	const location = useLocation();

	const outletContext = useOutletContext();

	const regexExpr = /(?<=\/profile\/team\/)(my\-team|search\-teams)(?=\/?)/;

	const result = regexExpr.test(location.pathname);

	return (
		<>
			{result ? (
				<Outlet />
			) : (
				<StyledTeam {...teamAnimations}>
					<StyledButtonLink to="my-team">
						<StyledButton theme={outletContext.theme} className="btn-outline glass btn">
							Team
						</StyledButton>
					</StyledButtonLink>
					<StyledDivider theme={outletContext.theme} className="divider lg:divider-horizontal">
						OR
					</StyledDivider>
					<StyledButtonLink to="search-teams">
						<StyledButton theme={outletContext.theme} className="btn-outline glass btn">
							Search Teams
						</StyledButton>
					</StyledButtonLink>
				</StyledTeam>
			)}
		</>
	);
}
