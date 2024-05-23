import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

//Display a single photo and user details
const PhotoListItem = (props) => {
  const { liked, toggleLike } = props;
  
  return (
    <li className="photo-list"  key={props.listItem.id}>
    <div className="photo-list__item">
      <PhotoFavButton liked={liked} toggleLike={toggleLike}/>
      <img className="photo-list__image" src={props.listItem.urls.regular} onClick={() => props.toggleModal(props.listItem.id, props.listItem.urls.full)}></img>
      <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={props.listItem.user.profile}></img>
        <div className="photo-list__user-info">
          <span>{props.listItem.user.name}</span>
          <div className="photo-list__user-location">
            <span>{props.listItem.location.city} </span>
            <span>{props.listItem.location.country}</span>
          </div>
        </div>
      </div>
    </div>
    </li>
  );
};

export default PhotoListItem;
