import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Admin from './components/admin';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import About from './pages/About';
import Header from './components/Header';

// Construct our main GraphQL API endpoint
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <main>
          <Routes>
            <Route path='/' element={<Home />}>
              Home
            </Route>
            <Route path='/schedule' element={<Schedule />}>
              Schedule
            </Route>
            <Route path='/about' element={<About />}>
              About
            </Route>
            <Route path='/admin' element={<Admin />}>
              Admin
            </Route>
          </Routes>
        </main>
      </Router>
    </ApolloProvider>
  );
}

export default App;
