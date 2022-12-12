import './BlockTitle.css';

import React from 'react';

function BlockTitle({ title }) {
  return (
    <React.Fragment>
      <h2 className='block-title__title'>{ title }</h2>
      <div className='block-title__separator'></div>
    </React.Fragment>
  );
}

export default BlockTitle;