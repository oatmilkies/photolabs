import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  //Initialize list of liked photos
  const [likedPhotos, setLikedPhotos] = useState([]);

  //Check if photo is in liked list. Remove if it is, add if it's not
  const toggleLike = function(photoId) {
    if (likedPhotos.includes(photoId)) {
      const updatedLikedPhotos = likedPhotos.filter(id => id !== photoId);
      setLikedPhotos(updatedLikedPhotos);
    } else {
      const updatedLikedPhotos = [...likedPhotos, photoId];
      setLikedPhotos(updatedLikedPhotos);
    }
  };

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} likedPhotos={likedPhotos} />
      <PhotoList photos={props.photos} likedPhotos={likedPhotos} toggleLike={toggleLike} openModal={props.openModal} setOpenModal={props.setOpenModal} />
    </div>
  );
};

export default HomeRoute;
