/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
				cant: "Cantarell",
				pop: "Poppins",
				spec: "Spectral",
			},
    },
  },
  plugins: [],
}
