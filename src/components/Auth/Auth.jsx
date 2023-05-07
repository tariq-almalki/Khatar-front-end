import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { motion } from 'framer-motion';

// animations
import { authAnimations } from './authAnimations';

const StyledAuth = styled(motion.div)`
	background: radial-gradient(100% 225% at 100% 0%, #000000 0%, #000000 100%),
		linear-gradient(236deg, #ffffff3e 0%, #000000 100%),
		linear-gradient(
			135deg,
			#ffffff 0%,
			#ffffff 36%,
			#ffffff90 36%,
			#ffffff90 60%,
			#ffffff50 60%,
			#ffffff50 67%,
			#ffffff20 67%,
			#ffffff20 100%
		);
	background-blend-mode: overlay, hard-light, normal;
	height: 100%;
	width: 100%;
`;

export function Auth() {
	const [theme] = useLocalStorage('theme', 'dark');

	return (
		<StyledAuth theme={theme} {...authAnimations}>
			<Outlet context={{ theme }} />
		</StyledAuth>
	);
}
