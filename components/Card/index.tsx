import React, { PropsWithRef } from "react"
import { CardProps } from "./Card.types"
import styled, {css} from "styled-components";
import { applyMargin, applyWidth } from "@styles/layout";

const Heading5 = styled.h5`
    margin: 0;
`; 

const CardHeader = styled.div`
    padding: 16px;
    height: 60px;
    display: flex;
    align-items: center;

    ${({theme: {colors, borderRadius}}) => css`
        background-color: ${colors.bg.secondary};
        border-top-right-radius: ${borderRadius.small}px;
        border-top-left-radius: ${borderRadius.small}px;
    `}
`;

const CardContent = styled.div`
    padding: 16px;
`;

const CardContainer = styled.div<CardProps>`
    ${applyMargin};
    ${applyWidth};

    ${({theme: {colors, borderRadius}}) => css`
        border: 1px solid ${colors.ui.secondary};
        border-radius: ${borderRadius.small}px;
    `}
`;

const Card = React.forwardRef<HTMLDivElement, PropsWithRef<CardProps>>((
    {
        children,
        header,
        ...props
    },
    ref
) => {
    return (
        <CardContainer {...props} ref={ref}>
            <CardHeader>
                <Heading5>{header}</Heading5>
            </CardHeader>
            <CardContent>{children}</CardContent>
        </CardContainer>
    );
});

export default Card;