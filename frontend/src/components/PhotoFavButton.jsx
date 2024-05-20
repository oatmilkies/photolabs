import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [liked, setLike] = useState(false);
  const handleClick = () => { setLike(prevLiked => !prevLiked); };
  let favIconClass = liked ? "photo-list__fav-icon-svg" : "photo-list__fav-icon";

  return (
    <div className={favIconClass} onClick={handleClick}>
      <FavIcon />
    </div>
  );
}

export default PhotoFavButton;