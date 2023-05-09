/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
	transform: [(content) => content.replace(/taos:/g, '')],
  theme: {
    extend: {
			animation: {
				fadeIn: "fadeIn 2s ease-in forwards"
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 }
				}
			}
		}
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
		require('taos/plugin'),
		require("tw-elements/dist/plugin.cjs")
  ],
	safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],

}
