import './Button.css';

import React from 'react';
import cn from 'classnames';

function Button({ className, title }) {
  return (
    <div className={cn('button', className)}>
      { title }
    </div>
  );
}

export default Button;