import React from 'react';
import { GET_SINGLE_PAGE } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const Home = () => {
  const { pageTitle } = useParams();
  console.log(pageTitle);
  const { data } = useQuery(GET_SINGLE_PAGE, {
    variables: { pageTitle: pageTitle },
  });
  const page = data?.page;
  console.log(page);

  return (
    <div>
      <h1>Denver Judo</h1>
      <p>Just some placeholder text</p>
    </div>
  );
};

export default Home;
