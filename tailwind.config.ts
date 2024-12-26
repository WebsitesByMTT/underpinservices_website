import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sweetSuckerPunch: ['var(--font-SweetSuckerPunch)'],
				switzer: ['var(--font-switzer)'],
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "#EB6D27",
				secondary: "#000000",
			},
			animation: {
				scroll:
					"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			},
			keyframes: {
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
			},
		},
	},
	plugins: [],
} satisfies Config;