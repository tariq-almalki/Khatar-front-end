import { Link } from 'react-router-dom';

export function TailWindLowerMenu() {
	return (
		<ul className="menu gap-1 bg-base-100 p-1">
			<li>
				<Link to="user">
					<div className="placeholder avatar justify-center">
						<div className="w-8 rounded-full bg-neutral-focus text-neutral-content">
							<span className="text-xl">K</span>
						</div>
					</div>
				</Link>
			</li>
		</ul>
	);
}
