import styled from 'styled-components';

const FriendsErrorElementComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	font-size: 4em;
	font-family: 'Rajdhani';
`;

export function FriendsErrorElement() {
	return <FriendsErrorElementComponent>Non-existent Route</FriendsErrorElementComponent>;
}
