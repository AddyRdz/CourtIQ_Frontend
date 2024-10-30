/* cSpell:disable */
const flowbite = require("flowbite/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",  
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite, 
  ],
};