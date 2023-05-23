import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';

// firebase
import { storage } from '@/firebase';
import { ref as storageRef } from 'firebase/storage';
import { useDownloadURL } from 'react-firebase-hooks/storage';

const AccountImageComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 1em;
	width: 100%;
`;

const StyledImageIndicator = styled.div`
	&.avatar.online:before {
		box-shadow: 0 0 0 3px ${props => useContext(ThemeContext).colors[props.theme].accountBackgroundColor} !important;
	}
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

	&:active {
		transform: translateY(2px);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	}

	&:disabled {
		opacity: 0.5; /* reduce opacity to indicate disabled state */
		cursor: not-allowed; /* change cursor to indicate disabled state */
		/* optionally, you can also change the background color and text color */
		background-color: #ccc;
		color: #999;
	}
`;

const StyledSpan = styled.span`
	color: ${props => useContext(ThemeContext).colors[props.theme].basicInfoFileInputTextColor} !important;
`;

export function AccountImage({ theme, docUser, disabled, setFile }) {
	const [downloadUrl, downloadUrlLoading, downloadUrlError] = useDownloadURL(storageRef(storage, docUser.photoURL));

	if (downloadUrlError) {
		console.log(downloadUrlError);
	}

	function fileImageHandler(e) {
		if (e.target.files[0].size > 200000) {
			alert('File is too big!');
			return (e.target.value = '');
		}

		if (!e.target.files[0].type.match(/image\/.+/)) {
			alert('File is not an Image!');
			return (e.target.value = '');
		}

		setFile(e.target.files[0]);
	}

	return (
		<AccountImageComponent>
			<StyledDiv>
				<StyledImageIndicator
					theme={theme}
					className="placeholder online avatar before:!right-[-0.5%] before:!top-[-0.5%] before:!h-[20%] before:!w-[20%]"
				>
					<StyledDivImage
						theme={theme}
						className="w-36 rounded-3xl bg-neutral-focus text-neutral-content transition-[width]"
					>
						{downloadUrlLoading ? (
							<StyledSpan theme={theme} className="text-3xl">
								K
							</StyledSpan>
						) : (
							<img src={downloadUrl} alt="default-profile-image" />
						)}
					</StyledDivImage>
				</StyledImageIndicator>
				<StyledInput
					theme={theme}
					accept="image/*"
					disabled={disabled}
					onChange={fileImageHandler}
					type="file"
					className="file-input-bordered file-input-ghost file-input file-input-sm w-full"
				/>
			</StyledDiv>
		</AccountImageComponent>
	);
}
