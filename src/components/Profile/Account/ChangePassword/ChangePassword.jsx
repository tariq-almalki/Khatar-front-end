import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { useSubmit, useNavigation, Form, useOutletContext } from 'react-router-dom';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { AwesomeButtonProgress } from 'react-awesome-button';
import AwesomeButtonStyles from '@/styles/styles.module.scss';

// validation schema
import { validationSchema } from './validationSchema';

// animations
import { accountAnimations } from '../accountAnimations';

const ChangePasswordComponent = styled(motion.div)`
	display: flex;
	flex-direction: column;
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
	flex-grow: 0.04;
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
	flex-grow: 1;
	align-items: end;
`;

export function ChangePassword() {
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

	const AwesomeButtonProgressStyles = {
		'--button-primary-color': useContext(ThemeContext).colors[outletContext.theme].changePasswordButtonColor,
		'--button-primary-color-dark': useContext(ThemeContext).colors[outletContext.theme].changePasswordButtonColorDark,
		'--button-primary-color-hover': useContext(ThemeContext).colors[outletContext.theme].changePasswordButtonColorHover,
		'--button-primary-color-active':
			useContext(ThemeContext).colors[outletContext.theme].changePasswordButtonColorActive,
		'--button-primary-border': `1px solid ${
			useContext(ThemeContext).colors[outletContext.theme].changePasswordButtonBorderColor
		}`,
		'--button-font-color': useContext(ThemeContext).colors[outletContext.theme].changePasswordButtonFontColor,
	};

	return (
		<ChangePasswordComponent {...accountAnimations}>
			<StyledForm theme={outletContext.theme}>
				<div>
					<label className="label">
						<StyledSpan theme={outletContext.theme} className="label-text">
							Old password
						</StyledSpan>
					</label>
					<StyledInput
						theme={outletContext.theme}
						type="text"
						placeholder="Type Here"
						className="input-bordered input w-full max-w-xs"
					/>
				</div>
				<div>
					<label className="label">
						<StyledSpan theme={outletContext.theme} className="label-text">
							New password
						</StyledSpan>
					</label>
					<StyledInput
						theme={outletContext.theme}
						type="text"
						placeholder="Type Here"
						className="input-bordered input w-full max-w-xs"
					/>
				</div>
				<div>
					<label className="label">
						<StyledSpan theme={outletContext.theme} className="label-text">
							Confirm new password
						</StyledSpan>
					</label>
					<StyledInput
						theme={outletContext.theme}
						type="text"
						placeholder="Type Here"
						className="input-bordered input w-full max-w-xs"
					/>
				</div>
				<StyledButtonDiv>
					<AwesomeButtonProgress
						type="primary"
						style={AwesomeButtonProgressStyles}
						theme={outletContext.theme}
						cssModule={AwesomeButtonStyles}
						loadingLabel="Wait..."
						resultLabel="Success!"
						releaseDelay={1000}
						onPress={(event, release) => {
							release();
						}}
					>
						Update Password
					</AwesomeButtonProgress>
				</StyledButtonDiv>
			</StyledForm>
		</ChangePasswordComponent>
	);
}
