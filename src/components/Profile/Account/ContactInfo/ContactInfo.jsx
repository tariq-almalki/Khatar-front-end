import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { useSubmit, useNavigation, Form, useOutletContext } from 'react-router-dom';
import { useFormik } from 'formik';

// validation schema
import { validationSchema } from './validationSchema';

// animations
import { accountAnimations } from '../accountAnimations';
import { useContext } from 'react';

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
	min-width: 219px;

	background-color: ${props => useContext(ThemeContext).colors[props.theme].contactInfoBackgroundColor};
	border-radius: 4px;
	border: 1px solid black;
	height: fit-content;
`;

const StyledSpan = styled.span`
	color: ${props => useContext(ThemeContext).colors[props.theme].contactInfoSpanTextColor} !important;
	font-size: 0.95rem !important;
`;

const StyledInput = styled.input`
	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: ${props => useContext(ThemeContext).colors[props.theme].contactInfoInputTextColor} !important;
		opacity: 1; /* Firefox */
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: ${props => useContext(ThemeContext).colors[props.theme].contactInfoInputTextColor} !important;
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: ${props => useContext(ThemeContext).colors[props.theme].contactInfoInputTextColor} !important;
	}
`;

const StyledButtonDiv = styled.div`
	display: flex;
	align-items: end;
	flex-grow: 0.7;
`;

const StyledButton = styled.button`
	display: block;
	background-color: #2a303c;
	border-radius: 0.5em;
	border: 1px solid rgba(166, 173, 187, 0.2);
	padding: 0.2em;

	color: ${props => useContext(ThemeContext).colors[props.theme].contactInfoButtonColor};
`;

export function ContactInfo() {
	const outletContext = useOutletContext();

	const navigation = useNavigation();

	const submit = useSubmit();

	const formik = useFormik({
		initialValues: {
			name: '',
			username: '',
			address: '',
			birthday: '',
			gender: '',
			userType: '',
			bio: '',
		},
		validationSchema,
		onSubmit: async values => {
			submit(values, { method: 'post' });
		},
	});

	return (
		<ContactInfoComponent {...accountAnimations}>
			<StyledForm theme={outletContext.theme}>
				<div>
					<label className="label">
						<StyledSpan theme={outletContext.theme} className="label-text">
							Email
						</StyledSpan>
					</label>
					<StyledInput
						theme={outletContext.theme}
						type="text"
						placeholder="Type here"
						className="input-bordered input w-full max-w-xs"
					/>
				</div>
				<div>
					<label className="label">
						<StyledSpan theme={outletContext.theme} className="label-text">
							Phone Number
						</StyledSpan>
					</label>
					<StyledInput
						theme={outletContext.theme}
						type="text"
						placeholder="Type here"
						className="input-bordered input w-full max-w-xs"
					/>
				</div>
				<StyledButtonDiv>
					<StyledButton theme={outletContext.theme}>Update Contact Info</StyledButton>
				</StyledButtonDiv>
			</StyledForm>
		</ContactInfoComponent>
	);
}
