import { useReducer, useState } from "react";

// function reducer(state, action) {
//   const updatedState = { ...state };
//   const { type, payload } = action;

//   switch (action.type) {
//     case TOGGLE_MODAL:
//       return {
//         ...state,
//         displayModal: state.displayModal
//       };

//     default:
//       throw new Error(
//         `Tried to reduce with unsupported action type: ${action.type}`
//       );
//   }
// }

const useApplicationData = (photos) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [likedPhotos, setLikedPhotos] = useState([]);

  //Open or close the modal
  const toggleModal = () => {
    setDisplayModal(prevState => !prevState);
  };

  //Get data for the selected photo to pass to modal
  const selectPhoto = (photoId) => {
    let updatedSelectedPhoto = {};

    const photo = photos.find(({ id }) => id === photoId);
    updatedSelectedPhoto = { photo };
    setSelectedPhoto(updatedSelectedPhoto);
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

  // const [state, dispatch] = useReducer(reducer, {
  //   displayModal: false,
  //   selectedPhoto: {},
  //   likedPhotos: []
  // });


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