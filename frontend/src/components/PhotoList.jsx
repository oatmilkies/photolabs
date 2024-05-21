import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

//Display a grid of photos
const PhotoList = () => {
  const listItem = photos.map((item) => 
  <PhotoListItem key={item.id} listItem={item} />)

  return (
    <ul className="photo-list">
      {listItem}
    </ul>
  );
};

export default PhotoList;
