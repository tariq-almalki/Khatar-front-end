import styled from 'styled-components';

// components
import { NameUsernameType } from './NameUsernameType/NameUsernameType';
import { AddressBirthdayGender } from './AddressBirthdayGender/AddressBirthdayGender';

const AccountDetailsComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 1em;
`;

export function AccountDetails({ theme, user, formik, disabled }) {
	return (
		<AccountDetailsComponent>
			<NameUsernameType disabled={disabled} user={user} theme={theme} formik={formik} />
			<AddressBirthdayGender disabled={disabled} user={user} theme={theme} formik={formik} />
		</AccountDetailsComponent>
	);
}
