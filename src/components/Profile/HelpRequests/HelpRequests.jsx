import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Outlet, useOutletContext } from 'react-router-dom';
import { useContext } from 'react';

// animations
import { helpRequestsAnimations } from './helpRequestsAnimations';

const StyledHelpRequests = styled(motion.div)`
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

export function HelpRequests() {
	const location = useLocation();

	const outletContext = useOutletContext();

	const regexExpr = /(?<=\/profile\/help\-requests\/)(my\-help\-requests|others\-help\-requests)(?=\/?)/;

	const result = regexExpr.test(location.pathname);

	return (
		<>
			{result ? (
				<Outlet />
			) : (
				<StyledHelpRequests {...helpRequestsAnimations}>
					<StyledButtonLink to="my-help-requests">
						<StyledButton theme={outletContext.theme} className="btn-outline glass btn">
							Help Requests
						</StyledButton>
					</StyledButtonLink>
					<StyledDivider theme={outletContext.theme} className="divider lg:divider-horizontal">
						OR
					</StyledDivider>
					<StyledButtonLink to="others-help-requests">
						<StyledButton theme={outletContext.theme} className="btn-outline glass btn">
							Others Help Requests
						</StyledButton>
					</StyledButtonLink>
				</StyledHelpRequests>
			)}
		</>
	);
}
