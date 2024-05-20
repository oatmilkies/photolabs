import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  return (
    <li key={props.sampleDataForPhotoListItem.id}>
      <img src={props.sampleDataForPhotoListItem.imageSource} />
      <img src={props.sampleDataForPhotoListItem.profile} />
      <p>{props.sampleDataForPhotoListItem.username}</p>
      <span>{props.sampleDataForPhotoListItem.location.city}</span>
      <span>{props.sampleDataForPhotoListItem.location.country}</span>
    </li>
  )
};

export default PhotoListItem;
