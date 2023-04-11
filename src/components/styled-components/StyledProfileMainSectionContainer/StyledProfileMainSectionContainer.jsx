import styled from 'styled-components';
import { TailWindDivider } from '../../tailwindcss-components/TailWindDivider/TailWindDivider';
import { StyledHeaderMainSection } from '../StyledHeaderMainSection/StyledHeaderMainSection';

const StyledProfileMainSectionContainerComponent = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

export function StyledProfileMainSectionContainer() {
	return (
		<StyledProfileMainSectionContainerComponent>
			<StyledHeaderMainSection /> <TailWindDivider />
		</StyledProfileMainSectionContainerComponent>
	);
}
