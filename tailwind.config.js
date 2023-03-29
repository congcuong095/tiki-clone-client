/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        colors: {
            primaryColor: '#0060ff',
            backgroundPrimary: 'rgb(var(--background-primary-color) / <alpha-value>)',
            backgroundSecondary: '#f5f5fa',
            textPrimary: 'rgb(var(--text-primary-color) / <alpha-value>)',
            textSecondary: 'rgb(var(--text-secondary-color) / <alpha-value>)',
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        // ...
    ],
};
