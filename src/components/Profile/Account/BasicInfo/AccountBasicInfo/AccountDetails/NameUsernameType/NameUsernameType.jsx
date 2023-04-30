import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const StyledNameUsernameType = styled.div``;

const StyleSpan = styled.span`
	color: ${props => useContext(ThemeContext).colors[props.theme].accountSpanTextColor} !important;
	font-size: 0.95rem !important;
`;

const StyledInput = styled.input`
	color: ${props => useContext(ThemeContext).colors[props.theme].accountInputTextColor} !important;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].accountInputBackgroundColor} !important;

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

export function NameUsernameType(props) {
	return (
		<StyledNameUsernameType>
			<div>
				<label className="label">
					<StyleSpan theme={props.theme} className="label-text">
						Name
					</StyleSpan>
				</label>
				<StyledInput
					theme={props.theme}
					type="text"
					placeholder="Name"
					className="input-bordered input w-full max-w-xs"
				/>
			</div>
			<div>
				<label className="label">
					<StyleSpan theme={props.theme} className="label-text">
						Username
					</StyleSpan>
				</label>
				<StyledInput
					theme={props.theme}
					type="text"
					placeholder="Username"
					className="input-bordered input w-full max-w-xs"
				/>
			</div>
			<div>
				<label className="label">
					<StyleSpan theme={props.theme} className="label-text">
						Type
					</StyleSpan>
				</label>
				<StyledInput
					theme={props.theme}
					type="text"
					placeholder="Type"
					className="input-bordered input w-full max-w-xs"
				/>
			</div>
		</StyledNameUsernameType>
	);
}
