import styled, { ThemeContext } from 'styled-components';
import { useContext, useState } from 'react';

// components
import { AccountDetails } from './AccountDetails/AccountDetails';
import { AccountBio } from './AccountBio/AccountBio';
import { useNavigation, Form } from 'react-router-dom';
import { useFormik } from 'formik';

// firebase
import { firestore } from '@/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';

// validation schema
import { validationSchema } from './validationSchema';

const StyledAccountBasicInfoComponent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 0.5em;
`;

const StyledForm = styled(Form)`
	padding: 1em;
	flex-grow: 0.5;
	max-width: 820px;
`;

const StyledDiv = styled.div`
	display: flex;
	gap: 1em;

	@media only screen and (max-width: 601px) {
		max-width: 217px;
		justify-content: start;
		margin: auto;
	}
`;

const StyledButton1 = styled.button`
	color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoButtonFontColor};
	border: 1px solid ${props => useContext(ThemeContext).colors[props.theme].basicInfoButtonBorderColor};
	background-color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoButtonColor} !important;
	padding: 0.3em;
	padding-left: 1em;
	padding-right: 1em;
	border-radius: 4px;
	transition: all 0.2s ease;
	letter-spacing: 0.5px;
	width: 80px;

	&:hover {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoButtonColorHover} !important;
	}

	&:active {
		transform: translateY(2px);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	}
`;

const StyledButton2 = styled.button`
	color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoButtonFontColor};
	border: 1px solid ${props => useContext(ThemeContext).colors[props.theme].basicInfoButtonBorderColor};
	padding: 0.3em;
	padding-left: 1em;
	padding-right: 1em;
	border-radius: 4px;
	transition: all 0.2s ease;
	letter-spacing: 0.5px;
	width: 80px;

	&:active {
		transform: translateY(2px);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	}

	&:disabled {
		opacity: 0.5; /* reduce opacity to indicate disabled state */
		cursor: not-allowed; /* change cursor to indicate disabled state */
		/* optionally, you can also change the background color and text color */
		background-color: #ccc;
		color: #999;
	}
`;

export function AccountBasicInfo({ theme, user }) {
	const [value, loading, error] = useDocument(doc(firestore, 'users', user.uid));

	const [button1, setButton1] = useState({
		text: 'Edit',
		type: 'submit',
	});

	const [button2, setButton2] = useState({
		styles: {},
		disabled: true,
	});

	const formik = useFormik({
		initialValues: {
			name: loading ? 'Loading...' : value.data().name,
			username: loading ? 'Loading...' : value.data().username,
			address: loading ? 'Loading...' : value.data().address,
			dob: loading ? 'Loading...' : value.data().dob,
			gender: loading ? 'Loading...' : value.data().gender,
			type: loading ? 'Loading...' : value.data().type,
			bio: loading ? 'Loading...' : value.data().bio,
		},
		validationSchema,
		onSubmit: async values => {
			const docRef = doc(firestore, 'users', user.uid);

			// updating doc
			await updateDoc(docRef, values);
		},
		enableReinitialize: true,
	});

	function button1Handler() {
		setButton1(state => ({
			text: state.text === 'Edit' ? 'Save' : 'Edit',
			type: state.type === 'button' ? 'submit' : 'button',
		}));

		setButton2(state => ({
			styles: { backgroundColor: !state.disabled ? '' : '#FF3939' },
			disabled: !state.disabled,
		}));
	}

	function button2Handler() {
		// to reset values when canceling
		formik.resetForm();

		setButton2(state => ({
			styles: {},
			disabled: !state.disabled,
		}));

		setButton1(state => ({
			text: state.text === 'Edit' ? 'Save' : 'Edit',
			type: state.type === 'button' ? 'submit' : 'button',
		}));
	}

	return (
		<StyledAccountBasicInfoComponent>
			<StyledForm method="post" onSubmit={formik.handleSubmit}>
				<AccountDetails disabled={button2.disabled} theme={theme} formik={formik} />
				<AccountBio disabled={button2.disabled} theme={theme} formik={formik} />
				<StyledDiv>
					<StyledButton1 theme={theme} type={button1.type} onClick={button1Handler}>
						{button1.text}
					</StyledButton1>
					<StyledButton2
						style={button2.styles}
						theme={theme}
						type="button"
						disabled={button2.disabled}
						onClick={button2Handler}
					>
						Cancel
					</StyledButton2>
				</StyledDiv>
			</StyledForm>
		</StyledAccountBasicInfoComponent>
	);
}
