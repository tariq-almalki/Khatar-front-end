import ReactDOM from 'react-dom/client';
import { Router } from './routes/Router';
import { ThemeProvider } from 'styled-components';
import './index.css';

export const theme = {
	colors: {
		light: {
			profileContainerColor: '#fff',
			profileHeaderColor: '#000',
			dividerColor: '#000',
			sideBarColor: '#fff',
			sideBarLinkHoverColor: '#ddd',
			sideBarLinkActiveColor: '#ddd',
			sideBarRightBorderColor: '#000',
			bigSquaresBackgroundColor: '#000000',
			bigSquaresHoverColor: '#222',
			bigSquaresBorderColor: '#000',
			bigSquaresOrDividerColor: '#000',
			textColor: '#fff',
			iconColor: '#000000',
		},
		dark: {
			profileContainerColor: '#000',
			profileHeaderColor: '#fff',
			dividerColor: '#fff',
			sideBarColor: '#000',
			sideBarLinkHoverColor: '#222',
			sideBarLinkActiveColor: '#222',
			sideBarRightBorderColor: '#fff',
			bigSquaresBackgroundColor: '#777',
			bigSquaresHoverColor: '#333',
			bigSquaresBorderColor: '#fff',
			bigSquaresOrDividerColor: '#fff',
			textColor: '#000',
			iconColor: '#ffffff',
		},
	},
};

ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeProvider theme={theme}>
		<Router />
	</ThemeProvider>
);
