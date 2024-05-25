import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

//Display a grid of photos
const PhotoList = (props) => {
  const { photos, likedPhotos, toggleFav, displayModal, toggleModal, selectedPhoto, selectPhoto} = props;

  const listItem = photos.map((item) => 
  <PhotoListItem key={item.id} listItem={item} liked={likedPhotos.includes(item.id)} toggleFav={() => toggleFav(item.id)} displayModal={displayModal} toggleModal={toggleModal} selectedPhoto={selectedPhoto} selectPhoto={selectPhoto} />)

  return (
    <ul className="photo-list">
      {listItem}
    </ul>
  );
};

export default PhotoList;
