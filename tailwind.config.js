module.exports = {
  purge: [
     './src/**/*.html',
     './src/**/*.js',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        body : ['Comic Neue']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
