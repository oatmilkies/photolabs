import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

//Display empty heart if not liked, filled heart if liked
function PhotoFavButton(props) {
  const { liked, toggleLike } = props;

  return (
    <div className="photo-list__fav-icon" onClick={toggleLike}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={liked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;