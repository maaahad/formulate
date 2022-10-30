import React, { PropsWithRef } from "react"
import type { SearchInputProps } from "./SearchInput.types";
import type { MarginProps, Width } from "@styles/layout/layout.types";
import styled, {css} from "styled-components";
import { applyMargin, applyWidth } from "@styles/layout";
import { SearchIcon, ClearIcon } from "@icons";
import Loader from "@components/Loader";
import Button from "@elements/Button";

const InputStyled = styled.input`
    flex: 1;
    outline: none;
    border: none;
    height: 100%;
`;

const InputContainer = styled.div<MarginProps & Width>`
    width: fit-content;
    height: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    gap: 8px;
    ${applyMargin};
    ${applyWidth};

    ${({theme: {colors, borderRadius}}) => css`
        border: 1px solid ${colors.ui.secondary};
        border-radius: ${borderRadius.small}px;
    `}
`

const SearchInput= React.forwardRef<HTMLInputElement, PropsWithRef<SearchInputProps>>((
    {
        value='',
        placeholder='',
        label,
        width,
        onChange,
        isLoading = false,
        ...props
    },
    ref
) => {
    const showClearIcon = !isLoading && !!value;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <InputContainer width={width}>
            <SearchIcon />
            <InputStyled 
                {...props} 
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
                ref={ref}
            />

            {isLoading && <Loader/>}

            {showClearIcon && 
                <Button icon={<ClearIcon/>}  onClick={() => onChange('')}/>
            }
        </InputContainer>
    );
});

export default SearchInput;