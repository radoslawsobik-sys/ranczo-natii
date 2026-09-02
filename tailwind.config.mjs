/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Fredoka', 'sans-serif'],
				body: ['Plus Jakarta Sans', 'sans-serif'],
			},
			colors: {
				brand: {
					green: '#2e7d32', greenLight: '#4caf50', greenSoft: '#e8f5e9',
					yellow: '#fbc02d', orange: '#f57c00', dark: '#1b2a1a', sky: '#e1f5fe'
				}
			}
		},
	},
	plugins: [],
}