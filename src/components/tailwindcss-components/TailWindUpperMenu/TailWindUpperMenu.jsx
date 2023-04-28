import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
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
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const StyledUl = styled.ul`
	background-color: ${props => useContext(ThemeContext).colors[props.theme].sideBarColor};
	transition: all 0.2s ease;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
	color: ${props => useContext(ThemeContext).colors[props.theme].iconColor};
	transition: all 0.2s ease;
`;

const StyledNavLink = styled(NavLink)`
	&:hover {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].sideBarLinkHoverColor};
	}

	&.active {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].sideBarLinkActiveColor};
	}
`;

export function TailWindUpperMenu(props) {
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
				<StyledNavLink theme={props.theme} to="notifications" className="flex-col p-3">
					<StyledFontAwesomeIcon theme={props.theme} icon={faBell} className="flex-col place-content-end" />
				</StyledNavLink>
			</li>
			<li>
				<StyledNavLink theme={props.theme} to="settings" className="flex-col p-3">
					<StyledFontAwesomeIcon theme={props.theme} icon={faGear} className="flex-col place-content-end" />
				</StyledNavLink>
			</li>
		</StyledUl>
	);
}
