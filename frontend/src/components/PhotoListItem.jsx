import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  return (
    <li className="photo-list__item" key={props.listItem.id}>
      <img className="photo-list__image" src={props.listItem.imageSource}></img>

      <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={props.listItem.profile}></img>
        <div className="photo-list__user-info">
          <span>{props.listItem.username}</span>
          <div className="photo-list__user-location">
            <span>{props.listItem.location.city}</span>
            <span>{props.listItem.location.country}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
