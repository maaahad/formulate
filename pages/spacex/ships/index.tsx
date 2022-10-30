import React, { useEffect, useRef, useState } from "react";
import { useQuery } from '@apollo/client';
import Ships from "@components/SpaceX/Ships";
import SearchInput from "@elements/SearchInput";
import { FIND_SHIPS } from "@services/graphQL/spacex";
import PageContainer from "@containers/PageContainer";
import ROUTES from "@context/routes";
import Button from "@elements/Button";
import ErrorLabel from "@elements/ErrorLabel";


const SpaceXShips = () => {
    const [searchHint, setSearchHint] = useState<string>('');
    const searchInputRef = useRef<HTMLInputElement>(null);
    const { loading, error, data } = useQuery(FIND_SHIPS, {
        variables: {searchHint}
    });

    const [visitedShips, setVisitedShips] = useState<string[]>([]);

    const resetButtonDisabled = visitedShips.length === 0;
    const renderResetButton = data?.ships?.length > 0;

    const handleClickOnShip = (id: string) => {
        if (visitedShips.includes(id)) setVisitedShips(visitedShips.filter(shipId => shipId !== id));
        else setVisitedShips([...visitedShips, id]);
    };

    const handleInputChange = (value: string) => {
        setSearchHint(value);
    };

    useEffect(() => {
        const current = searchInputRef.current;
        if (current) current.focus();
    }, []);

    return (
        <PageContainer
            metaTitle={ROUTES.SPACE_X.SHIPS.metaData?.title}
        >           
            <SearchInput 
                value={searchHint}
                onChange={handleInputChange}
                ref={searchInputRef}
                placeholder='Search here'
                label='Search'
                width='full'
                isLoading={loading}
            />

            {
                renderResetButton && 
                    <Button 
                        mgt={24} 
                        width='full'
                        onClick={() => setVisitedShips([])}
                        disabled={resetButtonDisabled}
                    >
                        Reset
                    </Button>
            }

            {error && <ErrorLabel mgt={24}>{error.message}</ErrorLabel>}
            
            <Ships ships={data?.ships} visitedShips={visitedShips} onClick={handleClickOnShip} mgt={24}/>

        </PageContainer>
    );
};

export default SpaceXShips;