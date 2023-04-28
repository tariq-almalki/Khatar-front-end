import { StyledProfileContainer } from '../styled-components/StyledProfileContainer/StyledProfileContainer';
import { TailWindSideBar } from '../tailwindcss-components/TailWindSideBar/TailWindSideBar';
import { StyledProfileMainSectionContainer } from '../styled-components/StyledProfileMainSectionContainer/StyledProfileMainSectionContainer';
import { useLocation } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';

// animations
import { profileAnimations } from './profileAnimations';

export function Profile() {
	const location = useLocation();
	const [theme, setTheme] = useLocalStorage('theme', 'dark');

	return (
		<StyledProfileContainer theme={theme} {...profileAnimations}>
			<TailWindSideBar theme={theme} setTheme={setTheme} />
			<StyledProfileMainSectionContainer theme={theme} location={location} />
		</StyledProfileContainer>
	);
}
