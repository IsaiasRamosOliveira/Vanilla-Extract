import { style } from '@vanilla-extract/css';

export const header = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#1C1B25",
    padding: 18,
    gridArea: "1/2/1/2",
    height: "80px",
    border: "1px solid"

})


export const list = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
})