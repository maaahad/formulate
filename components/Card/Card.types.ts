import { MarginProps, Width } from "@styles/layout/layout.types";
import {ReactNode} from "react";

export interface CardProps extends MarginProps, Width{
    header?: ReactNode;
    children?: ReactNode;
}