module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins', 'sans-serif'], // Use 'Poppins' as the custom font
      },
      boxShadow: {
        glow: '0 4px 15px rgba(72, 144, 255, 0.6)', // Custom shadow for floating effect
      },
      colors: {
        // 'blue-hover': '#007BFF', 
        'blue-primary': '#148CD8',
        'blue-dark': '#0B1D39',
        'blue-hover': '#03299D',

      },
    },
  },
  plugins: [],
};
