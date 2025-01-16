/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",        // This will include all JS/JSX files in the src folder
    "./src/components/**/*.{js,jsx,ts,tsx}",  // This will include components inside the src/components folder
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          'sans-serif',
        ],
        Montserrat: ['Montserrat', 'sans-serif'],
        code: ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
      
        Albra: ['Albra Light'],
       
      },
    },
  },
  plugins: [],
}

