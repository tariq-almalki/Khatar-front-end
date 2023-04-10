import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const StyledLoadingScreenComponent = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	font-size: 5em;
	color: black;
	font-family: 'Rajdhani';
	letter-spacing: 1.5px;
	background-color: antiquewhite;
`;

const animations = {
	initial: {
		// opacity: 0,
		filter: 'blur(0em)',
	},
	animate: {
		opacity: 1,
		filter: 'blur(0.1em)',
		transitionEnd: {
			x: '-100%',
		},
	},
	exit: {
		opacity: 0,
	},
	transition: {
		repeat: 3,
		duration: 1,
		repeatType: 'reverse',
		repeatDelay: 0.7,
	},
};

export function StyledLoadingScreen(props) {
	const [ended, setEnded] = useState(true);

	function onAnimationCompleteHandler() {
		setEnded(false);
	}

	return (
		<AnimatePresence>
			{ended && (
				<StyledLoadingScreenComponent
					key="modal"
					{...props}
					{...animations}
					onAnimationComplete={onAnimationCompleteHandler}
				>
					Loading
				</StyledLoadingScreenComponent>
			)}
		</AnimatePresence>
	);
}
