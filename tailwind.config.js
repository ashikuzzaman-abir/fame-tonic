/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}', // optional
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Urbanist', 'sans-serif'],
				mono: ['Figtree', 'monospace'],
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')], // for ShadCN
};
