import styled, { ThemeContext } from 'styled-components';
import { useRouteError } from 'react-router-dom';
import { useContext } from 'react';

const ProfileErrorElementComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	font-size: 4em;
	font-family: 'Rajdhani';
	color: ${props => useContext(ThemeContext).colors[props.theme].errorElementTextColor};
	background-color: ${props => useContext(ThemeContext).colors[props.theme].errorElementBackgroundColor};
`;

export function ProfileErrorElement({ theme }) {
	const error = useRouteError();
	return (
		<ProfileErrorElementComponent theme={theme}>
			{error.message ? error.message : 'Non-existent Route'}
		</ProfileErrorElementComponent>
	);
}
