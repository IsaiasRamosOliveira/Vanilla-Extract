import { style } from "@vanilla-extract/css";

export const container = style({
    display: "grid",
    background: "#1C1B25",
    gridTemplateColumns: "300px calc(100vw - 300px)",
    height: "100vh",
    overflow: "hidden"
})