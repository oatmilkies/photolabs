import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

//Display logo, topic list, and heart icon
const TopNavigation = (props) => {
  const { likedPhotos } = props;
  const isFavPhotoExist = function () {
    if (likedPhotos.length !== 0) {
      return true;
    }
  }

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist()} />
    </div>
  )
}

export default TopNavigation;