import styled from 'styled-components';
import { TailWindDivider } from '../../tailwindcss-components/TailWindDivider/TailWindDivider';
import { StyledHeaderMainSection } from '../StyledHeaderMainSection/StyledHeaderMainSection';
import { Outlet } from 'react-router-dom';

const StyledProfileMainSectionContainerComponent = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const StyledDiv = styled.div`
	display: flex;
	flex-grow: 1;
	overflow-y: auto;

	@media only screen and (max-width: 950px) {
		/* Hide scrollbar for Chrome, Safari and Opera */
		&::-webkit-scrollbar {
			display: none;
		}

		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
`;

export function StyledProfileMainSectionContainer(props) {
	return (
		<StyledProfileMainSectionContainerComponent>
			<StyledHeaderMainSection location={props.location} />
			<TailWindDivider />
			<StyledDiv>
				<Outlet />
			</StyledDiv>
		</StyledProfileMainSectionContainerComponent>
	);
}