import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    displayModal,
    toggleModal,
    selectedPhoto,
    likedPhotos,
    toggleLike,
    selectPhoto
   } = useApplicationData(photos);

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} displayModal={displayModal}  toggleModal={toggleModal} selectedPhoto={selectedPhoto} toggleLike={toggleLike} likedPhotos={likedPhotos} />

      {displayModal && 
      <PhotoDetailsModal displayModal={displayModal} toggleModal={toggleModal} selectedPhoto={selectedPhoto} toggleLike={toggleLike} likedPhotos={likedPhotos} selectPhoto={selectPhoto} />}
    </div>

  );
};

export default App;
