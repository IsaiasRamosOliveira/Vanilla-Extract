import { style } from "@vanilla-extract/css";
import { vars } from "../../style/vars.css";
export const menu = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    
    padding: "20px"
})

export const nav = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 18
})
export const button = style({
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 46,
    border: "none",
    gap: 8,
    padding: "4px 6px",
    color: vars.colors.latter,
    borderRadius: 10,
    fontWeight: 600,
    background: "none",
    ":hover": {
        background: vars.colors.gray_1,
        color: vars.colors.white
    }
})
export const buttonCompose = style({
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 46,
    border: "none",
    gap: 8,
    padding: "4px 6px",
    color: vars.colors.white,
    borderRadius: 10,
    background: vars.colors.purple_2,
})
export const iconCompose = style({
    fontSize: 22,
    color: vars.colors.white,
    
})
export const icon = style({
    fontSize: 22,
    color: vars.colors.latter,
    selectors: {
        [`${button}:hover &`]: {
            color: vars.colors.white
        }
    }
})