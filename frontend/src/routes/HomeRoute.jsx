import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} likedPhotos={props.likedPhotos} />

      <PhotoList photos={props.photos} likedPhotos={props.likedPhotos} toggleLike={props.toggleLike} displayModal={props.displayModal} toggleModal={props.toggleModal} selectedPhoto={props.selectedPhoto} />
    </div>
  );
};

export default HomeRoute;
