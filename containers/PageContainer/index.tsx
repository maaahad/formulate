import type { PageContainerProps } from "./PageContainer.types";
import styled, {css} from "styled-components";
import Head from 'next/head'


const PageContainerStyled = styled.div<PageContainerProps>`
    padding: 0 16px;
    margin: auto;
    ${({maxWidth}) => css`
        max-width: ${maxWidth}px;
    `}
`;

const PageContainer: React.FC<PageContainerProps> = ({children, maxWidth = 990, metaTitle, ...props}) => {
    return (
        <PageContainerStyled maxWidth={maxWidth} {...props}>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content="Projet task by Formulate" />
            </Head>
            {children}
        </PageContainerStyled>
    );
};

export default PageContainer;