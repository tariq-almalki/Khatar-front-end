import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		viteCompression({
			algorithm: 'brotliCompress',
		}),
		VitePWA({ registerType: 'autoUpdate' }),
		mkcert(),
	],
	server: {
		https: true,
	},
});
