import ReactDOM from 'react-dom/client';
import { Router } from './routes/Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeProvider theme={theme}>
		<Router />
	</ThemeProvider>
);
