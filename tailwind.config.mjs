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
		colors: {
			black: "#111215",
			grey: "#757576",
			white: "#EDEDED",
			blue: "#33DDE8",
			"dark-blue": "#1662A9",
			yellow: "#FED917",
		},
	},
	plugins: [],
};
