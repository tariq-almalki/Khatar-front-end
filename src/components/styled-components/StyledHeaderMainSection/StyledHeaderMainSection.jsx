import styled from 'styled-components';
import { titleize, humanize } from 'underscore.string';

const StyledHeaderMainSectionComponent = styled.div`
	display: flex;
	height: 10%;
	width: 100%;
	font-size: 2em;
	padding-top: 1em;
	padding-left: 1em;
	padding-bottom: 0.5em;
	font-family: 'Rajdhani';
`;

export function StyledHeaderMainSection(props) {
	const header = titleize(humanize(props.location.pathname.match(/(?<=\/profile\/)([\w-]+)(?=\/?)/g)[0]));
	return <StyledHeaderMainSectionComponent>{header}</StyledHeaderMainSectionComponent>;
}
