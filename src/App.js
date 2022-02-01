import React from "react";
import { Home } from "./pages/Home/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;

