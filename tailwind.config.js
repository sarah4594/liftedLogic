/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
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
				transparent: "transparent",
			},
			animation: {
				breathe: "breathe 3s ease-in-out infinite",
			},
			keyframes: {
				breathe: {
					"0%, 100%": { transform: "scale(1.10)" },
					"50%": { transform: "scale(1)" },
				},
			},
		},
	},
	plugins: [],
};
