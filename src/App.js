import React from "react";
import { Home } from "./pages/Home";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client = {client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;

