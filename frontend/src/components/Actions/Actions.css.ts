import { style } from "@vanilla-extract/css";
import { vars } from "../../style/vars.css";

export const action = style({
    position: "fixed",
    bottom :20,
    right: "28%",
    background: vars.colors.purple_1,
    borderRadius: 12
})

export const list = style({
    width: 200,
    height: 60,
    gap: 10,
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
})

export const button = style({
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "none",
    backgroundColor: vars.colors.purple,
    border:"none",
    borderRadius: 8,
    color: vars.colors.white,
    fontSize: 22,
    width: 30,
    height: 30
})