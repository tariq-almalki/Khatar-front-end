import styled, { ThemeContext } from 'styled-components';
import { useContext, useState } from 'react';

// components
import { AccountDetails } from './AccountDetails/AccountDetails';
import { AccountBio } from './AccountBio/AccountBio';
import { Form } from 'react-router-dom';
import { useFormik } from 'formik';

// firebase
import { firestore } from '@/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { useUploadFile } from 'react-firebase-hooks/storage';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { storage } from '@/firebase';
import { ref as storageRef } from 'firebase/storage';
import { auth } from '@/firebase';

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

export function AccountBasicInfo({ theme, user, button2State, button2StateHandler, file }) {
	const [value, documentLoading, documentError] = useDocument(doc(firestore, 'users', user.uid));
	const [uploadFile, uploading, uploadSnapshot, uploadError] = useUploadFile();
	const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);
	const bucketRef = storageRef(storage, `${user.uid}/${file.name}`);

	const [button1, setButton1] = useState({
		text: 'Edit',
		type: 'submit',
	});

	const formik = useFormik({
		initialValues: {
			name: documentLoading ? 'Loading...' : value.data().name,
			username: documentLoading ? 'Loading...' : value.data().username,
			address: documentLoading ? 'Loading...' : value.data().address,
			dob: documentLoading ? 'Loading...' : value.data().dob,
			gender: documentLoading ? 'Loading...' : value.data().gender,
			type: documentLoading ? 'Loading...' : value.data().type,
			bio: documentLoading ? 'Loading...' : value.data().bio,
		},
		validationSchema,
		onSubmit: async values => {
			const docRef = doc(firestore, 'users', user.uid);

			// firestore update
			await updateDoc(docRef, { ...values, photoURL: `${user.uid}/${file.name}` });

			// auth update
			await updateProfile({ displayName: null, photoURL: `${user.uid}/${file.name}` });

			// storage update
			await uploadFile(bucketRef, file, {
				contentType: file.type,
			});
		},
		enableReinitialize: true,
	});

	function button1Handler() {
		setButton1(state => ({
			text: state.text === 'Edit' ? 'Save' : 'Edit',
			type: state.type === 'button' ? 'submit' : 'button',
		}));

		button2StateHandler(state => ({
			styles: { backgroundColor: !state.disabled ? '' : '#FF3939' },
			disabled: !state.disabled,
		}));
	}

	function button2Handler() {
		// to reset values when canceling
		formik.resetForm();

		button2StateHandler(state => ({
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
				<AccountDetails disabled={button2State.disabled} theme={theme} formik={formik} />
				<AccountBio disabled={button2State.disabled} theme={theme} formik={formik} />
				<StyledDiv>
					<StyledButton1 theme={theme} type={button1.type} onClick={button1Handler}>
						{button1.text}
					</StyledButton1>
					<StyledButton2
						style={button2State.styles}
						theme={theme}
						type="button"
						disabled={button2State.disabled}
						onClick={button2Handler}
					>
						Cancel
					</StyledButton2>
				</StyledDiv>
			</StyledForm>
		</StyledAccountBasicInfoComponent>
	);
}
