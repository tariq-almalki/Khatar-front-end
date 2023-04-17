import styled from 'styled-components';

const AppErrorElementComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	font-size: 4em;
	font-family: 'Rajdhani';
`;

export function AppErrorElement() {
	return <AppErrorElementComponent>Non-existent Route</AppErrorElementComponent>;
}
