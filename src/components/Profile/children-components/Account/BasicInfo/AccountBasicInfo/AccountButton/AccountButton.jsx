import styled from 'styled-components';

const AccountButtonComponent = styled.div`
	border: 1px solid red;
`;

export function AccountButton() {
	return (
		<AccountButtonComponent>
			<button>Submit</button>
		</AccountButtonComponent>
	);
}
