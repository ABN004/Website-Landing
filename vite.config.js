import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		// allowedHosts : ["GADD9.bigdate.events"]
		allowedHosts : ["learnwithgadd9.com","www.learnwithgadd9.com"]
	}
});