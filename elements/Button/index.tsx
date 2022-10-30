import React, {ReactElement} from 'react';
import type { ButtonProps } from "./Button.types";
import styled, {css} from 'styled-components';
import { applyMargin, applyWidth } from '@styles/layout';

const ButtonStyled = styled.button<ButtonProps & {iconOnly: boolean}>`
    ${applyMargin};
    ${applyWidth};
    height: 32px;
    min-width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;
    cursor: pointer;
    padding: 8px 12px;

    ${({theme: {colors, borderRadius, boxShadow}, disabled, iconOnly}) => css`
        border: 1px solid ${colors.ui.secondary};
        background-color: transparent;
        border-radius: ${borderRadius.small}px;

        &:hover {
            ${!iconOnly && !disabled && css`
                border: none;
                background-color: ${colors.ui.hover};
                box-shadow: ${boxShadow.button};
            `}
        }

        ${disabled && css`
            background-color: ${colors.ui.disabled} !important;
            cursor: not-allowed !important;
        `}

        ${iconOnly && css`
            padding: 0 !important;
            border: none !important;
            background-color: transparent !important;
        `}
    `}
`;


const Button: React.FC<ButtonProps> = ({children, icon, disabled = false, onClick = () => {}, ...props}) : ReactElement => {
    const iconOnly = !!(icon && !Boolean(children));
    return (
        <ButtonStyled onClick={onClick} iconOnly={iconOnly} disabled={disabled} {...props}>
            {icon}
            {children}
        </ButtonStyled>
    );
};

export default Button;