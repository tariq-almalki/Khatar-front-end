import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { Form, useOutletContext } from 'react-router-dom';
import { AwesomeButtonProgress } from 'react-awesome-button';
import AwesomeButtonStyles from '@/styles/styles.module.scss';
import { useContext } from 'react';

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

export function DeleteAccount() {
	const outletContext = useOutletContext();

	const AwesomeButtonProgressStyles = {
		'--button-primary-color': useContext(ThemeContext).colors[outletContext.theme].deleteAccountButtonColor,
		'--button-primary-color-dark': useContext(ThemeContext).colors[outletContext.theme].deleteAccountButtonColorDark,
		'--button-primary-color-hover': useContext(ThemeContext).colors[outletContext.theme].deleteAccountButtonColorHover,
		'--button-primary-color-active': useContext(ThemeContext).colors[outletContext.theme].deleteAccountButtonColorActive,
		'--button-primary-border': `1px solid ${
			useContext(ThemeContext).colors[outletContext.theme].deleteAccountButtonBorderColor
		}`,
		'--button-font-color': useContext(ThemeContext).colors[outletContext.theme].deleteAccountButtonFontColor,
	};

	return (
		<DeleteAccountComponent {...accountAnimations}>
			<StyledForm theme={outletContext.theme}>
				<div>
					<label className="label">
						<StyledSpan theme={outletContext.theme} className="label-text">
							username or email:
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
							To verify, type <i>delete my account</i> below:
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
							Confirm your password:
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
						Delete Account
					</AwesomeButtonProgress>
				</StyledButtonDiv>
			</StyledForm>
		</DeleteAccountComponent>
	);
}
