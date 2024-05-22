import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // const [liked, setLike] = useState(false);
  // const handleClick = () => {
  //   setLike(prevLiked => !prevLiked);
  // };
  const { liked, setLike } = props;
  const handleClick = () => props.setLike();

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={liked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;