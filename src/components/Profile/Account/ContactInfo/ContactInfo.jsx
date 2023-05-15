import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { Form, useOutletContext } from 'react-router-dom';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import InputMask from 'react-input-mask';
import {capitalize} from 'underscore.string';

// validation schema
import { validationSchema } from './validationSchema';

// firebase
import { firestore } from '@/firebase';
import { EmailAuthProvider, reauthenticateWithCredential, getAuth } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { useUpdateEmail } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';

// animations
import { accountAnimations } from '../accountAnimations';

const ContactInfoComponent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	align-items: center;
	justify-content: start;
	padding: 1em;
	font-family: 'Rajdhani';
`;

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: start;
	gap: 1em;
	padding: 1em;
	flex-grow: 0.05;
	max-width: 820px;
	min-width: 300px;

	@media only all and (max-width: 405px) {
		min-width: 219px;
	}

	background-color: ${props => useContext(ThemeContext).colors[props.theme].accountBackgroundColor};
	border-radius: 4px;
	border: 1px solid black;
	height: fit-content;
`;

const StyledSpan = styled.span`
	color: ${props => useContext(ThemeContext).colors[props.theme].accountSpanTextColor} !important;
	font-size: 0.95rem !important;
`;

const StyledInput = styled.input`
	background-color: ${props => useContext(ThemeContext).colors[props.theme].accountInputBackgroundColor} !important;
	color: ${props => useContext(ThemeContext).colors[props.theme].accountInputTextColor} !important;

	&::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: ${props => useContext(ThemeContext).colors[props.theme].accountInputTextColor} !important;
		opacity: 1; /* Firefox */
	}

	&:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: ${props => useContext(ThemeContext).colors[props.theme].accountInputTextColor} !important;
	}

	&::-ms-input-placeholder {
		/* Microsoft Edge */
		color: ${props => useContext(ThemeContext).colors[props.theme].accountInputTextColor} !important;
	}

	&:disabled {
		opacity: 0.5; /* reduce opacity to indicate disabled state */
		cursor: not-allowed; /* change cursor to indicate disabled state */
		/* optionally, you can also change the background color and text color */
		background-color: #ccc;
		color: #999;
	}

	&:focus {
		outline: none !important;
	}
`;

const StyledButtonDiv = styled.div`
	display: flex;
	gap: 1em;

	@media only screen and (max-width: 601px) {
		max-width: 217px;
		justify-content: start;
		margin: auto;
	}
`;

const StyledButton1 = styled.button`
	color: ${props => useContext(ThemeContext).colors[props.theme].contactInfoButtonFontColor};
	border: 1px solid ${props => useContext(ThemeContext).colors[props.theme].contactInfoButtonBorderColor};
	background-color: ${props => useContext(ThemeContext).colors[props.theme].contactInfoButtonColor} !important;
	padding: 0.3em;
	padding-left: 1em;
	padding-right: 1em;
	border-radius: 4px;
	transition: all 0.2s ease;
	letter-spacing: 0.5px;
	width: 80px;

	&:hover {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].contactInfoButtonColorHover} !important;
	}

	&:active {
		transform: translateY(2px);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	}
`;

const StyledButton2 = styled.button`
	color: ${props => useContext(ThemeContext).colors[props.theme].contactInfoButtonFontColor};
	border: 1px solid ${props => useContext(ThemeContext).colors[props.theme].contactInfoButtonBorderColor};
	padding: 0.3em;
	padding-left: 1em;
	padding-right: 1em;
	border-radius: 4px;
	transition: all 0.2s ease;
	letter-spacing: 0.5px;
	width: 80px;

	&:active {
		transform: translateY(2px);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	}

	&:disabled {
		opacity: 0.5; /* reduce opacity to indicate disabled state */
		cursor: not-allowed; /* change cursor to indicate disabled state */
		/* optionally, you can also change the background color and text color */
		background-color: #ccc;
		color: #999;
	}
`;

const StyledDiv = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
`;

const StyledErrorDiv = styled.div`
	position: absolute;
	font-size: 0.8em;
	top: -10px;
	font-family: 'Rajdhani';
	color: red;
`;

const StyledInputMaskPhoneNumber = styled(InputMask)`
	font-family: 'Rajdhani';
	color: ${props => useContext(ThemeContext).colors[props.theme].accountInputTextColor} !important;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].accountInputBackgroundColor} !important;
	width: 100% !important;

	&:focus {
		outline: none !important;
	}

	&:disabled {
		opacity: 0.5; /* reduce opacity to indicate disabled state */
		cursor: not-allowed; /* change cursor to indicate disabled state */
		/* optionally, you can also change the background color and text color */
		background-color: #ccc;
		color: #999;
	}
