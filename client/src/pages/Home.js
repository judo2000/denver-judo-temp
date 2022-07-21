import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_SINGLE_PAGE } from '../utils/queries';

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
