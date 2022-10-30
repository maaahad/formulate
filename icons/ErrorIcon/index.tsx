import type { IconProps } from "@icons/icons.types";
import React, { ReactElement } from "react";

const ErrorIcon: React.FC<IconProps> = ({size = 16}) : ReactElement => {
    return (
        <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_48275_167083)">
            <path d="M5.29083 0.190022C5.72967 -0.0633404 6.27034 -0.0633406 6.70917 0.190021L10.677 2.48085C11.1158 2.73421 11.3862 3.20245 11.3862 3.70917V8.29083C11.3862 8.79755 11.1158 9.26579 10.677 9.51915L6.70917 11.81C6.27034 12.0633 5.72967 12.0633 5.29083 11.81L1.323 9.51915C0.884161 9.26579 0.613827 8.79755 0.613827 8.29083V3.70917C0.613827 3.20245 0.884161 2.73421 1.323 2.48085L5.29083 0.190022Z" fill="#8D1300"/>
            </g>
            <defs>
            <clipPath id="clip0_48275_167083">
            <rect width="12" height="12" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    );
};

export default ErrorIcon;