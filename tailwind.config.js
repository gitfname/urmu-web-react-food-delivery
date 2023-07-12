import withMT from "@material-tailwind/react/utils/withMT"

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      screens: {
        "max-sm": {
          max: "540px"
        },
        "max-md": {
          max: "720px"
        },
        "max-xl": {
          max: "1140px"
        }
      }
    },
  },
  plugins: [
    require("tailwindcss-animated")
  ],
})