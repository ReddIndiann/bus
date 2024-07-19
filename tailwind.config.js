/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '12rem',
      
        'xsm': '5px',
         // Add custom font size
        // Add any other custom styles here
      },
      padding: {
        
        'mt-75': '19rem',

         // Add custom font size
        // Add any other custom styles here
      },
    },
  },
  plugins: [],
}