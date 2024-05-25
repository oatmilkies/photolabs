import { useState } from "react";

const useApplicationData = (photos) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [likedPhotos, setLikedPhotos] = useState([]);

  //Get data for the selected photo to pass to modal
  const toggleModal = () => {
    setDisplayModal(prevState => !prevState);
  };

  const selectPhoto = (photoId) => {
    let updatedSelectedPhoto = {};

    for (const photo of photos) {
      if (photo.id === photoId) {
        updatedSelectedPhoto = { photo };
        setSelectedPhoto(updatedSelectedPhoto);
      }
    }
  };

  //Check if photo is in liked list. Remove if it is, add if it's not
  const toggleLike = function(photoId) {
    if (likedPhotos.includes(photoId)) {
      const updatedLikedPhotos = likedPhotos.filter(id => id !== photoId);
      setLikedPhotos(updatedLikedPhotos);
    } else {
      const updatedLikedPhotos = [...likedPhotos, photoId];
      setLikedPhotos(updatedLikedPhotos);
    }
  };

  return {
    displayModal,
    toggleModal,
    selectedPhoto,
    likedPhotos,
    toggleLike,
    selectPhoto
  };
};

export default useApplicationData;