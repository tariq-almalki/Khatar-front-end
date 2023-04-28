// components imports
import { StyledBottomNavigationWithButtonsAndIconsContainer } from '../StyledBottomNavigationWithButtonsAndIconsContainer/StyledBottomNavigationWithButtonsAndIconsContainer';
import { AwesomeButtonsLinked } from './AwesomeButtonsLinked/AwesomeButtonsLinked';

export function StyledBottomNavigationWithButtonsAndIcons(props) {
	return (
		<StyledBottomNavigationWithButtonsAndIconsContainer>
			<AwesomeButtonsLinked theme={props.theme} />
		</StyledBottomNavigationWithButtonsAndIconsContainer>
	);
}
