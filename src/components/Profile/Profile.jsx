import { StyledProfileContainer } from '../styled-components/StyledProfileContainer/StyledProfileContainer';
import { TailWindSideBar } from '../tailwindcss-components/TailWindSideBar/TailWindSideBar';
import { StyledProfileMainSectionContainer } from '../styled-components/StyledProfileMainSectionContainer/StyledProfileMainSectionContainer';
import { useLocation } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';

// animations
import { profileAnimations } from './profileAnimations';

export function Profile() {
	const location = useLocation();
	const [theme, setTheme] = useLocalStorage('theme', 'dark');
	const [user, loading, error] = useAuthState(auth);

	if (loading) {
		return (
			<div>
				<p>Initialising User...</p>
			</div>
		);
	}

	if (error) {
		throw error;
	}

	if (user) {
		return (
			<StyledProfileContainer theme={theme} {...profileAnimations}>
				<TailWindSideBar theme={theme} setTheme={setTheme} />
				<StyledProfileMainSectionContainer theme={theme} location={location} />
			</StyledProfileContainer>
		);
	} else {
		throw new Error('Not Authorized');
	}
}
