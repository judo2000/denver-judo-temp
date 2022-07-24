import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasNav() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg='light' expand={expand} className='mb-3'>
          <Container fluid>
            <Navbar.Brand to='/'>Denver Judo</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Denver Judo
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <LinkContainer to='/'>
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/schedule' onClick={(expand = false)}>
                    <Nav.Link>Schedule</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/about'>
                    <Nav.Link>About</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasNav;
