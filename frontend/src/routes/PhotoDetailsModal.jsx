import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  props.photos.forEach(item => console.log(item))

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.toggleModal} >
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
