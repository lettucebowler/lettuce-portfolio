import { sveltekit } from '@sveltejs/kit/vite';
import { multicssclass } from 'svelte-multicssclass';
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [multicssclass(), sveltekit()],
	build: {
		assetsInlineLimit: 1024
	}
};
export default config;
