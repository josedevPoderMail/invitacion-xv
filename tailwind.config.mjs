/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'dm-serif': ['DM Serif Display', 'serif'],
				'oregano': ['Oregano', 'cursive'],
				'poppins': ['Poppins', 'sans-serif'],
			  },
		  colors: {
			primary: '#C77C77',
			custom1: '#573132',
			custom2: '#834051',
			custom3: '#9C5B63',
			custom4: '#AF8A5E',
			custom5: '#A87176',
		  },
		  backgroundImage: {
			'custom-gradient': 'linear-gradient(to bottom, #573132, #834051, #9C5B63, #AF8A5E, #A87176)',
		  },
		},
	  },
	plugins: [],
}
