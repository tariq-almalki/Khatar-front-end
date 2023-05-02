import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

// animations
import { authAnimations } from './authAnimations';

const StyledAuth = styled.div`
        /* height: */
`;

export function Auth() {
	return (
		<StyledAuth {...authAnimations}>
			<Outlet />
		</StyledAuth>
	);
}
