import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { useOutletContext, Form, Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles1 from '@/styles/styles.module.scss';
import googleSVG from '@/assets/svgs/icons8-google.svg';
import twitterSVG from '@/assets/svgs/icons8-twitter.svg';
import { customAlphabet } from 'nanoid';
import { randomGender, randomDate } from '@/utils/random';

// firebase
import {
	useSignInWithEmailAndPassword,
	useSignInWithGoogle,
	useSignInWithTwitter,
	useAuthState,
} from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import { firestore } from '@/firebase';
import { doc, setDoc } from 'firebase/firestore';

// animations
import { signInAnimations } from './signInAnimations';

// validation schema
import { validationSchema } from './validationSchema';

const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 10);

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

const StyledSignIn = styled(motion.div)`
	display: flex;
	flex-direction: column;
	gap: 1em;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].signInPageBackgroundColor};
	flex-grow: 1;
	height: fit-content;
	max-width: 350px;
	min-width: 300px;
	border-radius: 4px;
	padding: 16px;
	margin: 16px;
`;

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5em;
`;

// ----------------------------------------------

const StyledDiv1 = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;
`;

const StyledDiv2 = styled.div`
	font-family: 'Rajdhani';
	font-size: 32px;
	padding: 16px;
	margin: auto;
	color: ${props => useContext(ThemeContext).colors[props.theme].signInPageTextColor};
	font-weight: bold;
`;

const StyledDiv3 = styled.div`
	display: flex;
	width: 100%;
	gap: 1em;
`;

const StyledDiv4 = styled.div`
	color: ${props => useContext(ThemeContext).colors[props.theme].signInPageTextColor};
	font-family: 'Rajdhani';
`;

// ----------------------------------------------

const StyledGoogleAwesomeButton = styled(AwesomeButton)``;

const StyledGoogleImage = styled.img``;

const StyledTwitterAwesomeButton = styled(AwesomeButton)``;

const StyledTwitterImage = styled.img``;

// ----------------------------------------------

const StyledLabel1 = styled.label`
	&.input-group > :first-child {
		border-top-left-radius: 4px !important;
		border-bottom-left-radius: 4px !important;
		border-right: 2px solid ${props => useContext(ThemeContext).colors[props.theme].signInRightBorderColor} !important;
	}

	&.input-group > :last-child {
		border-top-right-radius: 4px !important;
		border-bottom-right-radius: 4px !important;
	}
`;

const StyledLabel2 = styled.label`
	font-family: 'Rajdhani';
	transition: all 0.2s ease;
	cursor: pointer;
	color: ${props => useContext(ThemeContext).colors[props.theme].signInPageTextColor};

	& > input {
		accent-color: magenta;
	}

	&:hover {
		color: magenta;
	}
`;

const StyledSpan = styled.span`
	color: black !important;
	background-color: white !important;
`;

const StyledInput = styled.input`
	font-family: 'Rajdhani';
	color: ${props => useContext(ThemeContext).colors[props.theme].signInInputTextColor} !important;
	background-color: white !important;
	width: 100% !important;

	&:focus {
		outline: none !important;
	}

	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: ${props => useContext(ThemeContext).colors[props.theme].signInInputPlaceHolderTextColor} !important;
		opacity: 1; /* Firefox */
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: ${props => useContext(ThemeContext).colors[props.theme].signInInputPlaceHolderTextColor} !important;
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: ${props => useContext(ThemeContext).colors[props.theme].signInInputPlaceHolderTextColor} !important;
	}
`;

// ----------------------------------------------

const StyledLink = styled(Link)`
	font-family: 'Rajdhani';
	transition: all 0.2s ease;
	color: ${props => useContext(ThemeContext).colors[props.theme].signInPageTextColor};
	padding-left: 5px;

	&:hover {
		color: magenta;
	}
`;

// ----------------------------------------------

const StyledDivider = styled.div`
	font-family: 'Rajdhani';
	color: ${props => useContext(ThemeContext).colors[props.theme].signInPageTextColor};

	&::before {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].signInDividerColor} !important;
	}

	&::after {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].signInDividerColor} !important;
	}
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

const StyledDiv = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 100%;
`;

const StyledErrorDiv = styled.div`
	position: absolute;
	font-size: 1em;
	top: -25px;
	left: 2px;
	font-family: 'Rajdhani';
	color: red;
`;

// ----------------------------------------------

