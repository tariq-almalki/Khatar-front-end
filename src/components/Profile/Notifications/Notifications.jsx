import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { useContext } from 'react';

const StyledNotifications = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	margin: auto;
	flex-grow: 1;
	height: 100%;
	padding: 1em;
	max-width: 720px;
	min-width: 275px;
`;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	max-height: 750px;
	width: 100%;
	border-radius: 0.5em;
	border: 2px solid #999;
`;

const StyledLink = styled(Link)`
	font-family: 'Rajdhani';

	&:hover {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].notificationLinkHoverColor};
	}

	&.active {
		background-color: ${props => useContext(ThemeContext).colors[props.theme].notificationLinkActiveColor};
	}
`;

const StyledNavBar = styled.div`
	background-color: ${props => useContext(ThemeContext).colors[props.theme].notificationNavBarBackgroundColor} !important;
`;

const StyledUl = styled.ul`
	color: ${props => useContext(ThemeContext).colors[props.theme].notificationUlTextColor} !important;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].notificationUlBackgroundColor} !important;
`;

const StyledSvg = styled.svg`
	color: ${props => useContext(ThemeContext).colors[props.theme].notificationSvgColor} !important;
`;

const StyledSpan = styled.span`
	color: ${props => useContext(ThemeContext).colors[props.theme].notificationNavBarTextColor};
	font-family: 'Rajdhani';
	padding-left: 1em;
	cursor: default;
`;

export function Notifications() {
	const outletContext = useOutletContext();

	let { state } = useLocation();

	const navigate = useNavigate();

	useEffect(() => {
		navigate(state.url, { state });
	}, [state?.key]);

	return (
		<StyledNotifications>
			<StyledContainer>
				<StyledNavBar theme={outletContext.theme} className="navbar whitespace-nowrap rounded-t-md bg-base-100">
					<div className="flex-1">
						<StyledSpan theme={outletContext.theme} className="text-xl normal-case">
							{state.type}
						</StyledSpan>
					</div>
					<div className="flex-none gap-2">
						<div className="dropdown-end dropdown">
							<button className="btn-ghost btn-square btn">
								<StyledSvg
									theme={outletContext.theme}
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block h-5 w-5 stroke-current"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</StyledSvg>
							</button>
							<StyledUl
								theme={outletContext.theme}
								tabIndex={0}
								className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
							>
								<li>
									<StyledLink
										theme={outletContext.theme}
										to="all-notifications"
										state={{ url: 'all-notifications', type: 'All' }}
									>
										All
									</StyledLink>
								</li>
								<li>
									<StyledLink
										theme={outletContext.theme}
										to="invitation-requests-notifications"
										state={{ url: 'invitation-requests-notifications', type: 'Invitation Requests' }}
									>
										Invitation Requests
									</StyledLink>
								</li>
								<li>
									<StyledLink
										theme={outletContext.theme}
										to="awards-notifications"
										state={{ url: 'awards-notifications', type: 'Awards' }}
									>
										Awards
									</StyledLink>
								</li>
								<li>
									<StyledLink
										theme={outletContext.theme}
										to="polls-notifications"
										state={{ url: 'polls-notifications', type: 'Polls' }}
									>
										Polls
									</StyledLink>
								</li>
								<li>
									<StyledLink
										theme={outletContext.theme}
										to="help-requests-notifications"
										state={{ url: 'help-requests-notifications', type: 'Help Requests' }}
									>
										Help Requests
									</StyledLink>
								</li>
							</StyledUl>
						</div>
					</div>
				</StyledNavBar>
				<Outlet context={outletContext} />
			</StyledContainer>
		</StyledNotifications>
	);
}
