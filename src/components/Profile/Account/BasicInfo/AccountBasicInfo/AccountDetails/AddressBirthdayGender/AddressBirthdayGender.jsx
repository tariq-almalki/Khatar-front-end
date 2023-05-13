import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';

const StyledAddressBirthdayGender = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
`;

const StyledSpan = styled.span`
	color: ${props => useContext(ThemeContext).colors[props.theme].accountSpanTextColor} !important;
	font-size: 0.95rem !important;
`;

const StyledInput = styled.input`
	color: ${props => useContext(ThemeContext).colors[props.theme].accountInputTextColor} !important;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].accountInputBackgroundColor} !important;

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

	::-webkit-calendar-picker-indicator {
		filter: invert(1);
	}
`;

const StyledSelect = styled.select`
	color: ${props => useContext(ThemeContext).colors[props.theme].accountInputTextColor} !important;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].accountInputBackgroundColor} !important;

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

export function AddressBirthdayGender({ theme, formik, disabled }) {
	return (
		<StyledAddressBirthdayGender>
			<StyledDiv>
				<label className="label">
					<StyledSpan theme={theme} className="label-text">
						Address
					</StyledSpan>
				</label>
				<StyledInput
					id="address"
					name="address"
					value={formik.values.address}
					onChange={formik.handleChange}
					disabled={disabled}
					required
					theme={theme}
					type="text"
					placeholder="Address"
					className="input-bordered input w-full max-w-xs"
				/>
				{formik.errors.address && formik.touched.address && <StyledErrorDiv>{formik.errors.address}</StyledErrorDiv>}
			</StyledDiv>
			<StyledDiv>
				<label className="label">
					<StyledSpan theme={theme} className="label-text">
						Birthday
					</StyledSpan>
				</label>
				<StyledInput
					id="dob"
					name="dob"
					value={formik.values.dob}
					onChange={formik.handleChange}
					disabled={disabled}
					required
					theme={theme}
					type="date"
					min="1950-01-01"
					max="2015-01-01"
					placeholder="Birthday"
					className="input-bordered input w-full max-w-xs"
				/>
				{formik.errors.dob && formik.touched.dob && <StyledErrorDiv>{formik.errors.dob}</StyledErrorDiv>}
			</StyledDiv>
			<StyledDiv>
				<label className="label">
					<StyledSpan theme={theme} className="label-text">
						Gender
					</StyledSpan>
				</label>
				<StyledSelect
					id="gender"
					name="gender"
					value={formik.values.gender}
					onChange={formik.handleChange}
					disabled={disabled}
					theme={theme}
					className="select-bordered select-md w-full max-w-xs rounded-lg"
					required
				>
					<option disabled value="gender" style={{ color: '#999' }}>
						Gender
					</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
				</StyledSelect>
				{formik.errors.gender && formik.touched.gender && <StyledErrorDiv>{formik.errors.gender}</StyledErrorDiv>}
			</StyledDiv>
		</StyledAddressBirthdayGender>
	);
}
