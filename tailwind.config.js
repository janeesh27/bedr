/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary-blue': 'var(--primary-blue)',
                'secondary-peach': 'var(--secondary-peach)',
                'secondary-dark-blue': 'var(--secondary-dark-blue)',
            },
        },
    },
    plugins: [],
};
