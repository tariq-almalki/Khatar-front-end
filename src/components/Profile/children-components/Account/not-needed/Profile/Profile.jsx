import styled from 'styled-components';
import { motion } from 'framer-motion';

// components
import { ProfileImage } from './BasicInfo/ProfileImage/ProfileImage';
import { ChangePasswordPrompt } from '../ChangePasswordPrompt/ChangePasswordPrompt';
import { ContactInfo } from './ContactInfo/ContactInfo';
import { BasicInfo } from './BasicInfo/BasicInfo';

const ProfileComponent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
	padding: 0.5em;
	column-gap: 2em;

	@media only all and (max-width: 1920px) {
		justify-content: center;
	}
`;

const StyledProfileContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	gap: 3em;
`;

const StyledBasicContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-grow: 1;
`;

const StyledContactContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-grow: 1;
`;

const StyledChangePasswordContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-grow: 1;
`;

export function Profile() {
	// for stopping animation upon routing
	const body = document.querySelector('body');
	body.classList.add('no-animation');
	setTimeout(() => body.classList.remove('no-animation'), 300);

	return (
		<ProfileComponent>
			<ProfileImage />
			<StyledProfileContainer>
				<StyledBasicContainer>
					<BasicInfo />
				</StyledBasicContainer>

				<StyledContactContainer>
					<ContactInfo />
				</StyledContactContainer>

				<StyledChangePasswordContainer>
					<ChangePasswordPrompt />
				</StyledChangePasswordContainer>
			</StyledProfileContainer>
		</ProfileComponent>
	);
}
