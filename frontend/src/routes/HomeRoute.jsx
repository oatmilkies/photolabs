import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const [liked, setLike] = useState(false);
  const switchLiked = () => {
    setLike(prevLiked => !prevLiked);
  };

  let likedPhotos = [];
  

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} />
      <PhotoList photos={props.photos} liked={liked} switchLiked={switchLiked} />
    </div>
  );
};

export default HomeRoute;
