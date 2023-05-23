import { TailWindUpperMenu } from '../TailWindUpperMenu/TailWindUpperMenu';
import { TailWindLowerMenu } from '../TailwindLowerMenu/TailWindLowerMenu';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

// firebase
import { doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { firestore } from '@/firebase';

const StyledDiv = styled.div`
	border-right: 2px solid ${props => useContext(ThemeContext).colors[props.theme].sideBarRightBorderColor} !important;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].sideBarColor};
	transition: all 0.2s ease;
`;

export function TailWindSideBar({ theme, setTheme, authUser }) {
	const [docRef, loading, error] = useDocument(doc(firestore, 'users', authUser.uid));

	return (
		<StyledDiv theme={theme} className="flex flex-col place-content-between">
			{docRef && (
				<>
					<TailWindUpperMenu theme={theme} />
					<TailWindLowerMenu docUser={docRef.data()} theme={theme} setTheme={setTheme} />
				</>
			)}
		</StyledDiv>
	);
}
