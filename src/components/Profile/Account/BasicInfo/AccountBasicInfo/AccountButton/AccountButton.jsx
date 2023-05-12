import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles1 from '@/styles/styles.module.scss';

const AccountButtonComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 1em;
	padding-bottom: 1em;
`;

const StyledDiv = styled.div`
	flex-grow: 1;
	max-width: 450px;

	@media only screen and (max-width: 607px) {
		max-width: 217px;
	}
`;

export function AccountButton(props) {
	const AwesomeButtonStyles2 = {
		'--button-primary-color': useContext(ThemeContext).colors[props.theme].basicInfoButtonColor,
		'--button-primary-color-dark': useContext(ThemeContext).colors[props.theme].basicInfoButtonColorDark,
		'--button-primary-color-hover': useContext(ThemeContext).colors[props.theme].basicInfoButtonColorHover,
		'--button-primary-color-active': useContext(ThemeContext).colors[props.theme].basicInfoButtonColorActive,
		'--button-primary-border': `1px solid ${useContext(ThemeContext).colors[props.theme].basicInfoButtonBorderColor}`,
		'--button-font-color': useContext(ThemeContext).colors[props.theme].basicInfoButtonFontColor,
	};
	return (
		<AccountButtonComponent>
			<StyledDiv>
				<AwesomeButton
					type="primary"
					style={AwesomeButtonStyles2}
					theme={props.theme}
					cssModule={AwesomeButtonStyles1}
					loadingLabel="Wait..."
					resultLabel="Success!"
					releaseDelay={1000}
					onPress={(event, release) => {
						release();
					}}
				>
					Edit
				</AwesomeButton>
			</StyledDiv>
		</AccountButtonComponent>
	);
}
