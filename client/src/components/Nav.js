import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Nav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
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
    </div>
  );
};

export default Nav;
