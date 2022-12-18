import './Profile.css';

import React from 'react';
import Header from '../../Header/Header';

function Profile(props) {
  return (
    <React.Fragment>
      <Header />
      <main className='profile'>
        <div className='profile__box'>
          <h2 className='profile__title'>Привет, Александр!</h2>
          <form className='profile__form'>
            <label className='profile__label'>Имя
              <input className='profile__input' type="text" defaultValue="Александр" />
            </label>
            <label className='profile__label'>E-mail
              <input className='profile__input' type="email" defaultValue="pochta@yandex.ru"/>
            </label>
            <button className='profile__button profile__submit link-hover'>Редактировать</button>
          </form>
          <button className='profile__button profile__exit link-hover'>Выйти из аккаунта</button>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Profile;