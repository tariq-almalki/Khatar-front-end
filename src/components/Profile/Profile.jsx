import { StyledProfileContainer } from '../styled-components/StyledProfileContainer/StyledProfileContainer';
import { profileAnimations } from './profileAnimations';
import { TailWindSideBar } from '../tailwindcss-components/TailWindSideBar/TailWindSideBar';
import { StyledProfileMainSectionContainer } from '../styled-components/StyledProfileMainSectionContainer/StyledProfileMainSectionContainer';

export function Profile() {
	return (
		<StyledProfileContainer {...profileAnimations}>
			<TailWindSideBar />
			<StyledProfileMainSectionContainer />
		</StyledProfileContainer>
	);
}
