import styled from 'styled-components';

const AccountImageComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 1em;
	width: 100%;
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0.2em;
	gap: 0.3em;
`;

const StyledInput = styled.input`
	max-width: 16em;
`;

export function AccountImage() {
	return (
		<AccountImageComponent>
			<StyledDiv>
				<div className="placeholder online avatar before:!right-[-0.5%] before:!top-[-0.5%] before:!h-[20%] before:!w-[20%]">
					<div className="w-36 rounded-3xl bg-neutral-focus text-neutral-content transition-[width]">
						<span className="text-3xl">K</span>
					</div>
				</div>
				<StyledInput type="file" className="file-input-bordered file-input file-input-sm w-full" />
			</StyledDiv>
		</AccountImageComponent>
	);
}
