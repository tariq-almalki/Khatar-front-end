import styled, { ThemeContext } from 'styled-components';
import { titleize, humanize } from 'underscore.string';
import { useContext } from 'react';

const StyledHeaderMainSectionComponent = styled.div`
	display: flex;
	max-height: 3em;
	width: 100%;
	font-size: 2em;
	padding-top: 1em;
	padding-left: 1em;
	padding-bottom: 0.5em;
	font-family: 'Rajdhani';
	background-color: ${props => useContext(ThemeContext).colors[props.theme].profileHeaderBackgroundColor};
	color: ${props => useContext(ThemeContext).colors[props.theme].profileHeaderColor};
`;

export function StyledHeaderMainSection({ location, theme }) {
	const header = titleize(humanize(location.pathname.match(/(?<=\/profile\/)([\w-]+)(?=\/?)/g)[0]));
	return <StyledHeaderMainSectionComponent theme={theme}>{header}</StyledHeaderMainSectionComponent>;
}
