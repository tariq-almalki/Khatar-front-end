import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';

const AccountImageComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 1em;
	width: 100%;
`;

const StyledDivImage = styled.div`
	background-color: ${props =>
		useContext(ThemeContext).colors[props.theme].basicInfoAccountImageBackgroundColor} !important;
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0.2em;
	gap: 1.5em;
`;

const StyledInput = styled.input`
	color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoFileInputTextColor} !important;
	background-color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoFileInputBackgroundColor} !important;
	max-width: 16em;

	&#file-input-ghost {
		background-color: red !important;
	}
`;

export function AccountImage(props) {
	return (
		<AccountImageComponent>
			<StyledDiv>
				<div className="placeholder online avatar before:!right-[-0.5%] before:!top-[-0.5%] before:!h-[20%] before:!w-[20%]">
					<StyledDivImage
						theme={props.theme}
						className="w-36 rounded-3xl bg-neutral-focus text-neutral-content transition-[width]"
					>
						<span className="text-3xl">K</span>
					</StyledDivImage>
				</div>
				<StyledInput
					theme={props.theme}
					type="file"
					className="file-input-bordered file-input-ghost file-input file-input-sm w-full"
				/>
			</StyledDiv>
		</AccountImageComponent>
	);
}
