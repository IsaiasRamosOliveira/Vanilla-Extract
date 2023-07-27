import { style } from "@vanilla-extract/css";
import { vars } from "../../style/vars.css";

export const content = style({
    background: "#1C1B25",
    height: "calc(100vh - 80px)",
    border: `1.5px solid ${vars.colors.gray_2}`,
    borderRadius: "24px 0px 0px 0px",
    overflowX: "auto",
    "::-webkit-scrollbar": {
        display: "none"
    },
    position: "relative"

})