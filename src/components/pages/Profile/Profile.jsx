import './Profile.css';

import React, { useContext } from 'react';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import { api } from '../../../utils/Api';

function Profile(props) {
  
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleUpdateUser = (userData) => {
    // setIsLoading(true);
    api
      .setUserInfo(userData)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => console.log(err))
      .finally();
  };

  return (
    <main className='profile'>
      <div className='profile__box'>
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <form className='profile__form'>
          <label className='profile__label'>Имя
            <input className='profile__input' type="text" defaultValue={currentUser.name} />
          </label>
          <label className='profile__label'>E-mail
            <input className='profile__input' type="email" defaultValue={currentUser.email} />
          </label>
          <button className='profile__button profile__submit link-hover'>Редактировать</button>
        </form>
        <button
          className='profile__button profile__exit link-hover' 
          onClick={props.onSignOut}>Выйти из аккаунта</button>
      </div>
    </main>
  );
}

export default Profile;