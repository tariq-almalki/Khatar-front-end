import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';

const NotificationsErrorElementComponent = styled.div`
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

export function NotificationsErrorElement({ theme }) {
	return <NotificationsErrorElementComponent theme={theme}>Non-existent Route</NotificationsErrorElementComponent>;
}
