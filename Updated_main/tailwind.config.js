module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:{
          base: "hsl(203, 89%, 53%)",
          dark: "hsl(203, 89%, 45%)",
          light:"hsl(203, 89%, 88%)", 

        },
        gray :{
          dark:"#657786",
          light:"#AAB8C2",
          ultralight:"#E1E8ED",
          enligth :"#F5F8FA",

        },
        black : "#14171A",

      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
