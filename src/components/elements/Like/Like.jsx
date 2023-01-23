import "./Like.css";

import React from "react";

function Like(props) {
  const { card, likeStyle, handleLikeClick } = props;

  const handleClick = () => {
    handleLikeClick(card);
  };

  return (
    <button
      className={
        likeStyle
          ? card.isLike
            ? "like like_active"
            : "like"
          : "like like_delete"
      }
      type="button"
      aria-label="Нравится"
      onClick={handleClick}
    />
  );
}

export default Like;
