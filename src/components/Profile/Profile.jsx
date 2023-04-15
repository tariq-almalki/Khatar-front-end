import { StyledProfileContainer } from '../styled-components/StyledProfileContainer/StyledProfileContainer';
import { TailWindSideBar } from '../tailwindcss-components/TailWindSideBar/TailWindSideBar';
import { StyledProfileMainSectionContainer } from '../styled-components/StyledProfileMainSectionContainer/StyledProfileMainSectionContainer';
import { useLocation } from 'react-router-dom';

// animations
import { profileAnimations } from './profileAnimations';

export function Profile() {
	const location = useLocation();

	return (
		<StyledProfileContainer {...profileAnimations}>
			<TailWindSideBar />
			<StyledProfileMainSectionContainer location={location} />
		</StyledProfileContainer>
	);
}
