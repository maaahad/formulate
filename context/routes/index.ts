import { Routes } from "./routes.types";

const ROUTES:Routes = {
    HOME: {
        url: '/',
        metaData: {
            title: 'Home'
        }
    },
    SPACE_X: {
        SHIPS: {
            url: '/spacex/ships',
            metaData: {
                title: 'SpaceX Ships'
            }
        },
        SHIP_DETAILS: {
            url: '/spacex/ships/[id]',
            metaData: {
                title: 'Ship Details'
            }
        }
    }
};


export default ROUTES;