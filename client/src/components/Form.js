import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useMutation } from '@apollo/client';
import { UPDATE_PAGE } from '../utils/mutations';

const Form = () => {
  const [pageTitle, setPageTitle] = useState('');
  const [pageHeading, setPageHeading] = useState('');
  const [content, setContent] = useState('');

  const [updatePage, { error }] = useMutation(UPDATE_PAGE);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(pageTitle);
    console.log(pageHeading);
    console.log(content);
    try {
      const { data } = await updatePage({
        variables: { pageTitle, pageHeading, content },
      });

      //setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Page Title</label>
        <select onChange={(e) => setPageTitle(e.target.value)}>
          <option value='0'>Select Page to update...</option>
          <option value='home'>Home</option>
          <option value='instructors'>Instructors</option>
        </select>
        <label>Page Heading</label>
        <input type='text' onChange={(e) => setPageHeading(e.target.value)} />
        <ReactQuill theme='snow' value={content} onChange={setContent} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
