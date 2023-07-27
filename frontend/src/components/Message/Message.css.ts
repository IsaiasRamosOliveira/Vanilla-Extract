import { style } from "@vanilla-extract/css";
import { vars } from "../../style/vars.css"

export const message = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "0px 20px",
    borderTop: `1.5px solid ${vars.colors.gray_2}`,
    height: 80,
    transition: "all 100ms",
    ":hover": {
        borderLeft: `2px solid ${vars.colors.purple_1}`,
        background: vars.colors.gray_1
    },
    color: vars.colors.white,
    fontWeight: 600
})

export const messageBtns = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 22,
})

export const button = style({
    cursor: "pointer",
    border: "none",
    color: vars.colors.latter,
    background: "none",
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