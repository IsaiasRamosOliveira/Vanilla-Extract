import { style } from '@vanilla-extract/css';
import { vars } from '../../style/vars.css';

export const header = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: vars.colors.black,
    padding: 18,
    gridArea: "1/2/1/2",
    height: "80px",
})


export const list = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 18
})

export const search = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 12
})

export const input = style({
    background: "transparent",
    minWidth: 300,
    height: 60,
    border: "none",
    outline: "none",
    color: vars.colors.latter
})

export const img = style({
    width: 40,
    height: 40,
    borderRadius: 100
})

export const profile = style({
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    gap: 10
})