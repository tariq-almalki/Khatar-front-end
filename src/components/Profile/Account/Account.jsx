import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Outlet, useOutletContext } from 'react-router-dom';
import { useContext } from 'react';

// animations
import { accountAnimations } from './accountAnimations';

const StyledAccount = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	flex-grow: 1;
	padding: 1em;
	max-width: 1920px;

	@media only all and (max-width: 1279px) {
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

	@media only all and (min-width: 1280px) {
		font-size: 3.5em !important;
	}
`;

const StyledDivider = styled.div`
	font-weight: bold !important;
	font-style: italic !important;
	font-family: 'Rajdhani';
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

export function Account() {
	const location = useLocation();

	const { theme, authUser } = useOutletContext();

	const regexExpr = /(?<=\/profile\/account\/)(basic\-info|contact\-info|change\-password|delete\-account)(?=\/?)/;

	const result = regexExpr.test(location.pathname);

	return (
		<>
			{result ? (
				<Outlet context={{ theme, authUser }} />
			) : (
				<StyledAccount {...accountAnimations}>
					<StyledButtonLink to="basic-info">
						<StyledButton theme={theme} className="btn-outline glass btn">
							Basic Info
						</StyledButton>
					</StyledButtonLink>
					<StyledDivider theme={theme} className="divider xl:divider-horizontal">
						OR
					</StyledDivider>
					<StyledButtonLink to="contact-info">
						<StyledButton theme={theme} className="btn-outline glass btn">
							Contact Info
						</StyledButton>
					</StyledButtonLink>
					<StyledDivider theme={theme} className="divider xl:divider-horizontal">
						OR
					</StyledDivider>
					<StyledButtonLink to="change-password">
						<StyledButton theme={theme} className="btn-outline glass btn">
							Change Password
						</StyledButton>
					</StyledButtonLink>
					<StyledDivider theme={theme} className="divider xl:divider-horizontal">
						OR
					</StyledDivider>
					<StyledButtonLink to="delete-account">
						<StyledButton theme={theme} className="btn-outline glass btn">
							Delete Account
						</StyledButton>
					</StyledButtonLink>
				</StyledAccount>
			)}
		</>
	);
}
