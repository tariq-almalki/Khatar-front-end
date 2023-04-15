import { TailWindUpperMenu } from '../TailWindUpperMenu/TailWindUpperMenu';
import { TailWindLowerMenu } from '../TailwindLowerMenu/TailWindLowerMenu';

export function TailWindSideBar() {
	return (
		<div className="flex flex-col place-content-between bg-[#2A303C]">
			<TailWindUpperMenu />
			<TailWindLowerMenu />
		</div>
	);
}
