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

export function AccountDetails({theme, user}) {
	return (
		<AccountDetailsComponent>
			<NameUsernameType user={user} theme={theme} />
			<AddressBirthdayGender user={user} theme={theme} />
		</AccountDetailsComponent>
	);
}
