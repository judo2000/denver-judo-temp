import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_SINGLE_PAGE } from '../utils/queries';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Home = () => {
  const { pageTitle } = useParams();

  const { loading, data } = useQuery(GET_SINGLE_PAGE, {
    // pass URL parameter
    variables: { pageTitle: pageTitle },
  });

  console.log(data);

  const page = data?.page || {};
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {loading ? (
        <h2>LOADING...</h2>
      ) : (
        <div>
          <Button
            class='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#menu'
            variant='primary'
            onClick={handleShow}
          >
            Toggle static offcanvas
          </Button>

          <Offcanvas show={show} onHide={handleClose} backdrop='static'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              I will not close if you click outside of me.
            </Offcanvas.Body>
          </Offcanvas>
          <h1>Denver Judo</h1>
          <h2>{page.pageHeading}</h2>
          <p>
            <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
          </p>
        </div>
      )}
    </>
  );
};

export default Home;
