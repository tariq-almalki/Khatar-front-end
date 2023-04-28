import styled from 'styled-components';

// components
import { AccountDetails } from './AccountDetails/AccountDetails';
import { AccountBio } from './AccountBio/AccountBio';
import { AccountButton } from './AccountButton/AccountButton';
import { useSubmit, useNavigation, Form } from 'react-router-dom';
import { useFormik } from 'formik';

// validation schema
import { validationSchema } from './validationSchema';

const StyledAccountBasicInfoComponent = styled.div`
	display: flex;
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

export function AccountBasicInfo(props) {
	const navigation = useNavigation();
	const submit = useSubmit();
	const formik = useFormik({
		initialValues: {
			name: '',
			username: '',
			address: '',
			birthday: '',
			gender: '',
			userType: '',
			bio: '',
		},
		validationSchema,
		onSubmit: async values => {
			submit(values, { method: 'post' });
		},
	});

	return (
		<StyledAccountBasicInfoComponent>
			<StyledForm method="post" onSubmit={formik.handleSubmit}>
				<AccountDetails theme={props.theme} formik={formik} />
				<AccountBio theme={props.theme} formik={formik} />
				<AccountButton theme={props.theme} />
			</StyledForm>
		</StyledAccountBasicInfoComponent>
	);
}
