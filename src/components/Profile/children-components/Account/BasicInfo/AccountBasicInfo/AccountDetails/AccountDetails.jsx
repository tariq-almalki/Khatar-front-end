import styled from 'styled-components';

// components
import { NameUsernameType } from './account-details-components/NameUsernameType/NameUsernameType';
import { AddressBirthdayGender } from './account-details-components/AddressBirthdayGender/AddressBirthdayGender';

const AccountDetailsComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 1em;
`;

export function AccountDetails() {
	return (
		<AccountDetailsComponent>
			<NameUsernameType />
			<AddressBirthdayGender />
		</AccountDetailsComponent>
	);
}
