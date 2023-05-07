/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
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
		require('taos/plugin')
  ],
	safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
	  content: {
    transform: (content) => content.replace(/taos:/g, ''),
  },
}
