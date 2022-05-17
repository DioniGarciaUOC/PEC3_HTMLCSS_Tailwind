const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'dark-metal': '#444444',
      'dark-gray': '#202020',
      'white': 'white',
      'muted': '#6c757d',
      'rave-purple': 'rgb(140, 84, 177)',
      'rave-purple-soft': 'rgba(140, 84, 177, .5)'

    },


    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"]
      },

      backgroundImage: {
        'metalic-skin': "linear-gradient(45deg, #444444, lightgrey, #585858)",
        'industrial': "url('../images/detailed-background.jpg')",
      }

    },
  },

}
