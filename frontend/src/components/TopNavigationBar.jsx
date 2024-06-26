import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

//Display logo, topic list, and heart icon
const TopNavigation = (props) => {
  const { topics, likedPhotos, photosByTopic, handleTopicClick } = props;
  const isFavPhotoExist = likedPhotos.length !== 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} photosByTopic={photosByTopic} handleTopicClick={handleTopicClick} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  )
}

export default TopNavigation;