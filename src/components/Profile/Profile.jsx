import { StyledProfileContainer } from '../styled-components/StyledProfileContainer/StyledProfileContainer';
import { Link } from 'react-router-dom';
import { profileAnimations } from './profileAnimations';

export function Profile() {
	return (
		<StyledProfileContainer {...profileAnimations}>
			<Link to="/">Go Home</Link>
		</StyledProfileContainer>
	);
}
