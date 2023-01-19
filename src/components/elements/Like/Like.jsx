import './Like.css';

import React, { useEffect, useState } from 'react';

function Like(props) {

  // const [ isLike, setIsLike ] = useState(false);

  const handleClick = () => {
    // setIsLike(!isLike);
    props.handleLikeClick(props.card)
  }

  useEffect(() => {
    // if (props.card.isLike) setIsLike(true);
  }, [props.card.isLike])

  return (
    <button
      className={ props.card.isLike? 'like like_active' : 'like'}
      type="button"
      aria-label="Нравится"
      onClick={handleClick}
    />
  );
}

export default Like;