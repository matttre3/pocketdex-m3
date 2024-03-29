/** @type {import('tailwindcss').Config} */

const typeColorObject = [
 "gray",
 "purple",
 "lime",
 "slate",
 "orange",
 "emerald",
 "amber",
 "pink",
 "blue",
 "yellow",
 "zinc",
 "amber",
 "stone",
 "neutral",
 "rose",
 "red",
 "violet"
]
 

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: typeColorObject.flatMap(color => [`before:bg-${color}-500`,
  `bg-${color}-400`]),

  
  theme: {
    extend: {
      fontFamily: {
        pixel:['Pixelify Sans']
      }
    },
  },
  plugins: [],

}

