module.exports = {
    purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {
            width: {
                'card':'16rem'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}