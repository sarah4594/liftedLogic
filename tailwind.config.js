/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		colors: {
			blue: {
				DEFAULT: "#001d5d",
				light: "#b8bfcf",
			},
			green: {
				DEFAULT: "#42a418",
				light: "#d8f0d0",
			},
			gray: {
				DEFAULT: "#777777",
				light: "#f6f6f6",
			},
			black: "#000000",
			white: "#ffffff",
		},
		extend: {},
	},
	plugins: [],
};
