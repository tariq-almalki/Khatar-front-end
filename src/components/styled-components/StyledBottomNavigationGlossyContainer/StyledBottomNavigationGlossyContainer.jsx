import styled from 'styled-components';

export const StyledBottomNavigationGlossyContainer = styled.div`
	display: flex;
	justify-content: space-around;
	position: fixed;
	bottom: 0;
	z-index: 1;
	width: 100%;
	padding: 1em;

	/* Glossy effect */
	backdrop-filter: blur(11px) saturate(170%);
	-webkit-backdrop-filter: blur(11px) saturate(170%);
	background-color: rgba(22, 22, 26, 0.295);
	border: 1px solid rgba(255, 255, 255, 0.125);
`;
