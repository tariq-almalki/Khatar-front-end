import { Link } from 'react-router-dom';

export function TailWindLowerMenu() {
	return (
		<ul className="menu gap-1 bg-base-100 p-1">
			<li>
				<Link to="account">
					<div className="placeholder indicator online avatar">
						<div className="w-8 rounded-xl bg-neutral-focus text-neutral-content ">
							<span className="text-xl">K</span>
						</div>
					</div>
				</Link>
			</li>
		</ul>
	);
}
