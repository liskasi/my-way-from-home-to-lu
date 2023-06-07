/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightYellow: "#FEFAE0",
        lightGreen: "#E9EDC9",
        green: "#CCD5AE",
        brightGreen: "#658304",
      },
      screens: {
        // 'xs': {'max': '480px'},
        '2xs': '400px',
        'xs': '480px',
        // 'xs': {'max': '640px'},
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
};
