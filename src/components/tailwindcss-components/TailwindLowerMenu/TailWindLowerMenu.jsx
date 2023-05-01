import { InnerMoon } from '@theme-toggles/react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

// toggle styles
import '@theme-toggles/react/css/InnerMoon.css';

const StyledInnerMoon = styled(InnerMoon)`
	display: flex;
	justify-content: center;
	align-items: center;

	& > svg {
		color: ${props => useContext(ThemeContext).colors[props.theme].iconColor};
		width: 1.5em;
		height: 1.5em;
	}

	&:hover {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].sideBarLinkHoverColor};
	}

	&.active {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].sideBarLinkActiveColor};
	}
`;

const StyledUl = styled.ul`
	background-color: ${props => useContext(ThemeContext).colors[props.theme].sideBarColor};
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

const StyledImageIndicator = styled.div`
	&.avatar.online:before {
		box-shadow: 0 0 0 1.5px ${props => useContext(ThemeContext).colors[props.theme].accountBackgroundColor} !important;
	}
`;

export function TailWindLowerMenu(props) {
	function themeHandler() {
		props.setTheme(props.theme === 'dark' ? 'light' : 'dark');
	}

	return (
		<StyledUl theme={props.theme} className="menu gap-1 p-1">
			<li>
				<StyledInnerMoon theme={props.theme} toggled={props.theme === 'dark' ? true : false} toggle={themeHandler} />
			</li>
			<li>
				<StyledNavLink theme={props.theme} to="account">
					<StyledImageIndicator theme={props.theme} className="placeholder indicator online avatar">
						<div className="w-8 rounded-xl bg-neutral-focus text-neutral-content ">
							<span className="text-xl">K</span>
						</div>
					</StyledImageIndicator>
				</StyledNavLink>
			</li>
		</StyledUl>
	);
}
