import React, { ReactElement } from "react";
import type { IconProps } from "@icons/icons.types";

const LoaderIcon: React.FC<IconProps & {innerColor?: string}> = ({size = 16, color = "#DBDBDB", innerColor = "#525252"}) : ReactElement => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill={color}/>
            <path d="M24 12C24 5.37258 18.6274 0 12 0V3C16.9706 3 21 7.02944 21 12H24Z" fill={innerColor}/>
        </svg>
    );
};

export default LoaderIcon; 