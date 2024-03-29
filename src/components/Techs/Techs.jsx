import "./Techs.css";

import React from "react";
import BlockTitle from "../BlockTitle/BlockTitle";

function Techs() {
  const techsItems = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Git",
    "Express.js",
    "mongoDB",
  ];

  return (
    <section className="techs">
      <BlockTitle title="Технологии" />
      <h3 className="techs__title">{techsItems.length} технологий</h3>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>

      <ul className="techs__list">
        {techsItems.map((item, index) => (
          <li className="techs__list-item text-nowrap" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Techs;
