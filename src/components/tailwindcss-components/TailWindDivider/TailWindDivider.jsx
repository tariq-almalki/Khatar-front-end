import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';

const StyledTailWindDivider = styled.div`
	&::before {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].dividerColor} !important;
		--tw-bg-opacity: 1 !important;
	}

	&::after {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].dividerColor} !important;
		--tw-bg-opacity: 1 !important;
	}
`;

export function TailWindDivider(props) {
	return <StyledTailWindDivider theme={props.theme} className="divider m-0"></StyledTailWindDivider>;
}
