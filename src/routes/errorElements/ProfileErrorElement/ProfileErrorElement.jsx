import styled from 'styled-components';
import { useRouteError } from 'react-router-dom';

const ProfileErrorElementComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	font-size: 4em;
	font-family: 'Rajdhani';
`;

export function ProfileErrorElement() {
	const error = useRouteError();
	console.error(error);
	return <ProfileErrorElementComponent>Non-existent Route</ProfileErrorElementComponent>;
}
