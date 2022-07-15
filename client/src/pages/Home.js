import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_SINGLE_PAGE } from '../utils/queries';

const Home = () => {
  const { pageTitle } = useParams();
  // console.log(pageTitle);
  const { data } = useQuery(GET_SINGLE_PAGE, {
    // pass URL parameter
    variables: { pageTitle: pageTitle },
  });

  // console.log(data);
  const page = data?.page || {};
  console.log(page);

  return (
    <div>
      <h1>Denver Judo</h1>
      <h2>{page.pageHeading}</h2>
      <p>{page.content}</p>
    </div>
  );
};

export default Home;
