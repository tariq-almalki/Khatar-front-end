import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles1 from '@/styles/styles.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';

// firebase
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';

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

const StyledForgotPassword = styled(motion.div)`
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

const StyledDivContainer = styled.div`
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

	&:focus {
		outline: none !important;
	}

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus,
	&:-webkit-autofill:active {
		-webkit-text-fill-color: ${props =>
			useContext(ThemeContext).colors[props.theme].forgetPasswordInputTextColor} !important;
		-webkit-box-shadow: 0 0 0px 1000px white inset !important;
		border: none;
		caret-color: black !important;
	}
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

	const [email, setEmail] = useState('');
	const [sendPasswordResetEmail, resetPasswordSending, resetPasswordError] = useSendPasswordResetEmail(auth);

	// if (resetPasswordError) {
	// 	alert(resetPasswordError.message.match(/(?<=auth\/).+(?=\)\.)/));
	// }

	const AwesomeButtonStyles2 = {
		'--button-primary-color': useContext(ThemeContext).colors[theme].authPageButtonColor,
		'--button-primary-color-dark': useContext(ThemeContext).colors[theme].authPageButtonColorDark,
		'--button-primary-color-hover': useContext(ThemeContext).colors[theme].authPageButtonColorHover,
		'--button-primary-color-active': useContext(ThemeContext).colors[theme].authPageButtonColorActive,
		'--button-primary-border': `1px solid ${useContext(ThemeContext).colors[theme].authPageButtonBorderColor}`,
		'--button-font-color': useContext(ThemeContext).colors[theme].authPageButtonFontColor,
		width: '100%',
		fontFamily: 'Rajdhani',
	};

	const actionCodeSettings = {
		url: 'https://localhost:5173/auth/sign-in',
	};

	async function resetPasswordHandler() {
		const res = email.match(
			/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);

		if (res) {
			const success = await sendPasswordResetEmail(email, actionCodeSettings);
			if (success) {
				return alert('Email Sent!');
			}
		}

		alert('Invalid Email');
	}

	return (
		<StyledOuterDiv>
			<StyledForgotPassword theme={theme} {...forgotPasswordAnimations}>
				<StyledDivContainer>
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
						<StyledInput
							onChange={e => setEmail(e.target.value)}
							theme={theme}
							className="input-bordered input w-full max-w-xs"
						/>
					</div>
					<StyledDiv2>
						<AwesomeButton
							onPress={resetPasswordHandler}
							style={AwesomeButtonStyles2}
							cssModule={AwesomeButtonStyles1}
							type="primary"
						>
							Request Reset Password
						</AwesomeButton>
					</StyledDiv2>
					<StyledDiv3>
						<StyledLink to="../sign-in" theme={theme}>
							<StyledSpan2 theme={theme}>or</StyledSpan2> Sign In
						</StyledLink>
					</StyledDiv3>
				</StyledDivContainer>
			</StyledForgotPassword>
		</StyledOuterDiv>
	);
}
