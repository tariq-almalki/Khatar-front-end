import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const StyledNameUsernameType = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
`;

const StyleSpan = styled.span`
	color: ${props => useContext(ThemeContext).colors[props.theme].accountSpanTextColor} !important;
	font-size: 0.95rem !important;
`;

const StyledInput = styled.input`
	color: ${props => useContext(ThemeContext).colors[props.theme].accountInputTextColor} !important;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].accountInputBackgroundColor} !important;

	&:focus {
		outline: none !important;
	}

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

export function NameUsernameType({ theme, formik, disabled }) {
	return (
		<StyledNameUsernameType>
			<StyledDiv>
				<label className="label">
					<StyleSpan theme={theme} className="label-text">
						Name
					</StyleSpan>
				</label>
				<StyledInput
					id="name"
					name="name"
					value={formik.values.name}
					onChange={formik.handleChange}
					required
					disabled={disabled}
					autocomplete="off"
					theme={theme}
					type="text"
					placeholder="Name"
					className="input-bordered input w-full max-w-xs"
				/>
				{formik.errors.name && formik.touched.name && <StyledErrorDiv>{formik.errors.name}</StyledErrorDiv>}
			</StyledDiv>
			<StyledDiv>
				<label className="label">
					<StyleSpan theme={theme} className="label-text">
						Username
					</StyleSpan>
				</label>
				<StyledInput
					id="username"
					name="username"
					value={formik.values.username}
					onChange={formik.handleChange}
					required
					autocomplete="off"
					disabled={disabled}
					theme={theme}
					type="text"
					placeholder="Username"
					className="input-bordered input w-full max-w-xs"
				/>
				{formik.errors.username && formik.touched.username && (
					<StyledErrorDiv>{formik.errors.username}</StyledErrorDiv>
				)}
			</StyledDiv>
			<StyledDiv>
				<label className="label">
					<StyleSpan theme={theme} className="label-text">
						Type
					</StyleSpan>
				</label>
				<StyledInput
					id="type"
					name="type"
					value={formik.values.type}
					onChange={formik.handleChange}
					required
					autocomplete="off"
					disabled={true}
					theme={theme}
					type="text"
					placeholder="Type"
					className="input-bordered input w-full max-w-xs"
				/>
				{formik.errors.type && formik.touched.type && <StyledErrorDiv>{formik.errors.type}</StyledErrorDiv>}
			</StyledDiv>
		</StyledNameUsernameType>
	);
}
