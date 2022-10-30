import { ReactNode } from "react";

export interface PageContainerProps {
    children: ReactNode;
    maxWidth?: 990 | 1280;
    metaTitle?: string;
}