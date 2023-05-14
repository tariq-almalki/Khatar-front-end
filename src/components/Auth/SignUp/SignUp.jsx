import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { useOutletContext, Form, Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles1 from '@/styles/styles.module.scss';
import InputMask from 'react-input-mask';

// firebase
import { useCreateUserWithEmailAndPassword, useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import { firestore } from '@/firebase';
import { doc, setDoc } from 'firebase/firestore';

// animations
import { signUpAnimations } from './signUpAnimations';
// validation schema
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
	gap: 1.5em;
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

const StyledLabel = styled.label`
	display: flex;
	position: relative;
	flex-direction: column;

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
		color: ${props => useContext(ThemeContext).colors[props.theme].signUpInputPlaceHolderTextColor} !important;
		opacity: 1; /* Firefox */
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: ${props => useContext(ThemeContext).colors[props.theme].signUpInputPlaceHolderTextColor} !important;
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: ${props => useContext(ThemeContext).colors[props.theme].signUpInputPlaceHolderTextColor} !important;
	}

	::-webkit-calendar-picker-indicator {
		filter: invert(1);
	}
`;

// ----------------------------------------------

const StyledSelect = styled.select`
	font-family: 'Rajdhani';
	color: ${props => useContext(ThemeContext).colors[props.theme].signUpInputTextColor} !important;
	background-color: white !important;
	width: 100% !important;

	&:focus {
		outline: none !important;
	}
`;

// ----------------------------------------------

const StyledInputMaskPhoneNumber = styled(InputMask)`
	font-family: 'Rajdhani';
	color: ${props => useContext(ThemeContext).colors[props.theme].signUpInputTextColor} !important;
	background-color: white !important;
	width: 100% !important;

	&:focus {
		outline: none !important;
	}
`;

// ----------------------------------------------

const StyledLink = styled(Link)`
	font-family: 'Rajdhani';
	transition: all 0.2s ease;
	color: ${props => useContext(ThemeContext).colors[props.theme].signUpPageTextColor};
	padding-left: 5px;
	&:hover {
		color: magenta;
	}
`;

// ----------------------------------------------

const StyledErrorDiv = styled.div`
	position: absolute;
	top: 28px;
	font-family: 'Rajdhani';
	color: red;
`;

// ----------------------------------------------

export function SignUp() {
	const { theme } = useOutletContext();
	const navigate = useNavigate();

	// routing signed user to profile account

	const [authUser] = useAuthState(auth);

	if (authUser) {
		navigate('/profile/account');
	}

	const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

	if (error) {
		throw new Error(error.message.match(/(?<=auth\/).+(?=\)\.)/));
	}

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
			gender: 'gender',
		},
		validationSchema,
		onSubmit: async values => {
			try {
				// creating new user
				const userCredential = await createUserWithEmailAndPassword(values.email, values.password);

				if (!userCredential) {
					throw new Error('Something Happened');
				}

				// Add a new document in collection "cities"
				await setDoc(doc(firestore, 'users', userCredential.user.uid), {
					name: values.name,
					username: values.username,
					address: values.address,
					email: values.email,
					phoneNumber: values.phoneNumber,
					dob: values.dob,
					gender: values.gender,
					type: 'basic',
					bio: '',
				});

				navigate('/profile/account');
			} catch (err) {
				console.dir(err);
			}
		},
	});

	const AwesomeButtonStyles2 = {
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
				<StyledForm onSubmit={formik.handleSubmit}>
					<StyledDiv1 theme={theme}>Sign Up</StyledDiv1>
					<StyledDivider theme={theme} className="divider">
						Basic Info
					</StyledDivider>
					<StyledLabel theme={theme} className="input-group-sm input-group">
						<StyledInput
							id="name"
							name="name"
							value={formik.values.name}
							onChange={formik.handleChange}
							theme={theme}
							type="text"
							placeholder="Name"
							required
							className="input input-sm"
						/>
						{formik.errors.name && formik.touched.name && <StyledErrorDiv>{formik.errors.name}</StyledErrorDiv>}
					</StyledLabel>
					<StyledLabel theme={theme} className="input-group-sm input-group">
						<StyledInput
							id="username"
							name="username"
							value={formik.values.username}
							onChange={formik.handleChange}
							theme={theme}
							type="text"
							placeholder="Username"
							required
							className="input input-sm"
						/>
						{formik.errors.username && formik.touched.username && (
							<StyledErrorDiv>{formik.errors.username}</StyledErrorDiv>
						)}
					</StyledLabel>
					<StyledLabel theme={theme} className="input-group-sm input-group">
						<StyledInput
							id="password"
							name="password"
							value={formik.values.password}
							onChange={formik.handleChange}
							theme={theme}
							type="password"
							placeholder="Password"
							required
							className="input input-sm"
						/>
						{formik.errors.password && formik.touched.password && (
							<StyledErrorDiv>{formik.errors.password}</StyledErrorDiv>
						)}
					</StyledLabel>
					{console.log(formik.values.password)}
					<StyledLabel theme={theme} className="input-group-sm input-group">
						<StyledInput
							id="confirmPassword"
							name="confirmPassword"
							value={formik.values.confirmPassword}
							onChange={formik.handleChange}
							theme={theme}
							type="password"
							placeholder="Confirm Password"
							required
							className="input input-sm"
						/>
						{formik.errors.confirmPassword && formik.touched.confirmPassword && (
							<StyledErrorDiv>{formik.errors.confirmPassword}</StyledErrorDiv>
						)}
					</StyledLabel>
					<StyledLabel theme={theme} className="input-group-sm input-group">
						<StyledInput
							id="address"
							name="address"
							value={formik.values.address}
							onChange={formik.handleChange}
							theme={theme}
							type="text"
							placeholder="address"
							required
							className="input input-sm"
						/>
						{formik.errors.address && formik.touched.address && (
							<StyledErrorDiv>{formik.errors.address}</StyledErrorDiv>
						)}
					</StyledLabel>
					<StyledDivider theme={theme} className="divider">
						Contact Info
					</StyledDivider>
					<StyledLabel theme={theme} className="input-group-sm input-group">
						<StyledInput
							id="email"
							name="email"
							value={formik.values.email}
							onChange={formik.handleChange}
							theme={theme}
							type="email"
							placeholder="Email"
							required
							className="input input-sm"
						/>
						{formik.errors.email && formik.touched.email && (
							<StyledErrorDiv>{formik.errors.email}</StyledErrorDiv>
						)}
					</StyledLabel>
					<StyledLabel theme={theme} className="input-group-sm input-group">
						<StyledInputMaskPhoneNumber
							id="phoneNumber"
							name="phoneNumber"
							value={formik.values.phoneNumber}
							onChange={formik.handleChange}
							mask={'+\\966 59 999 9999'}
							formatChars={{
								9: '[0-9]',
							}}
							// alwaysShowMask
							className="input input-sm"
							theme={theme}
							required
							placeholder="Phone Number"
						/>
						{formik.errors.phoneNumber && formik.touched.phoneNumber && (
							<StyledErrorDiv>{formik.errors.phoneNumber}</StyledErrorDiv>
						)}
					</StyledLabel>
					<StyledDivider theme={theme} className="divider">
						Birth Info
					</StyledDivider>
					<StyledLabel theme={theme} className="input-group-sm input-group">
						<StyledInput
							id="dob"
							name="dob"
							value={formik.values.dob}
							onChange={formik.handleChange}
							theme={theme}
							type="date"
							required
							className="input input-sm"
							min="1950-01-01"
							max="2015-01-01"
						/>
						{formik.errors.dob && formik.touched.dob && <StyledErrorDiv>{formik.errors.dob}</StyledErrorDiv>}
					</StyledLabel>
					<StyledLabel theme={theme} className="input-group-sm input-group">
						<StyledSelect
							id="gender"
							name="gender"
							value={formik.values.gender}
							onChange={formik.handleChange}
							theme={theme}
							className="select-bordered select-sm w-full max-w-xs"
							required
						>
							<option disabled value="gender" style={{ color: '#999' }}>
								Gender
							</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</StyledSelect>
						{formik.errors.gender && formik.touched.gender && (
							<StyledErrorDiv>{formik.errors.gender}</StyledErrorDiv>
						)}
					</StyledLabel>
					<StyledDiv2>
						<AwesomeButton style={AwesomeButtonStyles2} cssModule={AwesomeButtonStyles1} type="primary">
							{!loading ? 'Sign Up' : <span>{'Creating user...'}</span>}
						</AwesomeButton>
					</StyledDiv2>
					<StyledDiv3 theme={theme}>
						Already have an account?
						<StyledLink theme={theme} to="../sign-in">
							Sign In
						</StyledLink>
					</StyledDiv3>
				</StyledForm>
			</StyledSignUp>
		</StyledOuterDiv>
	);
}
