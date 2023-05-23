import { InnerMoon } from '@theme-toggles/react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

// firebase
import { useDownloadURL } from 'react-firebase-hooks/storage';
import { ref } from 'firebase/storage';
import { storage } from '@/firebase';

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
		box-shadow: 0 0 0 1.5px ${props => useContext(ThemeContext).colors[props.theme].sideBarIndicatorColor} !important;
	}
`;

const StyledDivImage = styled.div`
	background-color: ${props =>
		useContext(ThemeContext).colors[props.theme].basicInfoAccountImageBackgroundColor} !important;
`;

const StyledSpan = styled.span`
	color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoFileInputTextColor} !important;
`;

export function TailWindLowerMenu({ theme, setTheme, docUser }) {
	const [downloadUrl, downloadUrlLoading, downloadUrlError] = useDownloadURL(ref(storage, docUser.photoURL));

	function themeHandler() {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}

	return (
		<StyledUl theme={theme} className="menu gap-1 p-1">
			<li>
				<StyledInnerMoon theme={theme} toggled={theme === 'dark' ? true : false} toggle={themeHandler} />
			</li>
			<li>
				<StyledNavLink theme={theme} to="account">
					<StyledImageIndicator theme={theme} className="placeholder indicator online avatar">
						<StyledDivImage theme={theme} className="w-8 rounded-xl bg-neutral-focus text-neutral-content ">
							{downloadUrlLoading ? (
								<StyledSpan theme={theme} className="text-xs">
									K
								</StyledSpan>
							) : (
								<img src={downloadUrl} alt="default-profile-image" />
							)}
						</StyledDivImage>
					</StyledImageIndicator>
				</StyledNavLink>
			</li>
		</StyledUl>
	);
}
