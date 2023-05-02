import styled from 'styled-components';

const AuthErrorElementComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	font-size: 4em;
	font-family: 'Rajdhani';
`;

export function AuthErrorElement() {
	return <AuthErrorElementComponent>Non-existent Route</AuthErrorElementComponent>;
}
