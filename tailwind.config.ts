import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		fontFamily: {
    			sweetSuckerPunch: [
    				'var(--font-SweetSuckerPunch)'
    			],
    			switzer: [
    				'var(--font-switzer)'
    			],
    			agressive: [
    				'var(--font-agressive)'
    			]
    		},
    		colors: {
    			background: 'var(--background)',
    			foreground: 'var(--foreground)',
    			primary: '#EB6D27',
    			secondary: '#000000'
    		},
    		animation: {
    			scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		},
    		keyframes: {
    			scroll: {
    				to: {
    					transform: 'translate(calc(-50% - 0.5rem))'
    				}
    			},
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		}
    	}
    },
	plugins: [],
} satisfies Config;