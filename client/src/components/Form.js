import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useQuery, useMutation } from '@apollo/client';
import { GET_SINGLE_PAGE } from '../utils/queries';
import { UPDATE_PAGE } from '../utils/mutations';

const Form = ({ pageTitle }) => {
  const [pageHeading, setPageHeading] = useState('');
  const [content, setContent] = useState('');

  const { data, loading } = useQuery(GET_SINGLE_PAGE, {
    variables: { pageTitle: pageTitle },
  });

  useEffect(() => {
    const pageData = data?.page || {};
    setPageHeading(pageData.pageHeading);
    setContent(pageData.content);
  }, [setPageHeading, setContent, data]);

  // Set up our mutation with an option to handle errors
  const [updatePage, { error }] = useMutation(UPDATE_PAGE);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updatePage({
        variables: {
          pageTitle,
          pageHeading,
          content,
        },
      });
      navigate(`/admin`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Page Heading</label>
          <input
            type='text'
            value={pageHeading}
            onChange={(e) => setPageHeading(e.target.value)}
          />
          <ReactQuill
            value={content ? content : ''}
            // onChange={(e) => setContent(e.target.value)}
            onChange={setContent}
            theme='snow'
          ></ReactQuill>
          <button type='submit'>Submit</button>
        </form>
      )}
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default Form;
