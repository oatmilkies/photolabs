import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  return (
    <ul>
      <li className="photo-list__item" key={props.listItem.id}>
        <div>
          <img className="photo-list__image" src={props.listItem.imageSource}></img>
        </div>
        <span>
          <img className="photo-list__user-profile" src={props.listItem.profile}></img>
        </span>

        <span className="photo-list__user-detail">
          <span className="photo-list__user-info">{props.listItem.username}</span>
          <div className="photo-list__user-location">
            <span>{props.listItem.location.city}</span>
            <span>{props.listItem.location.country}</span>
          </div>
        </span>

      </li>
    </ul>
  );
};

export default PhotoListItem;
