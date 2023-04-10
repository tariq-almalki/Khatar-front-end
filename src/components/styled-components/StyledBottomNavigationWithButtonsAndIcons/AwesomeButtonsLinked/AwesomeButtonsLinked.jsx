// components imports
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// styles imports
import AwesomeButtonStyles from '@/styles.module.scss';
import { LinkCommonStyles } from './styles';

// config
import { awesomeButtonsLinkedConfig } from './awesomeButtonsLinkedConfig.js';

export function AwesomeButtonsLinked() {
	return (
		<>
			{awesomeButtonsLinkedConfig.map(config => {
				return (
					<Link to={config.link.to} style={LinkCommonStyles} key={config.link.id}>
						<AwesomeButton
							style={config.button.style}
							before={
								<FontAwesomeIcon
									icon={config.button.icon}
									style={config.button.style.iconStyles}
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
