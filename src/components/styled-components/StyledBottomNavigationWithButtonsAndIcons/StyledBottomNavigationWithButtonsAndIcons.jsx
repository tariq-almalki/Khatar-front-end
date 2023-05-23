// components imports
import { StyledBottomNavigationWithButtonsAndIconsContainer } from '../StyledBottomNavigationWithButtonsAndIconsContainer/StyledBottomNavigationWithButtonsAndIconsContainer';
import { AwesomeButtonsLinked } from './AwesomeButtonsLinked/AwesomeButtonsLinked';

export function StyledBottomNavigationWithButtonsAndIcons({ theme, user }) {
	return (
		<StyledBottomNavigationWithButtonsAndIconsContainer>
			<AwesomeButtonsLinked user={user} theme={theme} />
		</StyledBottomNavigationWithButtonsAndIconsContainer>
	);
}
