/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      // Add your custom font family name
      'myfont' :["Ubuntu", 'sans-serif'],
  },
  plugins: [],
}

}