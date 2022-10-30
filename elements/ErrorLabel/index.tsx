import React, { ReactElement } from "react";
import type { ErrorLabelProps } from "./ErrorLabel.types";
import { applyMargin } from "@styles/layout";
import styled, {css} from "styled-components";
import ErrorIcon from "@icons/ErrorIcon";

const ParagraphStyled = styled.div<ErrorLabelProps>`
    ${applyMargin};
    display: flex;
    align-items: center;
    gap: 4px;
    ${({theme: {colors}}) => css`
        color: ${colors.ui.error};
    `}
`;

const ErrorLabel: React.FC<ErrorLabelProps> = ({children, ...props}) : ReactElement => {
    return (
        <ParagraphStyled {...props}>
            <ErrorIcon size={12}/>
            {children}
        </ParagraphStyled>
    );
};

export default ErrorLabel;