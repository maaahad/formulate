import { gql } from '@apollo/client';

export const FIND_SHIPS = gql`
    query ($searchHint: String) {
        ships(find: {name: $searchHint}, limit: 20) {
            id
            name
            url
            type
            home_port
        }
    }   
`;