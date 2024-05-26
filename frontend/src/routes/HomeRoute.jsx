import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { topics, photos, likedPhotos, toggleFav, displayModal, toggleModal, selectedPhoto, selectPhoto, photosByTopic, handleTopicClick } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} likedPhotos={likedPhotos} photosByTopic={photosByTopic} handleTopicClick={handleTopicClick} />

      <PhotoList photos={photos} likedPhotos={likedPhotos} toggleFav={toggleFav} displayModal={displayModal} toggleModal={toggleModal} selectedPhoto={selectedPhoto} selectPhoto={selectPhoto} />
    </div>
  );
};

export default HomeRoute;
