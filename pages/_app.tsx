import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import FormulateThemeProvider from '@components/FormulateThemeProvider';
import { spacexClient } from '@apiClient/graphQL/spacex';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormulateThemeProvider>
      <ApolloProvider client={spacexClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </FormulateThemeProvider>
  );
}
