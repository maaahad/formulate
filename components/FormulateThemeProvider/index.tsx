import React, { ReactElement, ReactNode } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "@styles/theme";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans', Ubuntu, Cantarell,
    'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
    }
    *, *:before, *:after {
        box-sizing: border-box;
    }
`;

const FormulateThemeProvider: React.FC<{children: ReactNode}> = ({children}) : ReactElement => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default FormulateThemeProvider;