import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { Form, useOutletContext, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useFormik } from 'formik';

// firebase
import { useDeleteUser } from 'react-firebase-hooks/auth';
import { doc, deleteDoc } from 'firebase/firestore';
import { auth } from '@/firebase';
import { firestore } from '@/firebase';

// validation schema
import { validationSchema } from './validationSchema';

// animations
import { accountAnimations } from '../accountAnimations';

const DeleteAccountComponent = styled(motion.div)`
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

	&:focus {
		outline: none !important;
	}

	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: ${props => useContext(ThemeContext).colors[props.theme].accountInputTextColor} !important;
		opacity: 1; /* Firefox */
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: ${props => useContext(ThemeContext).colors[props.theme].accountInputTextColor} !important;
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: ${props => useContext(ThemeContext).colors[props.theme].accountInputTextColor} !important;
	}
`;

const StyledButtonDiv = styled.div`
	display: flex;
	align-items: end;
	flex-grow: 0.7;
`;

const StyledButton = styled.button`
	color: ${props => useContext(ThemeContext).colors[props.theme].changePasswordButtonFontColor};
	border: 1px solid ${props => useContext(ThemeContext).colors[props.theme].changePasswordButtonBorderColor};
	background-color: ${props => useContext(ThemeContext).colors[props.theme].changePasswordButtonColor} !important;
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

export function DeleteAccount() {
	const { theme, user } = useOutletContext();

	const navigate = useNavigate();

	const [deleteUser, loading, error] = useDeleteUser(auth);

	const formik = useFormik({
		initialValues: {
			verify: '',
		},
		validationSchema,
		onSubmit: async values => {
			alert('You have been deleted');
			navigate('/');
			await deleteUser();
			await deleteDoc(doc(firestore, 'users', user.uid));
		},
	});

	return (
		<DeleteAccountComponent {...accountAnimations}>
			<StyledForm theme={theme} onSubmit={formik.handleSubmit}>
				<StyledDiv>
					<label className="label">
						<StyledSpan theme={theme} className="label-text">
							To verify, type <i>delete my account</i> below:
						</StyledSpan>
					</label>
					<StyledInput
						id="verify"
						name="verify"
						value={formik.values.verify}
						onChange={formik.handleChange}
						theme={theme}
						autocomplete="off"
						type="text"
						placeholder="Type here"
						className="input-bordered input w-full max-w-xs"
					/>
					{formik.errors.verify && formik.touched.verify && (
						<StyledErrorDiv>{formik.errors.verify}</StyledErrorDiv>
					)}
				</StyledDiv>
				<StyledButtonDiv>
					<StyledButton theme={theme}>Delete My Account</StyledButton>
				</StyledButtonDiv>
			</StyledForm>
		</DeleteAccountComponent>
	);
}
