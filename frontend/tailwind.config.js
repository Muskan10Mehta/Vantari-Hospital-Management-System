/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'custom-green': '#0C7C59',
                'custom-yellow': '#EEA243 ',
                'custom-blue': '#3F88C5',
                'custom-pink': '#E08D67',
                white: '#ffffff',
            },
        },
    },
    plugins: [],
};
