import styled from 'styled-components';

const ProfileImageComponent = styled.div`
	display: flex;
	flex-grow: 0.1;
	justify-content: center;
	align-items: start;
	padding-top: 1em;
	padding-bottom: 3em;
	/* border: 1px solid red; */
`;

export function ProfileImage() {
	return (
		<ProfileImageComponent>
			<div>
				<div>
					<div className="placeholder online avatar before:!right-[-0.5%] before:!top-[-0.5%] before:!h-[20%] before:!w-[20%]">
						<div className="w-36 rounded-3xl bg-neutral-focus text-neutral-content transition-[width]">
							<span className="text-3xl">K</span>
						</div>
					</div>
					<button className="btn-sm btn mx-auto mt-1 flex max-md:text-[0.7em]">change</button>
				</div>
			</div>
		</ProfileImageComponent>
	);
}
