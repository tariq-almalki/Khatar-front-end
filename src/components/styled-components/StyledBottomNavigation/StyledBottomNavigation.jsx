import { StyledBottomNavigationWithButtonsAndIcons } from '../StyledBottomNavigationWithButtonsAndIcons/StyledBottomNavigationWithButtonsAndIcons';
import { StyledBottomNavigationGlossyContainer } from '../StyledBottomNavigationGlossyContainer/StyledBottomNavigationGlossyContainer.jsx';

// motion component
export function StyledBottomNavigation() {
	return (
		<StyledBottomNavigationGlossyContainer>
			<StyledBottomNavigationWithButtonsAndIcons />
		</StyledBottomNavigationGlossyContainer>
	);
}
