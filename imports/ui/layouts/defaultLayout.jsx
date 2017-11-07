import React from 'react';
import Header from '../components/header/index.jsx';

export default DefaultLayout = ({ content }) => (
  <div className="default-layout">
    <Header />
    {content}
  </div>
);
