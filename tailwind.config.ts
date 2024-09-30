import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#ff5c02",
                secondary: "#a333d6",
                tertiary: "#c1e288"
            },
        },
        fontFamily: {
            jura: ["Jura"],
            zen: ["Zen Maru Gothic"],
        },
    },
    plugins: [],
};
export default config;
