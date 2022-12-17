import './Logo.css';

import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

function Logo({ className }) {
  return (
    <Link to="/" className={cn('logo', className)}></Link>
  );
}

export default Logo;