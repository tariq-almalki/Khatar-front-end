// styles

export const LinkCommonStyles = { flex: '0.2 1 0em' };

const ButtonCommonStyles = {
	flex: '0.2 1 0em',
	width: '100%',
	'--button-font-family': 'Rajdhani, sans-serif',
	'--button-default-font-size': '1em',
	letterSpacing: '1.5px',
};

export const Button1Styles = {
	...ButtonCommonStyles,
	'--button-primary-color': '#FFDF0F',
	'--button-primary-color-dark': '#E6B400',
	'--button-primary-color-hover': '#fcd722',
	'--button-primary-color-active': '#FDEB2B',
	'--button-font-color': `black`,
	iconStyles: {
		color: 'black',
	},
};

export const Button2Styles = {
	...ButtonCommonStyles,
	'--button-primary-color': '#1E88E5',
	'--button-primary-color-dark': '#1360a4',
	'--button-primary-color-hover': '#187bd1',
	'--button-primary-color-active': '#166dba',
	'--button-font-color': `white`,
	iconStyles: {
		color: 'white',
	},
};

export const Button3Styles = {
	...ButtonCommonStyles,
	'--button-primary-color': '#C42E2E',
	'--button-primary-color-dark': '#861F1F',
	'--button-primary-color-hover': '#BC2C2C',
	'--button-primary-color-active': '#AF2929',
	'--button-font-color': `white`,
	iconStyles: {
		color: 'white',
	},
};
