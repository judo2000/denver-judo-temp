import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';

const Home = () => {
  // const { pageTitle } = useParams();

  // const { loading, data } = useQuery(GET_SINGLE_PAGE, {
  //   // pass URL parameter
  //   variables: { pageTitle: pageTitle },
  // });

  // console.log(data);
  // const page = data?.page || {};

  // const [faqs, setFaqs] = useState([
  //   {
  //     question: 'How many programmers does it take to screw in a lightbulb?',
  //     answer: "None, We don't address hardware issues.",
  //     open: true,
  //   },
  //   {
  //     question: 'Who is the founder of judo?',
  //     answer: 'Jigoro Kano',
  //     open: false,
  //   },
  //   {
  //     question: 'What does the word judo mean',
  //     answer: 'Judo means The Gengle Way',
  //     open: false,
  //   },
  // ]);

  // const toggleFAQ = (index) => {
  //   setFaqs(
  //     faqs.map((faq, i) => {
  //       if (i === index) {
  //         faq.open = !faq.open;
  //       } else {
  //         faq.open = false;
  //       }
  //       return faq;
  //     })
  //   );
  // };

  return (
    <>
      <Container fluid>
        <Row>
          <main>
            <section id='video'>
              <div className='video-box'>Place holder</div>
            </section>

            <section id='home-heading' className='my-4'>
              <div className='text-center'>
                <h1 className='home-heading'>
                  Train for competition or self defence at denver judo
                </h1>
              </div>
            </section>

            <section id='classes' className='my-4 py-4'>
              <div>
                <Row>
                  <Col sm={12} md={6} lg={4} className='py-2'>
                    <div>
                      <h3 className='home-section-heading'>
                        Judo Fundamentals
                      </h3>
                      <span className='home-section-text'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Assumenda eius hic fugit provident officia
                        suscipit. <Link to='/'>Learn more...</Link>
                      </span>
                    </div>
                  </Col>
                  <Col sm={12} md={6} lg={4} className='py-2'>
                    <div>
                      <h3 className='home-section-heading'>Competition Judo</h3>
                      <span className='home-section-text'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nihil, amet. Voluptatum cupiditate magnam enim
                        sunt! <Link to='/'>Learn more...</Link>
                      </span>
                    </div>
                  </Col>
                  <Col sm={12} md={6} lg={4} className='py-2'>
                    <div>
                      <h3 className='home-section-heading'>Kids Judo</h3>
                      <span className='home-section-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minima cumque incidunt temporibus excepturi perspiciatis
                        magni! <Link to='/'>Learn more...</Link>
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            </section>

            <section id='try-a-class' className='mt-4'>
              <div className='text-center'>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      "<iframe id='idZenPlannerFrame' style='width: 80%; height: 500px; ' src='https://denverjudo.zenplanner.com/zenplanner/portal/freeTrial.cfm?type=FreeTrial&amp;FRAME=true' />",
                  }}
                />
              </div>
            </section>

            <section id='about-judo'>
              <div className='pt-4'>
                <Row className='mt-4 py-5 justify-content-center'>
                  <Col md={10}>
                    <Row>
                      <Col sm={12} md={6} className='ps-2 py-3'>
                        <div className='ms-4 text-center'>
                          <img
                            className='home-about-img img-fluid'
                            src='img/kano.png'
                            alt='Kano'
                          />
                        </div>
                      </Col>
                      <Col sm={12} md={6} className='ps-2 py-3'>
                        <div className='ms-4'>
                          <h2 className='home-section-heading text-white'>
                            Jigoro Kano
                          </h2>
                          <span className='home-section-text text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Velit accusamus sequi doloremque. Aut,
                            nesciunt quod.
                          </span>
                        </div>
                      </Col>
                    </Row>
                    <Row className='py-5 '>
                      <Col sm={12} md={6} className='ps-2 py-3'>
                        <div className='ms-4'>
                          <h2 className='home-section-heading text-white'>
                            Our Dojo
                          </h2>
                          <span className='home-section-text text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Velit accusamus sequi doloremque. Aut,
                            nesciunt quod.
                          </span>
                        </div>
                      </Col>
                      <Col sm={12} md={6} className='ps-2 py-3'>
                        <div className='ms-4 text-center'>
                          <img
                            className='home-about-img img-fluid'
                            src='img/Den_Judo_Kayla_Harrison.jpg'
                            alt='Kano'
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </section>

            <section id='faq' className='my-4 py-4'>
              <div>
                <h2 className='home-sub-heading'>Frequently Asked Questions</h2>
              </div>
              <FAQ />
            </section>
          </main>
        </Row>
      </Container>
    </>
  );
};

export default Home;
