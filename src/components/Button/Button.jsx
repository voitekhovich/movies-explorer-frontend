import "./Button.css";

import React from "react";
import cn from "classnames";

function Button({ className, title }) {
  return <button className={cn("button", className)}>{title}</button>;
}

export default Button;
