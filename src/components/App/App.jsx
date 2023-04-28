// components
import { StyledAppContainer } from '../styled-components/StyledAppContainer/StyledAppContainer.jsx';
import { StyledBottomNavigation } from '../styled-components/StyledBottomNavigation/StyledBottomNavigation.jsx';

// animations
import { appAnimations } from './appAnimations.js';

// loading page
import { StyledLoadingScreen } from '../styled-components/StyledLoadingScreen/StyledLoadingScreen.jsx';

import { useLocalStorage } from '../../hooks/useLocalStorage.jsx';

export function App() {
	const [theme] = useLocalStorage('theme', 'dark');

	return (
		<>
			{/* <StyledLoadingScreen /> */}
			<StyledAppContainer {...appAnimations}>
				<StyledBottomNavigation theme={theme} />
			</StyledAppContainer>
		</>
	);
}
