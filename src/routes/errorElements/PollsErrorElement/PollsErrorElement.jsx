import styled from 'styled-components';

const PollsErrorElementComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	font-size: 4em;
	font-family: 'Rajdhani';
`;

export function PollsErrorElement() {
	return <PollsErrorElementComponent>Non-existent Route</PollsErrorElementComponent>;
}
