import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useMutation, useQuery } from '@apollo/client';

import { GET_SINGLE_PAGE } from '../utils/queries';
import Editor from './Editor';
const Form = ({ pageTitle }) => {
  console.log(pageTitle);
  const [pageHeading, setPageHeading] = useState('');
  const [content, setContent] = useState('');

  const { data, loading } = useQuery(GET_SINGLE_PAGE, {
    variables: { pageTitle: pageTitle },
  });
  const pageData = data?.page || {};
  console.log(pageData.pageHeading);
  useEffect(() => {
    setPageHeading(pageData.pageHeading);
    setContent(pageData.content);
  }, [setPageHeading, pageData, pageHeading, content]);

  const handleChange = (html) => {
    setContent({ editor: html });
  };
  return (
    <div>
      <form>
        <label>Page Heading</label>
        <input
          type='text'
          value={pageHeading}
          onChange={(e) => setPageHeading(e.target.value)}
        />
        <ReactQuill theme='snow' value={content} onChange={this.handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
