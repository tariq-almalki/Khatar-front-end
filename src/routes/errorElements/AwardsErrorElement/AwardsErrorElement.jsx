import styled from 'styled-components';

const AwardsErrorElementComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	font-size: 4em;
	font-family: 'Rajdhani';
`;

export function AwardsErrorElement() {
	return <AwardsErrorElementComponent>Non-existent Route</AwardsErrorElementComponent>;
}
