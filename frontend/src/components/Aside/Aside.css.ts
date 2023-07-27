import { style } from "@vanilla-extract/css";
import { vars } from "../../style/vars.css";

export const aside = style({
    display: "flex",
    background: vars.colors.black,
    gridArea: "1/1/3/2",
    height: "100vh",
})

export const logo = style({
    width: 40,
    height: 40,
})

export const description = style({
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",
    width: "100%",
})

export const descriptionLogo = style({
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    gap: 10
})

export const descriptionApp = style({
    fontWeight: 600,
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center"
})

export const listApps = style({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: 60,
    borderRight: `1px solid ${vars.colors.gray_1}`,
    height: "100vh"
})

export const listFunctionsOfApps = style({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "240px",
    height: "100vh",
    padding: 14,
    gap: 22
})

export const linkOfListApp = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60px",
    borderBottom: `1px solid ${vars.colors.gray_2}`,
    ":hover": {
        transition: "all 200ms",
        borderLeft: `1px solid ${vars.colors.white}`
    }
})

export const listNavOfFunctionsOfApp = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
    width: "100%",
    gap: 8,
})

export const linkOfFunctionsOfApp = style({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    minWidth: "210px",
    height: "40px",
    gap: 8,
    padding: "12px",
    borderRadius: 12,
    fontSize: 14,
    transition: "all 100ms",
    fontWeight: 600,
    ":hover": {
        background: vars.colors.gray_3,
        color: vars.colors.white
    },
})

export const iconOfFunctionsOfApp = style({
    fontSize: 20,
    selectors: {
        [`${linkOfFunctionsOfApp}:hover &`]: {
            color: vars.colors.white
        }
    },
})

