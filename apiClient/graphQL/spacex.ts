import { ApolloClient, InMemoryCache } from "@apollo/client";

export const spacexClient = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache(),
});
