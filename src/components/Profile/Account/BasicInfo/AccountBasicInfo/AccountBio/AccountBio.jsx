import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';

const AccountBioComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 1em;
	padding-bottom: 1em;
`;

const StyledTextarea = styled.textarea`
	flex-grow: 1;
	max-width: 450px;
	font-size: 0.95rem !important;
	color: ${props => useContext(ThemeContext).colors[props.theme].accountInputTextColor} !important;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].accountInputBackgroundColor} !important;

	@media only screen and (max-width: 607px) {
		max-width: 217px;
	}

	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoBioTextColor} !important;
		opacity: 1; /* Firefox */
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoBioTextColor} !important;
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoBioTextColor} !important;
	}
`;

export function AccountBio(props) {
	return (
		<AccountBioComponent>
			<StyledTextarea
				theme={props.theme}
				placeholder="Bio"
				className="textarea-bordered textarea textarea-md"
			></StyledTextarea>
		</AccountBioComponent>
	);
}
