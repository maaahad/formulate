import React, {ReactElement} from "react";
import styled from "styled-components";
import { applyMargin, applyWidth } from "@styles/layout";
import ShipCard from "../ShipCard";
import type { ShipsPros } from "./Ships.types"
import type { ShipType } from "../types";
import type { MarginProps, Width } from "@styles/layout/layout.types";


const ShipsContainer = styled.div<MarginProps & Width>`
    ${applyMargin};
    ${applyWidth};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    @media screen and (min-width: 700px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const Ships = ({ships, visitedShips, onClick, ...props}: ShipsPros) : ReactElement => {

    const isShipVisited = (id: string) => {
        return visitedShips.includes(id);
    };

    return (    
        <ShipsContainer {...props}>
            {
                ships?.map((ship: ShipType) => (
                    <ShipCard 
                        key={ship.id}
                        ship={ship}
                        onClick={onClick}
                        visited={isShipVisited(ship.id)}
                        width='full'
                    />
                ))
            }
        </ShipsContainer>
    );
};

export default Ships;