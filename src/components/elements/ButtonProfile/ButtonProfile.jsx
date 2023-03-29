import "./ButtonProfile.css";

import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { LINK_PROFILE_TITLE } from "../../../utils/constants";

function ButtonProfile({ className }) {
  return (
    <Link
      to="/profile"
      className={cn("button-profile button-hover", className)}
    >
      {LINK_PROFILE_TITLE}
    </Link>
  );
}

export default ButtonProfile;
