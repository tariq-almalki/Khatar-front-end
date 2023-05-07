import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { useOutletContext, Form } from 'react-router-dom';

// animations
import { forgotPasswordAnimations } from './forgotPasswordAnimations';

const StyledOuterDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	overflow-y: auto;

	/* glossy effect */
	backdrop-filter: blur(16px) saturate(180%);
	-webkit-backdrop-filter: blur(16px) saturate(180%);
	background-color: rgba(18, 19, 56, 0.418);

	/* Hide scrollbar for Chrome, Safari and Opera */
	&::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
`;

const StyledForgotPassword = styled.div`
	background-color: antiquewhite;
	flex-grow: 1;
	height: fit-content;
	max-width: fit-content;
	border-radius: 4px;
	border: 1px solid red;
`;

export function ForgotPassword() {
	const outletContext = useOutletContext();

	return (
		<StyledOuterDiv>
			<StyledForgotPassword theme={outletContext.theme} {...forgotPasswordAnimations}></StyledForgotPassword>
		</StyledOuterDiv>
	);
}
