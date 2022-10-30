import { MarginProps, Width } from "@styles/layout/layout.types";
import { ReactElement, ReactNode } from "react";

export interface ButtonProps extends MarginProps, Width{
    children?: ReactNode;
    isLoading?: boolean;
    onClick?: () => void;
    icon?: ReactElement;
    disabled?: boolean;
}