export function SignIn() {
	const { theme } = useOutletContext();

	const navigate = useNavigate();

	const [authUser] = useAuthState(auth);

	if (authUser) {
		navigate('/profile/account');
	}

	const [signInWithEmailAndPassword, emailAndPasswordUser, emailAndPasswordLoading, emailAndPasswordError] =
		useSignInWithEmailAndPassword(auth);
	const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
	const [signInWithTwitter, twitterUser, twitterLoading, twitterError] = useSignInWithTwitter(auth);

	if (googleError) {
		alert(googleError.message.match(/(?<=auth\/).+(?=\)\.)/));
	}

	if (twitterError) {
		alert(twitterError.message.match(/(?<=auth\/).+(?=\)\.)/));
	}

	if (emailAndPasswordError) {
		throw new Error(error.message.match(/(?<=auth\/).+(?=\)\.)/));
	}

	// Handlers

	async function googleHandler() {
		const userCred = await signInWithGoogle();

		if (!userCred) {
			throw new Error('Something Happened');
		}

		let timeoutId;

		auth.onAuthStateChanged(user => {
			if (user) {
				timeoutId = setTimeout(() => {
					auth.signOut();
					alert('signed out successfully');
					navigate('/');
				}, 900_000);
			} else {
				clearTimeout(timeoutId);
			}
		});

		// Add a new document in collection "cities"
		const res = await setDoc(doc(firestore, 'users', userCred.user.uid), {
			name: userCred.user.displayName,
			username: nanoid(),
			address: 'default',
			email: userCred.user.email,
			phoneNumber: '',
			dob: randomDate(new Date(1950, 1, 1), new Date(2015, 1, 1)).toISOString().slice(0, 10),
			gender: randomGender(['male', 'female']),
			type: 'basic',
			bio: '',
		});

		navigate('/profile/account');
	}

	async function twitterHandler() {
		const userCred = await signInWithTwitter();

		if (!userCred) {
			throw new Error('Something Happened');
		}

		let timeoutId;

		auth.onAuthStateChanged(user => {
			if (user) {
				timeoutId = setTimeout(() => {
					alert('signed out successfully');
					navigate('/');
					auth.signOut();
				}, 900_000);
			} else {
				clearTimeout(timeoutId);
			}
		});

		// Add a new document in collection "cities"
		await setDoc(doc(firestore, 'users', userCred.user.uid), {
			name: userCred.user.displayName,
			username: nanoid(),
			address: 'default',
			email: '',
			phoneNumber: '',
			dob: randomDate(new Date(1950, 1, 1), new Date(2015, 1, 1)).toISOString().slice(0, 10),
			gender: randomGender(['male', 'female']),
			type: 'basic',
			bio: '',
		});

		navigate('/profile/account');
	}

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema,
		onSubmit: async values => {
			const userCred = await signInWithEmailAndPassword(values.email, values.password);

			if (userCred) {
				let timeoutId;

				auth.onAuthStateChanged(user => {
					if (user) {
						timeoutId = setTimeout(() => {
							alert('signed out successfully');
							navigate('/');
							auth.signOut();
						}, 900_000);
					} else {
						clearTimeout(timeoutId);
					}
				});

				alert('Signed In successfully!!!');
				navigate('/profile/account');
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

	return (
		<StyledOuterDiv>
			<StyledSignIn theme={theme} {...signInAnimations}>
				<StyledForm onSubmit={formik.handleSubmit}>
					<StyledDiv2 theme={theme}>Sign In</StyledDiv2>
					<StyledDiv>
						<StyledLabel1 theme={theme} className="input-group-md input-group">
							<StyledSpan>
								<FontAwesomeIcon icon={faAt} />
							</StyledSpan>
							<StyledInput
								id="email"
								name="email"
								value={formik.values.email}
								onChange={formik.handleChange}
								theme={theme}
								type="email"
								placeholder="Email"
								required
								className="input input-md"
							/>
							{formik.errors.email && formik.touched.email && (
								<StyledErrorDiv>{formik.errors.email}</StyledErrorDiv>
							)}
						</StyledLabel1>
					</StyledDiv>
					<StyledDiv>
						<StyledLabel1 theme={theme} className="input-group-md input-group">
							<StyledSpan>
								<FontAwesomeIcon icon={faLock} />
							</StyledSpan>
							<StyledInput
								id="password"
								name="password"
								value={formik.values.password}
								onChange={formik.handleChange}
								theme={theme}
								type="password"
								placeholder="Password"
								required
								className="input input-md"
							/>
							{formik.errors.password && formik.touched.password && (
								<StyledErrorDiv>{formik.errors.password}</StyledErrorDiv>
							)}
						</StyledLabel1>
					</StyledDiv>
					<AwesomeButton style={AwesomeButtonStyles2} cssModule={AwesomeButtonStyles1} type="primary">
						Sign in
					</AwesomeButton>
				</StyledForm>
				<StyledDiv1>
					<StyledLink theme={theme} to="../forgot-password">
						Forgot the password?
					</StyledLink>
					<StyledDivider theme={theme} className="divider">
						or continue with
					</StyledDivider>
					<StyledDiv3>
						<StyledGoogleAwesomeButton
							onPress={googleHandler}
							style={AwesomeButtonStyles2}
							cssModule={AwesomeButtonStyles1}
						>
							<StyledGoogleImage src={googleSVG} alt="google icon" width={32} height={32} />
						</StyledGoogleAwesomeButton>
						<StyledTwitterAwesomeButton
							onPress={twitterHandler}
							style={AwesomeButtonStyles2}
							cssModule={AwesomeButtonStyles1}
						>
							<StyledTwitterImage src={twitterSVG} alt="twitter icon" width={32} height={32} />
						</StyledTwitterAwesomeButton>
					</StyledDiv3>
					<StyledDiv4 theme={theme}>
						Don't have an account?
						<StyledLink theme={theme} to="../sign-up">
							Sign Up
						</StyledLink>
					</StyledDiv4>
					<StyledContinueAsGuestDiv>
						<StyledContinueAsGuest theme={theme} to="/">
							Continue as Guest?
						</StyledContinueAsGuest>
					</StyledContinueAsGuestDiv>
				</StyledDiv1>
			</StyledSignIn>
		</StyledOuterDiv>
	);
}
