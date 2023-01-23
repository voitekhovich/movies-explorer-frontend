import "./PageNotFound.css";

import React from "react";
import { useHistory } from "react-router-dom";
import {
  PAGE_NOT_BACK_BUTTON_TITLE,
  PAGE_NOT_FOUND_DESCRIPTION,
  PAGE_NOT_FOUND_TITLE,
} from "../../../utils/constants";

function PageNotFound() {
  const history = useHistory();
  const handleClick = () => history.goBack();

  return (
    <div className="not-found">
      <div className="not-found__box">
        <h2 className="not-found__title">{PAGE_NOT_FOUND_TITLE}</h2>
        <p className="not-found__description">{PAGE_NOT_FOUND_DESCRIPTION}</p>
        <button className="not-found__back" onClick={handleClick}>
          {PAGE_NOT_BACK_BUTTON_TITLE}
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
