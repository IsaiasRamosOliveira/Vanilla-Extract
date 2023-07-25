import { style } from "@vanilla-extract/css";

export const container = style({
    display: "grid",
    gridTemplateColumns: "80px calc(100vw - 80px)",
    height: "100vh"
})