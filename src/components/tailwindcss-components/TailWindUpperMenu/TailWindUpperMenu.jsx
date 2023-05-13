import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import {
	faPeopleGroup,
	faHouse,
	faUserFriends,
	faBell,
	faSquarePollVertical,
	faHandshakeAngle,
	faGear,
	faCommentDots,
	faAward,
	faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

// firebase
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';

const StyledUl = styled.ul`
	background-color: ${props => useContext(ThemeContext).colors[props.theme].sideBarColor};
	transition: all 0.2s ease;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
	color: ${props => useContext(ThemeContext).colors[props.theme].iconColor};
	transition: all 0.2s ease;
`;

const StyledLink = styled(Link)`
&:hover {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].sideBarLinkHoverColor};
	}

	&.active {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].sideBarLinkActiveColor};
	}
`

const StyledNavLink = styled(NavLink)`
	&:hover {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].sideBarLinkHoverColor};
	}

	&.active {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].sideBarLinkActiveColor};
	}
`;

export function TailWindUpperMenu(props) {
	const [signOut, loading, error] = useSignOut(auth);
	const navigate = useNavigate();

	async function signOutHandler() {
		const success = await signOut();
		if (success) {
			alert('signed out succesfully');
			navigate('/');
		}
	}

	return (
		<StyledUl theme={props.theme} className="menu gap-1 p-1">
			<li className="mb-10 mt-2">
				<StyledNavLink theme={props.theme} to="/" className="flex-col px-2">
					<StyledFontAwesomeIcon theme={props.theme} icon={faHouse} className="flex-col place-content-end" />
				</StyledNavLink>
			</li>
			<li>
				<StyledNavLink theme={props.theme} to="awards" className="flex-col p-3">
					<StyledFontAwesomeIcon theme={props.theme} icon={faAward} className="flex-col place-content-end" />
				</StyledNavLink>
			</li>
			<li>
				<StyledNavLink theme={props.theme} to="team" className="flex-col p-3">
					<StyledFontAwesomeIcon theme={props.theme} icon={faPeopleGroup} className="flex-col place-content-end" />
				</StyledNavLink>
			</li>
			<li>
				<StyledNavLink theme={props.theme} to="friends" className="flex-col p-3">
					<StyledFontAwesomeIcon theme={props.theme} icon={faUserFriends} className="flex-col place-content-end" />
				</StyledNavLink>
			</li>
			<li>
				<StyledNavLink theme={props.theme} to="chat" className="flex-col p-3">
					<StyledFontAwesomeIcon theme={props.theme} icon={faCommentDots} className="flex-col place-content-end" />
				</StyledNavLink>
			</li>
			<li>
				<StyledNavLink theme={props.theme} to="help-requests" className="flex-col p-3">
					<StyledFontAwesomeIcon
						theme={props.theme}
						icon={faHandshakeAngle}
						className="flex-col place-content-end"
					/>
				</StyledNavLink>
			</li>
			<li>
				<StyledNavLink theme={props.theme} to="polls" className="pv-3 flex-col p-3">
					<StyledFontAwesomeIcon
						theme={props.theme}
						icon={faSquarePollVertical}
						className="flex-col place-content-end"
					/>
				</StyledNavLink>
			</li>
			<li>
				<StyledNavLink
					theme={props.theme}
					to="notifications"
					state={{
						url: 'all-notifications',
						type: `All`,
						key: nanoid(5),
					}}
					className="flex-col p-3"
				>
					<StyledFontAwesomeIcon theme={props.theme} icon={faBell} className="flex-col place-content-end" />
				</StyledNavLink>
			</li>
			<li>
				<StyledNavLink theme={props.theme} to="settings" className="flex-col p-3">
					<StyledFontAwesomeIcon theme={props.theme} icon={faGear} className="flex-col place-content-end" />
				</StyledNavLink>
			</li>
			<li>
				<StyledLink theme={props.theme} className="flex-col p-3" onClick={signOutHandler}>
					<StyledFontAwesomeIcon
						theme={props.theme}
						icon={faRightFromBracket}
						className="flex-col place-content-end"
					/>
				</StyledLink>
			</li>
		</StyledUl>
	);
}
