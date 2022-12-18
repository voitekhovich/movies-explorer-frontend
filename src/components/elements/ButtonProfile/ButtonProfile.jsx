import './ButtonProfile.css';

import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

function ButtonProfile({ className }) {
  return (
    <Link to='/profile' className={cn('button-profile button-hover', className)}>Аккаунт</Link>
  );
}

export default ButtonProfile;