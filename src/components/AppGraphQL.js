import React from "react";

import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, createHttpLink } from "@apollo/react-hooks";
import gql from 'graphql-tag';

const httpLink = new createHttpLink({
    uri: 'https://48p1r2roz4.sse.codesandbox.io/'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

function ExchangeRates() {
    const {loading, error, data} = useQuery(gql`
        {
            rates(currency: "EUR") {
                currency
                rate
            }
        }
    `);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>

    return data.rates.map(({ currency, rate}) => (
        <div key={currency}>
            <p>
                {currency}: {rate}
            </p>
        </div>
    ));
}

const AppGraphQL = () => (
    <ApolloProvider client={client}>
        <div>
            <h2>Upit serveru:</h2>
            <h2>https://api.coinbase.com/v2/exchange-rates?currency=USD</h2>
            <ExchangeRates/>
        </div>
    </ApolloProvider>
);

export default AppGraphQL;