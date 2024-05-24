import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { id, urls, user, location, similar_photos } = props.selectedPhoto.photo;
  const similarPhotos = Object.values((similar_photos));

  return (
    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button" onClick={props.toggleModal} >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <PhotoFavButton liked={props.likedPhotos.includes(id)} toggleLike={() => props.toggleLike(id)} />
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
      <PhotoList photos={similarPhotos} likedPhotos={props.likedPhotos} toggleLike={props.toggleLike} />

    </div>
  );
};

export default PhotoDetailsModal;
