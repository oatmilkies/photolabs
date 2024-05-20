import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [liked, setLike] = useState(false);
  const handleClick = () => {setLike(prevLiked => !prevLiked)};
  const favIconClass = liked ? "photo-list__fav-icon-svg" : "photo-list__fav-icon";

  return (
    <div onClick={handleClick} className={favIconClass}>
        <FavIcon />
    </div>
  );
}

export default PhotoFavButton;