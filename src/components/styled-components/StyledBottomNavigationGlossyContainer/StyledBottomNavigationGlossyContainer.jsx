import styled from 'styled-components';

export const StyledBottomNavigationGlossyContainer = styled.div`
	display: flex;
	justify-content: space-around;
	position: fixed;
	bottom: 0;
	z-index: 1;
	width: 100%;
	padding: 1em;

	&.dark {
		--background-color: 255, 255, 255;
		--border-color: 255, 255, 255;
	}

	&.light {
		--background-color: 0, 0, 0;
		--border-color: 0, 0, 0;
	}

	/* Glossy effect */
	backdrop-filter: blur(11px) saturate(170%);
	-webkit-backdrop-filter: blur(11px) saturate(170%);
	background-color: rgba(var(--background-color), 0.295);
	border: 1px solid rgba(var(--border-color), 0.125);
`;
