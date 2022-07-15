import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';

// Construct our main GraphQL API endpoint
const client = new ApolloClient({
  uri: '/graphql',
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
