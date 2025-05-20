import React from 'react';
import './Cart.css';

const PageTitle = ({ data }) => {
  return <div className='page-title'>{data || '{insira um titulo}'}</div>;
};

export default PageTitle;