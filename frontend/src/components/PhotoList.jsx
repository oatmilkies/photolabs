import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

//Display a grid of photos
const PhotoList = (props) => {
  const { liked, switchLiked } = props;

  const listItem = props.photos.map((item) => 
  <PhotoListItem key={item.id} listItem={item} liked={liked} switchLiked={switchLiked} />)

  return (
    <ul className="photo-list">
      {listItem}
    </ul>
  );
};

export default PhotoList;
