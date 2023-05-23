/// <reference types="vitest" />

// permanent
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react-swc';
import mkcert from 'vite-plugin-mkcert';
import path from 'node:path';

// temporary
// import inspect from 'vite-plugin-inspect';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			plugins: [['@swc/plugin-styled-components', {}]],
		}),
		viteCompression({
			algorithm: 'brotliCompress',
		}),
		VitePWA({ registerType: 'autoUpdate' }),
		mkcert(),
		// inspect(),
	],
	server: {
		https: true,
	},
	resolve: {
		alias: {
			'@': `${path.resolve()}/src`,
			'@components': `${path.resolve()}/src/components`,
		},
	},
	build: {
		sourcemap: true,
	},
});
