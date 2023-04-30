import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { AwesomeButtonProgress } from 'react-awesome-button';
import AwesomeButtonStyles from '@/styles/styles.module.scss';

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
	const AwesomeButtonProgressStyles = {
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
				<AwesomeButtonProgress
					type="primary"
					style={AwesomeButtonProgressStyles}
					theme={props.theme}
					cssModule={AwesomeButtonStyles}
					loadingLabel="Wait..."
					resultLabel="Success!"
					releaseDelay={1000}
					onPress={(event, release) => {
						release();
					}}
				>
					Update Basic info
				</AwesomeButtonProgress>
			</StyledDiv>
		</AccountButtonComponent>
	);
}
