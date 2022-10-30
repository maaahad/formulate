import { MarginProps } from "@styles/layout/layout.types";
import React, { ReactElement } from "react";
import styled, {keyframes} from "styled-components";
import { applyMargin } from "@styles/layout";
import { LoaderIcon } from "@icons";
import { LoaderProps } from "./Loader.types";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const IconContainer = styled.div<MarginProps>`
    ${applyMargin};
    & > svg {
        animation: 1s ${spin} linear infinite;
    }
`;

const Loader: React.FC<LoaderProps> = ({size = 16, ...props}) : ReactElement => {
    return (
        <IconContainer {...props}>
            <LoaderIcon size={size}/>
        </IconContainer>
    );
};

export default Loader;