/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #7D8ABC, #304463)', // Red-500 to Orange-500
      },
    },
    colors: {
      firstPrimary:"#304463",
      primary:"#304463",
      secondary:"#AD88C6",
      actionColor: "#FFE6E6",
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
