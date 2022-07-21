import React, { useState } from 'react';
import Form from './Form';

const Admin = () => {
  const [pageTitle, setPageTitle] = useState('');
  // const [pageHeading, setPageHeading] = useState('');
  // const [content, setPageContent] = useState();

  return (
    <div>
      <label>Page Title</label>
      <select onChange={(e) => setPageTitle(e.target.value)}>
        <option value='0'>Select Page to update...</option>
        <option value='home'>Home</option>
        <option value='instructors'>Instructors</option>
      </select>
      {pageTitle && <Form pageTitle={pageTitle} />}
    </div>
  );
};

export default Admin;
