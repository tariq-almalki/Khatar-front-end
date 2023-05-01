import styled from 'styled-components';
import { motion } from 'framer-motion';
import imgUrl from '@/assets/images/mapbox-layers.jpg';

export const StyledAppContainer = styled(motion.div)`
	height: 100%;
	width: 100vw;
	background-image: url(${imgUrl});
	background-size: contain;
	overflow: hidden;
`;
