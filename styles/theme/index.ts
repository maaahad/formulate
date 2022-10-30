import { DefaultTheme } from "styled-components";
import { ColorPalette } from "@styles/colors/colors.types";

const theme: DefaultTheme = {
    colors: {
        ui: {
            primary: ColorPalette.gray30, 
            secondary:  ColorPalette.gray86, 
            error: ColorPalette.red8D,
            hover: ColorPalette.grayF0,
            disabled:  ColorPalette.grayDB,
        },
        bg: {
            primary: ColorPalette.white, 
            secondary: ColorPalette.grayF5, 
        },
        text: {
            primary: ColorPalette.gray30, 
            secondary:  ColorPalette.gray86, 
            inverse: ColorPalette.white, 
            hover: ColorPalette.blue06,
        }
    },
    boxShadow: {
        button: "inset 0 0 0 2px #868686, 0 2px 2px 0 rgb(0 0 0 / 8%)",
    },
    borderRadius: {
        small: 5,
        medium: 10,
    },
};

export default theme;