import styled, { ThemeContext } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useContext } from 'react';

const StyledBlurLoadingScreenComponent = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	font-size: 5em;
	font-family: 'Rajdhani';
	letter-spacing: 1.5px;
	color: ${props => useContext(ThemeContext).colors[props.theme].loadingScreenTextColor};
	background-color: ${props => useContext(ThemeContext).colors[props.theme].loadingScreenBackgroundColor};
`;

const animations = {
	initial: {
		filter: 'blur(0em)',
	},
	animate: {
		opacity: 1,
		filter: 'blur(0.1em)',
		transition: {
			repeat: 2,
			duration: 1,
			repeatType: 'reverse',
			repeatDelay: 0.7,
		},
	},
	exit: {
		opacity: 0,
	},
};

export function StyledBlurLoadingScreen({ theme }) {
	const [ended, setEnded] = useState(true);

	function onAnimationCompleteHandler() {
		setEnded(false);
	}

	return (
		<AnimatePresence>
			{ended && (
				<StyledBlurLoadingScreenComponent
					theme={theme}
					key="modal"
					{...animations}
					onAnimationComplete={onAnimationCompleteHandler}
				>
					Loading...
				</StyledBlurLoadingScreenComponent>
			)}
		</AnimatePresence>
	);
}
