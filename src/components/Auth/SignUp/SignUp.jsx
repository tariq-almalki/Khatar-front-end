import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { useOutletContext, Form } from 'react-router-dom';

// animations
import { signUpAnimations } from './signUpAnimations';

const StyledSignUp = styled.div`
	background-color: antiquewhite;
	flex-grow: 1;
	height: fit-content;
	max-width: fit-content;
	border-radius: 4px;
	border: 1px solid red;
`;

export function SignUp() {
	const outletContext = useOutletContext();

	return <StyledSignUp theme={outletContext.theme} {...signUpAnimations}></StyledSignUp>;
}
