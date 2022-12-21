import './ButtonProfile.css';

import React from 'react';
import { Link } from 'react-router-dom';

function ButtonProfile() {
  return (
    <Link to='/profile' className='button-profile button-hover'>Аккаунт</Link>
  );
}

export default ButtonProfile;