import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // const [liked, setLike] = useState(false);
  // const handleClick = () => {
  //   setLike(prevLiked => !prevLiked);
  // };
  const { liked, toggleLike } = props;
  // const handleClick = () => toggleLike();

  return (
    <div className="photo-list__fav-icon" onClick={toggleLike}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={liked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;