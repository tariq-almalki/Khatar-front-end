// General
import { auth } from '@/firebase';

// components
import { StyledAppContainer } from '../styled-components/StyledAppContainer/StyledAppContainer.jsx';
import { StyledBottomNavigation } from '../styled-components/StyledBottomNavigation/StyledBottomNavigation.jsx';

// animations
import { appAnimations } from './appAnimations.js';

// hooks
import { useLocalStorage } from '../../hooks/useLocalStorage.jsx';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// loading page
import { StyledLoadingScreen } from '../styled-components/StyledLoadingScreen/StyledLoadingScreen.jsx';

export function App() {
	const [theme] = useLocalStorage('theme', 'dark');
	const [user] = useAuthState(auth);

	useEffect(() => {
		document.documentElement.style.setProperty('--theme', theme === 'dark' ? '#000' : '#fff');
	}, [theme]);

	return (
		<>
			{/* <StyledLoadingScreen /> */}
			<StyledAppContainer {...appAnimations}>
				<StyledBottomNavigation user={user} theme={theme} />
			</StyledAppContainer>
		</>
	);
}
