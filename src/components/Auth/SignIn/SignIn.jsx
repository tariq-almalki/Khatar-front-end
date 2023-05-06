import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';

// animations
import { signInAnimations } from './signInAnimations';

const StyledSignIn = styled.div``;

export function SignIn() {
	const outletContext = useOutletContext();
	return <StyledSignIn theme={outletContext.theme} {...signInAnimations}></StyledSignIn>;
}
