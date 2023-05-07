import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { useOutletContext, Form, Link, useSubmit } from 'react-router-dom';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { AwesomeButtonProgress } from 'react-awesome-button';
import AwesomeButtonStyles from '@/styles/styles.module.scss';

// animations
import { signUpAnimations } from './signUpAnimations';

import { validationSchema } from './validationSchema';

const StyledOuterDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: start;
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

const StyledSignUp = styled.div`
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

// ----------------------------------------------

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;
`;

// ----------------------------------------------

const StyledDiv1 = styled.div`
	font-family: 'Rajdhani';
	font-size: 32px;
	padding: 8px;
	margin: auto;
	color: ${props => useContext(ThemeContext).colors[props.theme].signUpPageTextColor};
	font-weight: bold;
`;

const StyledDiv2 = styled.div`
	width: 100%;
`;

const StyledDiv3 = styled.div`
	font-family: 'Rajdhani';
	color: ${props => useContext(ThemeContext).colors[props.theme].signUpPageTextColor};
`;

// ----------------------------------------------

const StyledDivider = styled.div`
	font-family: 'Rajdhani';
	margin-top: 0px !important;
	margin-bottom: 0px !important;
	color: ${props => useContext(ThemeContext).colors[props.theme].signUpPageTextColor};

	&::before {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].signUpDividerColor} !important;
	}

	&::after {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].signUpDividerColor} !important;
	}
`;

// ----------------------------------------------

const StyledSpan = styled.span``;

const StyledLabel = styled.label`
	&.input-group > :first-child {
		border-top-left-radius: 4px !important;
		border-bottom-left-radius: 4px !important;
		border-right: 2px solid ${props => useContext(ThemeContext).colors[props.theme].signUpRightBorderColor} !important;
	}

	&.input-group > :last-child {
		border-top-right-radius: 4px !important;
		border-bottom-right-radius: 4px !important;
	}
`;

// ----------------------------------------------

const StyledInput = styled.input`
	font-family: 'Rajdhani';
	color: ${props => useContext(ThemeContext).colors[props.theme].signUpInputTextColor} !important;
	background-color: white !important;
	width: 100% !important;

	&:focus {
		outline: none !important;
	}

	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: ${props => useContext(ThemeContext).colors[props.theme].signUpInputTextColor} !important;
		opacity: 1; /* Firefox */
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: ${props => useContext(ThemeContext).colors[props.theme].signUpInputTextColor} !important;
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: ${props => useContext(ThemeContext).colors[props.theme].signUpInputTextColor} !important;
	}
`;

// ----------------------------------------------

const StyledLink = styled(Link)`
	font-family: 'Rajdhani';
	transition: all 0.2s ease;
	color: ${props => useContext(ThemeContext).colors[props.theme].signUpPageTextColor};

	&:hover {
		color: magenta;
	}
`;

// ----------------------------------------------

// ----------------------------------------------

export function SignUp() {
	const { theme } = useOutletContext();
	const submit = useSubmit();

	const formik = useFormik({
		initialValues: {
			name: '',
			username: '',
			password: '',
			confirmPassword: '',
			address: '',
			email: '',
			phoneNumber: '',
			dob: '',
			gender: '',
		},
		validationSchema,
		onSubmit: async values => {
			submit(values, { method: 'post' });
		},
	});

	const AwesomeButtonProgressStyles = {
		'--button-primary-color': useContext(ThemeContext).colors[theme].signUpButtonColor,
		'--button-primary-color-dark': useContext(ThemeContext).colors[theme].signUpButtonColorDark,
		'--button-primary-color-hover': useContext(ThemeContext).colors[theme].signUpButtonColorHover,
		'--button-primary-color-active': useContext(ThemeContext).colors[theme].signUpButtonColorActive,
		'--button-primary-border': `1px solid ${useContext(ThemeContext).colors[theme].signUpButtonBorderColor}`,
		'--button-font-color': useContext(ThemeContext).colors[theme].signUpButtonFontColor,
		width: '100%',
		fontFamily: 'Rajdhani',
	};

	return (
		<StyledOuterDiv>
			<StyledSignUp theme={theme} {...signUpAnimations}>
				<StyledForm>
					<StyledDiv1 theme={theme}>Sign Up</StyledDiv1>
					<StyledDivider theme={theme} className="divider">
						Basic Info
					</StyledDivider>
					<StyledLabel theme={theme} className="input-group-md input-group">
						<StyledInput theme={theme} type="text" placeholder="Name" required className="input input-md" />
					</StyledLabel>
					<StyledLabel theme={theme} className="input-group-md input-group">
						<StyledInput theme={theme} type="text" placeholder="Username" required className="input input-md" />
					</StyledLabel>
					<StyledLabel theme={theme} className="input-group-md input-group">
						<StyledInput
							theme={theme}
							type="password"
							placeholder="Password"
							required
							className="input input-md"
						/>
					</StyledLabel>
					<StyledLabel theme={theme} className="input-group-md input-group">
						<StyledInput
							theme={theme}
							type="password"
							placeholder="Confirm Password"
							required
							className="input input-md"
						/>
					</StyledLabel>
					<StyledLabel theme={theme} className="input-group-md input-group">
						<StyledInput theme={theme} type="text" placeholder="address" required className="input input-md" />
					</StyledLabel>
					<StyledDivider theme={theme} className="divider">
						Contact Info
					</StyledDivider>
					<StyledLabel theme={theme} className="input-group-md input-group">
						<StyledInput theme={theme} type="email" placeholder="Email" required className="input input-md" />
					</StyledLabel>
					<StyledLabel theme={theme} className="input-group-md input-group">
						<StyledInput
							theme={theme}
							type="text"
							placeholder="Phone Number"
							required
							className="input input-md"
						/>
					</StyledLabel>
					<StyledDivider theme={theme} className="divider">
						Birth Info
					</StyledDivider>
					<StyledLabel theme={theme} className="input-group-md input-group">
						<StyledInput
							theme={theme}
							type="text"
							placeholder="Date of birth"
							required
							className="input input-md"
						/>
					</StyledLabel>
					<StyledLabel theme={theme} className="input-group-md input-group">
						<StyledInput theme={theme} type="text" placeholder="Gender" required className="input input-md" />
					</StyledLabel>
					<StyledDiv2>
						<AwesomeButtonProgress
							style={AwesomeButtonProgressStyles}
							cssModule={AwesomeButtonStyles}
							type="primary"
						>
							Sign Up
						</AwesomeButtonProgress>
					</StyledDiv2>
					<StyledDiv3 theme={theme}>
						Already have an account?{' '}
						<StyledLink theme={theme} to="../sign-in">
							Sign In
						</StyledLink>
					</StyledDiv3>
				</StyledForm>
			</StyledSignUp>
		</StyledOuterDiv>
	);
}
