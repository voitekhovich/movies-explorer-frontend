import './Like.css';

import React, { useState } from 'react';

function Like() {

  const [ isLike, setIsLike ] = useState(false);

  const handleClick = () => setIsLike(!isLike);

  return (
    <button
      className={ isLike? 'like like_active' : 'like'}
      type="button"
      aria-label="Нравится"
      onClick={handleClick}
    />
  );
}

export default Like;