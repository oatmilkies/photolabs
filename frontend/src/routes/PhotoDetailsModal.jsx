import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const {urls, user, location, similar_photos} = props.selectedPhoto.photo;

  //Display grid of similar photos
  const similarPhotos = (photos) => {
    return Object.values(photos).map((photo) => (
      <span key={photo.id}>
        <img className="photo-details-modal__images" src={photo.urls.regular} alt={photo.description} />
      </span>
    ));
  };

  return (
    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button" onClick={props.toggleModal} >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <img className="photo-details-modal__image" src={urls.full}></img>
      <div className="photo-details-modal__header">
        <img className="photo-details-modal__photographer-profile" src={user.profile}></img>
        <div className="photo-details-modal__photographer-profile">
          <span>{user.name}</span>
          <div className="photo-details-modal__photographer-location">
            <span>{location.city}</span>
            <span>{location.country}</span>
          </div>
        </div>
      </div>

      <div className="photo-details-modal__top-bar">
        <h3>Similar Photos</h3>
      </div>
      {similarPhotos(similar_photos)}

    </div>
  );
};

export default PhotoDetailsModal;
