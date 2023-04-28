import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';

const StyledAddressBirthdayGender = styled.div``;

const StyledSpan = styled.span`
	color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoSpanTextColor} !important;
	font-size: 0.95rem !important;
`;

const StyledInput = styled.input`
	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoInputTextColor} !important;
		opacity: 1; /* Firefox */
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoInputTextColor} !important;
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoInputTextColor} !important;
	}
`;

export function AddressBirthdayGender(props) {
	return (
		<StyledAddressBirthdayGender>
			<div>
				<label className="label">
					<StyledSpan theme={props.theme} className="label-text">
						Address
					</StyledSpan>
				</label>
				<StyledInput
					theme={props.theme}
					type="text"
					placeholder="Address"
					className="input-bordered input w-full max-w-xs"
				/>
			</div>
			<div>
				<label className="label">
					<StyledSpan theme={props.theme} className="label-text">
						Birthday
					</StyledSpan>
				</label>
				<StyledInput
					theme={props.theme}
					type="text"
					placeholder="Birthday"
					className="input-bordered input w-full max-w-xs"
				/>
			</div>
			<div>
				<label className="label">
					<StyledSpan theme={props.theme} className="label-text">
						Gender
					</StyledSpan>
				</label>
				<StyledInput
					theme={props.theme}
					type="text"
					placeholder="Gender"
					className="input-bordered input w-full max-w-xs"
				/>
			</div>
		</StyledAddressBirthdayGender>
	);
}
