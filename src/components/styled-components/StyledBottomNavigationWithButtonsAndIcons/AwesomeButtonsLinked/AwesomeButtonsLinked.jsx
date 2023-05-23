// components imports
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

// styles imports
import AwesomeButtonStyles from '@/styles/styles.module.scss';
import { LinkCommonStyles } from './styles';

// config
import { awesomeButtonsLinkedConfig } from './awesomeButtonsLinkedConfig.js';

export function AwesomeButtonsLinked({ theme, user }) {
	awesomeButtonsLinkedConfig[2].link.to = !user ? '/auth' : 'profile/account';
	return (
		<>
			{awesomeButtonsLinkedConfig.map((config, index) => {
				const updatedStyles = {
					...config.button.style,
					'--button-primary-color': useContext(ThemeContext).colors[theme].buttonPrimaryColor,
					'--button-primary-color-dark': useContext(ThemeContext).colors[theme].buttonPrimaryColorDark,
					'--button-primary-color-hover':
						useContext(ThemeContext).colors[theme][`button${index}PrimaryColorHover`],
					'--button-primary-color-active':
						useContext(ThemeContext).colors[theme][`button${index}PrimaryColorActive`],
					'--button-primary-border': `1px solid ${useContext(ThemeContext).colors[theme].buttonPrimaryBorder}`,
					'--button-font-color': useContext(ThemeContext).colors[theme].buttonFontColor,
					iconStylesColor: useContext(ThemeContext).colors[theme].buttonIconColor,
				};

				return (
					<Link to={config.link.to} style={LinkCommonStyles} key={config.link.id}>
						<AwesomeButton
							style={updatedStyles}
							before={
								<FontAwesomeIcon
									icon={config.button.icon}
									style={{ color: updatedStyles['iconStylesColor'] }}
									key={config.icon.id}
								/>
							}
							cssModule={AwesomeButtonStyles}
							type="primary"
							key={config.button.id}
						>
							{config.button.action}
						</AwesomeButton>
					</Link>
				);
			})}
		</>
	);
}
