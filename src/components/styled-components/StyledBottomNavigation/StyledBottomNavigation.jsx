import { StyledBottomNavigationWithButtonsAndIcons } from '../StyledBottomNavigationWithButtonsAndIcons/StyledBottomNavigationWithButtonsAndIcons';
import { StyledBottomNavigationGlossyContainer } from '../StyledBottomNavigationGlossyContainer/StyledBottomNavigationGlossyContainer.jsx';

// motion component
export function StyledBottomNavigation({ theme, user }) {
	return (
		<StyledBottomNavigationGlossyContainer className={theme}>
			<StyledBottomNavigationWithButtonsAndIcons user={user} theme={theme} />
		</StyledBottomNavigationGlossyContainer>
	);
}
