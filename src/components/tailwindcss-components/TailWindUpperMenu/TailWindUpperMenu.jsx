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

export function TailWindUpperMenu() {
	return (
		<ul className="menu gap-1 bg-base-100 p-1">
			<li className="mb-12 mt-2">
				<NavLink to="/" className="flex-col px-2">
					<FontAwesomeIcon icon={faHouse} className="flex-col place-content-end" />
				</NavLink>
			</li>
			<li>
				<NavLink to="awards" className="flex-col p-3">
					<FontAwesomeIcon icon={faAward} className="flex-col place-content-end" />
				</NavLink>
			</li>
			<li>
				<NavLink to="team" className="flex-col p-3">
					<FontAwesomeIcon icon={faPeopleGroup} className="flex-col place-content-end" />
				</NavLink>
			</li>
			<li>
				<NavLink to="friends" className="flex-col p-3">
					<FontAwesomeIcon icon={faUserFriends} className="flex-col place-content-end" />
				</NavLink>
			</li>
			<li>
				<NavLink to="chat" className="flex-col p-3">
					<FontAwesomeIcon icon={faCommentDots} className="flex-col place-content-end" />
				</NavLink>
			</li>
			<li>
				<NavLink to="help-requests" className="flex-col p-3">
					<FontAwesomeIcon icon={faHandshakeAngle} className="flex-col place-content-end" />
				</NavLink>
			</li>
			<li>
				<NavLink to="polls" className="pv-3 flex-col p-3">
					<FontAwesomeIcon icon={faSquarePollVertical} className="flex-col place-content-end" />
				</NavLink>
			</li>
			<li>
				<NavLink to="notifications" className="flex-col p-3">
					<FontAwesomeIcon icon={faBell} className="flex-col place-content-end" />
				</NavLink>
			</li>
			<li>
				<NavLink to="settings" className="flex-col p-3">
					<FontAwesomeIcon icon={faGear} className="flex-col place-content-end" />
				</NavLink>
			</li>
		</ul>
	);
}
