import type { MarginProps, Width} from "./layout.types";
import { css } from "styled-components";


const getPxOrAuto = (mg: number | 'auto') : string => {
    if (mg === 'auto') return mg;
    return `${mg}px`;
};

export const applyWidth = ({width}: Width) => css`
    width: ${width === 'full' ? "100%" : `${width}px`} !important;
`;

export const applyMargin = ({mgl, mgt}: MarginProps) => css`
    ${mgl && css`
        margin-left: ${getPxOrAuto(mgl)};
    `}
    ${mgt && css`
        margin-top: ${getPxOrAuto(mgt)};
    `}
`;