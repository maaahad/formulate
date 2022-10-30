import React, {ReactElement} from 'react';
import styled, {css} from 'styled-components';
import { applyMargin, applyWidth } from '@styles/layout';
import ROUTES from '@context/routes';
import Card from '@components/Card';
import type { ShipCardProps } from "./ShipCard.types";
import type { MarginProps, Width } from '@styles/layout/layout.types';

const Heading6 = styled.h6<MarginProps>`
    margin: 0;
    ${applyMargin};
`;

const Paragraph = styled.p<MarginProps>`
    margin: 0;
    ${applyMargin};
    font-size: 14px;
`;

const ClickableContainer = styled.div< MarginProps & Width & {visited: boolean}>`
    ${applyMargin};
    ${applyWidth};
    cursor: pointer;

    ${({visited}) => visited && css`
        opacity: .5;
    `}
`;

const ShipCard: React.FC<ShipCardProps> = ({ship, visited = false, onClick, ...props}) : ReactElement => {
    const {id, name, url, type, home_port} = ship;
    const fallbackUrl = ROUTES.SPACE_X.SHIP_DETAILS.url.replace('[id]', id);
    
    const typeText = `Type: ${type}`;
    const portText = `Port: ${home_port}`;

    const handleClick = () => {
        window.open(url || fallbackUrl, '_blank', 'noopener,noreferrer')
        if (onClick) onClick(id);
    };

    return (
        <ClickableContainer visited={visited} onClick={handleClick} {...props}>
            <Card
                header={name}
            >
                <Heading6>{typeText}</Heading6>
                <Paragraph mgt={4}>{portText}</Paragraph>
            </Card>
        </ClickableContainer>
    );
};

export default ShipCard;