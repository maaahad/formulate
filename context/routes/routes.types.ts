
interface Route {
    url: string;
    metaData?: {
        title?: string;
    }
}
export interface Routes {
    HOME: Route;
    SPACE_X: {
        SHIPS: Route;
        SHIP_DETAILS: Route;
    }
}