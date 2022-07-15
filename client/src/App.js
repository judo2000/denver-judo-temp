import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  //link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/:pageTitle' element={<Home />}>
            Home
          </Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
