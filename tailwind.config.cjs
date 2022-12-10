/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#75eae0",
        
"secondary": "#42037c",
        
"accent": "#81e2d2",
        
"neutral": "#1A2129",
        
"base-100": "#fff",
        
"info": "#657DCD",
        
"success": "#42D1BC",
        
"warning": "#F7D859",
        
"error": "#FB607F",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
