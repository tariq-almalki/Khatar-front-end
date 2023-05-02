import styled from 'styled-components';

// animations
import { signUpAnimations } from './signUpAnimations';

const StyledSignUp = styled.div``;

export function SignUp() {
	return <StyledSignUp {...signUpAnimations} />;
}
