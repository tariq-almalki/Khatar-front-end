import styled, { ThemeContext } from 'styled-components';
import { useRouteError, Link } from 'react-router-dom';
import { useContext } from 'react';

const SignUpErrorElementComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	font-size: 4em;
	font-family: 'Rajdhani';
	color: ${props => useContext(ThemeContext).colors[props.theme].errorElementTextColor};
	background-color: ${props => useContext(ThemeContext).colors[props.theme].errorElementBackgroundColor};

	@media only all and (max-width: 470px) {
		font-size: 2.5em;
	}
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledLink = styled(Link)`
	font-family: 'Rajdhani';
	font-size: 0.2em;
	color: ${props => useContext(ThemeContext).colors[props.theme].errorElementTextColor};
	background-color: ${props => useContext(ThemeContext).colors[props.theme].errorElementBackgroundColor};
	padding: 0.5em;
	max-width: fit-content;
	border: 1px solid #333;
	border-radius: 4px;

	&:active {
		transform: translateY(2px);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	}
`;

export function SignUpErrorElement({ theme }) {
	const error = useRouteError();
	return (
		<SignUpErrorElementComponent theme={theme}>
			<StyledDiv>
				{error.message ? error.message : 'Non-existent Route'}
				<StyledLink to="/" theme={theme}>
					Go Back
				</StyledLink>
			</StyledDiv>
		</SignUpErrorElementComponent>
	);
}
