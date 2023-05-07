import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import googleSVG from '@/assets/svgs/icons8-google.svg';
import twitterSVG from '@/assets/svgs/icons8-twitter.svg';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from '@/styles/styles.module.scss';

// animations
import { authPageAnimations } from './authPageAnimations';

const StyledOuterDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	overflow-y: auto;

	/* glossy effect */
	backdrop-filter: blur(16px) saturate(180%);
	-webkit-backdrop-filter: blur(16px) saturate(180%);
	background-color: rgba(18, 19, 56, 0.418);

	/* Hide scrollbar for Chrome, Safari and Opera */
	&::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
`;

// ----------------------------------------------

const StyledAuthPage = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].authPageBackgroundColor};
	flex-grow: 1;
	height: fit-content;
	max-width: 350px;
	min-width: 300px;
	border-radius: 4px;
	padding: 16px;
	margin: 16px;
`;

const StyledDiv1 = styled.div`
	font-family: 'Rajdhani';
	font-size: 32px;
	padding: 16px;
	margin: auto;
	color: ${props => useContext(ThemeContext).colors[props.theme].authPageTextColor};
	font-weight: bold;
`;

const StyledDiv2 = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

// ----------------------------------------------

const StyledGoogleAwesomeButton = styled(AwesomeButton)`
	display: flex;
	justify-content: space-evenly;
	padding: 16px;
	border: 1px solid red;
	border-radius: 4px;
`;

const StyledGoogleImg = styled.img`
	display: inline;
`;

const StyledGoogleSpan = styled.span`
	display: flex;
	align-items: center;
	font-family: 'Rajdhani';
	color: ${props => useContext(ThemeContext).colors[props.theme].authPageTextColor};
	padding-left: 10px;
	padding-right: 35px;
`;

// ----------------------------------------------

const StyledTwitterAwesomeButton = styled(AwesomeButton)`
	display: flex;
	justify-content: space-evenly;
	padding: 16px;
	border: 1px solid red;
	border-radius: 4px;
`;

const StyledTwitterImg = styled.img`
	display: inline;
`;

const StyledTwitterSpan = styled.span`
	display: flex;
	align-items: center;
	font-family: 'Rajdhani';
	color: ${props => useContext(ThemeContext).colors[props.theme].authPageTextColor};
	padding-left: 10px;
	padding-right: 35px;
`;

// ----------------------------------------------

const StyledEmailPasswordAwesomeButton = styled(AwesomeButton)`
	text-align: center;
	padding: 16px;
	border: 1px solid red;
	border-radius: 4px;
`;

const StyledEmailPasswordLink = styled(Link)`
	color: ${props => useContext(ThemeContext).colors[props.theme].authPageTextColor} !important;
	font-family: 'Rajdhani';
`;

// ----------------------------------------------

const StyledDivider = styled.div`
	font-family: 'Rajdhani';
	color: ${props => useContext(ThemeContext).colors[props.theme].authPageTextColor};

	&::before {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].authPageDividerColor} !important;
	}

	&::after {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].authPageDividerColor} !important;
	}
`;

// ----------------------------------------------

const StyledSignUpLink = styled(Link)`
	font-family: 'Rajdhani';
	color: ${props => useContext(ThemeContext).colors[props.theme].authPageTextColor};
`;

// ----------------------------------------------

const StyledContinueAsGuestDiv = styled.div`
	display: flex;
	justify-content: center;
`;

const StyledContinueAsGuest = styled(Link)`
	font-family: 'Rajdhani';
	color: ${props => useContext(ThemeContext).colors[props.theme].authPageTextColor};
	transition: all 0.2s ease;

	&:hover {
		color: magenta;
	}
`;

// ----------------------------------------------

export function AuthPage() {
	const { theme } = useOutletContext();

	const AwesomeButtonProgressStyles = {
		'--button-primary-color': useContext(ThemeContext).colors[theme].authPageButtonColor,
		'--button-primary-color-dark': useContext(ThemeContext).colors[theme].authPageButtonColorDark,
		'--button-primary-color-hover': useContext(ThemeContext).colors[theme].authPageButtonColorHover,
		'--button-primary-color-active': useContext(ThemeContext).colors[theme].authPageButtonColorActive,
		'--button-primary-border': `1px solid ${useContext(ThemeContext).colors[theme].authPageButtonBorderColor}`,
		'--button-font-color': useContext(ThemeContext).colors[theme].authPageButtonFontColor,
		width: '100%',
	};

	return (
		<StyledOuterDiv>
			<StyledAuthPage theme={theme} {...authPageAnimations}>
				<StyledDiv1 theme={theme}>Let's you in</StyledDiv1>
				<StyledDiv2>
					<StyledGoogleAwesomeButton
						style={AwesomeButtonProgressStyles}
						theme={theme}
						type="primary"
						cssModule={AwesomeButtonStyles}
					>
						<StyledGoogleImg src={googleSVG} alt="google icon" width={32} height={32} />
						<StyledGoogleSpan theme={theme}>Continue with Google</StyledGoogleSpan>
					</StyledGoogleAwesomeButton>
					<StyledTwitterAwesomeButton
						style={AwesomeButtonProgressStyles}
						theme={theme}
						type="primary"
						cssModule={AwesomeButtonStyles}
					>
						<StyledTwitterImg src={twitterSVG} alt="twitter icon" width={32} height={32} />
						<StyledTwitterSpan theme={theme}>Continue with Twitter</StyledTwitterSpan>
					</StyledTwitterAwesomeButton>
					<StyledEmailPasswordLink to="sign-in" theme={theme}>
						<StyledEmailPasswordAwesomeButton
							style={AwesomeButtonProgressStyles}
							theme={theme}
							type="primary"
							cssModule={AwesomeButtonStyles}
						>
							Email and Password
						</StyledEmailPasswordAwesomeButton>
					</StyledEmailPasswordLink>
				</StyledDiv2>
				<StyledDivider theme={theme} className="divider">
					or
				</StyledDivider>
				<StyledSignUpLink to="sign-up" theme={theme}>
					<AwesomeButton
						style={AwesomeButtonProgressStyles}
						theme={theme}
						type="primary"
						cssModule={AwesomeButtonStyles}
					>
						Sign Up
					</AwesomeButton>
				</StyledSignUpLink>
				<StyledContinueAsGuestDiv>
					<StyledContinueAsGuest theme={theme} to="/">
						Continue as Guest?
					</StyledContinueAsGuest>
				</StyledContinueAsGuestDiv>
			</StyledAuthPage>
		</StyledOuterDiv>
	);
}
