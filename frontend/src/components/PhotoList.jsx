import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

//Display a grid of photos
const PhotoList = (props) => {
  const { likedPhotos, toggleLike } = props;

  const listItem = props.photos.map((item) => 
  <PhotoListItem key={item.id} listItem={item} liked={likedPhotos.includes(item.id)} toggleLike={() => toggleLike(item.id)} displayModal={props.displayModal} toggleModal={props.toggleModal} selectedPhoto={props.selectedPhoto} selectPhoto={props.selectPhoto} />)

  return (
    <ul className="photo-list">
      {listItem}
    </ul>
  );
};

export default PhotoList;