`;

const StyledGoogleAndTwitterContactInfo = styled.div`
color: ${props => useContext(ThemeContext).colors[props.theme].googleAndTwitterTextColor};
	font-family: 'Rajdhani';
	display: flex;
	justify-content: center;
	align-items: center;
`;

export function ContactInfo() {
	const { theme, user } = useOutletContext();

	const [value, loading, docError] = useDocument(doc(firestore, 'users', user.uid));
	const [updateEmail, updating, updateEmailError] = useUpdateEmail(auth);

	if (updateEmailError) {
		alert(updateEmailError.message.match(/(?<=auth\/).+(?=\)\.)/));
	}

	const formik = useFormik({
		initialValues: {
			email: loading ? 'Loading...' : value.data().email,
			phoneNumber: loading ? 'Loading...' : value.data().phoneNumber,
		},
		validationSchema,
		onSubmit: async values => {
			const docRef = doc(firestore, 'users', user.uid);

			if (auth.currentUser.providerId === 'firebase') {
				const password = prompt('enter your password for Re-Authenticating', '');

				const credential = EmailAuthProvider.credential(auth.currentUser.email, password);
				try {
					const result = await reauthenticateWithCredential(auth.currentUser, credential);
					if (result) {
						// updating email in firebase auth
						const res = await updateEmail(values.email);

						if (res) {
							// updating in firestore
							await updateDoc(docRef, values);
							return alert('updated successfully');
						}
					}
				} catch (err) {
					formik.resetForm();
					return alert(err.message.match(/(?<=auth\/).+(?=\)\.)/));
				}
			}

		},
		enableReinitialize: true,
	});

	const [button1, setButton1] = useState({
		text: 'Edit',
		type: 'submit',
	});

	const [button2, setButton2] = useState({
		styles: {},
		disabled: true,
	});

	function button1Handler() {
		setButton1(state => ({
			text: state.text === 'Edit' ? 'Save' : 'Edit',
			type: state.type === 'button' ? 'submit' : 'button',
		}));

		setButton2(state => ({
			styles: { backgroundColor: !state.disabled ? '' : '#FF3939' },
			disabled: !state.disabled,
		}));
	}

	function button2Handler() {
		// to reset values when canceling
		formik.resetForm();

		setButton2(state => ({
			styles: {},
			disabled: !state.disabled,
		}));

		setButton1(state => ({
			text: state.text === 'Edit' ? 'Save' : 'Edit',
			type: state.type === 'button' ? 'submit' : 'button',
		}));
	}

	if (
		auth.currentUser.providerData[0].providerId === 'google.com' ||
		auth.currentUser.providerData[0].providerId === 'twitter.com'
	) {
		const provider = auth.currentUser.providerData[0].providerId.match(/.+(?=\.)/);
		return (
			<StyledGoogleAndTwitterContactInfo theme={theme}>
				Unable to Change Email for {capitalize(provider)} Account
			</StyledGoogleAndTwitterContactInfo>
		);
	}

	return (
		<ContactInfoComponent {...accountAnimations}>
			<StyledForm theme={theme} onSubmit={formik.handleSubmit}>
				<StyledDiv>
					<label className="label">
						<StyledSpan theme={theme} className="label-text">
							Email
						</StyledSpan>
					</label>
					<StyledInput
						id="email"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						theme={theme}
						disabled={button2.disabled}
						type="text"
						autocomplete="off"
						placeholder="Type here"
						className="input-bordered input w-full max-w-xs"
					/>
					{formik.errors.email && formik.touched.email && <StyledErrorDiv>{formik.errors.email}</StyledErrorDiv>}
				</StyledDiv>
				<StyledDiv>
					<label className="label">
						<StyledSpan theme={theme} className="label-text">
							Phone Number
						</StyledSpan>
					</label>
					<StyledInputMaskPhoneNumber
						id="phoneNumber"
						name="phoneNumber"
						value={formik.values.phoneNumber}
						onChange={formik.handleChange}
						theme={theme}
						autocomplete="off"
						mask={'+\\966 59 999 9999'}
						formatChars={{
							9: '[0-9]',
						}}
						disabled={button2.disabled}
						type="text"
						placeholder="Type here"
						className="input-bordered input w-full max-w-xs"
					/>
					{formik.errors.phoneNumber && formik.touched.phoneNumber && (
						<StyledErrorDiv>{formik.errors.phoneNumber}</StyledErrorDiv>
					)}
				</StyledDiv>
				<StyledButtonDiv>
					<StyledButton1 theme={theme} type={button1.type} onClick={button1Handler}>
						{button1.text}
					</StyledButton1>
					<StyledButton2
						style={button2.styles}
						theme={theme}
						type="button"
						disabled={button2.disabled}
						onClick={button2Handler}
					>
						Cancel
					</StyledButton2>
				</StyledButtonDiv>
			</StyledForm>
		</ContactInfoComponent>
	);
}
