import styled, { ThemeContext } from 'styled-components';
import { useContext, useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles1 from '@/styles/styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'; 

// firebase
import { auth } from '@/firebase';
import { confirmPasswordReset } from 'firebase/auth';

// animations
import { resetPasswordAnimations } from './resetPasswordAnimations';

// validation schema
import { validationSchema } from './validationSchema';

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

const StyledResetPassword = styled(motion.div)`
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

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5em;
`;

// ----------------------------------------------

const StyledH1 = styled.h1`
	font-family: 'Rajdhani';
	font-size: 32px;
	padding: 16px;
	margin: auto;
	color: ${props => useContext(ThemeContext).colors[props.theme].signInPageTextColor};
	font-weight: bold;
`;

// ----------------------------------------------

const StyledLabel = styled.label`
	display: flex;
	position: relative;
	gap: 0.5em;
	flex-direction: column;
	width: 100%;
`;

const StyledSpan = styled.span`
	font-family: 'Rajdhani';
	font-size: 16px;
	color: ${props => useContext(ThemeContext).colors[props.theme].signInPageTextColor};
`;

const StyledInput = styled.input`
	font-family: 'Rajdhani';
	color: ${props => useContext(ThemeContext).colors[props.theme].signInInputTextColor} !important;
	background-color: white !important;
	width: 100% !important;

	&:focus {
		outline: none !important;
	}

	&::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: ${props => useContext(ThemeContext).colors[props.theme].signInInputPlaceHolderTextColor} !important;
		opacity: 1; /* Firefox */
	}

	&:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: ${props => useContext(ThemeContext).colors[props.theme].signInInputPlaceHolderTextColor} !important;
	}

	&::-ms-input-placeholder {
		/* Microsoft Edge */
		color: ${props => useContext(ThemeContext).colors[props.theme].signInInputPlaceHolderTextColor} !important;
	}

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus,
	&:-webkit-autofill:active {
		-webkit-text-fill-color: ${props => useContext(ThemeContext).colors[props.theme].signInInputTextColor} !important;
		-webkit-box-shadow: 0 0 0px 1000px white inset !important;
		border: none;
		caret-color: black !important;
	}
`;

// ----------------------------------------------

const StyledDiv1 = styled.div``;
const StyledDiv2 = styled.div`
	width: 100%;
`;
const StyledDiv3 = styled.div`
	align-self: start;
`;

// ----------------------------------------------

const StyledErrorDiv = styled.div`
	position: absolute;
	font-size: 1em;
	top: -25px;
	left: 2px;
	font-family: 'Rajdhani';
	color: red;

	@media only screen and (max-width: 350px) {
		font-size: 0.8em;
	}
`;

const StyledEyeButton = styled.button`
	color: black !important;
	background-color: white !important;
	border-left: 2px solid ${props => useContext(ThemeContext).colors[props.theme].signInRightBorderColor} !important;
	border-top: none !important;
	border-bottom: none !important;
	border-right: none !important;
`;

export function ResetPassword() {
	const { theme } = useOutletContext();
	const navigate = useNavigate();
	const [eyeIcon, setEyeIcon] = useState({
		type: 'password',
		icon: faEyeSlash,
	});

	const formik = useFormik({
		initialValues: {
			password: '',
		},
		validationSchema,
		onSubmit: async values => {
			// Get the URL query string
			const queryString = window.location.search;

			// Parse the query string into an object
			const params = new URLSearchParams(queryString);

			// Get the code parameter value
			// Password Reset Code
			const code = params.get('oobCode');

			try {
				await confirmPasswordReset(auth, code, values.password);
				alert('Your password has been reset successfully');
				navigate('/auth/sign-in');
			} catch (e) {
				alert(e.message);
			}
		},
	});

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

	function VisibilityHandler() {
		setEyeIcon(state =>
			state.icon.iconName === 'eye' ? { type: 'password', icon: faEyeSlash } : { type: 'text', icon: faEye }
		);
	}

	return (
		<StyledOuterDiv>
			<StyledResetPassword theme={theme} {...resetPasswordAnimations}>
				<StyledForm onSubmit={formik.handleSubmit}>
					<StyledDiv1>
						<StyledH1 theme={theme}>Reset Password</StyledH1>
					</StyledDiv1>
					<StyledDiv2>
						<StyledLabel>
							<StyledSpan theme={theme}>New Password:</StyledSpan>
							<div className="input-group">
								<StyledInput
									id="password"
									name="password"
									value={formik.values.password}
									onChange={formik.handleChange}
									theme={theme}
									type={eyeIcon.type}
									placeholder="New Password"
									required
									className="input input-md"
								/>
								<StyledEyeButton
									theme={theme}
									className="btn-square btn"
									type="button"
									onClick={VisibilityHandler}
								>
									<FontAwesomeIcon icon={eyeIcon.icon} />
								</StyledEyeButton>
							</div>
							{formik.errors.password && formik.touched.password && (
								<StyledErrorDiv>{formik.errors.password}</StyledErrorDiv>
							)}
						</StyledLabel>
					</StyledDiv2>
					<StyledDiv3>
						<AwesomeButton style={AwesomeButtonStyles2} cssModule={AwesomeButtonStyles1} type="primary">
							Reset Password
						</AwesomeButton>
					</StyledDiv3>
				</StyledForm>
			</StyledResetPassword>
		</StyledOuterDiv>
	);
}
