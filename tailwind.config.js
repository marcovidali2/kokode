/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "dm-serif-display": ["DM Serif Display"],
            },
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#fde047",
                    secondary: "#fb6000",
                    accent: "#00b574",
                    neutral: "#110a00",
                    "base-100": "#FFFFFF",
                    info: "#00bde4",
                    success: "#aff772",
                    warning: "#e56d00",
                    error: "#ff617d",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
