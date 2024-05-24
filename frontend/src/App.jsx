import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  //Get data for the selected photo to pass to modal
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});

  const toggleModal = (photoID) => {
    setDisplayModal(prevState => !prevState);

    let updatedSelectedPhoto = {};    

    for (const photo of photos) {
      if (photo.id === photoID) {
        updatedSelectedPhoto = {photo}
        setSelectedPhoto(updatedSelectedPhoto);
      }
    }
  };

  //Check if photo is in liked list. Remove if it is, add if it's not
  const [likedPhotos, setLikedPhotos] = useState([]);
  
  const toggleLike = function(photoId) {
    if (likedPhotos.includes(photoId)) {
      const updatedLikedPhotos = likedPhotos.filter(id => id !== photoId);
      setLikedPhotos(updatedLikedPhotos);
    } else {
      const updatedLikedPhotos = [...likedPhotos, photoId];
      setLikedPhotos(updatedLikedPhotos);
    }
  };

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} displayModal={displayModal}  toggleModal={toggleModal} selectedPhoto={selectedPhoto} toggleLike={toggleLike} likedPhotos={likedPhotos} />

      {displayModal && <PhotoDetailsModal displayModal={displayModal} toggleModal={toggleModal} selectedPhoto={selectedPhoto} toggleLike={toggleLike} likedPhotos={likedPhotos} />}
    </div>

  );
};

export default App;
