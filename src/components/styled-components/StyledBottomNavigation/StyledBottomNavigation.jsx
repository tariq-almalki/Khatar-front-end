import { StyledBottomNavigationWithButtonsAndIcons } from '../StyledBottomNavigationWithButtonsAndIcons/StyledBottomNavigationWithButtonsAndIcons';
import { StyledBottomNavigationGlossyContainer } from '../StyledBottomNavigationGlossyContainer/StyledBottomNavigationGlossyContainer.jsx';

// motion component
export function StyledBottomNavigation(props) {
	return (
		<StyledBottomNavigationGlossyContainer>
			<StyledBottomNavigationWithButtonsAndIcons theme={props.theme} />
		</StyledBottomNavigationGlossyContainer>
	);
}
