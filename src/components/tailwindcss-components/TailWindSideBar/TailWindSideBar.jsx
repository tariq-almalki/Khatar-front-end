import { TailWindUpperMenu } from '../TailWindUpperMenu/TailWindUpperMenu';
import { TailWindLowerMenu } from '../TailwindLowerMenu/TailWindLowerMenu';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const StyledDiv = styled.div`
	border-right: 2px solid ${props => useContext(ThemeContext).colors[props.theme].sideBarRightBorderColor} !important;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].sideBarColor};
	transition: all 0.2s ease;
`;

export function TailWindSideBar({ theme, setTheme, user }) {
	return (
		<StyledDiv theme={theme} className="flex flex-col place-content-between">
			<TailWindUpperMenu theme={theme} />
			<TailWindLowerMenu user={user} theme={theme} setTheme={setTheme} />
		</StyledDiv>
	);
}
