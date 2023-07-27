import { createGlobalTheme } from "@vanilla-extract/css"

export const vars = createGlobalTheme(":root", {
    colors: {
        purple: "#B88BF5",
        purple_1: "#B280F4",
        purple_2: "#6359EC",
        gray_1: "#33323B",
        gray_2: "#26252F",
        gray_3: "#272630",
        latter: "#909095",
        black: "#1C1B25",
        white: "#E7E7E8",
        transparent: "transparent"
    },
    padding: {
        px_8: "8px",
        px_10: "10px",
        px_12: "12px",
        px_14: "14px",
        px_16: "16px",
        px_18: "18px",
        px_20: "20px",
    },
    border: {
        none: "none",
        px_1: "1px solid",
        px_2: "2px solid",
        px_3: "3px solid"
    }
})