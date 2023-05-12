import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { firestore } from '@/firebase';
import { doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';

const StyledAddressBirthdayGender = styled.div``;

const StyledSpan = styled.span`
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

export function AddressBirthdayGender({ theme, user }) {
	const [value, loading, error] = useDocument(doc(firestore, 'users', user.uid));

	return (
		<StyledAddressBirthdayGender>
			<div>
				<label className="label">
					<StyledSpan theme={theme} className="label-text">
						Address
					</StyledSpan>
				</label>
				<StyledInput
					value={loading ? 'Loading...' : value.data().address}
					theme={theme}
					type="text"
					placeholder="Address"
					className="input-bordered input w-full max-w-xs"
				/>
			</div>
			<div>
				<label className="label">
					<StyledSpan theme={theme} className="label-text">
						Birthday
					</StyledSpan>
				</label>
				<StyledInput
					value={loading ? 'Loading...' : value.data().dob}
					theme={theme}
					type="text"
					placeholder="Birthday"
					className="input-bordered input w-full max-w-xs"
				/>
			</div>
			<div>
				<label className="label">
					<StyledSpan theme={theme} className="label-text">
						Gender
					</StyledSpan>
				</label>
				<StyledInput
					value={loading ? 'Loading...' : value.data().gender}
					theme={theme}
					type="text"
					placeholder="Gender"
					className="input-bordered input w-full max-w-xs"
				/>
			</div>
		</StyledAddressBirthdayGender>
	);
}
