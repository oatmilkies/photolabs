import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  console.log(props.selectedPhoto.photo.similar_photos);

  const similarPhotos = (photos) => {
    for (const photo in photos) {
      <span>
        <img className="photo-details-modal__images" src={photos[photo].urls.regular}></img>
      </span>;
    }
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.toggleModal} >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <img className="photo-details-modal__image" src={props.selectedPhoto.photo.urls.regular} ></img>
      <div className="photo-details-modal__header">
        <img className="photo-details-modal__photographer-profile" src={props.selectedPhoto.photo.user.profile}></img>
        <div className="photo-details-modal__photographer-profile">
          <span>{props.selectedPhoto.photo.user.name}</span>
          <div className="photo-details-modal__photographer-location">
            <span>{props.selectedPhoto.photo.location.city} </span>
            <span>{props.selectedPhoto.photo.location.country}</span>
          </div>
        </div>
      </div>

      {similarPhotos(props.selectedPhoto.photo.similar_photos)}

    </div>
  );
};

export default PhotoDetailsModal;
