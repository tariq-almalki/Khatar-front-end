import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { useOutletContext, Form, Link } from 'react-router-dom';
import { AwesomeButtonProgress } from 'react-awesome-button';
import AwesomeButtonStyles from '@/styles/styles.module.scss';

// animations
import { forgotPasswordAnimations } from './forgotPasswordAnimations';

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

const StyledForgotPassword = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].forgetPasswordPageBackgroundColor};
	flex-grow: 1;
	height: fit-content;
	max-width: 350px;
	min-width: 300px;
	border-radius: 4px;
	padding: 16px;
	margin: 16px;
`;

// ----------------------------------------------

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	gap: 1em;
`;

// ----------------------------------------------

const StyledDiv1 = styled.div``;

const StyledSpan1 = styled.span`
	font-family: 'Rajdhani';
	font-size: 28px;
	color: ${props => useContext(ThemeContext).colors[props.theme].forgetPasswordPageTextColor};
`;

// ----------------------------------------------

const StyledP = styled.p`
	font-family: 'Rajdhani';
	color: ${props => useContext(ThemeContext).colors[props.theme].forgetPasswordPageTextColor};
`;

// ----------------------------------------------

const StyledLabel = styled.label`
	font-family: 'Rajdhani';
	color: ${props => useContext(ThemeContext).colors[props.theme].forgetPasswordPageTextColor};
`;

const StyledInput = styled.input`
	font-family: 'Rajdhani';
	color: ${props => useContext(ThemeContext).colors[props.theme].forgetPasswordInputTextColor} !important;
	background-color: white !important;
	border: 1px solid ${props => useContext(ThemeContext).colors[props.theme].forgetPasswordInputBorderColor} !important;
`;

// ----------------------------------------------

const StyledDiv2 = styled.div`
	align-self: start;
`;

// ----------------------------------------------

const StyledDiv3 = styled.div`
	display: flex;
	justify-content: center;
`;

const StyledLink = styled(Link)`
	font-family: 'Rajdhani';
	transition: all 0.2s ease;
	color: ${props => useContext(ThemeContext).colors[props.theme].forgetPasswordPageTextColor};

	&:hover {
		color: magenta;
	}
`;

const StyledSpan2 = styled.span`
	font-family: 'Rajdhani';
	transition: all 0.2s ease;
	color: ${props => useContext(ThemeContext).colors[props.theme].forgetPasswordPageTextColor};
`;

// ----------------------------------------------

export function ForgotPassword() {
	const { theme } = useOutletContext();

	const AwesomeButtonProgressStyles = {
		'--button-primary-color': useContext(ThemeContext).colors[theme].authPageButtonColor,
		'--button-primary-color-dark': useContext(ThemeContext).colors[theme].authPageButtonColorDark,
		'--button-primary-color-hover': useContext(ThemeContext).colors[theme].authPageButtonColorHover,
		'--button-primary-color-active': useContext(ThemeContext).colors[theme].authPageButtonColorActive,
		'--button-primary-border': `1px solid ${useContext(ThemeContext).colors[theme].authPageButtonBorderColor}`,
		'--button-font-color': useContext(ThemeContext).colors[theme].authPageButtonFontColor,
		width: '100%',
		fontFamily: 'Rajdhani',
	};

	return (
		<StyledOuterDiv>
			<StyledForgotPassword theme={theme} {...forgotPasswordAnimations}>
				<StyledForm>
					<StyledDiv1>
						<StyledSpan1 theme={theme}>Reset Your Password</StyledSpan1>{' '}
					</StyledDiv1>
					<div>
						<StyledP theme={theme}>
							Lost your password? please enter your email address. You will receive a link to create new
							password via email
						</StyledP>
					</div>
					<div>
						<StyledLabel theme={theme} className="label">
							Email:
						</StyledLabel>
						<StyledInput theme={theme} className="input-bordered input w-full max-w-xs" />
					</div>
					<StyledDiv2>
						<AwesomeButtonProgress
							style={AwesomeButtonProgressStyles}
							cssModule={AwesomeButtonStyles}
							type="primary"
						>
							Reset Password
						</AwesomeButtonProgress>
					</StyledDiv2>
					<StyledDiv3>
						<StyledLink to="../sign-in" theme={theme}>
							<StyledSpan2 theme={theme}>or</StyledSpan2> Sign In
						</StyledLink>
					</StyledDiv3>
				</StyledForm>
			</StyledForgotPassword>
		</StyledOuterDiv>
	);
}
