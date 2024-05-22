import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // const [liked, setLike] = useState(false);
  // const handleClick = () => {
  //   setLike(prevLiked => !prevLiked);
  // };
  const { liked, switchLiked } = props;
  const handleClick = () => switchLiked();

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={liked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;