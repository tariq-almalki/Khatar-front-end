import styled from 'styled-components';

const ChatErrorElementComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	font-size: 4em;
	font-family: 'Rajdhani';
`;

export function ChatErrorElement() {
	return <ChatErrorElementComponent>Non-existent Route</ChatErrorElementComponent>;
}
