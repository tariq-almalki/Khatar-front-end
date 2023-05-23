import { StyledProfileContainer } from '../styled-components/StyledProfileContainer/StyledProfileContainer';
import { TailWindSideBar } from '../tailwindcss-components/TailWindSideBar/TailWindSideBar';
import { StyledProfileMainSectionContainer } from '../styled-components/StyledProfileMainSectionContainer/StyledProfileMainSectionContainer';
import { useLocation } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';

// firebase
import { auth } from '@/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

// loading screen
// import { StyledBlurLoadingScreen } from '../styled-components/StyledBlurLoadingScreen/StyledBlurLoadingScreen';
import { StyledLoadingScreen } from '../styled-components/StyledLoadingScreen/StyledLoadingScreen';

// animations
import { profileAnimations } from './profileAnimations';

export function Profile() {
	const location = useLocation();
	const [theme, setTheme] = useLocalStorage('theme', 'dark');
	const [authUser, authLoading, authError] = useAuthState(auth);

	if (authLoading) {
		return <StyledLoadingScreen theme={theme} />;
	}

	if (authError) {
		throw new Error('Something weird Happened!');
	}

	if (authUser) {
		return (
			<StyledProfileContainer theme={theme} {...profileAnimations}>
				<TailWindSideBar authUser={authUser} theme={theme} setTheme={setTheme} />
				<StyledProfileMainSectionContainer authUser={authUser} theme={theme} location={location} />
			</StyledProfileContainer>
		);
	} else {
		throw new Error('Not Authorized');
	}
}
