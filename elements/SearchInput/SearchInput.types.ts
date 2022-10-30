import { RefObject } from "react";
import { MarginProps, Width} from "@styles/layout/layout.types";

export interface SearchInputProps extends MarginProps, Width{
    value?: string | undefined, 
    placeholder?: string, 
    label?: string,
    onChange: (value: string) => void;
    isLoading?: boolean;
}