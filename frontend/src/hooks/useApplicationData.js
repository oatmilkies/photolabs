import { useReducer } from "react";


const useApplicationData = (photos) => {
  // const [displayModal, setDisplayModal] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState({});
  // const [likedPhotos, setLikedPhotos] = useState([]);

  // //Open or close the modal
  // const toggleModal = () => {
  //   setDisplayModal(prevState => !prevState);
  // };

  // //Get data for the selected photo to pass to modal
  // const selectPhoto = (id) => {
  //   let updatedSelectedPhoto = {};

  //   const photo = photos.find(({ id }) => id === id);
  //   updatedSelectedPhoto = { photo };
  //   setSelectedPhoto(updatedSelectedPhoto);
  // };

  // //Check if photo is in liked list. Remove if it is, add if it's not
  // const toggleLike = function(id) {
  //   if (likedPhotos.includes(id)) {
  //     const updatedLikedPhotos = likedPhotos.filter(id => id !== id);
  //     setLikedPhotos(updatedLikedPhotos);
  //   } else {
  //     const updatedLikedPhotos = [...likedPhotos, id];
  //     setLikedPhotos(updatedLikedPhotos);
  //   }
  // };

  function reducer(state, action) {
    switch (action.type) {
      case 'TOGGLE_MODAL':
        return {
          ...state,
          displayModal: !state.displayModal
        };
      case 'SELECT_PHOTO':
        return {
          ...state,
          selectedPhoto: photos.find(({ id }) => id === action.payload.id)
        };
      case 'FAV_PHOTO_ADDED':
        return {
          ...state,
          likedPhotos: [...state.likedPhotos, action.payload.id]  // Add the new id
        };
      case 'FAV_PHOTO_REMOVED':
        return {
          ...state,
          likedPhotos: state.likedPhotos.filter(id => id !== action.payload.id) // Remove the id
        };
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    displayModal: false,
    selectedPhoto: {},
    likedPhotos: []
  });

  const toggleModal = () => {
    dispatch({ type: 'TOGGLE_MODAL' });
  };

  const selectPhoto = (id) => {
    dispatch({ type: 'SELECT_PHOTO', payload: { id } });
  };

  const toggleFav = (id) => {
    if (state.likedPhotos.includes(id)) {
      dispatch({ type: 'FAV_PHOTO_REMOVED', payload: { id } });
    } else {
      dispatch({ type: 'FAV_PHOTO_ADDED', payload: { id } });
    }
  };

  return {
    state,
    toggleModal,
    selectPhoto,
    toggleFav
  };
};

export default useApplicationData;