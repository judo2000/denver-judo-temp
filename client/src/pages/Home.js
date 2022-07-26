import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_SINGLE_PAGE } from '../utils/queries';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  const { pageTitle } = useParams();

  const { loading, data } = useQuery(GET_SINGLE_PAGE, {
    // pass URL parameter
    variables: { pageTitle: pageTitle },
  });

  console.log(data);

  const page = data?.page || {};

  return (
    <>
      {loading ? (
        <h2>LOADING...</h2>
      ) : (
        <div>
          <Container fluid>
            <div className='video-box'>Place holder</div>
            <div className='home-heading text-center py-4'>
              <h1>Train for competition or self defence at denver judo</h1>
            </div>
            <div>
              <Row>
                <Col lg-4>
                  <div className='home-class-heading'>
                    <h2>Judo Fundamentals</h2>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempora amet temporibus reiciendis delectus, totam atque
                      nam a ipsa quasi nisi blanditiis doloremque distinctio
                      minima odit? <a href='class'>Learn more...</a>
                    </span>
                  </div>
                </Col>
                <Col lg-4>
                  <div className='home-class-heading'>
                    <h2>Competition Judo</h2>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis alias laudantium doloremque minus nihil tempora
                      dignissimos accusamus labore, at, ea debitis aspernatur
                      eius perferendis.
                    </span>
                  </div>
                </Col>
                <Col lg-4>
                  <div className='home-class-heading'>
                    <h2>Kids Judo</h2>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia nesciunt laboriosam, incidunt perferendis suscipit
                      esse iste officiis vel quam ipsam voluptatum aliquam dolor
                      adipisci? Et!
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Home;
