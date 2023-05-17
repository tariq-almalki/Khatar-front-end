import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { Form, useOutletContext } from 'react-router-dom';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { capitalize } from 'underscore.string';

// firebase
import { useUpdatePassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';

// validation schema
import { validationSchema } from './validationSchema';

// animations
import { accountAnimations } from '../accountAnimations';

const ChangePasswordComponent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	padding: 16px;
	flex-grow: 1;
	align-items: center;
	justify-content: start;
	font-family: 'Rajdhani';
`;

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	gap: 1em;
	padding: 1em;
	flex-grow: 0.09;
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

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus,
	&:-webkit-autofill:active {
		-webkit-text-fill-color: ${props => useContext(ThemeContext).colors[props.theme].accountInputTextColor} !important;
		-webkit-box-shadow: 0 0 0px 1000px white inset !important;
		border: none;
		caret-color: black !important;
	}
`;

const StyledButtonDiv = styled.div`
	display: flex;
	flex-grow: 1;
	align-items: end;
`;

const StyledButton = styled.button`
	color: ${props => useContext(ThemeContext).colors[props.theme].deleteAccountButtonFontColor};
	border: 1px solid ${props => useContext(ThemeContext).colors[props.theme].deleteAccountButtonBorderColor};
	background-color: ${props => useContext(ThemeContext).colors[props.theme].deleteAccountButtonColor} !important;
	padding: 0.3em;
	padding-left: 1em;
	padding-right: 1em;
	border-radius: 4px;
	transition: all 0.2s ease;
	width: fit-content;

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

const StyledGoogleAndTwitterContactInfo = styled.div`
	color: ${props => useContext(ThemeContext).colors[props.theme].googleAndTwitterTextColor};
	font-family: 'Rajdhani';
	display: flex;
	justify-content: center;
	align-items: center;
`;

export function ChangePassword() {
	const { theme } = useOutletContext();

	const [updatePassword, updating, error] = useUpdatePassword(auth);

	const formik = useFormik({
		initialValues: {
			oldPassword: '',
			newPassword: '',
			confirmNewPassword: '',
		},
		validationSchema,
		onSubmit: async values => {
			const res = await updatePassword(values.newPassword);
			if (res) {
				alert('Password Changed succesfully');
				formik.resetForm();
			}
		},
	});

	console.log(auth);

	if (
		auth.currentUser.providerData[0].providerId === 'google.com' ||
		auth.currentUser.providerData[0].providerId === 'twitter.com'
	) {
		const provider = auth.currentUser.providerData[0].providerId.match(/.+(?=\.)/);
		return (
			<StyledGoogleAndTwitterContactInfo theme={theme}>
				Unable to Change Password for {capitalize(provider)} Account
			</StyledGoogleAndTwitterContactInfo>
		);
	}

	return (
		<ChangePasswordComponent {...accountAnimations}>
			<StyledForm theme={theme} onSubmit={formik.handleSubmit}>
				<StyledDiv>
					<label className="label">
						<StyledSpan theme={theme} className="label-text">
							Old password
						</StyledSpan>
					</label>
					<StyledInput
						id="oldPassword"
						name="oldPassword"
						value={formik.values.oldPassword}
						onChange={formik.handleChange}
						theme={theme}
						type="password"
						placeholder="Type Here"
						className="input-bordered input w-full max-w-xs"
					/>
					{formik.errors.oldPassword && formik.touched.oldPassword && (
						<StyledErrorDiv>{formik.errors.oldPassword}</StyledErrorDiv>
					)}
				</StyledDiv>
				<StyledDiv>
					<label className="label">
						<StyledSpan theme={theme} className="label-text">
							New password
						</StyledSpan>
					</label>
					<StyledInput
						id="newPassword"
						name="newPassword"
						value={formik.values.newPassword}
						onChange={formik.handleChange}
						theme={theme}
						type="password"
						placeholder="Type Here"
						className="input-bordered input w-full max-w-xs"
					/>
					{formik.errors.newPassword && formik.touched.newPassword && (
						<StyledErrorDiv>{formik.errors.newPassword}</StyledErrorDiv>
					)}
				</StyledDiv>
				<StyledDiv>
					<label className="label">
						<StyledSpan theme={theme} className="label-text">
							Confirm new password
						</StyledSpan>
					</label>
					<StyledInput
						id="confirmNewPassword"
						name="confirmNewPassword"
						value={formik.values.confirmNewPassword}
						onChange={formik.handleChange}
						theme={theme}
						type="password"
						placeholder="Type Here"
						className="input-bordered input w-full max-w-xs"
					/>
					{formik.errors.confirmNewPassword && formik.touched.confirmNewPassword && (
						<StyledErrorDiv>{formik.errors.confirmNewPassword}</StyledErrorDiv>
					)}
				</StyledDiv>
				<StyledButtonDiv>
					<StyledButton theme={theme}>Update Password</StyledButton>
				</StyledButtonDiv>
			</StyledForm>
		</ChangePasswordComponent>
	);
}
