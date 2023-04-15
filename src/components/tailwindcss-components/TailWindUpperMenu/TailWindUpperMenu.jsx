import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
	faPeopleGroup,
	faHouse,
	faUserFriends,
	faBell,
	faSquarePollVertical,
	faHandshakeAngle,
	faGear,
	faCommentDots,
	faRibbon,
} from '@fortawesome/free-solid-svg-icons';

export function TailWindUpperMenu() {
	return (
		<ul className="menu gap-1 bg-base-100 p-1">
			<li className="mb-7 mt-2">
				<Link to="/" className="flex-col px-2">
					<FontAwesomeIcon icon={faHouse} className="flex-col place-content-end" />
				</Link>
			</li>
			<li>
				<Link to="badges" className="flex-col p-3">
					<FontAwesomeIcon icon={faRibbon} className="flex-col place-content-end" />
				</Link>
			</li>
			<li>
				<Link to="team" className="flex-col p-3">
					<FontAwesomeIcon icon={faPeopleGroup} className="flex-col place-content-end" />
				</Link>
			</li>
			<li>
				<Link to="friends" className="flex-col p-3">
					<FontAwesomeIcon icon={faUserFriends} className="flex-col place-content-end" />
				</Link>
			</li>
			<li>
				<Link to="chat" className="flex-col p-3">
					<FontAwesomeIcon icon={faCommentDots} className="flex-col place-content-end" />
				</Link>
			</li>
			<li>
				<Link to="help-requests" className="flex-col p-3">
					<FontAwesomeIcon icon={faHandshakeAngle} className="flex-col place-content-end" />
				</Link>
			</li>
			<li>
				<Link to="polls" className="pv-3 flex-col p-3">
					<FontAwesomeIcon icon={faSquarePollVertical} className="flex-col place-content-end" />
				</Link>
			</li>
			<li>
				<Link to="notifications" className="flex-col p-3">
					<FontAwesomeIcon icon={faBell} className="flex-col place-content-end" />
				</Link>
			</li>
			<li>
				<Link to="settings" className="flex-col p-3">
					<FontAwesomeIcon icon={faGear} className="flex-col place-content-end" />
				</Link>
			</li>
		</ul>
	);
}