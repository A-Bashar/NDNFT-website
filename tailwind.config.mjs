/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
		fontFamily: {
			heading: ['"Darker Grotesque"'],
			para: ['"Barlow"'],
			light: ['"Biryani"'],
		},
	},
	plugins: [],
};
