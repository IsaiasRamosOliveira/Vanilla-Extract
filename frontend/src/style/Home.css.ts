import { style } from "@vanilla-extract/css";
import { vars } from "./vars.css";

export const container = style({
    position: "relative"
})

export const messages = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
})
