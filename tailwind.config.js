/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#e11d48",
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
    plugins: [require("daisyui")],
};
