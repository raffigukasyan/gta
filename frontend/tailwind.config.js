/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-white-50': 'radial-gradient(97.79% 97.79% at 50% 50%, rgba(255, 255, 255, 0.196) 13.27%, rgba(255, 255, 255, 0) 100%)',
        'radial-green': 'radial-gradient(68.42% 68.42% at 50% 50%, rgba(84, 178, 122, 0.62) 0%, rgba(38, 82, 56, 0.54) 100%)',
        'radial-yellow': 'radial-gradient(68.42% 68.42% at 50% 50%, rgba(254, 168, 0, 0.62) 0%, rgba(102, 76, 25, 0.54) 100%)',
        'radial-blue': 'radial-gradient(68.42% 68.42% at 50% 50%, rgba(63, 186, 255, 0.62) 0%, rgba(65, 98, 117, 0.54) 100%)',
        'radial-gray': 'radial-gradient(50% 50% at 50% 50%, rgba(40, 45, 53, 0.05) 0%, #13161B 100%)',
        'radial-blue-700': 'radial-gradient(68.42% 68.42% at 50% 50%, rgba(51, 108, 255, 0.25) 0%, rgba(38, 51, 85, 0.15) 100%)',
        'radial-gray-50': 'radial-gradient(68.42% 68.42% at 50% 50%, rgba(109, 150, 211, 0.25) 0%, rgba(47, 70, 105, 0.15) 100%)',
        'radial-red-500': 'radial-gradient(68.42% 68.42% at 50% 50%, rgba(234, 51, 35, 0.25) 0%, rgba(78, 39, 36, 0.15) 100%)',
        'radial-blue-50': 'radial-gradient(68.42% 68.42% at 50% 50%, rgba(51, 169, 255, 0.25) 0%, rgba(41, 64, 81, 0.15) 100%)',
        'radial-modal': 'radial-gradient(#181C24, #0F131B)',
        'border-rgba': 'border-[rgba(255,255,255,25%)]'
},
      fontFamily: {
        gilroy: ['Gilroy'],
        russo: ['Russo One'],
        allison: ['Allison'],
        spaceGrotesk: ['Space Grotesk'],
      },
      screens: {
        '3xl': '1601px',
        'max-2xl': {max: '1300px'},
        "max-xl": {max: '1100px'},
        'max-lg': {max: '1000px'},
        'max-md': {max: '768px'},
        'max-sm': {max: '420px'},
      }
    },
  },
  plugins: [],
}

