export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            pacifico: "Pacifico, cursive",
        },
        fontSize: {
            "2xl": [
                "1.5rem",
                {
                    letterSpacing: "0.4em",
                },
            ],
            "3xl": "2.25rem"
        },
        extend: {
            colors: {
                "header-h1": "#9a3412",
                "header-p": "#a39191",
            },
        },
    },
    plugins: [],
};
