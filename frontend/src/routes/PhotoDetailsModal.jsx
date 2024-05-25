import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { id, urls, user, location, similar_photos } = props.selectedPhoto;
  const similarPhotos = Object.values((similar_photos));

  return (
    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button" onClick={props.toggleModal} >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__fav-button">
      <PhotoFavButton liked={props.likedPhotos.includes(id)} toggleFav={() => props.toggleFav(id)} />
      </div>
      <img className="photo-details-modal__image" src={urls.full}></img>


      <div className="photo-details-modal__header">
        <img className="photo-details-modal__photographer-profile" src={user.profile}></img>
        <span className="photo-details-modal__photographer-profile">
          <span>{user.name}</span>
          <div className="photo-details-modal__photographer-location">
            <span>{location.city}, </span>
            <span>{location.country}</span>
          </div>
        </span>
      </div>


      <hr></hr>
      <h3 className="photo-details-modal__header">Similar Photos</h3>
      <PhotoList photos={similarPhotos} likedPhotos={props.likedPhotos} toggleFav={props.toggleFav} />

    </div>
  );
};

export default PhotoDetailsModal;
