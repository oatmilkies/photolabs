import { useReducer } from "react";

const useApplicationData = (photos) => {
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

  //Open modal when a photo is clicked
  const toggleModal = () => {
    dispatch({ type: 'TOGGLE_MODAL' });
  };

  //Get data for the selected photo to pass to the modal
  const selectPhoto = (id) => {
    dispatch({ type: 'SELECT_PHOTO', payload: { id } });
  };

  //Add or remove a favourite when the fav button is clicked
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