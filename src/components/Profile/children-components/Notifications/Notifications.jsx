import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const StyledNotifications = styled(motion.div)`
	display: flex;
	justify-content: center;
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
	height: 95%;
	width: 100%;
	border-radius: 0.5em;
	border: 1.5px solid #999;
`;

const StyledLink = styled(Link)`
font-family: 'Rajdhani';
`

const StyledSpan = styled.span`
	font-family: 'Rajdhani';
	padding-left: 1em;
    cursor: default;
`;

export function Notifications() {
	const { state } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		navigate('all-notifications', { state: { type: 'All' } });
	}, []);

	return (
		<StyledNotifications>
			<StyledContainer>
				<div className="navbar rounded-lg bg-base-100">
					<div className="flex-1">
						<StyledSpan className="text-xl normal-case">{state?.type}</StyledSpan>
					</div>
					<div className="flex-none gap-2">
						<div className="dropdown dropdown-end">
							<button className="btn-ghost btn-square btn">
								<svg
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
								</svg>
							</button>
							<ul
								tabIndex={0}
								className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
							>
								<li>
									<StyledLink to="all-notifications" state={{ type: 'All' }}>
										All
									</StyledLink>
								</li>
								<li>
									<StyledLink to="invitation-requests-notifications" state={{ type: 'Invitation Requests' }}>
										Invitation Requests
									</StyledLink>
								</li>
								<li>
									<StyledLink to="awards-notifications" state={{ type: 'Awards' }}>
										Awards
									</StyledLink>
								</li>
								<li>
									<StyledLink to="polls-notifications" state={{ type: 'Polls' }}>
										Polls
									</StyledLink>
								</li>
								<li>
									<StyledLink to="help-requests-notifications" state={{ type: 'Help Requests' }}>
										Help Requests
									</StyledLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div>
					<Outlet />
				</div>
			</StyledContainer>
		</StyledNotifications>
	);
}
