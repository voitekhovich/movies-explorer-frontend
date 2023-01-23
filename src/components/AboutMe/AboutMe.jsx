import "./AboutMe.css";
import photo from "../../images/about_me.jpg";

import React from "react";
import BlockTitle from "../BlockTitle/BlockTitle";

function AboutMe() {
  return (
    <section className="about-me">
      <BlockTitle title="Студент" />
      <div className="about-me__block">
        <img className="about-me__photo" src={photo} alt="Фото профиля" />
        <h3 className="about-me__name">Александр</h3>
        <p className="about-me__position">Фронтенд-разработчик, 28 лет</p>
        <p className="about-me__description">
          Я живу в Минске, закончил факультет компьютерных технологий. Я люблю
          слушать музыку. Недавно начал кодить. Прошёл курс по веб-разработке.
        </p>
        <a
          className="about-me__url link-hover"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/voitekhovich"
        >
          Github
        </a>
      </div>
      <p className="about-me__portfolio">Портфолио</p>
      <ul className="about-me__portfolio-list">
        <li className="about-me__portfolio-item">
          <a
            className="about-me__portfolio-url link-hover"
            target="_blank"
            rel="noreferrer"
            href="https://voitekhovich.github.io/how-to-learn/"
          >
            Статичный сайт
          </a>
        </li>
        <li className="about-me__portfolio-item">
          <a
            className="about-me__portfolio-url link-hover"
            target="_blank"
            rel="noreferrer"
            href="https://voitekhovich.github.io/russian-travel/"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="about-me__portfolio-item">
          <a
            className="about-me__portfolio-url link-hover"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/voitekhovich/react-mesto-api-full"
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
