import React, { useEffect } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
// import topics from 'mocks/topics';
// import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    toggleModal,
    selectPhoto,
    toggleFav,
    handleTopicClick
   } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute topics={state.topicData} photos={state.photoData} photosByTopic={state.photosByTopic} handleTopicClick={handleTopicClick} displayModal={state.displayModal}  toggleModal={toggleModal} selectedPhoto={state.selectedPhoto} toggleFav={toggleFav} likedPhotos={state.likedPhotos} selectPhoto={selectPhoto} />

      {state.displayModal && 
      <PhotoDetailsModal displayModal={state.displayModal} toggleModal={toggleModal} selectedPhoto={state.selectedPhoto} toggleFav={toggleFav} likedPhotos={state.likedPhotos} selectPhoto={selectPhoto} />}
    </div>

  );
};

export default App;
