import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const AccountButtonComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 1em;
	padding-bottom: 1em;
`;

const StyledDiv = styled.div`
	flex-grow: 1;
	max-width: 450px;

	@media only screen and (max-width: 607px) {
		max-width: 217px;
	}
`;

const StyledButton = styled.button`
	background-color: #2a303c;
	border-radius: 0.5em;
	border: 1px solid rgba(166, 173, 187, 0.2);
	padding: 0.2em;

	color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoButtonColor};
`;

export function AccountButton(props) {
	return (
		<AccountButtonComponent>
			<StyledDiv>
				<StyledButton theme={props.theme}>Update Basic info</StyledButton>
			</StyledDiv>
		</AccountButtonComponent>
	);
}
