/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.{html,js}'],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        fontFamily: {
            primary: ['Questa Sans', 'sans-serif'],
            secondary: ['Morion', 'serif'],
        },
        extend: {},
        colors: {
            'dark-green': '#39524F',
            'darkest-green': '#08201E',
            'light-green': '#DAE2CC',
            white: '#FFFFFF',
        },
    },
    plugins: [],
};
