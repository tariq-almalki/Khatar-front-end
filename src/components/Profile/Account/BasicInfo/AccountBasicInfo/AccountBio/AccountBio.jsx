import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';

const AccountBioComponent = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	justify-content: center;
	align-items: center;
	padding-top: 1.5em;
	padding-bottom: 1.5em;
`;

const StyledTextarea = styled.textarea`
	flex-grow: 1;
	width: 100%;
	max-width: 450px;
	font-size: 0.95rem !important;
	color: ${props => useContext(ThemeContext).colors[props.theme].accountInputTextColor} !important;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].accountInputBackgroundColor} !important;

	@media only screen and (max-width: 601px) {
		max-width: 217px;
	}

	&:focus {
		outline: none !important;
	}

	&::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoBioTextColor} !important;
		opacity: 1; /* Firefox */
	}

	&:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoBioTextColor} !important;
	}

	&::-ms-input-placeholder {
		/* Microsoft Edge */
		color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoBioTextColor} !important;
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
		-webkit-text-fill-color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoBioTextColor} !important;
		-webkit-box-shadow: 0 0 0px 1000px white inset !important;
		border: none;
		caret-color: black !important;
	}
`;

const StyledErrorDiv = styled.div`
	font-size: 0.8em;
	font-family: 'Rajdhani';
	color: red;
`;

export function AccountBio({ theme, formik, disabled }) {
	return (
		<AccountBioComponent>
			{formik.errors.bio && formik.touched.bio && <StyledErrorDiv>{formik.errors.bio}</StyledErrorDiv>}
			<StyledTextarea
				id="bio"
				name="bio"
				value={formik.values.bio}
				onChange={formik.handleChange}
				disabled={disabled}
				theme={theme}
				placeholder="Bio"
				className="textarea-bordered textarea textarea-md"
			></StyledTextarea>
		</AccountBioComponent>
	);
}
