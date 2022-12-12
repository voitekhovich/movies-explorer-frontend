import './Logo.css';

import React from 'react';
import cn from 'classnames';

function Logo({ className }) {
  return (
    <div className={cn('logo', className)}></div>
  );
}

export default Logo;