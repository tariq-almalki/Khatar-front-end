import styled from 'styled-components';

// animations
import { signInAnimations } from './signInAnimations';

const StyledSignIn = styled.div``;

export function SignIn() {
	return <StyledSignIn {...signInAnimations} />;
}
